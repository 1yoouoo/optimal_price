import Link from 'next/link'

interface NavProps {
  href: string
  children: React.ReactNode
}

const Nav = ({ href, children }: NavProps) => {
  return (
    <Link
      href={href}
      className="text-m py-1 transition-colors duration-200 hover:text-[var(--primary-color)]"
    >
      {children}
    </Link>
  )
}

export default Nav
