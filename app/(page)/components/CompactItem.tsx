import ImageWithFallback from '@/app/common/ImageWithFallback'
import { formatCurrency } from '@/utils/formatCurrency'
import { Product } from '@/utils/mock'

interface CompactItemProps {
  item: Product
}

const CompactItem = ({ item }: CompactItemProps) => {
  return (
    <span className="m-2 flex cursor-pointer flex-col">
      <span className="mb-2 flex items-center bg-white">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          className=""
          fallbackSrc="https://cdn.optimalprice.kr/image-loading-failed.png"
        />
      </span>

      <span className="mx-2 flex flex-col items-start">
        <b className="line-clamp-2 w-full">{item.name}</b>
        <span>{formatCurrency(item.price)}</span>
      </span>
    </span>
  )
}

export default CompactItem
