'use client'

import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa6";

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [activeChat, setActiveChat] = useState('whatsapp') // Change this to 'chatbot' or 'whatsapp' to switch between them

  const whatsappNumber = "918790013772" // Removed space from phone number
  const whatsappMessage = "Hello, I’m reaching out from your website. Could you share details about your services and how you can help?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end gap-3">
      {/* Chat Window */}
      <div className={`w-80 bg-surface border border-[rgba(37,99,235,0.2)] rounded-lg overflow-hidden shadow-[0_20px_60px_var(--shadow-scroll)]${open ? ' block' : ' hidden'}`}>

        {/* Header */}
        <div className="bg-[rgba(37,99,235,0.08)] px-4 py-3.5 border-b border-[rgba(37,99,235,0.15)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2.5 ${activeChat === 'whatsapp'
                ? 'bg-[#25D366] text-[#FFFFFF]'
                : 'bg-[rgba(37,99,235,0.15)]'
                }`}>
                {activeChat === 'chatbot' ? '🤖' : <FaWhatsapp />}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">
                  {activeChat === 'chatbot' ? 'CTIDDP Assistant' : 'WhatsApp Support'}
                </div>
                <div className="text-[10px] text-muted flex items-center gap-[5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-[pulse_2s_ease-in-out_infinite]" />
                  {activeChat === 'chatbot' ? 'Online · <2hr response' : 'Typically replies within minutes'}
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="bg-transparent border-none text-muted cursor-pointer text-sm hover:text-white">✕</button>
          </div>
        </div>

        {/* Chatbot Content */}
        {activeChat === 'chatbot' && (
          <>
            <div className="px-3.5 py-3.5 max-h-[200px] overflow-y-auto flex flex-col gap-2.5">
              <div>
                <div className="bg-[rgba(37,99,235,0.06)] rounded-[3px_12px_12px_3px] px-3.5 py-2.5 text-[12.5px] text-muted leading-[1.5] max-w-[90%]">
                  👋 Hi! I can help with DDP quotes, tracking, duties, and Canton Fair support.
                </div>
              </div>
            </div>
            <div className="px-3.5 py-2 flex flex-wrap gap-1.5">
              <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-pointer transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">
                Get a quote
              </button>
              <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-pointer transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">
                Track shipment
              </button>
              <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-pointer transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">
                Canton Fair?
              </button>
              <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-pointer transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">
                Duty rates
              </button>
            </div>
            <div className="px-3.5 py-2.5 border-t border-[var(--overlay-card-border)] flex gap-2">
              <input
                className="flex-1 bg-[var(--overlay-input)] border border-[var(--overlay-input-border)] rounded-sm py-[9px] px-3 text-white text-xs outline-none"
                placeholder="Type a message…"
              />
              <button className="bg-primary text-white border-none rounded-sm px-3.5 font-bold cursor-pointer text-sm">→</button>
            </div>
          </>
        )}

        {/* WhatsApp Content */}
        {activeChat === 'whatsapp' && (
          <>
            <div className="px-3.5 py-3.5 max-h-[200px] overflow-y-auto flex flex-col gap-2.5">
              <div>
                <div className="bg-[rgba(37,99,235,0.06)] rounded-[3px_12px_12px_3px] px-3.5 py-2.5 text-[12.5px] text-muted leading-[1.5] max-w-[90%] flex items-center gap-2">
                  <FaWhatsapp className="text-[#25D366] text-base" />
                  <span>Connect with us on WhatsApp for instant support!</span>
                </div>
              </div>
              <div>
                <div className="bg-[#25D366] bg-opacity-10 rounded-[12px_3px_12px_12px] px-3.5 py-2.5 text-[12.5px] text-white leading-[1.5] max-w-[90%] ml-auto">
                  Our team is ready to assist you with:
                  <br />• DDP quotes
                  <br />• Shipment tracking
                  <br />• Customs duties
                  <br />• Canton Fair inquiries
                </div>
              </div>
            </div>
            <div className="px-3.5 py-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-[#FFFFFF] border-none rounded-md py-2.5 font-semibold cursor-pointer text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200"
              >
                <span><FaWhatsapp /> </span>
                Open WhatsApp Chat
              </button>
              <p className="text-[10px] text-muted text-center mt-2">
                Click to continue conversation on WhatsApp
              </p>
            </div>
          </>
        )}
      </div>

      {/* WhatsApp Green Icon Button */}
      <button
        className="w-13 h-13 rounded-full bg-[#25D366] text-[#FFFFFF] border-none text-[28px] cursor-pointer flex items-center justify-center shadow-[0_6px_28px_rgba(37,99,235,0.4)] transition-transform duration-200 hover:scale-[1.08]"
        onClick={() => setOpen(o => !o)}
      >
        <FaWhatsapp />
      </button>
    </div>
  )
}