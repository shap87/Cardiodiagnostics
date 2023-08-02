// components
import { Animation } from '@/components/common'
import Link from 'next/link'

const data = [
  {
    description: (
      <>
        While already at an all-time high of $555 billion, costs for treating
        cardiovascular disease will escalate to reach $1.1 trillion{' '}
        <Link href="/" className="text-[#df1f5a]">
          by 2035.
        </Link>
      </>
    ),
    icon: '/images/cardiovascular.png',
  },
  {
    description: (
      <>
        Within 2 years, 43% of those who had a cardiovascular event experienced
        at least 1 new event– costing an average of{' '}
        <Link href="/" className="text-[#df1f5a]">
          over $63,000
        </Link>{' '}
        for each subsequent event.
      </>
    ),
    icon: '/images/cardiovascular1.png',
  },
  {
    description: (
      <>
        Cardiovascular disease costs on average{' '}
        <Link href="/" className="text-[#df1f5a]">
          $18,953 per patient per year.
        </Link>
      </>
    ),
    icon: '/images/cardiovascular3.png',
  },
  {
    description: (
      <>
        Over 67% of inpatient care healthcare expenditures are spent by{' '}
        <Link href="/" className="text-[#df1f5a]">
          the top 5%
        </Link>{' '}
        of plan participants with cardiovascular disease.
      </>
    ),
    icon: '/images/cardiovascular4.png',
  },
]

export const DiseaseCost = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center lg:py-7ddddd">
          <Animation
            type="fromLeft"
            component="h2"
            className="lg:font-extralight font-light text-center lg:text-[49px] md:text-4xl text-3xl leading-normal"
          >
            Cardiovascular disease, including coronary heart disease, is one of
            the costliest medical conditions for health plans to cover
          </Animation>
          <Animation
            type="fromBottom"
            className="mt-14 flex flex-wrap justify-between"
          >
            {data.map((solution, index) => (
              <div
                key={index}
                className="w-full lg:w-[47.25%] flex flex-col lg:mb-6"
              >
                <img
                  className="mx-auto h-[80px] w-[80px] mb-1"
                  src={solution.icon}
                  alt=""
                />
                <p className="text-left text-sm leading-7 text-black">
                  {solution.description}
                </p>
              </div>
            ))}
          </Animation>
          <Animation
            type="fadeIn"
            component="p"
            className="text-black py-7 text-center"
          >
            By making the heart disease risk assessment easy to obtain for your
            members, your health plan members will appreciate better care access
            and can experience improved health outcomes. With a simple finger
            prick, health plans can actualize significant cost savings and
            invest in the right technology– bridging members to life-saving
            preventative care.
          </Animation>
        </div>
      </div>
    </section>
  )
}
