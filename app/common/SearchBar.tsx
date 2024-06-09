'use client'

import SearchIcon from '@/app/assets/search.svg'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className="relative flex h-11 w-80 items-center rounded-full bg-[#f5f5f5] px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="placeholder:text-s decoration-none mx-3 border-none bg-transparent outline-none placeholder:text-gray-500"
      />
      <Image
        className="absolute right-4"
        src={SearchIcon}
        alt="Search Icon"
        width={20}
        height={20}
      />
    </div>
  )
}

export default SearchBar
