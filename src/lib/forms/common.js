import { z } from 'zod'

export const stripAndTrim = (value) => {
  if (value === undefined || value === null) return ''
  return String(value)
    .replace(/<[^>]*>?/gm, '') // basic tag strip (backend does full xss sanitization)
    .trim()
}

export const normalizeEmail = (value) => stripAndTrim(value).toLowerCase()

export const normalizePhone = (value) =>
  stripAndTrim(value)
    .replace(/[()\s-]/g, '')
    .replace(/^\+?/, '+')

export const safeOptionalString = (max) =>
  z
    .string()
    .transform(stripAndTrim)
    .refine((v) => v.length === 0 || v.length <= max, `Must be at most ${max} characters`)
    .transform((v) => (v.length ? v : undefined))

export const noHtmlMessage = z
  .string()
  .transform(stripAndTrim)
  .refine((v) => !/[<>]/.test(v), 'HTML is not allowed')

