// components
import { Animation } from '@/components/common'

const ulData = [
  'Up to $42,000 in health cost-savings per quality-adjusted life-year',
  'More than 90% of the time, using the Epi+Gen CHD test is the dominant cost-saving strategy for sensitive coronary heart disease risk assessment',
  'Up to 144% better at identifying those at risk for coronary heart disease',
]

export const HeartScreening = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <img src="/images/imagee.jpg" alt="" />
          </Animation>
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <Animation
              type="fadeIn"
              component="h2"
              className="mb-6 !leading-[1.5] font-bold lg:text-[40px] md:text-4xl text-3xl"
            >
              Enhance Member Experience and Improve ROI with Precision-Focused
              Heart Screening with Epi+Gen CHD™
            </Animation>

            <Animation
              component="ul"
              type="fromBottom"
              className="list-disc pb-4 pl-4 text-base text-black leading-7"
            >
              {ulData.map((data, index) => (
                <li key={index} className="">
                  {data}
                </li>
              ))}
            </Animation>
          </Animation>
        </div>
      </div>
    </section>
  )
}
