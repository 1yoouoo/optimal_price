import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const FreshFood = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList
        title="신선식품"
        endpoint="/category/fresh-food"
        items={items}
      />
    </section>
  )
}

export default FreshFood
