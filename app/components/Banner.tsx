'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from 'react'
import NextButtonIconForBannner from '../Icon/NextButtonIconForBanner'
import PrevButtonIconForBannner from '../Icon/PrevButtonIconForBannner'
import PlayButtonIcon from '../Icon/PlayButtonIcon'

const Banner = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [swiperReady, setSwiperReady] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)

  const [isPlaying, setIsPlaying] = useState(true)

  const handleClickToggle = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      swiperInstance.autoplay.stop()
    } else {
      swiperInstance.autoplay.start()
    }
  }

  useEffect(() => {
    if (swiperReady && swiperInstance) {
      swiperInstance.autoplay.start()
      setFadeIn(true)
    }
  }, [swiperReady, swiperInstance])

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
            centeredSlides
            slidesOffsetAfter={0}
            slidesOffsetBefore={0}
            navigation={{
              prevEl,
              nextEl,
            }}
            onInit={(swiper) => {
              setSwiperReady(true)
              setSwiperInstance(swiper)
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: (_, className) =>
                `<span class="${className}"></span>`,
            }}
            loop={true}
            className="relative h-full w-full"
            autoplay={{
              delay: 5000,
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
                      className="h-full w-full rounded-[48px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                    />
                  </li>
                </SwiperSlide>
              ))}

            <NextButtonIconForBannner setNextEl={setNextEl} />
            <PrevButtonIconForBannner setPrevEl={setPrevEl} />

            <PlayButtonIcon
              isPlaying={isPlaying}
              handleClickToggle={handleClickToggle}
            />
          </Swiper>
        </div>
      </ul>
      <div className="my-12 h-[var(--banner-height)]" />
    </>
  )
}

export default Banner
