import Image from 'next/image'
import Link from 'next/link'
import ExtendedItem from './ExtendedItem'
import { getAppleProducts } from '@/utils/mock'

const FeaturedProducts = () => {
  const Items = getAppleProducts()

  return (
    <div className="mt-40 h-[800px]">
      <div className="flex justify-between">
        <Link href="/">
          <h2 className="text-3xl font-bold">추천 상품</h2>
        </Link>
        <Link href="/">
          <span className="flex h-10 items-center justify-center">더 보기</span>
        </Link>
      </div>
      <Image
        className="absolute left-0 -z-10 min-h-[300px] w-screen -translate-y-36"
        src="https://cdn.optimalprice.kr/overlay.webp"
        alt="text-overlay"
        quality={100}
        width={1920}
        height={400}
      />

      <div className="flex gap-10">
        {Items.slice(3, 4).map((item) => (
          <ExtendedItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
