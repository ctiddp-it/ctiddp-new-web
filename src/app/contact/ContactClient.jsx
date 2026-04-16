'use client'

import { FaWhatsapp, FaCircleQuestion, FaBoxOpen, FaScaleBalanced, FaStore, FaClock, FaIndianRupeeSign } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { MdEmergency } from "react-icons/md";
import { useState } from 'react'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

const CONTACT_CHANNELS = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    lines: ['info@ctiddp.com'],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'India Office',
    lines: ['+91 87900 13772 (Main)', 'Vizag HQ · Chennai Ops', 'Bangalore BD', 'Mon–Fri · 9am–6pm IST', 'Saturday · 9am–1:30pm IST'],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'China Office',
    lines: ['+86 188 1874 9844', 'Guangzhou Warehouse', 'Foshan QC · WeChat available', 'Mon–Sat · 9am–6pm CST', 'Saturday · 9am–1:30pm IST'],
  },
]

const SLAS = [
  { label: 'WhatsApp (Business Hours)', val: 'Under 2 hours', color: '#4ADE80' },
  { label: 'Email', val: '4–6 hours', color: '#3B82F6' },
  { label: 'Quote Request', val: '24 hours', color: '#3B82F6' },
  { label: 'Shipment Escalation', val: '2-hour SLA', color: '#F87171' },
]

const SUBJECTS = [
  'New Shipment Enquiry',
  'Existing Shipment Update',
  'Quote Request',
  'Canton Fair Support',
  'Partnership / Agency',
  'General Question',
  'Complaint / Feedback',
  'Others',
]

// Time slots configuration
const TIME_SLOTS = [
  { value: '10:00 AM - 11:59 AM', label: '10:00 AM - 11:59 AM' },
  { value: '12:00 PM - 1:59 PM', label: '12:00 PM - 1:59 PM' },
  { value: '3:00 PM - 4:59 PM', label: '3:00 PM - 4:59 PM' },
  { value: '5:00 PM - 6:00 PM', label: '5:00 PM - 6:00 PM' },
]

// Helper function to check if a date is a working day
const isWorkingDay = (date) => {
  const day = date.getDay()
  // 0 = Sunday, 1 = Monday, 5 = Friday, 6 = Saturday
  if (day === 0) return false // Sunday closed
  if (day === 6) {
    // Saturday: check if before 1:30 PM
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const timeInMinutes = hours * 60 + minutes
    return timeInMinutes < 13 * 60 + 30 // Before 1:30 PM
  }
  return true // Monday to Friday open all day
}

