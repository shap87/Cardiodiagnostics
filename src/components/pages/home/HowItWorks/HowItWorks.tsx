import { Button } from '@/components/common'
import { routes } from '@/utils/routes'

const solutions = [
  {
    title: 'INDIVIDUALS',
    description:
      'Health-conscious Americans can proactively participate in heart disease risk assessments via telehealth',
    icon: '/images/solution-1.png',
  },
  {
    title: 'PROVIDERS',
    description:
      'Innovative providers can improve patient outcomes by scaling evidence-based integrated epigenetic-genetic heart disease risk stratification initiatives.',
    icon: '/images/solution-2.png',
  },
  {
    title: 'HEALTH PLANS',
    description:
      'Competitive health plans can promote integrated epigenetic-genetic tests to reduce the costs associated with chronic heart disease.',
    icon: '/images/solution-3.png',
  },
  {
    title: 'EMPLOYERS',
    description:
      'Savvy employers can protect employee productivity by investing in preventative care',
    icon: '/images/solution-4.png',
  },
  {
    title: 'GOVERNMENT',
    description:
      'Conscientious governmental organizations can reduce the incidence of heart disease in their populations by adopting an inclusive and accessible test regardless of geography or mobility',
    icon: '/images/solution-5.png',
  },
]
export const HowItWorks = () => {
  return (
    <section className="py-10 py-24 relative bg-gray">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-4 text-lg md:text-[33px] font-semibold leading-normal">
            Reduce the Incidence of Heart Disease & Accelerate Precision
            Medicine
          </h3>
          <p className="mb-4 text-lg md:text-[28px] font-medium leading-normal">
            Enable data-driven multi-stakeholder collaborations among patients,
            innovative providers, health plans, employers, and governmental
            entities to drive transformative results in heart disease prevention
            and intervention.
          </p>
          <h2 className="mb-4 text-[22px] md:text-[46px] font-bold">
            With Cardio Diagnostic’s state-of-the-art solutions:
          </h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-y-8 lg:gap-y-20">
            {solutions.map((solution, index) => (
              <li
                key={index}
                className="shadow-card bg-white rounded-4xl w-full sm:w-[47%] lg:w-[31%] py-10 px-4 mx-[1.1%]"
              >
                <img
                  className="mx-auto mb-4 w-[85px]"
                  src={solution.icon}
                  alt=""
                />
                <h4 className="mb-4 text-second-black uppercase text-2xl font-semibold">
                  {solution.title}
                </h4>
                <p className="text-gray-black text-[17px] leading-[2.2]">
                  {solution.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-20">
            <Button color="orange" href={routes.product} target="_blank">
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
