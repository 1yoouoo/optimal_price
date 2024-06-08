import { useEffect, useRef } from 'react'
import ChevronRightIcon from '@/app/assets/btn_arrow_right.svg'
import Image from 'next/image'

const NextButton = ({
  setNextEl,
}: {
  // eslint-disable-next-line no-unused-vars
  setNextEl: (el: HTMLDivElement) => void
}) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setNextEl(nextRef.current)
    }
  }, [setNextEl])

  return (
    <span className="absolute bottom-0 right-52 top-0 z-10 my-auto flex items-center">
      <Image
        ref={nextRef}
        src={ChevronRightIcon}
        alt="Chevron Right Icon"
        width={60}
        height={60}
        className="rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </span>
  )
}

export default NextButton
