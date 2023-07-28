import { FC, ReactNode } from 'react'

// components
import { Footer } from '@/components/common'

interface LayoutProps {
  children: ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
