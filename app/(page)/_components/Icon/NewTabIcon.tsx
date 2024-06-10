import Image from 'next/image'
import NewTabSVG from '@/public/svg/item/new_tab.svg'

const NewTabIcon = () => {
  return (
    <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white">
      <span className="flex h-5 w-5 items-center justify-center">
        <Image src={NewTabSVG} alt="새 탭" width={100} height={100} />
      </span>
    </span>
  )
}

export default NewTabIcon
