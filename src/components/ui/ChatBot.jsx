'use client'

import { FaWhatsapp } from 'react-icons/fa6'

export default function ChatBot() {
  const whatsappNumber = '918790013772'
  const whatsappMessage =
    "Hello, I'm reaching out from your website. Could you share details about your services and how you can help?"

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-[995] w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-elevated hover:scale-110 hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-all duration-300 group"
    >
      <FaWhatsapp size={28} className="group-hover:animate-bounce" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-20 pointer-events-none" />
    </a>
  )
}