import { formatCurrency } from '@/utils'
import { Product } from '@/utils/mock'
import { useEffect, useState } from 'react'
import DiscountBadge from '../badge/DiscountBadge'
import ProductWithImage from './ProductWithImage'

interface CompactCardProps {
  item: Product
}

const CompactCard = ({ item }: CompactCardProps) => {
  const [isBadgeVisible, setIsBadgeVisible] = useState(false)

  useEffect(() => {
    if (item.discountPercent >= 20) {
      setIsBadgeVisible(true)
    }
  }, [item.discountPercent])

  return (
    <span className="group relative flex items-center justify-center">
      <span className="relative flex flex-col gap-4 transition-opacity duration-200">
        <ProductWithImage item={item} />
        <span className="mx-2 flex cursor-pointer flex-col items-start gap-1">
          <b className="line-clamp-2 w-full">{item.name}</b>

          <span className="flex w-full flex-col items-start justify-between gap-1">
            <span className="flex items-center gap-2">
              <span className="text-lg font-semibold text-red-500">
                {item.discountPercent}%
              </span>

              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(item.originalPrice)}
              </span>

              {/* {item.previousPrice &&
                item.previousPrice !== item.originalPrice &&
                item.previousPrice > item.currentPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatCurrency(item.previousPrice)}
                  </span>
                )} */}
            </span>

            <span className="block w-full text-end text-xl font-bold text-black">
              {formatCurrency(item.currentPrice)}
            </span>
          </span>
        </span>
      </span>

      {isBadgeVisible && (
        <DiscountBadge discountPercent={item.discountPercent} />
      )}
    </span>
  )
}

export default CompactCard
