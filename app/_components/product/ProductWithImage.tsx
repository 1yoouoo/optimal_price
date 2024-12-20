import ImageWithFallback from '@/app/_components/common/ImageWithFallback'
// import NewTabIcon from '../../Icon/NewTabIcon'
// import CopyIcon from '../../Icon/CopyIcon'
import { Product } from '@/utils/mock'
import { fallbackSrc } from '@/utils/contants'

interface ProductWithImageProps {
  item: Product
}

const ProductWithImage = ({ item }: ProductWithImageProps) => {
  return (
    <span className="relative flex items-center justify-center group-hover:opacity-50">
      <ImageWithFallback
        src={item.image}
        alt={item.name}
        width={245}
        height={245}
        fallbackSrc={fallbackSrc}
      />
      {/* <span className="absolute bottom-5 flex translate-y-full transform items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <CopyIcon />
        <NewTabIcon id={String(item.id)} />
      </span> */}
    </span>
  )
}

export default ProductWithImage
