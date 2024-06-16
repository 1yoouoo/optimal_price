import { formatCurrency } from '@/utils'
import { Product } from '@/utils/mock'
import { useEffect, useState } from 'react'
import DiscountBadge from '../badge/DiscountBadge'
import ProductWithImage from './ProductWithImage'
import RocketBadge from '../badge/RocketBadge'
import Link from 'next/link'

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
    <Link href={`/product/${item.id}`}>
      <span className="group relative flex w-full items-center justify-center">
        <span className="relative flex flex-col gap-6 transition-opacity duration-200">
          <ProductWithImage item={item} />
          <span className="mx-1 flex min-h-32 cursor-pointer flex-col items-start justify-between">
            <span className="flex flex-col items-start justify-between gap-1">
              <b className="line-clamp-2">{item.name}</b>

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
            </span>

            <span className="flex h-12 w-full items-center justify-end gap-2 text-xl font-bold text-black">
              {item.isRocket && <RocketBadge />}
              {formatCurrency(item.currentPrice)}
            </span>
          </span>
        </span>

        {isBadgeVisible && (
          <DiscountBadge discountPercent={item.discountPercent} />
        )}
      </span>
    </Link>
  )
}

export default CompactCard
