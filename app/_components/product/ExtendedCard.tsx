'use client'

import { Product } from '@/utils/mock'
import ProductWithImage from './ProductWithImage'
import { formatCurrency } from '@/utils'
import { useEffect, useState } from 'react'
import DiscountBadge from '../badge/DiscountBadge'

interface ExtendedCardProps {
  item: Product
}

const ExtendedCard = ({ item }: ExtendedCardProps) => {
  const [isBadgeVisible, setIsBadgeVisible] = useState(false)

  useEffect(() => {
    if (item.discountPercent >= 20) {
      setIsBadgeVisible(true)
    }
  }, [item.discountPercent])

  return (
    <div className="flex h-[300px] w-[620px] justify-between gap-6 rounded-xl bg-white p-4 shadow-lg">
      <span className="group relative my-6 flex items-center justify-center">
        <ProductWithImage item={item} />

        {isBadgeVisible && (
          <DiscountBadge discountPercent={item.discountPercent} />
        )}
      </span>
      <span className="flex w-[400px] cursor-pointer flex-col items-start justify-between gap-1 py-16 pl-0 pr-2">
        <b className="line-clamp-2 w-full text-lg">{item.name}</b>

        <span className="flex w-full items-center justify-between gap-1">
          <span className="flex items-center justify-between gap-2">
            <span className="text-xl font-semibold text-red-500">
              {item.discountPercent}%
            </span>

            <span className="text-mg text-gray-500 line-through">
              {formatCurrency(item.originalPrice)}
            </span>

            {item.previousPrice &&
              item.previousPrice !== item.originalPrice &&
              item.previousPrice > item.currentPrice && (
                <span className="text-mg text-gray-500 line-through">
                  {formatCurrency(item.previousPrice)}
                </span>
              )}
          </span>

          <span className="text-2xl font-bold text-black">
            {formatCurrency(item.currentPrice)}
          </span>
        </span>
      </span>
    </div>
  )
}

export default ExtendedCard
