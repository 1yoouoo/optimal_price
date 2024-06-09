'use client'

import CategoryComponent from '@/app/common/Category'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const categories = [
  {
    name: '가전/디지털',
    filePath: 'furniture',
    routes: '/category/furniture',
  },
  {
    name: '생활용품',
    filePath: 'household_supplies',
    routes: '/category/household-supplies',
  },
  {
    name: '완구/취미',
    filePath: 'hobby',
    routes: '/category/hobby',
  },
  {
    name: '식품',
    filePath: 'organic_food',
    routes: '/category/organic-food',
  },
  {
    name: '헬스/건강식품',
    filePath: 'health',
    routes: '/category/health',
  },
  {
    name: '여성패션',
    filePath: 'woman_fashion',
    routes: '/category/woman-fashion',
  },
  {
    name: '남성패션',
    filePath: 'man_fashion',
    routes: '/category/man-fashion',
  },
  {
    name: '가구/홈인테리어',
    filePath: 'living_room',
    routes: '/category/living-room',
  },
  {
    name: '문구/오피스',
    filePath: 'stationery',
    routes: '/category/stationery',
  },
  {
    name: '뷰티',
    filePath: 'skin',
    routes: '/category/skin',
  },
  {
    name: '스포츠/레저',
    filePath: 'sports',
    routes: '/category/sports',
  },
  {
    name: '출산/유아동',
    filePath: 'infants',
    routes: '/category/infants',
  },
  {
    name: '주방용품',
    filePath: 'kitchen_utensil',
    routes: '/category/kitchen-utensil',
  },
  {
    name: '반려동물용품',
    filePath: 'pets',
    routes: '/category/pets',
  },
  {
    name: '자동차/오토바이',
    filePath: 'car',
    routes: '/category/car',
  },
  {
    name: '신선식품',
    filePath: 'fresh_food',
    routes: '/category/fresh-food',
  },
]

const CategoryList = () => {
  return (
    <nav className="relative my-40 w-full">
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
          <SwiperSlide
            key={category.name}
            style={{
              width: 'auto',
            }}
          >
            <CategoryComponent
              name={category.name}
              path={category.filePath}
              routes={category.routes}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}

export default CategoryList
