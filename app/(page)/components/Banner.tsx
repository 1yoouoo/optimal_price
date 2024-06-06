'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

const Banner = () => {
  const images = Array.from(
    { length: 8 },
    (_, i) => `https://cdn.optimalprice.kr/cat0${i + 1}.webp`
  )

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1280}
              height={660}
              objectFit="cover"
              //   className="max-h-[660px] rounded-3xl"
              unoptimized
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
