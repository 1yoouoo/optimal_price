import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Furniture = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList title="가전/디지털" endpoint="/furniture" items={items} />
    </section>
  )
}

export default Furniture
