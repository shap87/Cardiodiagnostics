'use client'

// components
import { useWindowSize } from '@/utils/useWindowSize'
import { Animation } from '@/components/common'

export const Banner = () => {
  const { width } = useWindowSize()

  return (
    <Animation
      type="fadeIn"
      className="pt-20 md:pt-[186px] pb-[330px] md:pb-[178px] relative"
    >
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
        <div className="text-left">
          <Animation
            type="fromBottom"
            className="text-primary text-base md:text-[19px] mb-4 font-semibold"
          >
            CARDIO DIAGNOSTICS
          </Animation>
          <Animation
            component="h1"
            type="fromBottom"
            className="max-w-[480px] md:max-w-none mb-4 text-white text-2xl md:text-[52px] font-bold leading-[1.3] md:leading-[1.6]"
          >
            Defining a New Standard of <br className="hidden sm:block" />
            Cardiovascular Care by Combining <br className="hidden sm:block" />
            Epigenetics, Genetics & AI
          </Animation>
          <Animation
            component="p"
            className="text-white mb-5"
            type="fromBottom"
          >
            Join us as we enable a new era of heart disease prevention and early
            detection.
          </Animation>
          <Animation
            component="h3"
            type="fromBottom"
            className="text-white mb-2 max-w-[600px]"
          >
            Reduce the Incidence of Heart Disease &amp; Accelerate Precision
            Medicine
          </Animation>
          <Animation
            component="p"
            className="text-white max-w-[600px]"
            type="fromBottom"
          >
            Enable data-driven multi-stakeholder collaborations among patients,
            innovative providers, health plans, employers, and governmental
            entities to drive transformative results in heart disease prevention
            and intervention.
          </Animation>
        </div>
      </div>
    </Animation>
  )
}
