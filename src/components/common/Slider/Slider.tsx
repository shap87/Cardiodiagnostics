'use client'
// libs
import { FC, useState } from 'react'
import cn from 'classnames'

// components
import { Animation } from '@/components/common'

interface SliderProps {
  items: JSX.Element[]
  classname?: string
}

export function Slider({ items, classname }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div
      className={cn(
        'w-full rounded-[20px] lg:p-10 p-6 bg-[rgba(223,31,90,0.66)] overflow-hidden relative',
        classname,
      )}
    >
      {items.map((item, index) => (
        <Animation
          type="fromBottom"
          key={index}
          className={cn(
            'w-full h-full lg:p-24 md:p-12 p-8 flex justify-center items-center',
            currentIndex === index ? 'block' : 'hidden',
          )}
        >
          {item}
        </Animation>
      ))}
      <div className="flex gap-2.5 absolute bottom-8 left-1/2 -translate-x-1/2">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'rounded-full w-2 h-2 bg-white',
              currentIndex === index ? 'opacity-100' : 'opacity-50',
            )}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrentIndex((prev) => prev - 1)}
        disabled={currentIndex === 0}
        className={cn(
          'p-5 absolute top-1/2 -translate-y-1/2 lg:left-8 left-0',
          currentIndex !== 0 ? 'cursor-pointer' : 'opacity-50',
        )}
      >
        <img src="/images/chevron-left.svg" alt="left" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => prev + 1)}
        disabled={currentIndex === items.length - 1}
        className={cn(
          'p-5 absolute top-1/2 -translate-y-1/2 lg:right-8 right-0',
          currentIndex !== items.length - 1 ? 'cursor-pointer' : 'opacity-50',
        )}
      >
        <img src="/images/chevron-right.svg" alt="right" />
      </button>
    </div>
  )
}
