import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const ManFashion = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList
        title="남성패션"
        endpoint="/category/man-fashion"
        items={items}
      />
    </section>
  )
}

export default ManFashion
