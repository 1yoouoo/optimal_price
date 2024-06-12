// import Banner from '../../components/banner/Banner'
import 'swiper/css'
import ItemList from '../../_components/product/ItemList'
import CategoryList from '../../_components/product/CategoryList'
import FeaturedProducts from '../../_components/product/FeaturedProducts'
import SearchBar from '@/app/_components/common/SearchBar'

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
      <section className="flex h-auto flex-col gap-20">
        <ItemList title="베스트" endpoint="/best" rows={2} />
        <FeaturedProducts />
        <ItemList title="할인율이 높은 상품" endpoint="/discount" rows={2} />
      </section>
    </main>
  )
}
