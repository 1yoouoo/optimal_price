import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const KitchenUtensil = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList
        title="주방용품"
        endpoint="/category/kitchen-utensil"
        items={items}
      />
    </section>
  )
}

export default KitchenUtensil
