'use client'

import Link from 'next/link'
import CompactCard from './CompactCard'
import { getAppleProducts } from '@/utils/mock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useState } from 'react'
import SwiperNavigation from '../common/SwiperNavigation'

interface ItemListSwiperProps {
  endpoint: string
  title: string
}

const ItemListSwiper = ({ endpoint, title }: ItemListSwiperProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const items = getAppleProducts()
  const slicedItems = items.slice(0, 10)

  console.log(isBeginning, isEnd)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <Link href={endpoint}>
          <h2 className="text-3xl font-bold">{title}</h2>
        </Link>
        <Link href={endpoint}>
          <span className="flex h-10 items-center justify-center">더 보기</span>
        </Link>
      </div>

      <div className="">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={{
            prevEl,
            nextEl,
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          className="relative h-full w-full"
        >
          {slicedItems.map((item) => (
            <SwiperSlide key={item.id}>
              <CompactCard item={item} />
            </SwiperSlide>
          ))}

          <SwiperNavigation
            setPrevEl={setPrevEl}
            setNextEl={setNextEl}
            isBeginning={isBeginning}
            isEnd={isEnd}
            position={{ top: -50 }}
          />
        </Swiper>
      </div>
    </div>
  )
}

export default ItemListSwiper
