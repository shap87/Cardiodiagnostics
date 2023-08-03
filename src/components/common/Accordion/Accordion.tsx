'use client'
import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionProps {
  title: string
  innerText: string
}

export const Accordion: FC<AccordionProps> = ({ title, innerText }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      onClick={() => setOpen((prev) => !prev)}
      animate={{
        backgroundColor: open ? '#fff' : '#f4f4f4',
      }}
      className="py-4 px-5 border border solid border-[#d9d9d9] flex flex-col cursor-pointer"
    >
      <AnimatePresence>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">{title}</h3>
          <img
            src={
              open
                ? '/images/circle-minus-solid.svg'
                : '/images/circle-plus-solid.svg'
            }
            alt=""
          />
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
            <p className="pt-5">{innerText}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
