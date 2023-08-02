// components
import { Animation } from '@/components/common'
import Link from 'next/link'

const data = [
  {
    title: 'Lacks flexibility',
    description:
      'Traditional tests require an in-person clinic visit. With primary care visits down especially due to COVID-19, many patients are cancelling their routine screening.',
    icon: '/images/flexibility.png',
  },
  {
    title: 'Low sensitivity',
    description:
      'Current lipid-based tests have low sensitivity, especially for women.',
    icon: '/images/sensitive-skin.png',
  },
  {
    title: 'Radiation',
    description:
      'Coronary calcium screening can expose patients to potentially harmful ionizing radiation.',
    icon: '/images/radiation.png',
  },
  {
    title: 'Broad timelines',
    description:
      'Current tools use long-term (10-year) windows that do not capture near term risk.',
    icon: '/images/Broad-timelines.png',
  },
]

export const ScreeningMethods = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center lg:py-7ddddd">
          <Animation
            type="fromLeft"
            component="h2"
            className="lg:text-5xl md:text-4xl text-3xl !leading-tight mb-6 pb-2.5"
          >
            Early risk screening can drastically reduce the chances of a life
            altering cardiac event
          </Animation>
          <Animation type="fromBottom" component="p" className="mb-6">
            However, primary care clinicians must still rely on crude tools to
            understand which of their patients are at high risk. Current risk
            screening methods have several limitations:
          </Animation>
          <Animation
            type="fromBottom"
            className="mt-14 flex flex-wrap justify-between"
          >
            {data.map((solution, index) => (
              <div
                key={index}
                className="w-full lg:w-[47.25%] flex flex-col lg:mb-6 lg:items-start items-center mt-7 lg:mt-0"
              >
                <img
                  className="h-[64px] w-[64px] mb-7"
                  src={solution.icon}
                  alt=""
                />
                <h3 className="text-[22px] text-left font-medium mb-7">
                  {solution.title}
                </h3>
                <p className="text-left text-sm leading-7">
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
