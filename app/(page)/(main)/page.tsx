import 'swiper/css'
// import ItemList from '../../_components/product/ItemList'
import CategoryList from '../../_components/product/CategoryList'
// import FeaturedProducts from '../../_components/product/FeaturedProducts'
import SearchBar from '@/app/_components/common/SearchBar'
import ItemListSwiper from '@/app/_components/product/ItemListSwiper'
// import Banner from '@/app/_components/banner/Banner'

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

export default function Home() {
  return (
    <main className="mx-auto w-[1280px]">
      {/* <Banner /> */}

      <div className="mb-20 mt-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-extrabold">
          변동하는 가격,{' '}
          <span className="text-[var(--primary-color)]">최적가</span>로 똑똑하게
          쇼핑하세요!
        </h1>

        <SearchBar />
      </div>

      <CategoryList />
      <section className="mt-20 flex h-auto flex-col gap-20">
        {categories.map((category) => (
          <ItemListSwiper
            key={category.routes}
            title={category.name}
            endpoint={category.routes}
          />
        ))}

        {/* <ItemList title="베스트" endpoint="/best" rows={2} /> */}
        {/* <FeaturedProducts /> */}
        {/* <ItemList title="할인율이 높은 상품" endpoint="/discount" rows={2} /> */}
      </section>
    </main>
  )
}
