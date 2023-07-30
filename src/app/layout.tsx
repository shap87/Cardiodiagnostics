import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Home - Cardio Diagnostics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
