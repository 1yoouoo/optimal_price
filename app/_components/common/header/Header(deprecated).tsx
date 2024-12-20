// 'use client'

// import Logo from './Logo'
// import Nav from './Nav'
// import { useEffect, useState } from 'react'
// import { categories } from '@/utils/mock'

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setIsSticky(true)
//       } else {
//         setIsSticky(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return (
//     <>
//       {isSticky ? (
//         <>
//           <header className="h-26 sticky top-0 z-50 mx-auto flex w-screen flex-col items-center justify-between border-b border-gray-300 bg-white py-8">
//             <div className="mx-auto flex w-[1280px] items-center justify-between">
//               <nav className="flex items-center justify-between gap-12">
//                 <Logo />
//                 <Nav href="/brand-story">브랜드 스토리</Nav>
//                 <Nav href="/optimal-price">역대 최적가</Nav>
//                 <Nav href="/best">베스트</Nav>
//                 <Nav href="/new">신상품</Nav>
//                 <Nav
//                   href="/category"
//                   dropdown={categories.map((category) => ({
//                     href: category.routes,
//                     label: category.name,
//                   }))}
//                 >
//                   카테고리
//                 </Nav>
//               </nav>
//             </div>
//           </header>
//           <div className="h-24" />
//         </>
//       ) : (
//         <header className="z-50 mx-auto flex h-44 w-screen flex-col items-center justify-center gap-6">
//           <div className="mx-auto flex w-[1280px] items-center justify-between">
//             <Logo />
//           </div>

//           <div className="mx-auto flex w-[1280px] items-center justify-between">
//             <nav className="flex items-center justify-between gap-12">
//               <Nav href="/brand-story">브랜드 스토리</Nav>
//               <Nav href="/optimal-price">역대 최적가</Nav>
//               <Nav href="/best">베스트</Nav>
//               <Nav href="/new">신상품</Nav>
//               <Nav
//                 href="/category"
//                 dropdown={categories.map((category) => ({
//                   href: category.routes,
//                   label: category.name,
//                 }))}
//               >
//                 카테고리
//               </Nav>
//             </nav>
//           </div>
//         </header>
//       )}
//     </>
//   )
// }

// export default Header
