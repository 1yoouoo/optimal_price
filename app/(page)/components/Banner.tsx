'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState } from 'react'
import NextButton from '../svg/NextButton'
import PrevButton from '../svg/PrevButton'

const Banner = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  const images = Array.from(
    { length: 8 },
    (_, i) => `https://cdn.optimalprice.kr/cat0${i + 1}.webp`
  )

  return (
    <ul className="absolute left-0 right-0">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView="auto"
          centeredSlides={true}
          slidesOffsetAfter={0}
          slidesOffsetBefore={0}
          navigation={{
            prevEl,
            nextEl,
          }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          className="relative h-full w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <li className="group relative h-[660px]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1280}
                  height={660}
                  objectFit="cover"
                  className="h-full w-full rounded-[48px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                />
              </li>
            </SwiperSlide>
          ))}
          <PrevButton setPrevEl={setPrevEl} />
          <NextButton setNextEl={setNextEl} />
        </Swiper>
      </div>
    </ul>
  )
}

export default Banner
