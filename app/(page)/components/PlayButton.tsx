import PlayIcon from '@/app/assets/play.svg'
import PauseIcon from '@/app/assets/pause.svg'
import Image from 'next/image'

const PlayButton = ({
  isPlaying,
  handleClickToggle,
}: {
  isPlaying: boolean
  handleClickToggle: () => void
}) => {
  return (
    <button
      onClick={handleClickToggle}
      className={`absolute left-[var(--banner-width)] right-0 top-10 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-gray-100`}
    >
      {isPlaying ? (
        <Image
          src={PauseIcon}
          alt="pause"
          width={8}
          height={8}
          className="svg:fill-white"
        />
      ) : (
        <Image src={PlayIcon} alt="play" width={8} height={8} />
      )}
    </button>
  )
}

export default PlayButton
