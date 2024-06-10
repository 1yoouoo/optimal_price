import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ChevronLeftSVG from '@/public/svg/button/btn_arrow_left.svg'

interface PrevButtonIconForFeaturedProductsProps {
  // eslint-disable-next-line no-unused-vars
  setPrevEl: (el: HTMLDivElement) => void
}

const PrevButtonIconForFeaturedProducts = ({
  setPrevEl,
}: PrevButtonIconForFeaturedProductsProps) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setPrevEl(nextRef.current)
    }
  }, [setPrevEl])

  return (
    <span
      className={`absolute bottom-0 left-0 top-12 flex items-center justify-center`}
    >
      <Image
        ref={nextRef}
        src={ChevronLeftSVG}
        alt="Chevron Left Icon"
        width={60}
        height={60}
        className="z-10 cursor-pointer rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </span>
  )
}

export default PrevButtonIconForFeaturedProducts
