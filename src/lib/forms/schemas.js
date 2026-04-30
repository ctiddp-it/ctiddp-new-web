import { z } from 'zod'
import { noHtmlMessage, normalizeEmail, normalizePhone, safeOptionalString, stripAndTrim } from './common'

export const CONTACT_SUBJECTS = [
  'New Shipment Enquiry',
  'Existing Shipment Update',
  'Quote Request',
  'Canton Fair Support',
  'Partnership / Agency',
  'General Question',
  'Complaint / Feedback',
  'Others',
]

export const CONTACT_TIME_SLOTS = [
  '10:00 AM - 11:59 AM',
  '12:00 PM - 1:59 PM',
  '3:00 PM - 4:59 PM',
  '5:00 PM - 6:00 PM',
]

const nameField = z.preprocess(
  (v) => stripAndTrim(v),
  z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .refine((v) => /^[A-Za-z ]+$/.test(v), 'Name can only contain alphabets and spaces')
)

const emailField = z.preprocess(
  (v) => normalizeEmail(v),
  z.string().min(1, 'Email is required').email('Invalid email address')
)

const optionalEmailField = z
  .preprocess((v) => normalizeEmail(v), z.string())
  .refine((v) => v.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Invalid email address')
  .transform((v) => (v.length ? v : undefined))

const phoneField = z.preprocess(
  (v) => normalizePhone(v),
  z.string().min(1, 'Phone is required').regex(/^\+\d{10,15}$/, 'Phone must include country code and be 10–15 digits')
)

const optionalPhoneField = z
  .preprocess((v) => normalizePhone(v), z.string())
  .refine((v) => v.length === 0 || /^\+\d{10,15}$/.test(v), 'Phone must include country code and be 10–15 digits')
  .transform((v) => (v.length ? v : undefined))

export const contactSchema = z
  .object({
    name: nameField,
    company: safeOptionalString(100),
    email: emailField,
    phone: optionalPhoneField,
    subject: z.enum(CONTACT_SUBJECTS),
    message: z.preprocess(
      (v) => stripAndTrim(v),
      z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be at most 1000 characters')
    ).refine((v) => !/[<>]/.test(v), 'HTML is not allowed'),
    wantsCall: z.boolean().default(false),
    callDate: z.string().transform(stripAndTrim).optional(),
    callTimeSlot: z.string().transform(stripAndTrim).optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.wantsCall) return
    if (!data.callDate) {
      ctx.addIssue({ code: 'custom', path: ['callDate'], message: 'Please select a call date' })
    }
    if (!data.callTimeSlot) {
      ctx.addIssue({ code: 'custom', path: ['callTimeSlot'], message: 'Please select a time slot' })
    } else if (!CONTACT_TIME_SLOTS.includes(data.callTimeSlot)) {
      ctx.addIssue({ code: 'custom', path: ['callTimeSlot'], message: 'Invalid time slot' })
    }
  })

export const quoteSchema = z
  .object({
    name: nameField,
    companyName: safeOptionalString(100),
    contactNumber: phoneField,
    email: optionalEmailField,
    productCategory: z.preprocess(
      (v) => stripAndTrim(v),
      z
        .string()
        .min(2, 'Product category is required')
        .max(100, 'Product category must be at most 100 characters')
    ),
    hsCode: safeOptionalString(20),

    // Per request: NOT required
    serviceType: z.preprocess(
      (v) => (v === '' || v === null ? undefined : v),
      z.enum(['sourcing_shipping', 'only_shipping']).optional()
    ),
    productBudget: z
      .union([z.string(), z.number()])
      .optional()
      .transform((v) => (v === '' || v === undefined || v === null ? undefined : Number(v)))
      .refine((v) => v === undefined || (Number.isFinite(v) && v >= 0), 'Budget must be a valid number'),
    supplierDetails: z
      .object({
        supplierName: safeOptionalString(100),
        supplierContactDetails: safeOptionalString(200),
      })
      .optional(),
    deliveryLocation: safeOptionalString(120),
    estimatedWeightKg: z
      .union([z.string(), z.number()])
      .optional()
      .transform((v) => (v === '' || v === undefined || v === null ? undefined : Number(v)))
      .refine((v) => v === undefined || (Number.isFinite(v) && v >= 0), 'Weight must be a valid number'),
    estimatedVolumeCBM: z
      .union([z.string(), z.number()])
      .optional()
      .transform((v) => (v === '' || v === undefined || v === null ? undefined : Number(v)))
      .refine((v) => v === undefined || (Number.isFinite(v) && v >= 0), 'Volume must be a valid number'),

    invoiceValue: z
      .union([z.string(), z.number()])
      .optional()
      .transform((v) => (v === '' || v === undefined || v === null ? undefined : Number(v)))
      .refine((v) => v === undefined || (Number.isFinite(v) && v >= 0), 'Invoice value must be a valid number'),
    additionalNotes: safeOptionalString(1000),
  })
  .superRefine((data, ctx) => {
    // If user explicitly picks a serviceType, we can validate matching fields without making them required by default.
    if (data.serviceType === 'sourcing_shipping' && data.productBudget !== undefined && !Number.isFinite(data.productBudget)) {
      ctx.addIssue({ code: 'custom', path: ['productBudget'], message: 'Budget must be a valid number' })
    }
    if (data.serviceType === 'only_shipping' && data.supplierDetails) {
      const s = data.supplierDetails
      if (s?.supplierName === undefined && s?.supplierContactDetails === undefined) return
    }
  })

export const cantonFairSchema = z.object({
  name: nameField,
  contactNumber: phoneField,
  email: emailField,
  visitDate: z.preprocess((v) => stripAndTrim(v), z.string().min(1, 'Visit date is required')),
  categories: safeOptionalString(200),
  attendSolo: z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.enum(['attend-with-team', 'team-solo']).optional()
  ),
  message: z
    .preprocess((v) => stripAndTrim(v), z.string().max(1000, 'Message must be at most 1000 characters'))
    .refine((v) => !/[<>]/.test(v), 'HTML is not allowed')
    .transform((v) => (v.length ? v : undefined))
    .optional(),
})

