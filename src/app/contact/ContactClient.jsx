'use client'

import { FaShieldAlt, FaHeadset, FaLock, FaCheckCircle } from "react-icons/fa"
import { BsCalendarEvent } from "react-icons/bs"
import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { CONTACT_SUBJECTS, contactSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const INPUT_CLASS =
  'w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-800 text-[13px] outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all'
const LABEL_CLASS = 'text-[11px] tracking-[1px] uppercase text-primary font-600 mb-1.5 block'

const SUBJECTS = CONTACT_SUBJECTS

const TIME_SLOTS = [
  { value: '10:00 AM - 11:59 AM', label: '10:00 AM - 11:59 AM' },
  { value: '12:00 PM - 1:59 PM', label: '12:00 PM - 1:59 PM' },
  { value: '3:00 PM - 4:59 PM', label: '3:00 PM - 4:59 PM' },
  { value: '5:00 PM - 6:00 PM', label: '5:00 PM - 6:00 PM' },
]

const getAvailableSlotsForDate = (date) => {
  const day = date.getDay()
  if (day === 0) return []
  if (day === 6) {
    const currentTime = date.getHours() * 60 + date.getMinutes()
    return TIME_SLOTS.filter(slot => {
      const [timePart] = slot.value.split(' - ')
      const [time, meridian] = timePart.split(' ')
      let [startHour] = time.split(':').map(Number)
      if (meridian === 'PM' && startHour !== 12) startHour += 12
      if (meridian === 'AM' && startHour === 12) startHour = 0
      const slotEndTime = (startHour + 1) * 60
      return slotEndTime <= 13 * 60 + 30 && slotEndTime > currentTime
    })
  }
  const currentTime = date.getHours() * 60 + date.getMinutes()
  return TIME_SLOTS.filter(slot => {
    const [timePart] = slot.value.split(' - ')
    const [time, meridian] = timePart.split(' ')
    let [startHour] = time.split(':').map(Number)
    if (meridian === 'PM' && startHour !== 12) startHour += 12
    if (meridian === 'AM' && startHour === 12) startHour = 0
    const slotStartTime = startHour * 60
    return slotStartTime > currentTime
  })
}

const getMinDate = () => new Date().toISOString().split('T')[0]
const getMaxDate = () => {
  const max = new Date()
  max.setDate(max.getDate() + 30)
  return max.toISOString().split('T')[0]
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

// ─── Trust badges shown below the hero left copy ───────────────────────────
const TRUST_BADGES = [
  { icon: <FaShieldAlt />, title: 'Fast Response', sub: 'Under 2 Hours' },
  { icon: <FaHeadset />, title: 'Expert Support', sub: 'Call Assistance' },
  { icon: <FaLock />, title: '100% Secure', sub: 'Your Data is Safe' },
]

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [availableSlots, setAvailableSlots] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('IN')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL

  const defaultValues = useMemo(
    () => ({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: SUBJECTS[0],
      message: '',
      wantsCall: false,
      callDate: '',
      callTimeSlot: '',
    }),
    []
  )

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const scheduleCall = watch('wantsCall')

  const handleDateChange = (e) => {
    const date = e.target.value
    setSelectedDate(date)
    setValue('callDate', date, { shouldValidate: true })
    if (date) {
      const slots = getAvailableSlotsForDate(new Date(date))
      setAvailableSlots(slots)
      setSelectedSlot('')
      setValue('callTimeSlot', '', { shouldValidate: true })
    } else {
      setAvailableSlots([])
    }
  }

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot)
    setValue('callTimeSlot', slot, { shouldValidate: true })
  }

  const onSubmit = async (values) => {
    setSubmitError('')
    try {
      const payload = {
        name: values.name,
        email: values.email,
        message: values.message,
        companyName: values.company || undefined,
        phone: values.phone || undefined,
        subject: values.subject,
        wantsCall: Boolean(values.wantsCall),
        callDate: values.wantsCall ? values.callDate : undefined,
        callTimeSlot: values.wantsCall ? values.callTimeSlot : undefined,
      }

      const result = await submitForm({
        baseUrl: API_BASE,
        path: '/contact-us',
        payload,
      })

      if (!result.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }

      if (values.wantsCall) {
        setSelectedDate(values.callDate || '')
        setSelectedSlot(values.callTimeSlot || '')
      }
      setSubmitted(true)
      reset(defaultValues)
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit contact request')
    }
  }

  const minDate = getMinDate()
  const maxDate = getMaxDate()

  return (
    <section
      id="canton-fair-support-form"
      className="relative overflow-hidden bg-[#041c4a] bg-[url('/images/contact/contact.png')] bg-cover bg-center bg-no-repeat min-h-[600px]"
    >
      {/* Navy overlay for text legibility over the photo */}
      <div className="pointer-events-none absolute inset-0 bg-[#041c4a]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Copy ─────────────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FE5101]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              GET IN TOUCH
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-white leading-tight tracking-tight">
              We're Here to{' '}
              <span className="text-[#36A0F7]">Move Your Business Forward.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-[0.95rem] text-blue-200 leading-relaxed max-w-md">
              Have questions about DDP shipping, sourcing, or customs?
              Our team is ready to help you with the right solutions.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 mt-2">
              {TRUST_BADGES.map((b) => (
                <div key={b.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-blue-300 text-[15px] flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">{b.title}</div>
                    <div className="text-[11px] text-blue-300">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form card ────────────────────────────── */}
          <div className="w-full">
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-2xl p-7 sm:p-8">

                {/* Card heading */}
                <div className="mb-5">
                  <h2 className="text-[18px] font-700 text-gray-900">Send Us a Message</h2>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Fill in the details and our team will contact you shortly.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label className={LABEL_CLASS}>Full Name *</label>
                    <input type="text" {...register('name')} placeholder="Your full name" className={INPUT_CLASS} />
                    {errors?.name && <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className={LABEL_CLASS}>Company Name</label>
                    <input type="text" {...register('company')} placeholder="Your company name" className={INPUT_CLASS} />
                    {errors?.company && <p className="text-[11px] text-red-500 mt-1">{errors.company.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={LABEL_CLASS}>Email Address</label>
                    <input type="email" {...register('email')} placeholder="you@example.com" className={INPUT_CLASS} />
                    {errors?.email && <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={LABEL_CLASS}>Phone / WhatsApp *</label>
                    <Controller
                      name="phone"
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
                          placeholder="+91 81234 56789"
                        />
                      )}
                    />
                    {errors?.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={LABEL_CLASS}>Subject *</label>
                    <select {...register('subject')} className={INPUT_CLASS}>
                      {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                    {errors?.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS}>Your Message *</label>
                    <textarea
                      {...register('message')}
                      placeholder="How can we help you?"
                      rows={3}
                      className={`${INPUT_CLASS} resize-none`}
                    />
                    {errors?.message && <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Schedule a Call toggle */}
                  <div className="sm:col-span-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={Boolean(scheduleCall)}
                        onChange={(e) => {
                          setValue('wantsCall', e.target.checked, { shouldValidate: true })
                          if (!e.target.checked) {
                            setSelectedDate(''); setSelectedSlot(''); setAvailableSlots([])
                            setValue('callDate', '', { shouldValidate: true })
                            setValue('callTimeSlot', '', { shouldValidate: true })
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 accent-[#003DA5]"
                      />
                      <span className="flex items-center gap-2 text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                        <BsCalendarEvent className="text-primary w-4 h-4 shrink-0" />
                        I'd like to schedule a call with the team
                      </span>
                    </label>
                  </div>

                  {/* Conditional call scheduler */}
                  {scheduleCall && (
                    <div className="sm:col-span-2 p-4 bg-primary-50 border border-primary-100 rounded-xl">
                      <div className="text-[14px] font-600 text-primary mb-3">Schedule a Call</div>
                      <div className="mb-4">
                        <label className="block text-[11px] text-gray-600 mb-1.5">Select Date</label>
                        <input type="date" value={selectedDate} onChange={handleDateChange} min={minDate} max={maxDate} className={INPUT_CLASS} />
                        {errors?.callDate && <p className="text-[11px] text-red-500 mt-1">{errors.callDate.message}</p>}
                        {selectedDate && <p className="text-[10px] text-gray-400 mt-1">Working days: Mon–Fri (9AM–6PM) | Sat (9AM–1:30PM)</p>}
                      </div>
                      {selectedDate && availableSlots.length > 0 && (
                        <div className="mb-4">
                          <label className="block text-[11px] text-gray-600 mb-2">Select Time Slot</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {availableSlots.map((slot) => (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => handleSlotSelect(slot.value)}
                                className={`px-3 py-2 rounded-lg text-[12px] font-500 transition-all ${selectedSlot === slot.value ? 'bg-primary text-white border border-primary' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-200 hover:text-primary'}`}
                              >
                                {slot.label}
                              </button>
                            ))}
                          </div>
                          {errors?.callTimeSlot && <p className="text-[11px] text-red-500 mt-2">{errors.callTimeSlot.message}</p>}
                        </div>
                      )}
                      {selectedDate && availableSlots.length === 0 && (
                        <div className="text-[12px] text-amber-600 bg-amber-50 border border-amber-200 p-2 rounded-lg">
                          ⚠️ No available slots for this date. Please select another date.
                        </div>
                      )}
                      {selectedSlot && (
                        <div className="mt-3 text-[11px] text-green-600 bg-green-50 border border-green-200 p-2 rounded-lg flex items-center gap-2">
                          <span>✓</span>
                          <span>Call scheduled for {formatDate(selectedDate)} ({TIME_SLOTS.find(s => s.value === selectedSlot)?.label})</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#003DA5] hover:bg-[#0B2A6B] disabled:opacity-70 text-white text-[0.9rem] font-bold tracking-wide py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'SEND MESSAGE →'}
                    </button>
                    <p className="text-center text-[11px] text-gray-400 mt-2">
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </div>

                  {submitError && (
                    <p className="sm:col-span-2 text-[12px] text-red-500">{submitError}</p>
                  )}
                </form>
              </div>
            ) : (
              /* ── Success state ── */
              <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
                <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-[24px] font-600 text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {scheduleCall && selectedSlot
                    ? `We'll call you on ${formatDate(selectedDate)} at ${TIME_SLOTS.find(s => s.value === selectedSlot)?.label}.`
                    : "We'll reply within 2 hours on WhatsApp, or 4–6 hours by email."}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}