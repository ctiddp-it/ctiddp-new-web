'use client'

import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaWhatsapp } from 'react-icons/fa6'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { cantonFairSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'

export default function CantonFairClient() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('IN')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL

  const whatsappNumber = '918790013772'
  const whatsappMessage =
    'Hello, I’m reaching out from your website. Could you share details about your services and how you can help?'

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
    <section
      id="canton-fair-support-form"
      className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep scroll-mt-[72px]"
    >
      <div className="max-w-[760px] mx-auto">

        {/* Section label */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
            Reserve Your Slot
          </span>

          <h2 className="font-heading text-[clamp(30px,4vw,52px)] font-light leading-[1.1] mb-[12px]">
            Book Canton Fair
            <br />
            <em className="italic text-blue-light">
              Support
            </em>
          </h2>

          <p className="text-[14px] text-muted max-w-[420px] mx-auto">
            Submit your details and our Guangzhou team will confirm your dedicated support slot.
          </p>
        </div>

        <div className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-6 sm:p-10">

          {!submitted ? (
            <>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                noValidate
              >

                {/* Name */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Full Name *
                  </label>

                  <input
                    {...register('name')}
                    placeholder="Your name"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />

                  {errors?.name ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                {/* Contact Number */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    WhatsApp / Phone *
                  </label>

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
                        onCountryChange={(country) => {
                          if (country) {
                            setSelectedCountry(country)
                          }
                        }}
                        className="phone-input"
                        placeholder="Enter phone number"
                      />
                    )}
                  />

                  {errors?.contactNumber ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.contactNumber.message}
                    </p>
                  ) : null}
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    {...register('email')}
                    placeholder="you@company.com"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />

                  {errors?.email ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                {/* Date of Visit */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Planned Visit Date *
                  </label>

                  <input
                    type="date"
                    {...register('visitDate')}
                    min="2026-04-15"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150 [color-scheme:dark]"
                  />

                  {errors?.visitDate ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.visitDate.message}
                    </p>
                  ) : null}
                </div>

                {/* Product Categories */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Product Categories
                  </label>

                  <input
                    {...register('categories')}
                    placeholder="e.g. Electronics, Textiles"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />

                  {errors?.categories ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.categories.message}
                    </p>
                  ) : null}
                </div>

                {/* Attend */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Will You Attend?
                  </label>

                  <select
                    {...register('attendSolo')}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] transition-colors duration-150 [color-scheme:dark]"
                  >
                    <option value="" className="bg-[#0a0a0a]">
                      Select an option
                    </option>

                    <option value="attend-with-team" className="bg-[#0a0a0a]">
                      Yes - I'll attend with your team
                    </option>

                    <option value="team-solo" className="bg-[#0a0a0a]">
                      No - Your team represents me solo
                    </option>
                  </select>

                  {errors?.attendSolo ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.attendSolo.message}
                    </p>
                  ) : null}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Additional Requirements
                  </label>

                  <textarea
                    {...register('message')}
                    rows={3}
                    placeholder="Specific products, supplier requirements, QC criteria…"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150 resize-none"
                  />

                  {errors?.message ? (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                {/* Error */}
                {error && (
                  <p className="sm:col-span-2 text-[12px] text-red-400 bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)] rounded-[3px] px-4 py-2.5">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <div className="sm:col-span-2 flex gap-3 flex-wrap items-center">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
                  >
                    {isSubmitting
                      ? 'Submitting…'
                      : 'Reserve My Support Slot →'}
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200"
                  >
                    <FaWhatsapp size={18} />
                    WhatsApp Instead
                  </a>

                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="text-4xl mb-5">✅</div>

              <h3 className="font-heading text-[32px] text-blue-light mb-3">
                Request Received
              </h3>

              <p className="text-[14px] text-muted max-w-[340px] mx-auto leading-[1.7]">
                Our Canton Fair support team will contact you within 24 hours to confirm your slot.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}