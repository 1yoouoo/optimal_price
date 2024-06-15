import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Stationery = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList
        title="문구/오피스"
        endpoint="/category/stationery"
        items={items}
      />
    </section>
  )
}

export default Stationery
