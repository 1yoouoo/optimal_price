import { useEffect, useRef } from 'react'
import Image from 'next/image'
import ChevronLeftIcon from '@/app/assets/btn_arrow_left.svg'

const PrevButton = ({
  setPrevEl,
}: {
  // eslint-disable-next-line no-unused-vars
  setPrevEl: (el: HTMLDivElement) => void
}) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setPrevEl(nextRef.current)
    }
  }, [setPrevEl])

  return (
    <div className="absolute bottom-0 left-52 top-0 z-10 my-auto flex items-center">
      <Image
        ref={nextRef}
        src={ChevronLeftIcon}
        alt="Chevron Left Icon"
        width={60}
        height={60}
        className="rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </div>
  )
}

export default PrevButton
