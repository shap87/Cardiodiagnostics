// components
import { Animation } from '@/components/common'

const data = [
  { title: 'Every 40 seconds', description: 'someone has a heart attack.' },
  {
    title: '655,000 Americans',
    description: 'are killed by heart disease each year.',
  },
  {
    title: '600,000+ people',
    description: 'each year experience their first heart attack.',
  },
  {
    title: '$219 billion',
    description:
      'is the yearly cost of heart disease in healthcare and lost productivity.',
  },
]

export const Stats = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation type="fromBottom">
          <h2 className="lg:py-7 pb-7 text-[26px] font-medium">
            NextGen Technology Allows Better Prevention of Coronary Heart
            Disease
          </h2>
          <div className="flex flex-wrap justify-between">
            {data.map((solution, index) => (
              <div
                key={index}
                className="w-full sm:w-[47%] lg:w-[20.8%] lg:py-10 py-2"
              >
                <img
                  className="w-full lg:mb-7 mb-3 lg:mb-[13.1%]"
                  src="/images/blog-5-6.webp"
                  alt=""
                />
                <h4 className="mb-2 text-xl text-left font-medium text-black text-[18px] font-medium">
                  {solution.title}
                </h4>
                <p className="text-left text-sm leading-6">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </Animation>
      </div>
    </section>
  )
}
