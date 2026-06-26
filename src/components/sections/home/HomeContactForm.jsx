'use client';

import { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { heroContactSchema } from '@/lib/forms/schemas';
import { submitForm } from '@/lib/forms/submitForm';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  const defaultValues = useMemo(
    () => ({
      name: '',
      phone: '',
      email: '',
      message: '',
    }),
    []
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(heroContactSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    setSubmitError('');
    try {
      const payload = {
        name: values.name,
        phone: values.phone,
        email: values.email || undefined,
        message: values.message || undefined,
      };

      const result = await submitForm({
        baseUrl: API_BASE,
        path: '/hero-contact',
        payload,
      });

      if (!result.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      reset(defaultValues);
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="w-full">
        <div
          className="
            backdrop-blur-md
            bg-white/[0.51]
            border border-white/20
            shadow-xl
            rounded-2xl
            p-8 sm:p-10
            text-center
          "
        >
          <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
          <h3
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ color: '#0B2A6B' }}
          >
            Thank You!
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Our team will get back to you within 2 hours on WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="
              text-[13px] font-semibold text-[#003DA5]
              hover:underline cursor-pointer
            "
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="
          backdrop-blur-md
          bg-white/[0.51]
          border border-white/20
          shadow-xl
          rounded-2xl
          p-5 sm:p-6 xl:p-7
        "
      >
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="text-xl sm:text-3xl font-bold mb-1.5"
            style={{ color: '#0B2A6B' }}
          >
            Get a Free <br />
            Shipping Quote
          </h2>

          <p className="text-slate-800 text-sm leading-relaxed">
            Send us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <div>
            <div className="relative">
              <FiUser
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base"
                style={{ color: '#003DA5' }}
              />

              <input
                type="text"
                placeholder="Your Name"
                {...register('name')}
                className="
        w-full
        pl-10
        pr-3.5
        py-3 md:py-3.5
        rounded-xl
        bg-white/95
        border border-slate-200/50
        text-slate-800 text-sm
        placeholder:text-slate-400
        outline-none
        focus:ring-2 focus:ring-[#003DA5]/30
        focus:border-[#003DA5]/40
        transition-all
      "
              />
            </div>

            {errors?.name && (
              <p className="text-[11px] text-red-500 mt-1 pl-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="relative flex items-center">
              <FiPhone
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base z-10"
                style={{ color: '#003DA5' }}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Phone Number *"
                    className="hero-phone-input-home"
                  />
                )}
              />
            </div>
            {errors?.phone && (
              <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <div className="relative">
              <FiMail
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base"
                style={{ color: '#003DA5' }}
              />

              <input
                type="email"
                placeholder="Email Address"
                {...register('email')}
                className="
        w-full
        pl-10
        pr-3.5
        py-3 md:py-3.5
        rounded-xl
        bg-white/95
        border border-slate-200/50
        text-slate-800 text-sm
        placeholder:text-slate-400
        outline-none
        focus:ring-2 focus:ring-[#003DA5]/30
        focus:border-[#003DA5]/40
        transition-all
      "
              />
            </div>

            {errors?.email && (
              <p className="text-[11px] text-red-500 mt-1 pl-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="relative">
              <FiMessageSquare
                className="absolute left-3.5 top-4 text-base"
                style={{ color: '#003DA5' }}
              />

              <textarea
                rows={3}
                placeholder="Tell us about your requirements..."
                {...register('message')}
                className="
        w-full
        pl-10
        pr-3.5
        py-3 md:py-3.5
        rounded-xl
        bg-white/95
        border border-slate-200/50
        text-slate-800 text-sm
        placeholder:text-slate-400
        outline-none
        focus:ring-2 focus:ring-[#003DA5]/30
        focus:border-[#003DA5]/40
        resize-none
        transition-all
      "
              />
            </div>

            {errors?.message && (
              <p className="text-[11px] text-red-500 mt-1 pl-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Error */}
          {submitError && (
            <p className="text-[12px] text-red-500 text-center">{submitError}</p>
          )}

          {/* CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              py-3 md:py-3.5
              rounded-xl
              font-semibold
              text-white text-sm
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              cursor-pointer
              disabled:opacity-70
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
            style={{
              backgroundColor: '#003DA5',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Get Quote in 2hrs'}
          </button>

          <p className="text-[10px] text-slate-800 text-center leading-relaxed">
            We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </div>
    </div>
  );
}