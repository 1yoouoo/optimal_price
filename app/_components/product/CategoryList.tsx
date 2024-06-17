'use client'

import Category from '@/app/_components/common/Category'
import { categories } from '@/utils/mock'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryListSkeleton from '../skeleton/CategoryListSkeleton'

const CategoryList = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [isSwiperReady, setIsSwiperReady] = useState(false)

  useEffect(() => {
    if (isSwiperReady) {
      setFadeIn(true)
    }
  }, [isSwiperReady])

  return (
    <nav className="relative mx-auto my-10 max-w-[1280px] px-4">
      <ul
        className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
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
            setIsSwiperReady(true)
          }}
        >
          {isSwiperReady &&
            categories.map((category) => (
              <SwiperSlide
                key={category.name}
                style={{
                  width: 'auto',
                }}
              >
                <Category
                  name={category.name}
                  path={category.filePath}
                  routes={category.routes}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </ul>
      {!isSwiperReady && <CategoryListSkeleton />}
    </nav>
  )
}

export default CategoryList
