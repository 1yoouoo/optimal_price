'use client'

import SearchBar from './SearchBar'
import Logo from './Logo'
import Nav from './Nav'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = debounce(() => {
    if (window.scrollY > 80) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }, 10)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      {isSticky ? (
        <>
          <header
            className={`h-26 sticky top-0 z-50 flex w-full flex-col items-center justify-between border-b border-gray-300 bg-white px-20 py-8`}
          >
            <div className="flex w-full items-center justify-between">
              <nav className="flex items-center justify-between gap-12">
                <Nav href="/brand-story">브랜드 스토리</Nav>
                <Nav href="/optimal-price">역대 최적가</Nav>
                <Nav href="/best">베스트</Nav>
                <Nav href="/new">신상품</Nav>
                <Nav href="/category">카테고리</Nav>
              </nav>

              <div className="flex items-center justify-between">
                <SearchBar />
              </div>
            </div>
          </header>
          <div className="h-24" />
        </>
      ) : (
        <header
          className={`z-50 mb-2 flex h-48 w-full flex-col items-center justify-between border-b border-gray-300 px-20 py-8`}
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between">
            <nav className="flex items-center justify-between gap-12">
              <Nav href="/brand-story">브랜드 스토리</Nav>
              <Nav href="/optimal-price">역대 최적가</Nav>
              <Nav href="/best">베스트</Nav>
              <Nav href="/new">신상품</Nav>
              <Nav href="/category">카테고리</Nav>
            </nav>

            <div className="flex items-center justify-between">
              <SearchBar />
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
