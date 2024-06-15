import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Pets = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList title="반려동물용품" endpoint="/category/pets" items={items} />
    </section>
  )
}

export default Pets
