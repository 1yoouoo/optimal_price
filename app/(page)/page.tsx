'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryComponent from '../common/Category'
import Banner from './components/Banner'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const categories = [
  {
    name: '가전/디지털',
    filePath: 'furniture',
    routes: '/furniture',
  },
  {
    name: '생활용품',
    filePath: 'household_supplies',
    routes: '/household-supplies',
  },
  {
    name: '완구/취미',
    filePath: 'hobby',
    routes: '/hobby',
  },
  {
    name: '식품',
    filePath: 'organic_food',
    routes: '/organic-food',
  },
  {
    name: '헬스/건강식품',
    filePath: 'health',
    routes: '/health',
  },
  {
    name: '여성패션',
    filePath: 'woman_fashion',
    routes: '/woman-fashion',
  },
  {
    name: '남성패션',
    filePath: 'man_fashion',
    routes: '/man-fashion',
  },
  {
    name: '가구/홈인테리어',
    filePath: 'living_room',
    routes: '/living-room',
  },
  {
    name: '문구/오피스',
    filePath: 'stationery',
    routes: '/stationery',
  },
  {
    name: '뷰티',
    filePath: 'skin',
    routes: '/skin',
  },
  {
    name: '스포츠/레저',
    filePath: 'sports',
    routes: '/sports',
  },
  {
    name: '출산/유아동',
    filePath: 'infants',
    routes: '/infants',
  },
  {
    name: '주방용품',
    filePath: 'kitchen_utensil',
    routes: '/kitchen-utensil',
  },
  {
    name: '반려동물용품',
    filePath: 'pets',
    routes: '/pets',
  },
  {
    name: '자동차/오토바이',
    filePath: 'car',
    routes: '/car',
  },
  {
    name: '신선식품',
    filePath: 'fresh_food',
    routes: '/fresh-food',
  },
]

export default function Home() {
  return (
    <main className="px-20">
      <Banner />
      <div className="relative h-[1000px] w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          className="relative w-full"
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.name} style={{ width: 'auto' }}>
              <CategoryComponent
                name={category.name}
                path={category.filePath}
                routes={category.routes}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  )
}
