import NextButtonIconForBannner from '@/app/Icon/NextButtonIconForBanner'
import PrevButtonIconForBannner from '@/app/Icon/PrevButtonIconForBannner'

interface SwiperNavigationProps {
  // eslint-disable-next-line no-unused-vars
  setPrevEl: (prevEl: HTMLElement | null) => void
  // eslint-disable-next-line no-unused-vars
  setNextEl: (nextEl: HTMLElement | null) => void
  isBeginning?: boolean
  isEnd?: boolean
  position?: {
    top?: number
  }
}

const SwiperNavigation = ({
  setPrevEl,
  setNextEl,
  isBeginning,
  isEnd,
  position,
}: SwiperNavigationProps) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-between"
      style={{
        top: position?.top,
      }}
    >
      <div style={{ opacity: isBeginning ? 0 : 1 }}>
        <PrevButtonIconForBannner setPrevEl={setPrevEl} />
      </div>
      <div style={{ opacity: isEnd ? 0 : 1 }}>
        <NextButtonIconForBannner setNextEl={setNextEl} />
      </div>
    </div>
  )
}

export default SwiperNavigation
