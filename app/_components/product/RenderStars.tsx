import { tenada } from '@/utils/fonts'

interface RenderStarsProps {
  stars: number
}

const RenderStars = ({ stars }: RenderStarsProps) => {
  return (
    <div
      className={`${tenada.variable} line-height relative m-0 inline-block h-6 w-auto cursor-default p-0 font-tenada text-2xl text-[#cccccc]`}
    >
      <div
        className="absolute left-0 top-0 z-10 flex items-center overflow-hidden text-[#f5b000]"
        style={{ width: `${stars * 20}%` }}
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="z-0 flex items-center">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  )
}

export default RenderStars
