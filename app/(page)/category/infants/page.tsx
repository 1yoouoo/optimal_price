import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Infants = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList
        title="출산/유아동"
        endpoint="/category/infants"
        items={items}
      />
    </section>
  )
}

export default Infants
