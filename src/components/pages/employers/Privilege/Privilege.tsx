// components
import { Animation } from '@/components/common'

const data = [
  {
    title:
      'Up to $42,000 in health cost-savings per quality-adjusted life year',
    description:
      'In a head-to-head comparison with lipid-based testing that is included in generic benefits packages, using Epi+Gen CHD™ improved cost savings and survival. Incorporating this evidence-based test could save the lives of your employees while decreasing healthcare costs and building a stronger, healthier workforce.',
  },
  {
    title:
      '70% of employee participation in employee wellness is driven by convenience',
    description:
      'We know how busy a workday can get and that finding the time to undergo life-saving testing can be challenging for many employees. Many employees don’t take advantage of health benefits or wellness initiatives due to a lack of convenience. Epi+Gen CHD™ changes that dynamic by enabling your employees to get tested with a cutting-edge test that takes only minutes and may be taken in the privacy of their own homes.',
  },
  {
    title:
      'Up to 144% better at identifying those at risk for coronary heart disease',
    description:
      'In a head-to-head comparison with lipid-based testing that is included in generic benefits packages, using Epi+Gen CHD™ improved cost savings and survival. Incorporating this evidence-based test could save the lives of your employees while decreasing healthcare costs and building a stronger, healthier workforce.',
  },
  {
    title:
      'Over 90% of employees indicate that benefits are key to overall job satisfaction',
    description:
      'We know how busy a workday can get and that finding the time to undergo life-saving testing can be challenging for many employees. Many employees don’t take advantage of health benefits or wellness initiatives due to a lack of convenience. Epi+Gen CHD™ changes that dynamic by enabling your employees to get tested with a cutting-edge test that takes only minutes and may be taken in the privacy of their own homes.',
  },
]

export const Privilege = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center lg:py-7">
          <Animation
            type="fromLeft"
            component="h2"
            className="text-[26px] leading-none"
          >
            Precision-Focused Heart Screening with Epi+Gen CHD™ Offers Your
            Employees Peace of Mind and Your Company Reduced Costs.
          </Animation>
          <Animation
            type="fromBottom"
            className="mt-8 flex flex-wrap justify-between"
          >
            {data.map((solution, index) => (
              <div
                key={index}
                className="w-full lg:w-[47.25%] flex flex-col lg:my-7 my-4"
              >
                <h2 className="lg:text-2xl text-xl mb-4">{solution.title}</h2>
                <p className="text-left text-sm leading-6">
                  {solution.description}
                </p>
              </div>
            ))}
          </Animation>
        </div>
      </div>
    </section>
  )
}
