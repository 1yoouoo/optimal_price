import ItemList from '../components/ItemList'

const Discount = () => {
  return (
    <section className="mx-auto mb-10 mt-20 w-[1280px]">
      <ItemList title="할인율이 높은 상품" endpoint="/discount" />
    </section>
  )
}

export default Discount
