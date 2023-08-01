// components
import { Animation, Button } from '@/components/common'
import Link from 'next/link'

const ulData = [
  'Are younger than 35.',
  'Have already been diagnosed with coronary heart disease.',
  'Have had a heart attack or any cardiac operation.',
  'Have angina (pain, heaviness, or discomfort in your chest, arm, jaw or shoulder), especially with exertion.',
  'Have had an abnormal cardiac stress test.',
]

export const ForYou = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-y-6">
          <Animation
            type="fromRight"
            component="h2"
            className="p-7 text-center"
          >
            Find out if Epi+Gen CHD™ is right for you
          </Animation>
          <Animation type="fromLeft" className="w-full">
            <div className="flex flex-wrap justify-between gap-10 md:gap-0">
              <div className="flex flex-col items-center w-full md:w-[48%]">
                <img
                  src="/images/user-doctor-solid.svg"
                  className="h-[100px] mb-7"
                  alt=""
                />
                <Animation
                  component="p"
                  type="fadeIn"
                  className="text-sm text-center"
                >
                  Talk to your healthcare provider with the assistance of this{' '}
                  <Link href="/" className="text-[#df1f5a]">
                    easy-to-follow guide.
                  </Link>
                </Animation>
              </div>
              <div className="flex flex-col items-center w-full md:w-[48%]">
                <img
                  src="/images/display-solid.svg"
                  className="h-[100px] mb-7"
                  alt=""
                />
                <Animation
                  component="p"
                  type="fadeIn"
                  className="text-sm text-center"
                >
                  Talk to your healthcare provider with the assistance of this{' '}
                  <Link href="/" className="text-[#df1f5a]">
                    easy-to-follow guide.
                  </Link>
                </Animation>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  )
}
