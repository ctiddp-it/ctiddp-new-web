/**
 * Client-side conversion tracking helper.
 *
 * This utility does TWO things for every conversion event:
 *
 * 1. Fires the Meta Pixel event (browser-side) with an event_id
 * 2. Sends the same event + event_id to /api/meta-capi (server-side CAPI)
 *
 * Meta uses the shared event_id to DEDUPLICATE both signals into one event.
 * This gives you maximum signal quality while avoiding double-counting.
 *
 * Usage:
 *   import { trackConversion } from '@/lib/forms/trackConversion'
 *
 *   await trackConversion({
 *     eventName: 'Lead',
 *     userData: { email: 'user@example.com', phone: '+919876543210' },
 *     customData: { content_name: 'Quote Request' },
 *   })
 */

/**
 * Track a conversion event via both Meta Pixel and Conversions API.
 *
 * @param {Object} options
 * @param {string} options.eventName      - Standard Meta event name (e.g. 'Lead', 'Contact', 'Subscribe', 'ViewContent', 'Schedule')
 * @param {Object} [options.userData]     - User information (email, phone, firstName, city, etc.)
 * @param {Object} [options.customData]   - Event-specific data (content_name, content_category, value, currency, etc.)
 * @param {string} [options.eventSourceUrl] - URL where the event happened (defaults to window.location.href)
 */
export async function trackConversion({
  eventName,
  userData = {},
  customData = {},
  eventSourceUrl,
}) {
  // Generate a unique event ID for deduplication
  const eventId = crypto.randomUUID()

  // 1. Fire the Pixel event (browser-side)
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId })
    } catch (err) {
      console.warn('[trackConversion] Pixel fire failed:', err)
    }
  }

  // 2. Send the same event to the CAPI relay route (server-side)
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl: eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        userData,
        customData,
      }),
    })
  } catch (err) {
    // Non-blocking — tracking failures should never break the user experience
    console.warn('[trackConversion] CAPI relay failed:', err)
  }
}
