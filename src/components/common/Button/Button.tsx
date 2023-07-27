import { FC, ReactNode } from 'react'

// libs
import Link from 'next/link'

interface ButtonProps {
  href: string
  target: string
  children: ReactNode
}
export const Button: FC<ButtonProps> = ({ href, target, children }) => {
  return (
    <Link
      href={href}
      target={target}
      className="inline-block text-white bg-second border border-second text-2xl font-medium rounded-md py-2 px-6 transition-all hover:bg-white hover:text-second"
    >
      {children}
    </Link>
  )
}
