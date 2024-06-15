'use client'

import { getAppleProducts } from '@/utils/mock'
import CompactCard from './CompactCard'
import Link from 'next/link'

interface ItemListProps {
  title: string
  endpoint: string
  rows?: number
}

//TODO API 요청 시 limit있으면 효율적일 듯
const ItemList = ({ title, endpoint, rows }: ItemListProps) => {
  const Items = getAppleProducts()

  //TODO 무한 스크롤
  if (!rows)
    return (
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <Link href={endpoint}>
            <h2 className="cursor-pointer text-3xl font-bold">{title}</h2>
          </Link>
          <Link href={endpoint}>
            <span className="flex h-10 cursor-pointer items-center justify-center">
              더 보기
            </span>
          </Link>
        </div>
        <div className={`grid grid-cols-5 gap-x-4 gap-y-12`}>
          {Items.map((item) => (
            <CompactCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    )

  const slicedItems = Items.slice(0, rows * 5)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <Link href={endpoint}>
          <h2 className="text-3xl font-bold">{title}</h2>
        </Link>
        <Link href={endpoint}>
          <span className="flex h-10 items-center justify-center">더 보기</span>
        </Link>
      </div>
      <div className={`grid grid-cols-5 gap-x-4 gap-y-12`}>
        {slicedItems.map((item) => (
          <CompactCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
