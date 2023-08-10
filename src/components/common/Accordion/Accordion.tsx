'use client'
import { FC, useState } from 'react'
import cn from 'classnames'
import {
  motion,
  AnimatePresence,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
} from 'framer-motion'
import { CircleMinusSolidIcon, CirclePlusSolidIcon } from '@/components/icons'

interface AccordionProps {
  title: string | JSX.Element
  closedStateIcon?: React.ReactNode
  openedStateIcon?: React.ReactNode
  classname?: string
  headerClassname?: string
  animate?: (
    open: boolean,
  ) => boolean | AnimationControls | TargetAndTransition | VariantLabels
  children: JSX.Element
}

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  classname,
  headerClassname,
  animate,
  closedStateIcon,
  openedStateIcon,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      animate={animate?.(open)}
      className={cn('flex flex-col cursor-pointer', classname)}
    >
      <AnimatePresence>
        <div
          className="flex items-center justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          {typeof title === 'string' ? (
            <h3 className={cn('text-xl font-medium', headerClassname)}>
              {title}
            </h3>
          ) : (
            title
          )}
          {open ? (
            openedStateIcon ? (
              openedStateIcon
            ) : (
              <CircleMinusSolidIcon />
            )
          ) : closedStateIcon ? (
            closedStateIcon
          ) : (
            <CirclePlusSolidIcon />
          )}
        </div>
        {open && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
