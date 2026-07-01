/**
 * Meta Conversion API — Server-side relay route
 *
 * POST /api/meta-capi
 *
 * The browser calls this route after firing a Pixel event.
 * This route extracts the client IP, user agent, _fbp/_fbc cookies,
 * then forwards everything to Meta's Conversions API.
 *
 * The shared event_id ensures Meta deduplicates the Pixel + CAPI events
 * into a single conversion.
 */

import { cookies, headers } from 'next/headers'
import { sendConversionEvent } from '@/lib/meta-capi'

export async function POST(request) {
  try {
    const body = await request.json()
    const { eventName, eventId, eventSourceUrl, userData = {}, customData = {} } = body

    // Validate required fields
    if (!eventName || !eventId) {
      return Response.json(
        { success: false, message: 'eventName and eventId are required.' },
        { status: 400 }
      )
    }

    // Extract server-side data that only the server can reliably provide
    const headersList = await headers()
    const cookieStore = await cookies()

    // Client IP — check forwarded headers first (for proxies/CDNs like Vercel, Cloudflare)
    const clientIp =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      headersList.get('x-real-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      '0.0.0.0'

    // User agent
    const clientUserAgent = headersList.get('user-agent') || ''

    // Meta cookies set by the Pixel
    const fbp = cookieStore.get('_fbp')?.value || ''
    const fbc = cookieStore.get('_fbc')?.value || ''

    // Merge server-extracted data with client-provided user data
    const enrichedUserData = {
      ...userData,
      clientIpAddress: clientIp,
      clientUserAgent: clientUserAgent,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
    }

    // Send to Meta Conversions API
    // When META_TEST_EVENT_CODE is set, events go to the Test Events tab in Events Manager
    const testEventCode = process.env.META_TEST_EVENT_CODE || undefined
    const result = await sendConversionEvent({
      eventName,
      eventId,
      eventSourceUrl: eventSourceUrl || '',
      userData: enrichedUserData,
      customData,
      testEventCode,
    })

    return Response.json({ success: true, result })
  } catch (error) {
    console.error('[Meta CAPI Route] Error:', error)

    return Response.json(
      { success: false, message: 'Failed to send conversion event.' },
      { status: 500 }
    )
  }
}
