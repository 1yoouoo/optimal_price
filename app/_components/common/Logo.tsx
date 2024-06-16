import Image from 'next/image'
import LogoImage from '@/public/images/logo/logo.webp'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex h-16 items-center gap-3 bg-white">
      <Image src={LogoImage} alt="logo" width={52} height={16} />
    </Link>
  )
}

export default Logo
