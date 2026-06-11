'use client'

import { FaWhatsapp, FaCircleQuestion, FaBoxOpen, FaScaleBalanced, FaStore, FaClock, FaIndianRupeeSign } from "react-icons/fa6"
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa"
import { BsCalendarEvent } from "react-icons/bs"
import { MdEmergency } from "react-icons/md"
import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { CONTACT_SUBJECTS, CONTACT_TIME_SLOTS, contactSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'

const INPUT_CLASS =
  'w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-800 text-[13px] outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all'
const LABEL_CLASS = 'text-[11px] tracking-[1px] uppercase text-primary font-600 mb-1.5 block'

const CONTACT_CHANNELS = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    lines: [
      { type: 'email', label: 'info@ctiddp.com', href: 'mailto:info@ctiddp.com' },
    ],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'India Office',
    lines: [
      { type: 'phone', label: '+91 87900 13772 (Main)', href: 'tel:+918790013772' },
      { type: 'text', label: 'Vizag HQ · Chennai Ops' },
      { type: 'text', label: 'Mon–Fri · 9am–6pm IST' },
      { type: 'text', label: 'Saturday · 9am–1:30pm IST' },
    ],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'China Office',
    lines: [
      { type: 'phone', label: '+86 188 1874 9844', href: 'tel:+8618818749844' },
      { type: 'text', label: 'Guangzhou Warehouse' },
      { type: 'text', label: 'Mon–Sat · 9am–6pm CST' },
    ],
  },
]

const SLAS = [
  { label: 'WhatsApp (Business Hours)', val: 'Under 2 hours', color: '#22c55e' },
  { label: 'Email', val: '4–6 hours', color: '#3B82F6' },
  { label: 'Quote Request', val: '24 hours', color: '#3B82F6' },
  { label: 'Shipment Escalation', val: '2-hour SLA', color: '#ef4444' },
]

const SUBJECTS = CONTACT_SUBJECTS

const TIME_SLOTS = [
  { value: '10:00 AM - 11:59 AM', label: '10:00 AM - 11:59 AM' },
  { value: '12:00 PM - 1:59 PM', label: '12:00 PM - 1:59 PM' },
  { value: '3:00 PM - 4:59 PM', label: '3:00 PM - 4:59 PM' },
  { value: '5:00 PM - 6:00 PM', label: '5:00 PM - 6:00 PM' },
]

const isWorkingDay = (date) => {
  const day = date.getDay()
  if (day === 0) return false
  if (day === 6) {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const timeInMinutes = hours * 60 + minutes
    return timeInMinutes < 13 * 60 + 30
  }
  return true
}

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

