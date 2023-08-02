'use client'
import { FC, useState } from 'react'
import cn from 'classnames'

interface AccordionProps {
  title: string
  innerText: string
}

export const Accordion: FC<AccordionProps> = ({ title, innerText }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={cn(
        'py-4 px-5 border border solid border-[#d9d9d9] flex flex-col cursor-pointer transition duration-700 ease-in-out',
        open ? 'bg-[#fff]' : 'bg-[#f4f4f4]',
      )}
    >
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
      <p
        className={cn(
          'pt-5 transition duration-700 ease-in-out',
          open ? 'inline' : 'hidden',
        )}
      >
        {innerText}
      </p>
    </div>
  )
}
