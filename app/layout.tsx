import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './common/Header'

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
      <body className={`${inter.className} container mx-auto px-10`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
