'use client'

import { useEffect, useState } from 'react'
import { HiOutlineArrowUp } from 'react-icons/hi2'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-5 z-[990] w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-button transition-all duration-300 hover:bg-primary-dark hover:scale-110 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <HiOutlineArrowUp size={18} />
    </button>
  )
}