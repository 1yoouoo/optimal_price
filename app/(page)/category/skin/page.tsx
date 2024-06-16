import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const Skin = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList title="뷰티" endpoint="/category/skin" items={items} />
    </section>
  )
}

export default Skin
