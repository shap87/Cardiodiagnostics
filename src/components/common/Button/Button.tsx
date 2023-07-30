import { FC, ReactNode } from 'react'

// libs
import Link from 'next/link'
import cn from 'classnames'

// assets
import styles from './Button.module.scss'

interface ButtonProps {
  href?: string
  type?: 'submit' | 'button'
  target?: string
  color: 'red' | 'blue'
  className?: string
  children: ReactNode
  arrow?: boolean
}
export const Button: FC<ButtonProps> = ({
  color,
  className,
  href,
  type,
  target,
  children,
  arrow,
}) => {
  return type ? (
    <button
      type={type}
      className={cn(
        styles.button,
        color === 'red' && styles.red,
        color === 'blue' && styles.blue,
        arrow && styles.arrow,
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
        styles.button,
        color === 'red' && styles.red,
        color === 'blue' && styles.blue,
        arrow && styles.arrow,
        className,
      )}
    >
      {children}
    </Link>
  ) : null
}
