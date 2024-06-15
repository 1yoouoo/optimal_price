import 'swiper/css'
// import ItemList from '../../_components/product/ItemList'
import CategoryList from '../../_components/product/CategoryList'
// import FeaturedProducts from '../../_components/product/FeaturedProducts'
import SearchBar from '@/app/_components/common/SearchBar'
import ItemListSwiper from '@/app/_components/product/ItemListSwiper'
import { categories } from '@/utils/mock'
// import Banner from '@/app/_components/banner/Banner'

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

        {/* <FeaturedProducts /> */}
      </section>
    </main>
  )
}
