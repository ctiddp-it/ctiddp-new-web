'use client';

import { FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function HomeContactForm() {
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
        <form className="space-y-3.5">
          {/* Name */}
          <div className="relative">
            <FiUser
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base"
              style={{ color: '#003DA5' }}
            />
            <input
              type="text"
              placeholder="Your Name"
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

          {/* Phone */}
          <div className="relative">
            <FiPhone
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base"
              style={{ color: '#003DA5' }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
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

          {/* Email */}
          <div className="relative">
            <FiMail
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base"
              style={{ color: '#003DA5' }}
            />
            <input
              type="email"
              placeholder="Email Address"
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

          {/* Message */}
          <div className="relative">
            <FiMessageSquare
              className="absolute left-3.5 top-4 text-base"
              style={{ color: '#003DA5' }}
            />
            <textarea
              rows={3}
              placeholder="Tell us about your requirements..."
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

          {/* CTA */}
          <button
            type="submit"
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
            "
            style={{
              backgroundColor: '#003DA5',
            }}
          >
            Get Quote in 2hrs
          </button>
        </form>
      </div>
    </div>
  );
}