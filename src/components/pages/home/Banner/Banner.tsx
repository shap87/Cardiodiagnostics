'use client'

import { useWindowSize } from '@/utils/useWindowSize'

export const Banner = () => {
  const { width } = useWindowSize()

  return (
    <section className="pt-14 md:pt-[186px] pb-64 md:pb-[178px] relative">
      <img
        className="absolute left-0 top-0 w-full h-full object-cover -z-10"
        src={
          width >= 768
            ? '/images/banner-home.png'
            : '/images/banner-home-mobile.png'
        }
        alt=""
      />
      <div className="container">
        <div className="text-center md:text-left max-w-[600px]">
          <p className="text-primary text-lg md:text-2xl mb-4 font-semibold">
            CARDIO DIAGNOSTICS
          </p>
          <h2 className="mb-4 text-white text-2xl md:text-[38px] font-bold leading-[1.6]">
            Defining a New Standard of <br />
            Cardiovascular Care by Combining <br />
            Epigenetics, Genetics & AI
          </h2>
          <p className="text-lg md:text-2xl text-white font-medium">
            Join us as we enable a new era of heart disease prevention and early
            detection.
          </p>
        </div>
      </div>
    </section>
  )
}
