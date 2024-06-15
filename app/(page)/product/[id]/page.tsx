'use client'

import RenderStars from '@/app/_components/product/RenderStars'
import { getProductById } from '@/utils/mock'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const ProductPage = () => {
  const params = useParams()
  const product = getProductById(Number(params.id))

  console.log(params)
  if (!product) return null

  return (
    <main className="mx-auto flex w-[1280px] flex-col bg-fuchsia-200">
      <section className="flex gap-4">
        <div className="min-h-[576px] min-w-[576px]">
          <Image
            src={product.image}
            alt={product.name}
            width={576}
            height={576}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <div className="flex gap-2">
            <RenderStars stars={product.stars} />
            <span className="">{product?.reviews}</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
