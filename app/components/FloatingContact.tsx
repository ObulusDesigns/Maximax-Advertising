'use client'

import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="tel:5617200521"
      className="fixed bottom-6 right-6 z-50 bg-maximax-pink text-white p-4 rounded-full shadow-2xl hover:bg-pink-700 transform hover:scale-110 transition-all animate-bounce"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maximax-cyan opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-maximax-cyan"></span>
      </span>
    </a>
  )
}