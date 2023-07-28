import { FC, ReactNode } from 'react'

// components
import { Footer, Header } from '@/components/common'

interface LayoutProps {
  children: ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
