import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ChevronLeftIcon from '@/app/assets/btn_arrow_left.svg'

interface PrevButtonProps {
  // eslint-disable-next-line no-unused-vars
  setPrevEl: (el: HTMLDivElement) => void
}

const PrevButton = ({ setPrevEl }: PrevButtonProps) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setPrevEl(nextRef.current)
    }
  }, [setPrevEl])

  return (
    <span
      className={`absolute bottom-0 left-0 right-[var(--banner-width)] top-0 z-10 flex items-center justify-center`}
    >
      <Image
        ref={nextRef}
        src={ChevronLeftIcon}
        alt="Chevron Left Icon"
        width={60}
        height={60}
        className="cursor-pointer rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </span>
  )
}

export default PrevButton
