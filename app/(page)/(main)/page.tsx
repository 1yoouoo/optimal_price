import Banner from '../../components/banner/Banner'
import 'swiper/css'
import ItemList from '../../components/product/ItemList'
import CategoryList from '../../components/product/CategoryList'
import FeaturedProducts from '../../components/product/FeaturedProducts'

export default function Home() {
  return (
    <main className="mx-auto w-[1280px]">
      <Banner />

      <CategoryList />
      <section className="flex h-auto flex-col gap-20">
        <ItemList title="베스트" endpoint="/best" rows={2} />
        <FeaturedProducts />
        <ItemList title="할인율이 높은 상품" endpoint="/discount" rows={2} />
      </section>
    </main>
  )
}
