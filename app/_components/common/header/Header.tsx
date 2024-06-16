import Logo from '../Logo'
import Nav from './Nav'
import { categories } from '@/utils/mock'

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 mx-auto flex w-screen flex-col items-center justify-between border-b border-gray-300 bg-white py-6">
        <div className="mx-auto flex w-[1280px] items-center justify-between">
          <nav className="flex items-center justify-between gap-12">
            <Logo />
            <Nav href="/brand-story">브랜드 스토리</Nav>
            <Nav href="/optimal-price">역대 최적가</Nav>
            <Nav href="/best">베스트</Nav>
            <Nav href="/new">신상품</Nav>
            <Nav
              href="/category"
              dropdown={categories.map((category) => ({
                href: category.routes,
                label: category.name,
              }))}
            >
              카테고리
            </Nav>
          </nav>
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}

export default Header
