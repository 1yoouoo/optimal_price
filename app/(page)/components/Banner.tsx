'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from 'react'
import NextButton from '../svg/NextButton'
import PrevButton from '../svg/PrevButton'

const Banner = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [swiperReady, setSwiperReady] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    if (swiperReady) {
      setFadeIn(true)
    }
  }, [swiperReady])

  const images = Array.from(
    { length: 8 },
    (_, i) => `https://cdn.optimalprice.kr/cat0${i + 1}.webp`
  )

  return (
    <>
      <ul
        className={`absolute left-0 right-0 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView="auto"
            centeredSlides={true}
            slidesOffsetAfter={0}
            slidesOffsetBefore={0}
            navigation={{
              prevEl,
              nextEl,
            }}
            onInit={() => setSwiperReady(true)}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: (_, className) =>
                `<span class="${className}"></span>`,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            className="relative h-full w-full"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {swiperReady &&
              images.map((src, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <li className="group relative h-[var(--banner-height)] w-[var(--banner-width)]">
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
            <NextButton setNextEl={setNextEl} />
            <PrevButton setPrevEl={setPrevEl} />
          </Swiper>
        </div>
      </ul>
      <div className="h-[660px]" />
    </>
  )
}

export default Banner
