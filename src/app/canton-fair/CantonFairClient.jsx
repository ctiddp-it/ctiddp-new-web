'use client'

import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaWhatsapp } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { cantonFairSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'
import SectionBadge from '@/components/ui/SectionBadge'

const INPUT_CLASS =
  'w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-800 text-[13px] outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all'
const LABEL_CLASS = 'text-[11px] tracking-[1px] uppercase text-primary font-600 mb-1.5 block'

export default function CantonFairClient() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('IN')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL

  const defaultValues = useMemo(
    () => ({
      name: '',
      contactNumber: '',
      email: '',
      visitDate: '',
      categories: '',
      attendSolo: undefined,
      message: '',
    }),
    []
  )

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(cantonFairSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const onSubmit = async (values) => {
    setError('')

    const result = await submitForm({
      baseUrl: API_BASE,
      path: '/canton-fair',
      payload: values,
    })

    if (!result.ok) {
      setError(result.message || 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
    reset(defaultValues)
    setSelectedCountry('IN')
  }

  return (
    <section id="canton-fair-support-form" className="section-padding bg-gray-50 scroll-mt-20">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-10">
          <SectionBadge>RESERVE YOUR SLOT</SectionBadge>
          <h2 className="section-title">
            Book Canton Fair <span className="highlight">Support</span>
          </h2>
          <p className="section-subtitle centered">
            Submit your details and our Guangzhou team will confirm your dedicated support slot.
          </p>
        </div>

        <div className="card p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4" noValidate>
              {/* Name */}
              <div>
                <label className={LABEL_CLASS}>Full Name *</label>
                <input {...register('name')} placeholder="Your name" className={INPUT_CLASS} />
                {errors?.name && <p className="mt-1 text-[11px] text-red-500">{errors.name.message}</p>}
              </div>

              {/* Contact */}
              <div>
                <label className={LABEL_CLASS}>WhatsApp / Phone *</label>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      international
                      country={selectedCountry}
                      defaultCountry="IN"
                      countryCallingCodeEditable={false}
                      value={field.value}
                      onChange={field.onChange}
                      onCountryChange={(country) => { if (country) setSelectedCountry(country) }}
                      className="phone-input"
                      placeholder="Enter phone number"
                    />
                  )}
                />
                {errors?.contactNumber && <p className="mt-1 text-[11px] text-red-500">{errors.contactNumber.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={LABEL_CLASS}>Email Address *</label>
                <input type="email" {...register('email')} placeholder="you@company.com" className={INPUT_CLASS} />
                {errors?.email && <p className="mt-1 text-[11px] text-red-500">{errors.email.message}</p>}
              </div>

              {/* Visit Date */}
              <div>
                <label className={LABEL_CLASS}>Planned Visit Date *</label>
                <input type="date" {...register('visitDate')} min="2026-04-15" className={INPUT_CLASS} />
                {errors?.visitDate && <p className="mt-1 text-[11px] text-red-500">{errors.visitDate.message}</p>}
              </div>

              {/* Categories */}
              <div>
                <label className={LABEL_CLASS}>Product Categories</label>
                <input {...register('categories')} placeholder="e.g. Electronics, Textiles" className={INPUT_CLASS} />
                {errors?.categories && <p className="mt-1 text-[11px] text-red-500">{errors.categories.message}</p>}
              </div>

              {/* Attend */}
              <div>
                <label className={LABEL_CLASS}>Will You Attend?</label>
                <select {...register('attendSolo')} className={INPUT_CLASS}>
                  <option value="">Select an option</option>
                  <option value="attend-with-team">Yes — I&apos;ll attend with your team</option>
                  <option value="team-solo">No — Your team represents me solo</option>
                </select>
                {errors?.attendSolo && <p className="mt-1 text-[11px] text-red-500">{errors.attendSolo.message}</p>}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={LABEL_CLASS}>Additional Requirements</label>
                <textarea {...register('message')} rows={3} placeholder="Specific products, supplier requirements, QC criteria…" className={`${INPUT_CLASS} resize-y`} />
                {errors?.message && <p className="mt-1 text-[11px] text-red-500">{errors.message.message}</p>}
              </div>

              {/* Error */}
              {error && (
                <p className="sm:col-span-2 text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{error}</p>
              )}

              {/* Submit */}
              <div className="sm:col-span-2 flex gap-3 flex-wrap items-center">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:opacity-70">
                  {isSubmitting ? 'Submitting…' : 'Reserve My Support Slot →'}
                </button>
                <a
                  href="https://wa.me/918790013772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Instead
                </a>
              </div>
            </form>
          ) : (
            <div className="text-center py-10">
              <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-[24px] font-600 text-gray-900 mb-3">Request Received!</h3>
              <p className="text-[14px] text-gray-500 max-w-[340px] mx-auto leading-relaxed">
                Our Canton Fair support team will contact you within 24 hours to confirm your slot.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}