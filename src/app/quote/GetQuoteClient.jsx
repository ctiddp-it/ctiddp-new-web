'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FaShip,
  FaPlane,
  FaTruck,
  FaShieldHalved,
  FaBoxOpen,
  FaFileInvoice,
  FaWhatsapp,
  FaIndianRupeeSign
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'
import { quoteSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'

export default function GetQuoteClient() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  const defaultValues = useMemo(
    () => ({
      name: '',
      companyName: '',
      contactNumber: '',
      email: '',
      productCategory: '',
      hsCode: '',
      serviceType: undefined,
      productBudget: '',
      supplierDetails: {
        supplierName: '',
        supplierContactDetails: '',
      },
      deliveryLocation: '',
      estimatedWeightKg: '',
      estimatedVolumeCBM: '',
      invoiceValue: '',
      additionalNotes: '',
    }),
    []
  )

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const serviceType = watch('serviceType')

  const onSubmit = async (values) => {
    setError('')

    const supplierName = values?.supplierDetails?.supplierName
    const supplierContactDetails = values?.supplierDetails?.supplierContactDetails
    const supplierDetails =
      supplierName || supplierContactDetails
        ? { supplierName, supplierContactDetails }
        : undefined

    const payload = {
      name: values.name,
      companyName: values.companyName,
      contactNumber: values.contactNumber,
      email: values.email,
      productCategory: values.productCategory,
      hsCode: values.hsCode,
      serviceType: values.serviceType,
      productBudget: values.productBudget,
      supplierDetails,
      deliveryLocation: values.deliveryLocation,
      estimatedWeightKg: values.estimatedWeightKg,
      estimatedVolumeCBM: values.estimatedVolumeCBM,
      invoiceValue: values.invoiceValue,
      additionalNotes: values.additionalNotes,
    }

    const result = await submitForm({
      baseUrl: API_BASE,
      path: '/crm/leads',
      payload,
    })

    if (!result.ok) {
      setError(result.message || 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
    reset(defaultValues)
  }

  return (
    <>
      <ScrollRevealInit />
      <main className="bg-black text-white font-['Outfit',sans-serif]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-[rgba(138,138,154,0.5)] whitespace-nowrap">
            <Link href="/" className="text-[rgba(138,138,154,0.5)] no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-blue-light whitespace-nowrap">Get a Quote</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              DDP Quote Request
            </div>
            <h1 className="font-heading text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
              Get Your Full<br />
              <em className="italic text-blue-light">
                DDP Quote
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto">
              Fill in the form. Receive a full DDP quote with BCD + IGST + SWS pre-calculation within 2 hours.
            </p>
          </div>
        </section>

        {/* Video Section */}
        {/* Video Section */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-10 sm:py-14 bg-black">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-light leading-[1.1] mb-3">
              How to Send Your<br />
              <em className="italic text-blue-light">Quote Request</em>
            </h2>

            <p className="text-sm text-muted max-w-[650px] mx-auto mb-8">
              Watch this quick 60-second walkthrough to understand how to submit your
              shipment details and receive a complete China-to-India DDP quote from our team.
            </p>

            <div className="relative w-full overflow-hidden aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/tF9U_erUUb4"
                title="Send DDP Quote Request in Under 60 Seconds"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-[11px] text-muted/60 mt-4">
              Takes less than 60 seconds · Response within 2 hours
            </p>

          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column - What You Get */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                What You Receive
              </span>
              <h2 className="font-heading text-[clamp(24px,3.2vw,40px)] font-light leading-[1.1] mb-3">
                A Quote That<br />
                <em className="italic text-blue-light">Covers Everything</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5 mb-7">
                No vague estimates. A single number that includes every cost from factory to your door.
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-3.5">
                {[
                  { icon: <FaTruck />, title: 'Origin Freight', desc: 'From supplier to China port or airport, including domestic trucking.' },
                  { icon: <FaShip />, title: 'Sea / Air Freight', desc: 'LCL or FCL ocean freight, or air freight - whichever mode you need.' },
                  { icon: <FaFileInvoice />, title: 'Customs Clearance (Both Ends)', desc: 'China export + India import documentation, filing, and handling.' },
                  { icon: <FaIndianRupeeSign />, title: 'All India Duties Pre-Paid', desc: 'BCD + SWS + IGST - calculated, signed off, and included in the quote.' },
                  { icon: <FaTruck />, title: 'Last-Mile Delivery', desc: 'From Indian port or warehouse to your delivery address anywhere in India.' },
                  { icon: <FaShieldHalved />, title: 'Cargo Insurance', desc: 'All-risk marine cargo insurance included end-to-end.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.3)] group-hover:bg-[rgba(37,99,235,0.2)] transition-all">
                      <span className="text-blue-light w-4 h-4 flex items-center justify-center">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white mb-0.5">{item.title}</div>
                      <div className="text-xs text-muted leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee Box */}
              <div className="mt-7 p-3.5 sm:p-4 bg-[rgba(74,222,128,0.07)] border border-[rgba(74,222,128,0.2)] rounded-[3px]">
                <div className="text-xs text-green-400 flex gap-2 items-start">
                  <span className="shrink-0 text-sm">✓</span>
                  <span>Our Operations Manager personally reviews and signs off every duty calculation before quoting. You will never receive a vague or incomplete number.</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            {!submitted ? (
              <div className="bg-[rgba(255,255,255,0.02)] border border-border rounded-[4px] p-5 sm:p-7">
                <div className="font-heading text-xl font-semibold text-white mb-5">
                  <div className="flex items-center gap-2">
                    <FaFileInvoice className="text-blue-light w-5 h-5" />
                    <span>Tell Us About Your Shipment</span>
                  </div>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Your Name *</label>
                    <input
                      name="name"
                      {...register('name')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="Full name"
                    />
                    {errors?.name ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.name.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Company Name</label>
                    <input
                      name="companyName"
                      {...register('companyName')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="Your company"
                    />
                    {errors?.companyName ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.companyName.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Contact Number *</label>
                    <input
                      name="contactNumber"
                      {...register('contactNumber')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors?.contactNumber ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.contactNumber.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      {...register('email')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="you@company.com"
                    />
                    {errors?.email ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.email.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Product Name / Cargo Category *</label>
                    <input
                      name="productCategory"
                      {...register('productCategory')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="e.g. LED lighting, textiles, machine parts…"
                    />
                    {errors?.productCategory ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.productCategory.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Service Type</label>
                    <select
                      name="serviceType"
                      {...register('serviceType')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none focus:border-blue transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select (optional)</option>
                      <option value="sourcing_shipping" className="bg-[#0a0a0a]">Sourcing + Shipping</option>
                      <option value="only_shipping" className="bg-[#0a0a0a]">Only Shipping</option>
                    </select>
                    {errors?.serviceType ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.serviceType.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Delivery Location</label>
                    <input
                      name="deliveryLocation"
                      {...register('deliveryLocation')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="City / State / Pincode"
                    />
                    {errors?.deliveryLocation ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.deliveryLocation.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Estimated Weight (KG)</label>
                    <input
                      type="number"
                      name="estimatedWeightKg"
                      {...register('estimatedWeightKg')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="e.g. 500"
                    />
                    {errors?.estimatedWeightKg ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.estimatedWeightKg.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Estimated Volume (CBM)</label>
                    <input
                      type="number"
                      name="estimatedVolumeCBM"
                      {...register('estimatedVolumeCBM')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="e.g. 5"
                    />
                    {errors?.estimatedVolumeCBM ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.estimatedVolumeCBM.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Product HS Code</label>
                    <input
                      name="hsCode"
                      {...register('hsCode')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="Optional HS code"
                    />
                    {errors?.hsCode ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.hsCode.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Invoice Value</label>
                    <input
                      type="number"
                      name="invoiceValue"
                      {...register('invoiceValue')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                      placeholder="Optional invoice value"
                    />
                    {errors?.invoiceValue ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.invoiceValue.message}</p>
                    ) : null}
                  </div>
                  {serviceType === 'sourcing_shipping' && (
                    <div className="sm:col-span-2">
                      <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Product Expected Budget</label>
                      <input
                        type="number"
                        name="productBudget"
                        {...register('productBudget')}
                        className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                        placeholder="Expected budget"
                      />
                      {errors?.productBudget ? (
                        <p className="mt-1 text-[11px] text-red-400">{errors.productBudget.message}</p>
                      ) : null}
                    </div>
                  )}
                  {serviceType === 'only_shipping' && (
                    <>
                      <div className="sm:col-span-1">
                        <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Supplier Name</label>
                        <input
                          {...register('supplierDetails.supplierName')}
                          className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                          placeholder="Supplier name"
                        />
                        {errors?.supplierDetails?.supplierName ? (
                          <p className="mt-1 text-[11px] text-red-400">{errors.supplierDetails.supplierName.message}</p>
                        ) : null}
                      </div>
                      <div className="sm:col-span-1">
                        <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Supplier Contact Details</label>
                        <input
                          {...register('supplierDetails.supplierContactDetails')}
                          className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors"
                          placeholder="Supplier phone/email"
                        />
                        {errors?.supplierDetails?.supplierContactDetails ? (
                          <p className="mt-1 text-[11px] text-red-400">{errors.supplierDetails.supplierContactDetails.message}</p>
                        ) : null}
                      </div>
                    </>
                  )}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] tracking-[1px] uppercase text-blue-light mb-1.5 block">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      {...register('additionalNotes')}
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(37,99,235,0.2)] rounded-[3px] py-2.5 px-3.5 text-white text-xs outline-none placeholder:text-muted focus:border-blue transition-colors resize-y"
                      placeholder="HS code (if known), special handling, urgent timeline…"
                      rows={3}
                    />
                    {errors?.additionalNotes ? (
                      <p className="mt-1 text-[11px] text-red-400">{errors.additionalNotes.message}</p>
                    ) : null}
                  </div>
                  {error ? <p className="sm:col-span-2 text-xs text-red-400">{error}</p> : null}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-1 w-full bg-linear-to-br from-blue-600 to-cyan-500 text-[#FFFFFF] py-3 rounded-[3px] text-xs font-bold tracking-[0.8px] uppercase transition-all hover:scale-[1.02] cursor-none disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request →'}
                    </button>
                  </div>
                </form>

                <p className="text-[10px] text-muted/60 text-center mt-3.5 leading-relaxed">
                  We respond within 2 hours on WhatsApp · Mon–Sat · No spam, no obligation
                </p>
              </div>
            ) : (
              <div className="bg-[rgba(74,222,128,0.07)] border border-[rgba(74,222,128,0.25)] rounded-[4px] p-8 sm:p-12 text-center">
                <FaCheckCircle className="text-green-400 w-12 h-12 mx-auto mb-4" />
                <div className="font-heading text-2xl sm:text-[28px] font-semibold mb-3">Quote Request Received!</div>
                <p className="text-sm leading-relaxed mb-6">
                  Our Team will review your details and send you a complete DDP quote with BCD+IGST breakdown within 2 hours on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918790013772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green-400 py-3 px-8 rounded-[3px] text-[13px] font-medium transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Message Us on WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="relative text-center px-4 sm:px-6 lg:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">
            Have a Question<br />
            <em className="italic text-blue-light">Before You Quote?</em>
          </h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">
            WhatsApp us directly. Our team responds in under 2 hours, Mon–Sat.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://wa.me/918790013772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green-400 px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[rgba(37,99,235,0.4)] text-blue-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all hover:bg-[rgba(37,99,235,0.08)] cursor-none"
            >
              Read Our FAQ
            </Link>
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