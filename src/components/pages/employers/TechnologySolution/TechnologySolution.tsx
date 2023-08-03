// components
import { Animation } from '@/components/common'

const ulData = [
  'Despite already being at an all-time high of $555 billion, costs for treating cardiovascular disease will escalate to reach $1.1 trillion by 2035.',
  'The average first-year cost of the initial cardiovascular event for employers is between $41,146 and $79,253.',
  'A cardiovascular event can also indirectly cost employers $1,119/month in workplace absenteeism and short-term disability costs for upwards of three years.',
  'During the first month following a cardiovascular event, work productivity of employees can decrease by more than 56 hours.',
]

export const TechnologySolution = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation
          type="fromLeft"
          className="flex flex-col items-center max-w-[800px] mx-auto lg:py-7 py-4"
        >
          <h2 className="text-center leading-[1.2] mb-6">
            The NextGen Technology solution for that competitive edge.
          </h2>
          <p>
            The earlier that your employees understand their risk for heart
            disease, the sooner your employees will feel empowered to grow
            alongside the company. An estimated 80% of cardiovascular diseases,
            including coronary heart disease, are preventable with early action.
            Epi+Gen CHD™ is the heart health risk assessment test that
            prioritizes employees and their success while helping the company
            address the risk of lost productivity and retention.
          </p>
        </Animation>
        <div className="flex flex-wrap justify-between gap-y-6 lg:py-7 py-4">
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <img src="/images/heart-health-work-benefits.png" alt="" />
          </Animation>
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <Animation
              type="fadeIn"
              component="h2"
              className="mb-6 !leading-[1] font-medium text-[26px]"
            >
              Cardiovascular disease, including coronary heart disease, is one
              of the costliest medical conditions for employers.
            </Animation>

            <Animation
              component="ul"
              type="fromBottom"
              className="list-disc pb-8 pl-8 leading-7"
            >
              {ulData.map((data, index) => (
                <li key={index} className="">
                  {data}
                </li>
              ))}
            </Animation>

            <Animation type="fromBottom" component="p">
              With a simple finger-prick, Epi+Gen CHD allows your employees to
              reap the benefits of a healthy heart in and out of the workplace.
              Companies that prioritize their employees can reduce healthcare
              costs and attain more meaningful ROI on employee development and
              growth.
            </Animation>
          </Animation>
        </div>
      </div>
    </section>
  )
}
