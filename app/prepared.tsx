import ExclamationMarkSVG from '@/public/svg/circle-exclamation-mark.svg'
import Image from 'next/image'

function Prepared() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-40">
      <Image
        src={ExclamationMarkSVG}
        alt="준비중인 페이지 입니다."
        width={300}
        height={300}
      />
      <h1 className="mt-4 text-center text-4xl">
        페이지 <span className="text-[var(--primary-color)]">준비중</span>
        입니다.
      </h1>
      <p className="border-t-[1px] px-4 pt-4 text-center text-lg text-gray-500">
        보다 좋은 서비스를 드리기 위해 준비중입니다.
        <br />
        홈페이지를 방문해주셔서 감사합니다.
      </p>
    </div>
  )
}

export default Prepared
