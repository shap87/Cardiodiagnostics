'use client'

import { FC, ReactNode, useEffect } from 'react'

// libs
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// components
import { animations } from '@/utils/animations'

interface AnimationProps {
  children: ReactNode
  className?: string
  component?: 'h1' | 'h2' | 'section' | 'p' | 'h3' | 'li' | 'ul'
  type: 'fadeIn' | 'fromBottom' | 'fromLeft' | 'fromRight' | 'fromTop'
}
export const Animation: FC<AnimationProps> = ({
  className,
  children,
  component,
  type,
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return component === 'h1' ? (
    <motion.h1
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.h1>
  ) : component === 'h2' ? (
    <motion.h2
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.h2>
  ) : component === 'section' ? (
    <motion.section
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.section>
  ) : component === 'p' ? (
    <motion.p
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.p>
  ) : component === 'h3' ? (
    <motion.h3
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.h3>
  ) : component === 'li' ? (
    <motion.li
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.li>
  ) : component === 'ul' ? (
    <motion.ul
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.ul>
  ) : (
    <motion.div
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  )
}