const FAQ_CATEGORIES = [
  {
    id: 'ddp-basics', title: 'DDP Basics', icon: <FaBoxOpen />,
    items: [
      { q: 'What does DDP mean?', a: 'DDP stands for Delivered Duty Paid. Under DDP terms, the seller (us) bears full responsibility and cost for delivering goods to your address in India - including all freight, insurance, export customs, import customs, and all duties (BCD, IGST, SWS). You receive the goods free of any port charges.' },
      { q: 'Why use DDP instead of FOB or CIF?', a: 'FOB and CIF leave customs, duties, and last-mile delivery to you. DDP means zero customs complexity - we handle everything. For India importers, this means no dealing with Indian customs, no surprise duty bills at port, and no logistics coordination at the Indian end.' },
      { q: 'Do I need an IEC (Import Export Code) to use your DDP service?', a: 'No. Under DDP, we act as the importer of record. However, if you plan to claim IGST as Input Tax Credit (ITC), you will need your own IEC and GSTIN. We can advise on the best structure for your situation.' },
    ],
  },
  {
    id: 'customs-duties', title: 'Customs & Duties', icon: <FaScaleBalanced />,
    items: [
      { q: 'How do you calculate duties before quoting?', a: 'Our Operations Manager manually verifies the HS code, applies the current BCD rate, calculates SWS (10% of BCD), and computes IGST on the assessable value (CIF + BCD + SWS). This signed duty calculation is included in every DDP quote before goods move.' },
      { q: 'What if actual duties at the port differ from your quote?', a: 'We bear that risk - not you. Our DDP contract fixes the total price. If customs assesses a higher duty due to valuation or classification, we absorb the difference. This is the core benefit of DDP.' },
      { q: 'Do you handle BIS, FSSAI, or other import licences?', a: 'Yes. We support BIS (Bureau of Indian Standards) licence requirements for electronics, FSSAI for food products, and other product-specific certifications. We flag licence requirements upfront in the quotation stage - no surprises at the port.' },
    ],
  },
  {
    id: 'canton-fair', title: 'Canton Fair & Sourcing', icon: <FaStore />,
    items: [
      { q: 'How does Canton Fair support work?', a: 'Our Guangzhou team attends the fair with you (or on your behalf), handles Mandarin negotiation, inspects samples, consolidates purchases from multiple booths, and ships everything DDP to your India address.' },
      { q: 'Can you source products from China year-round?', a: 'Yes. Our on-ground teams in Guangzhou and Foshan identify verified suppliers, negotiate prices in Mandarin, and arrange samples for any product category - not just during the fair.' },
    ],
  },
  {
    id: 'timelines', title: 'Timelines & Logistics', icon: <FaClock />,
    items: [
      { q: 'How long does sea freight DDP take?', a: 'Typically 38–50 days door-to-door: 2–4 days consolidation, 18–28 days ocean transit, 9–11 days India customs, 1–3 days last mile.' },
      { q: 'Can I track my shipment?', a: 'Yes. We provide WhatsApp and email updates at every milestone - cargo ready, vessel departure, arrival at Indian port, customs clearance, and delivery confirmation with POD.' },
      { q: 'Do you deliver to cities other than Chennai?', a: 'Yes - PAN-India. JNPT, Mundra, Chennai, Vizag, Delhi ICD. Last-mile to any Indian city or warehouse included in your DDP price.' },
    ],
  },
  {
    id: 'pricing', title: 'Pricing & Quoting', icon: <FaIndianRupeeSign />,
    items: [
      { q: 'How do I get a DDP quote?', a: 'Fill in our quote form or WhatsApp us. Share cargo category, weight/volume, pickup city, delivery state. Full DDP quote with BCD+IGST breakdown within 2 hours.' },
      { q: 'Are there any hidden charges?', a: 'No. Our quote includes all freight, insurance, BCD, IGST, SWS, and last-mile. The number you see is the final number you pay. Our Operations Manager signs off on every duty calculation before quoting.' },
    ],
  },
]

