'use client'

import Category from '@/app/_components/common/Category'
import { categories } from '@/utils/mock'
import { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryListSkeleton from '../skeleton/CategoryListSkeleton'

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
              <CategoryListSkeleton />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}

export default CategoryList
