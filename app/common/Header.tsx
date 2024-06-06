import SearchBar from './SearchBar'
import Logo from './Logo'
import Nav from './Nav'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex h-48 w-full flex-col items-center justify-between py-8">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex w-full items-center justify-between">
        <nav className="flex items-center justify-between gap-12">
          <Nav href="/brand-story">브랜드 스토리</Nav>
          <Nav href="/optimal-price">역대 최적가</Nav>
          <Nav href="/best">베스트</Nav>
          <Nav href="/new">신상품</Nav>
          <Nav href="/category">카테고리</Nav>
        </nav>

        <div className="flex items-center justify-between">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export default Header
