import Link from 'next/link'

const FooterSvgWrapper = ({
  SvgComponent,
  href,
}: {
  SvgComponent: React.ReactNode
  href: string
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="m-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-white invert filter transition-transform duration-300 ease-in-out hover:translate-y-[-5px]"
    >
      <span className="w-7.5 h-7.5 flex items-center justify-center rounded-full">
        {SvgComponent}
      </span>
    </Link>
  )
}

export default FooterSvgWrapper
