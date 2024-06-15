import ItemList from '@/app/_components/product/ItemList'
import { getAppleProducts } from '@/utils/mock'

const HouseholdSupplies = () => {
  const items = getAppleProducts()

  return (
    <section className="mx-auto mb-10 mt-10 w-[1280px]">
      <ItemList
        title="생활용품"
        endpoint="/category/household-supplies"
        items={items}
      />
    </section>
  )
}

export default HouseholdSupplies
