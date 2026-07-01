/**
 * Meta Conversion API — Server-only utility
 *
 * Sends events to the Meta Conversions API via the Graph API.
 * This file MUST only be imported from server-side code (API routes, server components).
 *
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

import { createHash } from 'crypto'

const PIXEL_ID = process.env.META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN
const API_VERSION = 'v22.0'
const GRAPH_URL = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`

/**
 * SHA-256 hash a value for Meta's user_data parameters.
 * Meta requires: lowercase, trimmed, then SHA-256 hashed.
 * Fields that must NOT be hashed: client_ip_address, client_user_agent, fbc, fbp.
 */
function hashValue(value) {
  if (!value) return undefined
  const normalized = String(value).trim().toLowerCase()
  if (!normalized) return undefined
  return createHash('sha256').update(normalized).digest('hex')
}

/**
 * Normalize a phone number for hashing.
 * Meta expects: digits only, no symbols/spaces, with country code.
 * Example: "+91 87900 18787" → "918790018787"
 */
function normalizePhone(phone) {
  if (!phone) return undefined
  return phone.replace(/[^\d]/g, '')
}

/**
 * Build the user_data object for the CAPI payload.
 * Hashes PII fields (em, ph, fn, ln, ge, ct, st, zp, country).
 * Passes through non-hashed fields (client_ip_address, client_user_agent, fbc, fbp, external_id).
 */
function buildUserData(rawUserData) {
  const ud = {}

  // Hashed fields
  if (rawUserData.email) ud.em = [hashValue(rawUserData.email)]
  if (rawUserData.phone) ud.ph = [hashValue(normalizePhone(rawUserData.phone))]
  if (rawUserData.firstName) ud.fn = [hashValue(rawUserData.firstName)]
  if (rawUserData.lastName) ud.ln = [hashValue(rawUserData.lastName)]
  if (rawUserData.gender) ud.ge = [hashValue(rawUserData.gender)]
  if (rawUserData.city) ud.ct = [hashValue(rawUserData.city)]
  if (rawUserData.state) ud.st = [hashValue(rawUserData.state)]
  if (rawUserData.zip) ud.zp = [hashValue(rawUserData.zip)]
  if (rawUserData.country) ud.country = [hashValue(rawUserData.country)]
  if (rawUserData.externalId) ud.external_id = [hashValue(rawUserData.externalId)]

  // Non-hashed fields (Meta requires these raw)
  if (rawUserData.clientIpAddress) ud.client_ip_address = rawUserData.clientIpAddress
  if (rawUserData.clientUserAgent) ud.client_user_agent = rawUserData.clientUserAgent
  if (rawUserData.fbc) ud.fbc = rawUserData.fbc
  if (rawUserData.fbp) ud.fbp = rawUserData.fbp

  return ud
}

/**
 * Send a conversion event to the Meta Conversions API.
 *
 * @param {Object} options
 * @param {string} options.eventName      - Standard event name (e.g. 'Lead', 'Contact', 'Subscribe')
 * @param {string} options.eventId        - Unique event ID for deduplication (MUST match the Pixel eventID)
 * @param {string} options.eventSourceUrl - The URL where the event occurred
 * @param {string} [options.actionSource] - 'website' (default), 'app', 'email', etc.
 * @param {Object} options.userData       - User data (email, phone, IP, UA, fbp, fbc, etc.)
 * @param {Object} [options.customData]   - Event-specific custom data (content_name, value, currency, etc.)
 * @param {string} [options.testEventCode] - Test event code from Events Manager for testing
 * @returns {Promise<Object>} Meta API response
 */
export async function sendConversionEvent({
  eventName,
  eventId,
  eventSourceUrl,
  actionSource = 'website',
  userData = {},
  customData = {},
  testEventCode,
}) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn('[Meta CAPI] Missing META_PIXEL_ID or META_ACCESS_TOKEN in env. Skipping event.')
    return { skipped: true }
  }

  const eventTime = Math.floor(Date.now() / 1000)

  const eventData = {
    event_name: eventName,
    event_time: eventTime,
    event_id: eventId,
    event_source_url: eventSourceUrl,
    action_source: actionSource,
    user_data: buildUserData(userData),
    original_event_data: {
      event_name: eventName,
      event_time: eventTime,
    },
  }

  // Only include custom_data if it has properties
  if (customData && Object.keys(customData).length > 0) {
    eventData.custom_data = customData
  }

  const body = {
    data: [eventData],
    access_token: ACCESS_TOKEN,
  }

  // Include test_event_code for testing in Events Manager
  if (testEventCode) {
    body.test_event_code = testEventCode
  }

  try {
    const response = await fetch(GRAPH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('[Meta CAPI] Error sending event:', JSON.stringify(result, null, 2))
    }

    return result
  } catch (error) {
    console.error('[Meta CAPI] Network error:', error.message)
    return { error: error.message }
  }
}
