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
    <div className="absolute left-0 w-screen bg-gray-400">
      {/* 부모 요소의 마진을 제거하고 전체 너비 사용 */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2} // 슬라이드가 1.5개 보이도록 설정
        centeredSlides={true} // 슬라이드를 가운데 정렬
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto h-[660px] w-[1280px]">
              {/* overflow-hidden 추가 */}
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1280}
                height={660}
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
