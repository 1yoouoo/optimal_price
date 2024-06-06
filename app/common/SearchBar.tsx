'use client'

import SearchIcon from '@/app/assets/searchIcon.svg'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className="w-80 h-11 relative flex items-center rounded-full px-4 py-2 bg-[#f5f5f5]">
      <input type="text" placeholder='Search...' className='placeholder:text-s bg-transparent placeholder:text-gray-500 decoration-none outline-none mx-3'/>
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