// Helper to get available time slots for a given date
const getAvailableSlotsForDate = (date) => {
  const day = date.getDay()
  if (day === 0) return [] // Sunday - no slots
  if (day === 6) {
    // Saturday - only slots before 1:30 PM
    const currentTime = date.getHours() * 60 + date.getMinutes()
    return TIME_SLOTS.filter(slot => {
      const [timePart] = slot.value.split(' - ')
      const [time, meridian] = timePart.split(' ')
      let [startHour] = time.split(':').map(Number)
      if (meridian === 'PM' && startHour !== 12) startHour += 12
      if (meridian === 'AM' && startHour === 12) startHour = 0
      const slotEndTime = (startHour + 1) * 60
      // Only show slots that haven't passed and end before 1:30 PM
      return slotEndTime <= 13 * 60 + 30 && slotEndTime > currentTime
    })
  }
  // Monday to Friday - all slots available, filter out passed slots
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

// Helper to get min date (today) and max date (30 days from now)
const getMinDate = () => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

const getMaxDate = () => {
  const max = new Date()
  max.setDate(max.getDate() + 30)
  return max.toISOString().split('T')[0]
}

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// FAQ Data with categories for accordion
const FAQ_CATEGORIES = [
  {
    id: 'ddp-basics',
    title: 'DDP Basics',
    icon: <FaBoxOpen />,
    items: [
      { q: 'What does DDP mean?', a: 'DDP stands for Delivered Duty Paid. Under DDP terms, the seller (us) bears full responsibility and cost for delivering goods to your address in India — including all freight, insurance, export customs, import customs, and all duties (BCD, IGST, SWS). You receive the goods free of any port charges.' },
      { q: 'Why use DDP instead of FOB or CIF?', a: 'FOB and CIF leave customs, duties, and last-mile delivery to you. DDP means zero customs complexity — we handle everything. For India importers, this means no dealing with Indian customs, no surprise duty bills at port, and no logistics coordination at the Indian end.' },
      { q: 'Do I need an IEC (Import Export Code) to use your DDP service?', a: 'No. Under DDP, we act as the importer of record. However, if you plan to claim IGST as Input Tax Credit (ITC), you will need your own IEC and GSTIN. We can advise on the best structure for your situation.' },
    ],
  },
  {
    id: 'customs-duties',
    title: 'Customs & Duties',
    icon: <FaScaleBalanced />,
    items: [
      { q: 'How do you calculate duties before quoting?', a: 'Our Operations Manager manually verifies the HS code, applies the current BCD rate, calculates SWS (10% of BCD), and computes IGST on the assessable value (CIF + BCD + SWS). This signed duty calculation is included in every DDP quote before goods move.' },
      { q: 'What if actual duties at the port differ from your quote?', a: 'We bear that risk — not you. Our DDP contract fixes the total price. If customs assesses a higher duty due to valuation or classification, we absorb the difference. This is the core benefit of DDP.' },
      { q: 'Can you apply Free Trade Agreement (FTA) rates for India-China trade?', a: 'India-China FTA rates are limited. However, ASEAN-India FTA rates can apply to eligible goods transiting through ASEAN countries. We evaluate FTA applicability for every shipment and apply preferential rates wherever legally possible.' },
      { q: 'Do you handle BIS, FSSAI, or other import licences?', a: 'Yes. We support BIS (Bureau of Indian Standards) licence requirements for electronics, FSSAI for food products, and other product-specific certifications. We flag licence requirements upfront in the quotation stage — no surprises at the port.' },
    ],
  },
  {
    id: 'canton-fair',
    title: 'Canton Fair & Sourcing',
    icon: <FaStore />,
    items: [
      { q: 'How does Canton Fair support work?', a: 'Our Guangzhou team attends the fair with you (or on your behalf), handles Mandarin negotiation, inspects samples, consolidates purchases from multiple booths, and ships everything DDP to your India address.' },
      { q: 'Can you source products from China year-round?', a: 'Yes. Our on-ground teams in Guangzhou and Foshan identify verified suppliers, negotiate prices in Mandarin, and arrange samples for any product category — not just during the fair.' },
    ],
  },
  {
    id: 'timelines',
    title: 'Timelines & Logistics',
    icon: <FaClock />,
    items: [
      { q: 'How long does sea freight DDP take?', a: 'Typically 38–50 days door-to-door: 2–4 days consolidation, 18–28 days ocean transit, 9–11 days India customs, 1–3 days last mile.' },
      { q: 'Can I track my shipment?', a: 'Yes. We provide WhatsApp and email updates at every milestone — cargo ready, vessel departure, arrival at Indian port, customs clearance, and delivery confirmation with POD.' },
      { q: 'Do you deliver to cities other than Chennai?', a: 'Yes — PAN-India. JNPT, Mundra, Chennai, Vizag, Delhi ICD. Last-mile to any Indian city or warehouse included in your DDP price.' },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Quoting',
    icon: <FaIndianRupeeSign />,
    items: [
      { q: 'How do I get a DDP quote?', a: 'Fill in our quote form or WhatsApp us. Share cargo category, weight/volume, pickup city, delivery state. Full DDP quote with BCD+IGST breakdown within 2 hours.' },
      { q: 'Are there any hidden charges?', a: 'No. Our quote includes all freight, insurance, BCD, IGST, SWS, and last-mile. The number you see is the final number you pay. Our Operations Manager signs off on every duty calculation before quoting.' },
    ],
  },
]

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[rgba(37,99,235,0.1)] last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left group cursor-none"
      >
        <span className="text-[15px] font-medium text-white group-hover:text-blue-light transition-colors pr-4">
          {question}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold/20 border-gold' : 'bg-transparent'}`}>
          <svg
            className={`w-3 h-3 text-blue-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[13px] text-muted leading-relaxed pr-6">
          {answer}
        </p>
      </div>
    </div>
  )
}

// Category Accordion Component
const CategoryAccordion = ({ category, isCategoryOpen, onCategoryToggle, openItems, onItemToggle }) => {
  return (
    <div className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[8px] overflow-hidden mb-4">
      <button
        onClick={() => onCategoryToggle(category.id)}
        className="w-full px-5 py-4 flex items-center justify-between bg-[rgba(37,99,235,0.03)] hover:bg-[rgba(37,99,235,0.06)] transition-colors cursor-none"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{category.icon}</span>
          <span className="font-garamond text-lg font-semibold text-blue-light">
            {category.title}
          </span>
          <span className="text-[11px] text-muted bg-[var(--overlay-input)] px-2 py-0.5 rounded-full">
            {category.items.length}
          </span>
        </div>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 ${isCategoryOpen ? 'bg-gold/20 border-gold' : 'bg-transparent'}`}>
          <svg
            className={`w-3.5 h-3.5 text-blue-light transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${isCategoryOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div className="px-5 py-2">
          {category.items.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openItems[`${category.id}-${idx}`] || false}
              onClick={() => onItemToggle(category.id, idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [scheduleCall, setScheduleCall] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [availableSlots, setAvailableSlots] = useState([])

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: SUBJECTS[0],
    message: ''
  })
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

  // Accordion state
  const [openCategories, setOpenCategories] = useState({
    'ddp-basics': true,
    'customs-duties': false,
    'canton-fair': false,
    'timelines': false,
    'pricing': false,
  })
  const [openItems, setOpenItems] = useState({})

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const toggleItem = (categoryId, itemIndex) => {
    const key = `${categoryId}-${itemIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (e) => {
    const date = e.target.value
    setSelectedDate(date)
    if (date) {
      const slots = getAvailableSlotsForDate(new Date(date))
      setAvailableSlots(slots)
      setSelectedSlot('')
    } else {
      setAvailableSlots([])
    }
  }

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        companyName: formData.company || undefined,
        phone: formData.phone || undefined,
        subject: formData.subject,
        wantsCall: scheduleCall,
        callDate: scheduleCall ? selectedDate : undefined,
        callTimeSlot: scheduleCall ? selectedSlot : undefined,
      }

      const response = await fetch(`${API_BASE}/contact-us`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.message || 'Unable to submit contact request')
      }

      setSubmitted(true)
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit contact request')
    } finally {
      setSubmitting(false)
    }
  }

  const minDate = getMinDate()
  const maxDate = getMaxDate()

  return (
    <>
      <ScrollRevealInit />
      <main className="bg-black text-white font-['Outfit',sans-serif]">

        {/* JSON-LD for ContactPage + FAQPage merged */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'ContactPage',
                  name: 'Contact CTIDDP',
                  url: 'https://ctiddp.com/contact',
                  description: 'Contact the CTIDDP team in India or China for DDP shipping enquiries.',
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: FAQ_CATEGORIES.flatMap(c => c.items).map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: { '@type': 'Answer', text: item.a },
                  })),
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ctiddp.com' },
                    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://ctiddp.com/contact' },
                  ],
                },
              ],
            })
          }}
        />

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-blue-light whitespace-nowrap">Contact</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[38vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[90px] pb-[40px] sm:pb-[60px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Get in Touch
            </div>
            <h1 className="font-garamond text-[clamp(34px,5.5vw,68px)] font-light leading-[1.1] mb-[14px]">
              Our Presence<br />
              <em className="italic text-blue-light">
                Two Countries, Five Locations.
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[500px] mx-auto px-2">
              Real people, Fast responses. China or India team — reach us directly.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            {/* Contact Form + SLAs + Call Booking Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-start mb-11">

              {/* Form Section */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-6 sm:p-7">
                  <div className="font-garamond text-xl font-semibold text-blue-light mb-5">Send Us a Message</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 or +86"
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      >
                        {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] text-muted uppercase tracking-[1px] mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Schedule a Call Checkbox */}
                    <div className="sm:col-span-2 mt-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={scheduleCall}
                          onChange={(e) => {
                            setScheduleCall(e.target.checked)
                            if (!e.target.checked) {
                              setSelectedDate('')
                              setSelectedSlot('')
                              setAvailableSlots([])
                            }
                          }}
                          className="w-4 h-4 rounded border-[rgba(37,99,235,0.3)] bg-transparent checked:bg-gold checked:border-gold focus:ring-gold focus:ring-offset-0 focus:ring-1 cursor-pointer"
                        />
                        <span className="flex items-center gap-2 text-[13px] text-muted group-hover:text-blue-light transition-colors">
                          <BsCalendarEvent className="text-blue-light w-4 h-4 shrink-0" />
                          <span>I'd like to schedule a call with the team</span>
                        </span>
                      </label>
                    </div>

                    {/* Dynamic Schedule Call Section */}
                    {scheduleCall && (
                      <div className="sm:col-span-2 mt-4 p-4 bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.15)] rounded-[3px]">
                        <div className="text-sm font-medium text-blue-light mb-3">Schedule a Call</div>

                        {/* Date Selection */}
                        <div className="mb-4">
                          <label className="block text-[11px] text-muted mb-1.5">Select Date</label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            min={minDate}
                            max={maxDate}
                            className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                          />
                          {selectedDate && (
                            <p className="text-[10px] text-muted mt-1">
                              Working days: Mon-Fri (9AM-6PM) | Sat (9AM-1:30PM)
                            </p>
                          )}
                        </div>

                        {/* Time Slot Selection */}
                        {selectedDate && availableSlots.length > 0 && (
                          <div className="mb-4">
                            <label className="block text-[11px] text-muted mb-2">Select Time Slot</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {availableSlots.map((slot) => (
                                <button
                                  key={slot.value}
                                  type="button"
                                  onClick={() => handleSlotSelect(slot.value)}
                                  className={`px-3 py-2 rounded-[3px] text-xs font-medium transition-all cursor-none ${selectedSlot === slot.value
                                    ? 'bg-gold text-black border border-gold'
                                    : 'bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] text-muted hover:border-gold/50 hover:text-blue-light'
                                    }`}
                                >
                                  {slot.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedDate && availableSlots.length === 0 && (
                          <div className="text-[12px] text-amber-400 bg-[rgba(245,158,11,0.1)] p-2 rounded">
                            ⚠️ No available slots for this date. Please select another date.
                          </div>
                        )}

                        {selectedSlot && (
                          <div className="mt-3 text-[11px] text-green-400 bg-[rgba(74,222,128,0.1)] p-2 rounded flex items-center gap-2">
                            <span>✓</span>
                            <span>Call scheduled for {formatDate(selectedDate)} ({TIME_SLOTS.find(s => s.value === selectedSlot)?.label})</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-6 bg-linear-to-br from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none"
                  >
                    {submitting ? 'Sending...' : 'Send Message →'}
                  </button>
                  {submitError ? <p className="text-xs text-red-400 mt-3">{submitError}</p> : null}
                </form>
              ) : (
                <div className="bg-[rgba(74,222,128,0.07)] border border-[rgba(74,222,128,0.25)] rounded-[4px] p-12 text-center">
                  <div className="text-[40px] mb-3.5">✅</div>
                  <div className="font-garamond text-[26px] font-semibold mb-2.5">Message Sent!</div>
                  <p className="text-[13px] leading-relaxed">
                    {scheduleCall && selectedSlot
                      ? `We'll call you on ${formatDate(selectedDate)} at ${TIME_SLOTS.find(s => s.value === selectedSlot)?.label}.`
                      : "We'll reply within 2 hours on WhatsApp, or 4–6 hours by email."}
                  </p>
                </div>
              )}

              {/* Right Column - SLAs + Emergency */}
              <div className="flex flex-col gap-4">
                {/* Response SLAs */}
                <div className="bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.15)] p-[26px] rounded-[3px]">
                  <div className="font-garamond text-[19px] font-semibold mb-4 text-blue-light">
                    Response SLAs
                  </div>
                  {SLAS.map(s => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0">
                      <span className="text-xs text-muted">{s.label}</span>
                      <span className="text-sm font-semibold" style={{ color: s.color }}>{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Emergency */}
                <div className="bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.15)] p-[26px] rounded-[3px]">
                  <div className="font-garamond text-[19px] font-semibold mb-2 text-red-400">
                    <div className="flex items-center gap-2">
                      <MdEmergency className="text-red-400" size={20} />
                      <span>Emergency Escalation</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-3">
                    For urgent issues — cargo held, damage discovered, critical delays. 24/7 for active shipments.
                  </p>
                  <div className="text-xs text-muted"><div className="flex items-center gap-2">
                    <FaPhoneAlt />
                    <span>Emergency: +91 87900 13772</span>
                   
                  </div></div>
                  <div className="text-[11px] text-muted/50 mt-1">🕐 24/7 for active shipments only</div>
                </div>

                {/* Working Hours Info */}
                <div className="bg-surface border border-[rgba(37,99,235,0.12)] p-6 rounded-[3px]">
                  <div className="font-garamond text-[17px] font-semibold text-blue-light mb-2.5">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-blue-light w-4 h-4 shrink-0" />
                      <span>Working Hours</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-muted">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:30 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-400">Closed</span>
                    </div>
                    <div className="pt-2 mt-1 border-t border-[var(--overlay-card-border)]">
                      <div className="text-green-400">✓ Calls scheduled within working hours only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Primary CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[rgba(37,211,102,0.06)] border border-[rgba(37,211,102,0.2)] p-6 sm:p-9 rounded-[3px] mb-5">
              <div>
                <div className="font-garamond text-2xl font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <FaWhatsapp size={28} className="shrink-0" />
                  <span>WhatsApp — Fastest Response</span>
                </div>
                <p className="text-[13px] text-muted leading-relaxed">
                  Our preferred channel. Send cargo details and get a response within 2 hours. English, Hindi, and Chinese supported.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 
                {[
                  { label: 'India Team', phone: '+91 87900 13772', hours: 'Mon–Sat · 9am–7pm IST' },
                  { label: 'China Team', phone: '+86 188 1874 9844', hours: 'Mon–Sat · 9am–6pm CST' },
                ].map(t => (
                  <a
                    key={t.label}
                    href={`https://wa.me/${t.phone.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(74,222,128,0.05)] border border-[rgba(74,222,128,0.15)] p-5 rounded-[3px] no-underline hover:bg-[rgba(74,222,128,0.1)] transition-colors cursor-none"
                  >
                    <div className="text-[11px] text-green-400 font-semibold mb-2">{t.label}</div>
                    <div className="text-xs text-muted"><div className="flex items-center gap-2">
                      <FaWhatsapp className="text-green-400" />
                      <span>{t.phone}</span>
                    </div></div>
                    <div className="text-[11px] text-muted/60 mt-1">{t.hours}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Other Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CONTACT_CHANNELS.map(ch => (
                <div key={ch.title} className="bg-surface border border-[rgba(37,99,235,0.12)] p-6 rounded-[3px]">
                  <div className="font-garamond text-base font-semibold text-blue-light mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.4)] shadow-[0_0_10px_rgba(37,99,235,0.25)]">
                        <span className="text-blue-light text-sm">
                          {ch.icon}
                        </span>
                      </span>
                      <span>{ch.title}</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted leading-relaxed space-y-0.5">
                    {ch.lines.map((line, i) => <div key={i}>{line}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Beautiful Accordion */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                  <FaCircleQuestion className="w-3.5 h-3.5" />
                  Frequently Asked Questions
              </span>
              <h2 className="font-garamond text-[clamp(30px,4vw,56px)] font-light leading-[1.1]">
                Everything You Wanted<br />
                <em className="italic text-blue-light">To Ask</em>
              </h2>
              <p className="text-[15px] text-muted max-w-[600px] mx-auto mt-4">
                Answers to the most common questions about DDP shipping, duties, and our service. No jargon.
              </p>
            </div>

            {/* Accordion Container */}
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

            {/* Still Have Questions CTA */}
            <div className="mt-10 bg-gradient-to-r from-[rgba(37,99,235,0.08)] to-[rgba(37,99,235,0.03)] border border-[rgba(37,99,235,0.15)] p-8 rounded-[12px] text-center">
              <div className="font-garamond text-2xl font-semibold mb-2 text-blue-light">
                Still Have Questions?
              </div>
              <p className="text-sm text-muted mb-5 max-w-[400px] mx-auto">
                Our team responds in under 2 hours on WhatsApp. We're here to help!
              </p>
              <a
                href="https://wa.me/8790013772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
              >
                <FaWhatsapp size={22} />WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-t border-b border-[rgba(37,99,235,0.15)] px-4 sm:px-[60px] py-12 sm:py-[60px] text-center">
          <h2 className="font-garamond text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] mb-3.5">
            Ready to Stop Wondering?<br />
            <em className="italic text-blue-light">Get a Quote.</em>
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-[500px] mx-auto px-2">
            Full DDP quote with duty pre-calculation. No commitment, just clarity.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-br from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none"
            >
              Get DDP Quote →
            </Link>
            <a
              href="https://wa.me/8790013772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              <FaWhatsapp size={22} />WhatsApp Directly
            </a>
          </div>
        </div>

      </main>

      {/* Keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

    </>
  )
}