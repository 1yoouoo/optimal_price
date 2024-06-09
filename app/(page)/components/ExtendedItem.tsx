'use client'

import { Product } from '@/utils/mock'
import ProductWithImage from './ProductWithImage'
import { formatCurrency } from '@/utils/formatCurrency'

interface ExtendedItemProps {
  item: Product
}

const ExtendedItem = ({ item }: ExtendedItemProps) => {
  return (
    <div className="flex h-[300px] w-[620px] justify-between gap-6 rounded-xl bg-white p-4 shadow-lg">
      <span className="bg-red group relative flex items-center justify-center">
        <ProductWithImage item={item} />
      </span>
      <span className="flex w-[400px] cursor-pointer flex-col items-start justify-between gap-1 px-4 py-16">
        <b className="line-clamp-2 w-full text-lg">{item.name}</b>

        <span className="flex w-full items-center justify-between gap-1">
          <span className="flex items-center justify-between gap-3">
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

export default ExtendedItem
