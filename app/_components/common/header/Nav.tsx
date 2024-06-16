'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavProps {
  href: string
  children: React.ReactNode
  dropdown?: { href: string; label: string }[]
}

const Nav = ({ href, children, dropdown }: NavProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(true)

  const handleDropdownClick = () => {
    setDropdownVisible(false)
    setTimeout(() => setDropdownVisible(true), 10)
  }

  return (
    <>
      {!dropdown && (
        <Link
          href={href}
          className="text-m py-1 font-semibold transition-colors duration-200 hover:text-[var(--primary-color)]"
        >
          {children}
        </Link>
      )}

      {dropdown && (
        <div className="group relative">
          <span className="text-m cursor-default py-1 font-semibold transition-colors duration-200 hover:text-[var(--primary-color)]">
            {children}
          </span>
          {isDropdownVisible && (
            <div
              id="hs-dropdown-hover-event"
              className="invisible absolute left-0 z-20 mt-2 min-w-[200px] translate-y-4 transform flex-col rounded-lg bg-white py-4 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            >
              {dropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleDropdownClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Nav
