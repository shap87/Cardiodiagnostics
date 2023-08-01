// components
import { Animation, Button } from '@/components/common'

export const About = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <Animation
              type="fadeIn"
              component="h1"
              className="mb-6 leading-[1.2] text-3xl"
            >
              Epi+Gen CHD™ (Rx Only)
            </Animation>

            <Animation
              type="fadeIn"
              component="h4"
              className="mb-6 leading-[1.2] text-lg font-medium"
            >
              Prevention is Priceless.
            </Animation>

            <Animation type="fadeIn" component="p" className="mb-6">
              Coronary heart disease is the most common type of heart disease,
              and the leading cause of heart attacks. Epi+Gen CHD™ is a
              patented Next Generation test that assesses near-term (3-year)
              risk for a heart attack. It is the first and only clinical test
              for coronary heart disease primary prevention that provides
              personalized insights based on two types of DNA biomarkers unique
              to you – genetic and epigenetic.
            </Animation>

            <Animation type="fadeIn" component="p" className="mb-6">
              Understanding your risk is the first step toward prevention. Take
              control of your heart health today!
            </Animation>

            <Animation type="fadeIn">
              <Button color="purple" type="button" arrow>
                Get Heart Healthy
              </Button>
            </Animation>
          </Animation>
          <Animation type="fromRight" className="w-full md:w-[48%]">
            <img src="/images/box_feature-img.png" alt="" />
          </Animation>
        </div>
      </div>
    </section>
  )
}
