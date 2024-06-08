'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css/navigation'

const Banner = () => {
  const images = Array.from(
    { length: 8 },
    (_, i) => `https://cdn.optimalprice.kr/cat0${i + 1}.webp`
  )

  return (
    <ul className="absolute left-0">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        centeredSlides={true} // 슬라이드를 가운데 정렬
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
        navigation
        loop={true} // 슬라이드가 무한히 돌아가도록 설정
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container h-full w-full bg-gray-400"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <li className="h-[660px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1280}
                height={660}
                objectFit="cover"
                className="h-full w-full rounded-[48px]"
              />
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  )
}

export default Banner
