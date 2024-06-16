import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const WomanFashion = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList
        title="여성패션"
        endpoint="/category/woman-fashion"
        items={items}
      />
    </section>
  )
}

export default WomanFashion
