import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './_components/common/Header'
import Footer from './_components/common/Footer'
import ScrollToTopButton from './_components/common/ScrollToTopButton'
import { ToastProvider } from './provider/ToastProvider'

const inter = DM_Sans({ subsets: ['latin'] })

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
      <body className={`${inter.className} `}>
        <Header />
        <ToastProvider>{children}</ToastProvider>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
