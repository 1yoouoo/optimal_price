import Image from 'next/image'
import CopySVG from '@/app/assets/item/copy.svg'

const CopyIcon = () => {
  return (
    <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white">
      <span className="flex h-6 w-6 items-center justify-center">
        <Image src={CopySVG} alt="새 탭" width={100} height={100} />
      </span>
    </span>
  )
}

export default CopyIcon
