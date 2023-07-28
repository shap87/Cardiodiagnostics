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
        <div className="text-center">
          <h2 className="mb-12 text-[22px] md:text-[46px] font-bold">
            Close the Clinical Care Gap With Epi+Gen CHD
          </h2>
          <p className="mb-4 text-lg font-medium leading-[1.6] text-gray-black">
            Epi+Gen CHD, the only integrated epigenetic-genetic coronary heart
            disease risk assessment test, enables more effective decision-making
            and earlier interventions.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-[48%]">
              <ul className="text-left">
                {solutions.map((solution, index) => (
                  <li key={index} className="mb-4">
                    <div className="mb-4 flex items-center">
                      <img
                        className="mr-4 w-[50px]"
                        src={solution.icon}
                        alt=""
                      />
                      <h4 className="text-second-black text-[22px] md:text-2xl font-semibold">
                        {solution.title}
                      </h4>
                    </div>
                    <p className="text-gray-black text-lg font-medium">
                      {solution.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[48%]">
              <img src="/images/clinical-people.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
