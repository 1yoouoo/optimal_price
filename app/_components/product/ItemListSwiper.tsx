'use client'

import Link from 'next/link'
import CompactCard from './CompactCard'
import { getAppleProducts } from '@/utils/mock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'
import SwiperNavigation from '../common/SwiperNavigation'
import ItemListSwiperSkeleton from '../skeleton/ItemListSwiperSkeleton'

interface ItemListSwiperProps {
  endpoint: string
  title: string
}

const ItemListSwiper = ({ endpoint, title }: ItemListSwiperProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [isSwiperReady, setIsSwiperReady] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const items = getAppleProducts()
  const slicedItems = items.slice(0, 10)

  useEffect(() => {
    if (isSwiperReady) {
      setFadeIn(true)
    }
  }, [isSwiperReady])

  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-between">
        <Link href={endpoint}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </Link>
        <Link href={endpoint}>
          <span className="flex h-10 items-center justify-center text-gray-500 transition-colors duration-200 hover:text-black">
            더 보기
          </span>
        </Link>
      </div>

      <ul
        className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} mt-10`}
      >
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          modules={[Navigation]}
          navigation={{
            prevEl,
            nextEl,
          }}
          onInit={() => {
            setIsSwiperReady(true)
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          className="relative h-full w-full"
        >
          {isSwiperReady &&
            slicedItems.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  width: 'auto',
                }}
              >
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
      </ul>

      {!isSwiperReady && <ItemListSwiperSkeleton />}
    </div>
  )
}

export default ItemListSwiper
