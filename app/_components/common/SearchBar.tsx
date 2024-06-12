'use client'

import SearchIcon from '@/public/svg/search.svg'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    //TODO: API 채우기
    if (value) {
      setSuggestions([
        'Suggestion 1',
        'Suggestion 2',
        'Suggestion 3',
        'Suggestion 4',
        'Suggestion 5',
        'Suggestion 6',
        'Suggestion 7',
        'Suggestion 8',
        'Suggestion 9',
        'Suggestion 10',
      ])
    } else {
      setSuggestions([])
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current !== event.target
    ) {
      setSuggestions([])
    }
  }

  const handleInputFocus = () => {
    if (query) {
      // API 호출 다시해서 setState에 담기
      setSuggestions([
        'Suggestion 1',
        'Suggestion 2',
        'Suggestion 3',
        'Suggestion 4',
        'Suggestion 5',
        'Suggestion 6',
        'Suggestion 7',
        'Suggestion 8',
        'Suggestion 9',
        'Suggestion 10',
      ])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative flex h-16 w-[600px] items-center rounded-full border-2 border-[var(--primary-color)] px-4 py-2"
    >
      <span className="absolute left-2 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[var(--primary-color)]">
        <Image
          className=""
          src={SearchIcon}
          alt="Search Icon"
          width={20}
          height={20}
        />
      </span>
      <input
        ref={inputRef}
        type="text"
        placeholder="상품을 검색해 보세요"
        value={query}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="decoration-none mx-3 ml-14 inline-block h-full w-full border-none bg-transparent text-lg font-bold outline-none placeholder:text-lg placeholder:font-bold placeholder:text-[#D8D9CF]"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 top-[70px] z-50 max-h-[380px] min-h-[240px] w-full overflow-auto rounded-2xl border border-gray-300 bg-white shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer truncate px-6 py-2 hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
