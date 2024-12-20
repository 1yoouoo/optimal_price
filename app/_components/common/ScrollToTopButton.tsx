'use client'

import { useEffect, useState } from 'react'
import QuickUpIcon from '@/public/svg/button/btn_quick_up.svg'
import Image from 'next/image'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 rounded-full p-2 outline-none transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <Image
        src={QuickUpIcon}
        alt="Chevron Right Icon"
        width={60}
        height={60}
        className="cursor-pointer rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </button>
  )
}

export default ScrollToTopButton
