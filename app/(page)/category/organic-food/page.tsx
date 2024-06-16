import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const OrganicFood = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList title="식품" endpoint="/category/organic-food" items={items} />
    </section>
  )
}

export default OrganicFood
