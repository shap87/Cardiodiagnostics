'use client'
// libs
import { useState } from 'react'
import cn from 'classnames'

// components
import { Animation, Button } from '@/components/common'

interface SliderProps {
  items: { title: string; content: string; image?: string }[]
  backgroundSrc?: string | string[]
  classname?: string
}

export function Slider({ items, classname }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = () => {
    if (currentIndex === items.length - 1) return setCurrentIndex(0)
    setCurrentIndex((prev) => prev + 1)
  }

  const onPrev = () => {
    if (currentIndex === 0) return setCurrentIndex(items.length - 1)
    setCurrentIndex((prev) => prev - 1)
  }

  return (
    <div
      className={cn(
        'w-full rounded-[20px] lg:p-10 p-6 overflow-hidden relative',
        classname,
      )}
      {...(items[currentIndex]?.image && {
        style: {
          backgroundImage: `url(${items[currentIndex].image})`,
          backgroundSize: 'cover',
        },
      })}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-[rgba(223,31,90,0.66)]" />
      {items.map((item, index) => (
        <Animation
          type="fromBottom"
          key={index}
          className={cn(
            'w-full h-full lg:p-24 md:p-12 p-8 flex justify-center items-center',
            currentIndex === index ? 'block' : 'hidden',
          )}
        >
          <div key="item1" className="flex flex-col items-center z-10">
            <h2 className="text-white text-center lg:text-[35px] md:text-2xl text-xl !leading-[1.4] mb-2.5">
              {item.title}
            </h2>
            <p className="text-white text-center mb-5 lg:text-base !leading-[1.8] line-clamp-3">
              {item.content}
            </p>
            <Button color="white" type="button" arrow>
              Read more
            </Button>
          </div>
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
        onClick={onPrev}
        className="p-5 absolute top-1/2 -translate-y-1/2 lg:left-8 left-0 cursor-pointer opacity-50 hover:opacity-100 transition"
      >
        <img src="/images/chevron-left.svg" alt="left" />
      </button>
      <button
        onClick={onNext}
        className="p-5 absolute top-1/2 -translate-y-1/2 lg:right-8 right-0 cursor-pointer opacity-50 hover:opacity-100 transition"
      >
        <img src="/images/chevron-right.svg" alt="right" />
      </button>
    </div>
  )
}
