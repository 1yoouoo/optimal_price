'use client'

import ImageWithFallback from '@/app/_components/common/ImageWithFallback'
import RenderStars from '@/app/_components/product/RenderStars'
import { formatNumberWithCommas } from '@/utils'
import { getProductById } from '@/utils/mock'
import { useParams } from 'next/navigation'
import { fallbackSrc } from '@/utils/contants'
import RocketBadge from '@/app/_components/badge/RocketBadge'

const ProductPage = () => {
  const params = useParams()
  const product = getProductById(Number(params.id))

  console.log(params)
  if (!product) return null

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col">
      <section className="flex gap-8">
        <div className="w-full max-w-[600px] flex-shrink">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            fallbackSrc={fallbackSrc}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <div className="flex h-10 items-center gap-2 border-b border-gray-300 pb-4">
            <span>{product.stars}</span>
            <span>
              <RenderStars stars={product.stars} />
            </span>
            <span className="flex items-center gap-2 text-blue-600">
              <span>{formatNumberWithCommas(product?.reviews)}개 상품평</span>
              <span>{product.isRocket && <RocketBadge />}</span>
            </span>
          </div>

          <div className="flex flex-col gap-1 border-b border-gray-300 py-4 pb-8">
            <div className="flex gap-2">
              <span className="text-red-500">{product.discountPercent}%</span>
              <span className="text-gray-400 line-through">
                {formatNumberWithCommas(product.originalPrice)}원
              </span>
            </div>
            <span className="text-3xl font-bold">
              {formatNumberWithCommas(product.currentPrice)}원
            </span>

            <div className="relative mt-6 flex flex-col gap-1 rounded-lg border border-gray-500 p-6">
              <div className="flex justify-between text-lg text-gray-500 blur-sm">
                <span>평균가</span>
                <span className="font-bold">
                  {formatNumberWithCommas(product.originalPrice)}원
                </span>
              </div>
              <div className="flex justify-between text-lg text-blue-500 blur-sm">
                <span>역대 최고가</span>
                <span className="font-bold">
                  {formatNumberWithCommas(product.originalPrice)}원
                </span>
              </div>
              <div className="flex justify-between text-lg text-red-500 blur-sm">
                <span>역대 최저가</span>
                <span className="font-bold">
                  {formatNumberWithCommas(product.currentPrice)}원
                </span>
              </div>

              <span className="absolute bottom-0 left-0 right-0 top-0 m-auto flex items-center justify-center text-lg text-[var(--primary-color)]">
                서비스 준비중입니다.
              </span>
            </div>
          </div>

          <div className="mt-3 flex justify-end gap-4">
            <button className="h-16 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-xl text-white transition-colors duration-200 hover:bg-[var(--primary-color-hover)]">
              쿠팡에서 보기
            </button>
            <button className="h-16 w-full rounded-lg bg-white px-4 py-2 text-xl text-[var(--primary-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white">
              공유하기
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
