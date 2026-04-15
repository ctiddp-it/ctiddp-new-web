'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function CantonFairClient() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    visitDate: '',
    categories: '',
    attendSolo: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch(`${API_BASE}/canton-fair`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.message || 'Unable to submit Canton Fair request')
      }
      setSubmitted(true)
    } catch (submitError) {
      setError(submitError.message || 'Unable to submit Canton Fair request')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="canton-fair-support-form"
      className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep scroll-mt-[72px]"
    >
      <div className="max-w-[760px] mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-semibold tracking-[3px] uppercase text-gold mb-3 block">
            Reserve Your Slot
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(30px,4vw,52px)] font-light leading-[1.1] mb-[12px]">
            Book Canton Fair<br />
            <em className="italic text-gold-light">Support</em>
          </h2>
          <p className="text-[14px] text-muted max-w-[420px] mx-auto">
            Submit your details and our Guangzhou team will confirm your dedicated support slot.
          </p>
        </div>

        <div className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-6 sm:p-10">
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />
                </div>

                {/* Contact Number */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    WhatsApp / Phone *
                  </label>
                  <input
                    required
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />
                </div>

                {/* Date of Visit */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Planned Visit Date *
                  </label>
                  <input
                    required
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    min="2026-04-15"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150 [color-scheme:dark]"
                  />
                </div>

                {/* Product Categories */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Product Categories
                  </label>
                  <input
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    placeholder="e.g. Electronics, Textiles"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150"
                  />
                </div>

                {/* Attending Solo */}
                <div className="sm:col-span-1">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Will You Attend?
                  </label>
                  <select
                    name="attendSolo"
                    value={formData.attendSolo}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] transition-colors duration-150 [color-scheme:dark]"
                  >
                    <option value="" className="bg-[#0a0a0a]">Select an option</option>
                    <option value="attend-with-team" className="bg-[#0a0a0a]">Yes — I'll attend with your team</option>
                    <option value="team-solo" className="bg-[#0a0a0a]">No — Your team represents me solo</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] text-muted uppercase tracking-[1.5px] mb-1.5 font-medium">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Specific products, supplier requirements, QC criteria…"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] focus:border-[rgba(37,99,235,0.55)] focus:outline-none rounded-[3px] px-4 py-2.5 text-white text-[13px] placeholder:text-muted/40 transition-colors duration-150 resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="sm:col-span-2 text-[12px] text-red-400 bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)] rounded-[3px] px-4 py-2.5">
                    {error}
                  </p>
                )}

                {/* Submit row */}
                <div className="sm:col-span-2 flex gap-3 flex-wrap items-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 sm:flex-none bg-gradient-to-br from-gold to-gold-light text-black px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase disabled:opacity-70 shadow-[0_8px_28px_rgba(37,99,235,0.25)] transition-opacity duration-150"
                  >
                    {submitting ? 'Submitting…' : 'Reserve My Support Slot →'}
                  </button>
                  <a
                    href="https://wa.me/8790013772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200"
                  >
                    <FaWhatsapp size={18} /> WhatsApp Instead
                  </a>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="text-4xl mb-5">✅</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[32px] text-gold-light mb-3">
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