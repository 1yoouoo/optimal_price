import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Car = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList
        title="자동차/오토바이"
        endpoint="/category/car"
        items={items}
      />
    </section>
  )
}

export default Car
