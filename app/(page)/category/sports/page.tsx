import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Sports = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList title="스포츠/레저" endpoint="/category/sports" items={items} />
    </section>
  )
}

export default Sports
