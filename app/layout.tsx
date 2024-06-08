import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './common/Header'
import Footer from './common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '최적가 | 똑똑한 소비습관',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} h-[2000px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
