import { useEffect, useRef } from 'react'
import ChevronRightIcon from '@/app/assets/button/btn_arrow_right.svg'
import Image from 'next/image'

interface NextButtonProps {
  // eslint-disable-next-line no-unused-vars
  setNextEl: (el: HTMLDivElement) => void
}

const NextButton = ({ setNextEl }: NextButtonProps) => {
  const nextRef = useRef(null)

  useEffect(() => {
    if (nextRef.current) {
      setNextEl(nextRef.current)
    }
  }, [setNextEl])

  return (
    <span
      className={`absolute bottom-0 left-[var(--banner-width)] right-0 top-0 flex items-center justify-center`}
    >
      <Image
        ref={nextRef}
        src={ChevronRightIcon}
        alt="Chevron Right Icon"
        width={60}
        height={60}
        className="z-10 cursor-pointer rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
      />
    </span>
  )
}

export default NextButton
