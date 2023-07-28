import { FC, ReactNode } from 'react'

// libs
import Link from 'next/link'
import cn from 'classnames'

interface ButtonProps {
  href?: string
  type?: 'submit' | 'button'
  target?: string
  color: 'red' | 'orange'
  className?: string
  children: ReactNode
}
export const Button: FC<ButtonProps> = ({
  color,
  className,
  href,
  type,
  target,
  children,
}) => {
  return type ? (
    <button
      type={type}
      className={cn(
        'inline-block text-white border text-2xl font-medium rounded-md py-3 px-6 transition-all',
        color === 'red' &&
          'bg-[#DF1F5A] border-[#DF1F5A] hover:bg-transparent hover:text-[#DF1F5A]',
        color === 'orange' &&
          'bg-second border-second hover:bg-transparent hover:text-second',
        className,
      )}
    >
      {children}
    </button>
  ) : href ? (
    <Link
      href={href}
      target={target}
      className={cn(
        'inline-block text-white border text-2xl font-medium rounded-md py-3 px-6 transition-all',
        color === 'red' &&
          'bg-[#DF1F5A] border-[#DF1F5A] hover:bg-transparent hover:text-[#DF1F5A]',
        color === 'orange' &&
          'bg-second border-second hover:bg-transparent hover:text-second',
        className,
      )}
    >
      {children}
    </Link>
  ) : null
}
