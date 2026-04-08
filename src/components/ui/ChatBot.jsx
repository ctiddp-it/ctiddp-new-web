'use client'

import { useState } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end gap-3">
      <div className={`w-80 bg-surface border border-[rgba(37,99,235,0.2)] rounded-lg overflow-hidden shadow-[0_20px_60px_var(--shadow-scroll)]${open ? ' block' : ' hidden'}`}>
        <div className="bg-[rgba(37,99,235,0.08)] px-4 py-3.5 flex justify-between items-center border-b border-[rgba(37,99,235,0.15)]">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[rgba(37,99,235,0.15)] flex items-center justify-center text-sm mr-2.5">🤖</div>
            <div>
              <div className="text-[13px] font-semibold text-white">CTIDDP Assistant</div>
              <div className="text-[10px] text-muted flex items-center gap-[5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-[pulse_2s_ease-in-out_infinite]" />
                Online · &lt;2hr response
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="bg-transparent border-none text-muted cursor-none text-sm hover:text-white">✕</button>
        </div>
        <div className="px-3.5 py-3.5 max-h-[200px] overflow-y-auto flex flex-col gap-2.5">
          <div>
            <div className="bg-[rgba(37,99,235,0.06)] rounded-[3px_12px_12px_3px] px-3.5 py-2.5 text-[12.5px] text-muted leading-[1.5] max-w-[90%]">👋 Hi! I can help with DDP quotes, tracking, duties, and Canton Fair support.</div>
          </div>
        </div>
        <div className="px-3.5 py-2 flex flex-wrap gap-1.5">
          <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-none font-[var(--font-outfit),'Outfit',sans-serif] transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">Get a quote</button>
          <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-none font-[var(--font-outfit),'Outfit',sans-serif] transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">Track shipment</button>
          <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-none font-[var(--font-outfit),'Outfit',sans-serif] transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">Canton Fair?</button>
          <button className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-primary-light text-[11px] py-[5px] px-[11px] rounded-full cursor-none font-[var(--font-outfit),'Outfit',sans-serif] transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]">Duty rates</button>
        </div>
        <div className="px-3.5 py-2.5 border-t border-[var(--overlay-card-border)] flex gap-2">
          <input className="flex-1 bg-[var(--overlay-input)] border border-[var(--overlay-input-border)] rounded-sm py-[9px] px-3 text-white text-xs font-[var(--font-outfit),'Outfit',sans-serif] outline-none" placeholder="Type a message…" />
          <button className="bg-primary text-white border-none rounded-sm px-3.5 font-bold cursor-none text-sm">→</button>
        </div>
      </div>
      <button className="w-13 h-13 rounded-full bg-linear-to-br from-primary to-primary-light border-none text-[22px] cursor-none flex items-center justify-center shadow-[0_6px_28px_rgba(37,99,235,0.4)] transition-transform duration-200 hover:scale-[1.08]" onClick={() => setOpen(o => !o)}>💬</button>
    </div>
  )
}
