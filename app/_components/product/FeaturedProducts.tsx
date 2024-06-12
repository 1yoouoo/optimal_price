'use client'

import Link from 'next/link'
import ExtendedCard from './ExtendedCard'
import { getAppleProducts } from '@/utils/mock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import NextButtonIconForFeaturedProducts from '../../Icon/NextButtonIconForFeaturedProducts'
import PrevButtonIconForFeaturedProducts from '../../Icon/PrevButtonIconForFeaturedProducts'
import { Navigation } from 'swiper/modules'

const FeaturedProducts = () => {
  const Items = getAppleProducts()
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="mt-48 h-[560px]">
      <div className="flex justify-between">
        <Link href="/">
          <h2 className="text-3xl font-bold">추천 상품</h2>
        </Link>
      </div>
      <div
        className="absolute left-0 -z-10 max-h-[450px] min-h-[300px] w-screen -translate-y-36"
        style={{
          background:
            'linear-gradient(90deg, rgb(250,112,112) 31%, rgba(255,32,78,1) 73%)',
        }}
      />

      <div className="relative">
        <div className="absolute left-60 top-10 w-screen">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={'auto'}
            loop={true}
            style={{ padding: '10px' }}
            navigation={{
              prevEl,
              nextEl,
            }}
          >
            {Items.map((item) => (
              <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                <ExtendedCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <NextButtonIconForFeaturedProducts setNextEl={setNextEl} />
          <PrevButtonIconForFeaturedProducts setPrevEl={setPrevEl} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
