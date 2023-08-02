// components
import { Animation, Button } from '@/components/common'

export const OurApproach = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <Animation
              type="fadeIn"
              component="h1"
              className="mb-6 leading-[1.2] text-3xl font-medium"
            >
              Epi+Gen CHD™: A NextGen test for improved three-year coronary
              heart disease risk assessment
            </Animation>

            <Animation type="fadeIn" component="p" className="mb-6">
              Epi+Gen CHD™ takes a completely new approach to coronary heart
              disease risk assessment by combining DNA testing of genetic and
              epigenetic biomarkers with artificial intelligence-based analysis
              to generate personalized risk profiles for each patient. This
              evidence-based test is based on patent-pending and proprietary
              technologies.
            </Animation>

            <Animation type="fadeIn">
              <Button color="blue" type="button" arrow>
                Advance Heart Health
              </Button>
            </Animation>
          </Animation>
          <Animation type="fromRight" className="w-full md:w-[48%]">
            <img src="/images/nurse-img.png" alt="" />
          </Animation>
        </div>
      </div>
    </section>
  )
}
