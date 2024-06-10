import PlaySVG from '@/public/play.svg'
import PauseSVG from '@/public/pause.svg'
import Image from 'next/image'

interface PlayButtonIconProps {
  isPlaying: boolean
  handleClickToggle: () => void
}

const PlayButtonIcon = ({
  isPlaying,
  handleClickToggle,
}: PlayButtonIconProps) => {
  return (
    <button
      onClick={handleClickToggle}
      className={`absolute bottom-[var(--banner-height)] left-[var(--banner-width)] right-0 top-0 z-10 m-auto flex h-7 w-7 -translate-x-16 translate-y-16 items-center justify-center rounded-full border border-gray-300 bg-gray-100 opacity-50 hover:opacity-100`}
    >
      {isPlaying ? (
        <Image
          src={PauseSVG}
          alt="pause"
          width={8}
          height={8}
          className="svg:fill-white"
        />
      ) : (
        <Image src={PlaySVG} alt="play" width={8} height={8} />
      )}
    </button>
  )
}

export default PlayButtonIcon
