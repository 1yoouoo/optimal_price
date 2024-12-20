import { useEffect, useRef } from 'react'
import ChevronRightSVG from '@/public/svg/button/btn_arrow_right.svg'
import Image from 'next/image'

interface NextButtonIconForBannnerProps {
  // eslint-disable-next-line no-unused-vars
  setNextEl: (el: HTMLDivElement) => void
}

const NextButtonIconForBannner = ({
  setNextEl,
}: NextButtonIconForBannnerProps) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setNextEl(nextRef.current)
    }
  }, [setNextEl])

  return (
    <span className={`relative z-40`}>
      <Image
        ref={nextRef}
        src={ChevronRightSVG}
        alt="Chevron Right Icon"
        width={60}
        height={60}
        className="z-10 cursor-pointer rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </span>
  )
}

export default NextButtonIconForBannner
