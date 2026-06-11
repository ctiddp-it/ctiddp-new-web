'use client'

import { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FaShip,
  FaTruck,
  FaShieldHalved,
  FaFileInvoice,
  FaWhatsapp,
  FaIndianRupeeSign,
} from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import { quoteSchema } from '@/lib/forms/schemas'
import { submitForm } from '@/lib/forms/submitForm'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import CTABanner from '@/components/ui/CTABanner'

const INPUT_CLASS =
  'w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-gray-800 text-[13px] outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all'
const LABEL_CLASS = 'text-[11px] tracking-[1px] uppercase text-primary font-600 mb-1.5 block'

export default function GetQuoteClient() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const API_BASE = process.env.NEXT_PUBLIC_API_URL

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
      supplierDetails: { supplierName: '', supplierContactDetails: '' },
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
    control,
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
    <main>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="DDP QUOTE REQUEST"
        subtitle="Fill in the form below. Receive a full DDP quote with BCD + IGST + SWS pre-calculation within 2 hours."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        titleNode={
          <>
            Get Your Complete
            <br />
            <span className="text-primary-light">DDP Quote</span>
          </>
        }
      />

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ── LEFT: What You Get ── */}
            <div>
              <SectionBadge>WHAT YOU RECEIVE</SectionBadge>
              <h2 className="section-title">
                A Quote That <span className="highlight">Covers Everything</span>
              </h2>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7">
                No vague estimates. A single number that includes every cost from factory to your door.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: <FaTruck />, title: 'Origin Freight', desc: 'From supplier to China port or airport, including domestic trucking.' },
                  { icon: <FaShip />, title: 'Sea / Air Freight', desc: 'LCL or FCL ocean freight, or air freight — whichever mode you need.' },
                  { icon: <FaFileInvoice />, title: 'Customs Clearance (Both Ends)', desc: 'China export + India import documentation, filing, and handling.' },
                  { icon: <FaIndianRupeeSign />, title: 'All India Duties Pre-Paid', desc: 'BCD + SWS + IGST — calculated, signed off, and included.' },
                  { icon: <FaTruck />, title: 'Last-Mile Delivery', desc: 'From Indian port to your delivery address anywhere in India.' },
                  { icon: <FaShieldHalved />, title: 'Cargo Insurance', desc: 'All-risk marine cargo insurance included end-to-end.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start group">
                    <div className="icon-container icon-container-sm shrink-0 group-hover:bg-primary-100">
                      <span className="text-[14px]">{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-600 text-gray-900 mb-0.5">{item.title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee Box */}
              <div className="mt-7 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="text-[13px] text-green-700 flex gap-2 items-start">
                  <span className="shrink-0 text-green-600 mt-0.5">✓</span>
                  <span>Our Operations Manager personally reviews and signs off every duty calculation before quoting. You will never receive a vague or incomplete number.</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            {!submitted ? (
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <FaFileInvoice className="text-primary w-5 h-5" />
                  <h3 className="text-[18px] font-600 text-gray-900">Tell Us About Your Shipment</h3>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div>
                    <label className={LABEL_CLASS}>Your Name *</label>
                    <input {...register('name')} className={INPUT_CLASS} placeholder="Full name" />
                    {errors?.name && <p className="mt-1 text-[11px] text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Company Name</label>
                    <input {...register('companyName')} className={INPUT_CLASS} placeholder="Your company" />
                    {errors?.companyName && <p className="mt-1 text-[11px] text-red-500">{errors.companyName.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Contact Number *</label>
                    <Controller
                      name="contactNumber"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          countryCallingCodeEditable={false}
                          value={field.value}
                          onChange={field.onChange}
                          className="phone-input"
                          placeholder="Enter phone number"
                        />
                      )}
                    />
                    {errors?.contactNumber && <p className="mt-1 text-[11px] text-red-500">{errors.contactNumber.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Email</label>
                    <input type="email" {...register('email')} className={INPUT_CLASS} placeholder="you@company.com" />
                    {errors?.email && <p className="mt-1 text-[11px] text-red-500">{errors.email.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS}>Product Name / Cargo Category *</label>
                    <input {...register('productCategory')} className={INPUT_CLASS} placeholder="e.g. LED lighting, textiles, machine parts…" />
                    {errors?.productCategory && <p className="mt-1 text-[11px] text-red-500">{errors.productCategory.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Service Type</label>
                    <select {...register('serviceType')} className={INPUT_CLASS}>
                      <option value="">Select (optional)</option>
                      <option value="sourcing_shipping">Sourcing + Shipping</option>
                      <option value="only_shipping">Only Shipping</option>
                    </select>
                    {errors?.serviceType && <p className="mt-1 text-[11px] text-red-500">{errors.serviceType.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Delivery Location</label>
                    <input {...register('deliveryLocation')} className={INPUT_CLASS} placeholder="City / State / Pincode" />
                    {errors?.deliveryLocation && <p className="mt-1 text-[11px] text-red-500">{errors.deliveryLocation.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Estimated Weight (KG)</label>
                    <input type="number" {...register('estimatedWeightKg')} className={INPUT_CLASS} placeholder="e.g. 500" />
                    {errors?.estimatedWeightKg && <p className="mt-1 text-[11px] text-red-500">{errors.estimatedWeightKg.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Estimated Volume (CBM)</label>
                    <input type="number" {...register('estimatedVolumeCBM')} className={INPUT_CLASS} placeholder="e.g. 5" />
                    {errors?.estimatedVolumeCBM && <p className="mt-1 text-[11px] text-red-500">{errors.estimatedVolumeCBM.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Product HS Code</label>
                    <input {...register('hsCode')} className={INPUT_CLASS} placeholder="Optional HS code" />
                    {errors?.hsCode && <p className="mt-1 text-[11px] text-red-500">{errors.hsCode.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Invoice Value</label>
                    <input type="number" {...register('invoiceValue')} className={INPUT_CLASS} placeholder="Optional invoice value" />
                    {errors?.invoiceValue && <p className="mt-1 text-[11px] text-red-500">{errors.invoiceValue.message}</p>}
                  </div>

                  {serviceType === 'sourcing_shipping' && (
                    <div className="sm:col-span-2">
                      <label className={LABEL_CLASS}>Product Expected Budget</label>
                      <input type="number" {...register('productBudget')} className={INPUT_CLASS} placeholder="Expected budget" />
                      {errors?.productBudget && <p className="mt-1 text-[11px] text-red-500">{errors.productBudget.message}</p>}
                    </div>
                  )}

                  {serviceType === 'only_shipping' && (
                    <>
                      <div>
                        <label className={LABEL_CLASS}>Supplier Name</label>
                        <input {...register('supplierDetails.supplierName')} className={INPUT_CLASS} placeholder="Supplier name" />
                        {errors?.supplierDetails?.supplierName && <p className="mt-1 text-[11px] text-red-500">{errors.supplierDetails.supplierName.message}</p>}
                      </div>
                      <div>
                        <label className={LABEL_CLASS}>Supplier Contact Details</label>
                        <input {...register('supplierDetails.supplierContactDetails')} className={INPUT_CLASS} placeholder="Supplier phone/email" />
                        {errors?.supplierDetails?.supplierContactDetails && <p className="mt-1 text-[11px] text-red-500">{errors.supplierDetails.supplierContactDetails.message}</p>}
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label className={LABEL_CLASS}>Additional Notes</label>
                    <textarea {...register('additionalNotes')} className={`${INPUT_CLASS} resize-y`} placeholder="HS code (if known), special handling, urgent timeline…" rows={3} />
                    {errors?.additionalNotes && <p className="mt-1 text-[11px] text-red-500">{errors.additionalNotes.message}</p>}
                  </div>

                  {error && <p className="sm:col-span-2 text-[12px] text-red-500">{error}</p>}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full justify-center mt-1 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request →'}
                    </button>
                  </div>
                </form>

                <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                  We respond within 2 hours on WhatsApp · Mon–Sat · No spam, no obligation
                </p>
              </div>
            ) : (
              <div className="card p-8 sm:p-12 text-center border-green-200 bg-green-50">
                <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-[24px] font-600 text-gray-900 mb-3">Quote Request Received!</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                  Our Team will review your details and send you a complete DDP quote with BCD+IGST breakdown within 2 hours on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918790013772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp inline-flex"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Message Us on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ VIDEO ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-[1000px] mx-auto text-center px-5">
          <SectionBadge>HOW TO GET A QUOTE</SectionBadge>
          <h2 className="section-title">
            How to Send Your <span className="highlight">Quote Request</span>
          </h2>
          <p className="section-subtitle centered mb-8">
            Watch this quick 60-second walkthrough to understand how to submit your shipment details.
          </p>
          <div className="relative w-full overflow-hidden aspect-video rounded-2xl shadow-elevated">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/tF9U_erUUb4"
              title="Send DDP Quote Request in Under 60 Seconds"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-[12px] text-gray-400 mt-4">
            Takes less than 60 seconds · Response within 2 hours
          </p>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Have a Question <span class='text-primary-light'>Before You Quote?</span>"
        subtitle="WhatsApp us directly. Our team responds in under 2 hours, Mon–Sat."
        buttons={[
          { label: 'WHATSAPP US NOW', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
          { label: 'READ OUR FAQ', href: '/contact', variant: 'secondary' },
        ]}
      />
    </main>
  )
}