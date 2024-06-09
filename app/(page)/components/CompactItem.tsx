import ImageWithFallback from '@/app/common/ImageWithFallback'
import { formatCurrency } from '@/utils/formatCurrency'
import { Product } from '@/utils/mock'
import { useEffect, useState } from 'react'
import DiscountBadge from './DiscountBadge'
import NewTabIcon from './Icon/NewTabIcon'
import CopyIcon from './Icon/CopyIcon'

interface CompactItemProps {
  item: Product
}

const CompactItem = ({ item }: CompactItemProps) => {
  const [isBadgeVisible, setIsBadgeVisible] = useState(false)

  useEffect(() => {
    if (item.discountPercent >= 20) {
      setIsBadgeVisible(true)
    }
  }, [item.discountPercent])

  console.log(isBadgeVisible)

  return (
    <span className="group relative flex items-center justify-center">
      <span className="relative flex flex-col transition-opacity duration-200 hover:opacity-100">
        <span className="mb-4 flex items-center justify-center group-hover:opacity-50">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            className="px-4"
            fallbackSrc="https://cdn.optimalprice.kr/image-loading-failed.png"
          />
        </span>

        <span className="mx-2 flex cursor-pointer flex-col items-start gap-1">
          <b className="line-clamp-2 w-full">{item.name}</b>

          <span className="flex w-full flex-col items-start gap-1">
            <span className="flex items-center gap-2">
              <span className="text-lg font-semibold text-red-500">
                {item.discountPercent}%
              </span>

              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(item.originalPrice)}
              </span>

              {item.previousPrice &&
                item.previousPrice !== item.originalPrice &&
                item.previousPrice > item.currentPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatCurrency(item.previousPrice)}
                  </span>
                )}
            </span>

            <span className="block w-full text-end text-xl font-bold text-black">
              {formatCurrency(item.currentPrice)}
            </span>
          </span>
        </span>
      </span>

      <span className="absolute flex translate-y-full transform items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <CopyIcon />
        <NewTabIcon />
      </span>

      {isBadgeVisible && (
        <DiscountBadge discountPercent={item.discountPercent} />
      )}
    </span>
  )
}

export default CompactItem
