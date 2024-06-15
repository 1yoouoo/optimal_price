'use client'

import { categories } from '@/app/(page)/(main)/page'
import Category from '@/app/_components/common/Category'
import { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CategoryList = () => {
  const [isReady, setIsReady] = useState(false)

  return (
    <nav className="relative mx-auto my-10 w-[1280px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        className="relative w-full"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        onInit={() => {
          setIsReady(true)
        }}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.name}
            style={{
              width: 'auto',
            }}
          >
            {isReady ? (
              <Category
                name={category.name}
                path={category.filePath}
                routes={category.routes}
              />
            ) : (
              <div className="mb-7 mr-[30px] h-24 w-24 animate-pulse rounded-3xl bg-slate-200" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}

export default CategoryList
