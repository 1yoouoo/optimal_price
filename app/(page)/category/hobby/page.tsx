import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Hobby = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList title="완구/취미" endpoint="/category/hobby" items={items} />
    </section>
  )
}

export default Hobby
