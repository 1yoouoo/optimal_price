import Image from 'next/image'
import NewTabSVG from '@/public/svg/item/new_tab.svg'
import Link from 'next/link'

interface NewTabIconProps {
  id: string
}

const NewTabIcon = ({ id }: NewTabIconProps) => {
  return (
    <Link href={`/product/${id}`} target="_blank" rel="noopener noreferrer">
      <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white">
        <span className="flex h-5 w-5 items-center justify-center">
          <Image src={NewTabSVG} alt="새 탭" width={100} height={100} />
        </span>
      </span>
    </Link>
  )
}

export default NewTabIcon
