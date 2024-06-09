import { getAppleProducts } from '@/utils/mock'
import CompactItem from './CompactItem'

interface ItemListProps {
  title: string
  endpoint: string
  rows?: number
}

const cols = 5

//TODO API요청시 limit있으면 효율적일 듯
const ItemList = ({ title, endpoint, rows }: ItemListProps) => {
  const Items = getAppleProducts()

  console.log(endpoint)

  if (!rows) return null //TODO 무한스크롤

  const slicedItems = Items.slice(0, rows * cols)

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-10 text-3xl font-bold">{title}</h2>
        <span>더보기</span>
      </div>
      <div className={`grid grid-cols-${cols} gap-4`}>
        {slicedItems.map((item) => (
          <CompactItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
