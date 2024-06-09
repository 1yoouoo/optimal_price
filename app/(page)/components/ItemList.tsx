import { getAppleProducts } from '@/utils/mock'
import CompactItem from './CompactItem'

const ItemList = () => {
  const Items = getAppleProducts()

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-10 text-3xl font-bold">베스트 프로덕트</h2>
        <span>더보기</span>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Items.map((item) => (
          <CompactItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
