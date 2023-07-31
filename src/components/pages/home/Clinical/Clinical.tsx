// components
import { Animation } from '@/components/common'

const solutions = [
  {
    title: 'Clinical Evidence',
    description:
      'The test is supported by rigorous study of thousands of patients and is 76% sensitive for men and 78% sensitive for women, which is 1.7 times and 2.4 times more sensitive for men and women, compared to the average sensitivity of lipid-based tests',
    icon: '/images/clinical-item-1.png',
  },
  {
    title: 'Objective Biomarkers',
    description:
      'The test is powered by objective genetic and epigenetic biomarkers and does not rely on self-reported patient data',
    icon: '/images/clinical-item-2.png',
  },
  {
    title: 'Accessibility',
    description:
      'The test can be completed at home via telehealth or in traditional provider settings and does not require patients to fast',
    icon: '/images/clinical-item-3.png',
  },
  {
    title: 'Cost-Savings',
    description:
      'It is associated with up to $42,000 in cost savings per quality-adjusted life year and improved survival',
    icon: '/images/clinical-item-4.png',
  },
]
export const Clinical = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="mt-14 flex flex-wrap items-center justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <Animation type="fadeIn" component="h2" className="mb-4">
              Close the Clinical Care Gap With Epi+Gen CHD
            </Animation>
            <Animation type="fadeIn" component="p">
              Epi+Gen CHD, the only integrated epigenetic-genetic coronary heart
              disease risk assessment test, enables more effective
              decision-making and earlier interventions.
            </Animation>
          </Animation>
          <Animation type="fromRight" className="w-full md:w-[48%]">
            <img src="/images/clinical-people.png" alt="" />
          </Animation>
        </div>
        <Animation
          component="ul"
          type="fromBottom"
          className="mt-16 flex flex-wrap text-center justify-center gap-y-8 lg:gap-y-12"
        >
          {solutions.map((solution, index) => (
            <li
              key={index}
              className="w-full sm:w-[47%] lg:w-[31%] px-4 mx-[1.1%]"
            >
              <img
                className="mx-auto mb-4 w-[80px]"
                src={solution.icon}
                alt=""
              />
              <h4 className="mb-4 text-[#e1388b]">{solution.title}</h4>
              <p>{solution.description}</p>
            </li>
          ))}
        </Animation>
      </div>
    </section>
  )
}
