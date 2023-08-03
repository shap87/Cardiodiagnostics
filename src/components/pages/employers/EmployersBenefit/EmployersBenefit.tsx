// components
import { Animation, Button } from '@/components/common'

export const EmployersBenefit = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <Animation
              type="fadeIn"
              component="h1"
              className="mb-6 !leading-tight text-3xl md:text-4xl lg:text-[42px]"
            >
              Epi+Gen CHD™: The essential benefit for your employees
            </Animation>

            <Animation
              type="fadeIn"
              component="p"
              className="mb-6 text-base !leading-7"
            >
              Your employees’ heart health matters in the workplace, and for
              good reason. A robust benefits package means happier, healthier
              employees who grow with the company. This also means fewer sick
              days and more shared successes as a team. Whether you’re just
              starting or now expanding current efforts, Epi+Gen CHD™ is here
              to help your company and employees grow better together.
            </Animation>

            <Animation type="fadeIn">
              <Button color="blue" type="button" arrow>
                Prioritize Heart Health
              </Button>
            </Animation>
          </Animation>
          <Animation type="fromRight" className="w-full md:w-[48%]">
            <img src="/images/healthy-employees.png" alt="" />
          </Animation>
        </div>
      </div>
    </section>
  )
}
