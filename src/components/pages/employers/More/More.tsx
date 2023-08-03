// components
import { Animation } from '@/components/common'

const data = [
  {
    title: 'Study Finds Career with Lowest Heart Health Score for Women',
    icon: '/images/Study-3.png',
  },
  {
    title: 'Preventive Healthcare in the Employee Wellness Industry',
    icon: '/images/Preventive-1.png',
  },
  {
    title: 'Financial Stress and Coronary Heart Disease',
    icon: '/images/Financial-Stress-and-2.png',
  },
]

export const More = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation type="fromBottom" className="flex flex-col">
          <h2 className="text-[26px] font-medium">
            Read more about the benefits of prioritizing heart health at your
            company:
          </h2>
          <div className="mt-8 flex flex-wrap justify-between">
            {data.map((solution, index) => (
              <div
                key={index}
                className="w-full lg:w-[29.6%] flex flex-col lg:my-7 my-4"
              >
                <img
                  src={solution.icon}
                  alt=""
                  className="mb-6 h-[250px] w-[320px] mx-auto"
                />
                <h3 className="text-xl font-medium !leading-none mx-auto mb-6 text-center lg:text-left">
                  {solution.title}
                </h3>
              </div>
            ))}
          </div>
        </Animation>
      </div>
    </section>
  )
}