// Accordion components
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button onClick={onClick} className="w-full py-4 flex justify-between items-center text-left group">
      <span className="text-[14px] font-500 text-gray-800 group-hover:text-primary transition-colors pr-4">{question}</span>
      <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-50 border-primary-200' : 'border-gray-200'}`}>
        <svg className={`w-3 h-3 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
      <p className="text-[13px] text-gray-500 leading-relaxed pr-6">{answer}</p>
    </div>
  </div>
)

const CategoryAccordion = ({ category, isCategoryOpen, onCategoryToggle, openItems, onItemToggle }) => (
  <div className="card overflow-hidden">
    <button
      onClick={() => onCategoryToggle(category.id)}
      className="w-full px-5 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-primary text-lg">{category.icon}</span>
        <span className="text-[16px] font-600 text-gray-900">{category.title}</span>
        <span className="text-[11px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">{category.items.length}</span>
      </div>
      <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isCategoryOpen ? 'bg-primary-50 border-primary-200' : 'border-gray-200'}`}>
        <svg className={`w-3.5 h-3.5 text-primary transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isCategoryOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
      <div className="px-5 py-2">
        {category.items.map((item, idx) => (
          <AccordionItem key={idx} question={item.q} answer={item.a} isOpen={openItems[`${category.id}-${idx}`] || false} onClick={() => onItemToggle(category.id, idx)} />
        ))}
      </div>
    </div>
  </div>
)

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

  const [openCategories, setOpenCategories] = useState({
    'ddp-basics': true,
    'customs-duties': false,
    'canton-fair': false,
    'timelines': false,
    'pricing': false,
  })
  const [openItems, setOpenItems] = useState({})

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({ ...prev, [categoryId]: !prev[categoryId] }))
  }
  const toggleItem = (categoryId, itemIndex) => {
    const key = `${categoryId}-${itemIndex}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

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
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ContactPage',
                '@id': 'https://www.ctiddp.com/contact/#contactpage',
                name: 'Contact CTIDDP',
                url: 'https://www.ctiddp.com/contact/',
                description: 'Contact the CTIDDP team in India or China for DDP shipping enquiries.',
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://www.ctiddp.com/contact/#faq',
                mainEntity: FAQ_CATEGORIES.flatMap(c =>
                  c.items.map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: { '@type': 'Answer', text: item.a },
                  }))
                ),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ctiddp.com/contact/' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="GET IN TOUCH"
        subtitle="Real people, fast responses. China or India team — reach us directly."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        titleNode={<>Our Presence<br /><span className="text-primary-light">Two Countries, Five Locations.</span></>}
      />

      {/* ══════════ FORM + SIDEBAR ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ── Form ── */}
            {!submitted ? (
              <div className="card p-6 sm:p-8">
                <h3 className="text-[18px] font-600 text-gray-900 mb-5">Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4" noValidate>
                  <div>
                    <label className={LABEL_CLASS}>Name *</label>
                    <input type="text" {...register('name')} placeholder="Your name" className={INPUT_CLASS} />
                    {errors?.name && <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Company</label>
                    <input type="text" {...register('company')} placeholder="Company name" className={INPUT_CLASS} />
                    {errors?.company && <p className="text-[11px] text-red-500 mt-1">{errors.company.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS}>Email *</label>
                    <input type="email" {...register('email')} placeholder="your@email.com" className={INPUT_CLASS} />
                    {errors?.email && <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Phone / WhatsApp</label>
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
                          placeholder="Enter phone number"
                        />
                      )}
                    />
                    {errors?.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Subject</label>
                    <select {...register('subject')} className={INPUT_CLASS}>
                      {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                    {errors?.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS}>Message *</label>
                    <textarea {...register('message')} placeholder="How can we help you?" rows={4} className={`${INPUT_CLASS} resize-none`} />
                    {errors?.message && <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Schedule a Call */}
                  <div className="sm:col-span-2 mt-2">
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
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      />
                      <span className="flex items-center gap-2 text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                        <BsCalendarEvent className="text-primary w-4 h-4 shrink-0" />
                        I&apos;d like to schedule a call with the team
                      </span>
                    </label>
                  </div>

                  {scheduleCall && (
                    <div className="sm:col-span-2 mt-2 p-4 bg-primary-50 border border-primary-100 rounded-xl">
                      <div className="text-[14px] font-600 text-primary mb-3">Schedule a Call</div>
                      <div className="mb-4">
                        <label className="block text-[11px] text-gray-600 mb-1.5">Select Date</label>
                        <input type="date" value={selectedDate} onChange={handleDateChange} min={minDate} max={maxDate} className={INPUT_CLASS} />
                        {errors?.callDate && <p className="text-[11px] text-red-500 mt-1">{errors.callDate.message}</p>}
                        {selectedDate && <p className="text-[10px] text-gray-400 mt-1">Working days: Mon-Fri (9AM-6PM) | Sat (9AM-1:30PM)</p>}
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

                  <div className="sm:col-span-2">
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center disabled:opacity-70">
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </div>
                  {submitError && <p className="sm:col-span-2 text-[12px] text-red-500">{submitError}</p>}
                </form>
              </div>
            ) : (
              <div className="card p-12 text-center border-green-200 bg-green-50">
                <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-[24px] font-600 text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {scheduleCall && selectedSlot
                    ? `We'll call you on ${formatDate(selectedDate)} at ${TIME_SLOTS.find(s => s.value === selectedSlot)?.label}.`
                    : "We'll reply within 2 hours on WhatsApp, or 4–6 hours by email."}
                </p>
              </div>
            )}

            {/* ── Sidebar ── */}
            <div className="flex flex-col gap-4">
              {/* Response SLAs */}
              <div className="card p-6">
                <h4 className="text-[16px] font-600 text-gray-900 mb-4">Response SLAs</h4>
                {SLAS.map(s => (
                  <div key={s.label} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                    <span className="text-[13px] text-gray-500">{s.label}</span>
                    <span className="text-[13px] font-600" style={{ color: s.color }}>{s.val}</span>
                  </div>
                ))}
              </div>

              {/* Emergency */}
              <div className="rounded-2xl p-6 bg-red-50 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <MdEmergency className="text-red-500" size={18} />
                  <h4 className="text-[15px] font-600 text-red-600">Emergency Escalation</h4>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-3">
                  For urgent issues — cargo held, damage discovered, critical delays. 24/7 for active shipments.
                </p>
                <div className="flex items-center gap-2 text-[13px] text-gray-700">
                  <FaPhoneAlt className="text-red-500" size={12} />
                  <a href="tel:+918790013772" className="hover:text-red-600 transition-colors no-underline text-gray-700">+91 87900 13772</a>
                </div>
                <div className="text-[11px] text-gray-400 mt-1">🕐 24/7 for active shipments only</div>
              </div>

              {/* Working Hours */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaClock className="text-primary" size={14} />
                  <h4 className="text-[15px] font-600 text-gray-900">Working Hours</h4>
                </div>
                <div className="space-y-2 text-[13px] text-gray-600">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM IST</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00 AM – 1:30 PM IST</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-red-500">Closed</span></div>
                  <div className="pt-2 mt-1 border-t border-gray-100">
                    <div className="text-green-600 text-[12px]">✓ Calls scheduled within working hours only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── WhatsApp + Contact Channels ── */}
          <div className="mt-12">
            <div className="rounded-2xl p-6 sm:p-8 bg-green-50 border border-green-200 mb-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaWhatsapp size={24} className="text-green-500" />
                    <h4 className="text-[18px] font-600 text-green-700">WhatsApp — Fastest Response</h4>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Our preferred channel. Send cargo details and get a response within 2 hours. English, Hindi, and Chinese supported.
                  </p>
                </div>
                <div>
                  <a
                    href="https://wa.me/918790013772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 flex items-center gap-3 no-underline hover:border-green-300 transition-colors"
                  >
                    <FaWhatsapp className="text-green-500" size={20} />
                    <div>
                      <div className="text-[13px] font-600 text-gray-900">India Team</div>
                      <div className="text-[12px] text-gray-500">+91 87900 13772 · Mon–Sat · 9am–7pm IST</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONTACT_CHANNELS.map(ch => (
                <div key={ch.title} className="card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-container icon-container-sm">{ch.icon}</div>
                    <h4 className="text-[15px] font-600 text-gray-900">{ch.title}</h4>
                  </div>
                  <div className="text-[12px] text-gray-500 leading-relaxed space-y-0.5">
                    {ch.lines.map((line, i) => (
                      <div key={i}>
                        {line.href ? (
                          <a href={line.href} className="hover:text-primary transition-colors no-underline text-gray-600">{line.label}</a>
                        ) : (
                          <span>{line.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-center mb-12">
            <SectionBadge>FREQUENTLY ASKED QUESTIONS</SectionBadge>
            <h2 className="section-title">
              Everything You Wanted <span className="highlight">To Ask</span>
            </h2>
            <p className="section-subtitle centered">
              Answers to the most common questions about DDP shipping, duties, and our service. No jargon.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_CATEGORIES.map((category) => (
              <CategoryAccordion
                key={category.id}
                category={category}
                isCategoryOpen={openCategories[category.id] || false}
                onCategoryToggle={toggleCategory}
                openItems={openItems}
                onItemToggle={toggleItem}
              />
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-10 card p-8 text-center border-primary-100 bg-primary-50/30">
            <h3 className="text-[20px] font-600 text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-[14px] text-gray-500 mb-5 max-w-[400px] mx-auto">
              Our team responds in under 2 hours on WhatsApp. We&apos;re here to help!
            </p>
            <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
              WHATSAPP US NOW
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Ready to Stop Wondering?<br /><span class='text-primary-light'>Get a Quote.</span>"
        subtitle="Full DDP quote with duty pre-calculation. No commitment, just clarity."
        buttons={[
          { label: 'GET DDP QUOTE', href: '/quote', variant: 'primary' },
          { label: 'WHATSAPP DIRECTLY', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}