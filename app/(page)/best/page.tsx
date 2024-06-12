import ItemList from '../../_components/product/ItemList'

export default function Best() {
  return (
    <section className="mx-auto mb-10 mt-20 w-[1280px]">
      <ItemList title="베스트" endpoint="/best" />
    </section>
  )
}
