'use client'

import Link from 'next/link'
import CompactCard from './CompactCard'
import { getAppleProducts } from '@/utils/mock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useState } from 'react'
import NextButtonIconForBannner from '@/app/Icon/NextButtonIconForBanner'
import PrevButtonIconForBannner from '@/app/Icon/PrevButtonIconForBannner'
import SwiperNavigation from '../common/SwiperNavigation'

interface ItemListSwiperProps {
  endpoint: string
  title: string
}

const ItemListSwiper = ({ endpoint, title }: ItemListSwiperProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const items = getAppleProducts()
  const slicedItems = items.slice(0, 10)

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
            position={{ top: -50 }}
          />
        </Swiper>
      </div>
    </div>
  )
}

export default ItemListSwiper
