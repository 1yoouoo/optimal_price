import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const LivingRoom = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 w-[1280px]">
      <ItemList
        title="가구/홈인테리어"
        endpoint="/category/living-room"
        items={items}
      />
    </section>
  )
}

export default LivingRoom
