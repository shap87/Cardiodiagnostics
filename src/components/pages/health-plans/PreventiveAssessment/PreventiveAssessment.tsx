// components
import { Animation, Button } from '@/components/common'

export const PreventiveAssessment = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[47.25%]">
            <Animation
              type="fadeIn"
              component="h1"
              className="mb-2.5 !leading-[1.2] pb-2.5 lg:text-[50px] md:text-4xl text-3xl"
            >
              Epi+Gen CHD™: Evidence-based preventive heart assessment
            </Animation>

            <Animation
              type="fadeIn"
              component="p"
              className="mb-[5.82%] text-black text-base leading-8"
            >
              At Cardio Diagnostics, we know how important it is for your health
              plan to offer best-in-class heart disease risk assessments that
              can reduce costs and enhance your member experience. Epi+Gen CHD™
              combines DNA testing of genetic and epigenetic biomarkers with
              artificial intelligence-based interpretation to generate
              actionable heart disease risk profiles for every individual,
              encouraging better health outcomes for all of your members.
            </Animation>

            <Animation type="fadeIn">
              <Button color="blue" type="button" arrow>
                Bridge Heart Health
              </Button>
            </Animation>
          </Animation>
          <Animation type="fromRight" className="w-full md:w-[47.25%]">
            <img src="/images/health-plan-benefits.webp" alt="" />
          </Animation>
        </div>
      </div>
    </section>
  )
}
