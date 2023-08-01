// components
import { Animation } from '@/components/common'

const solutions = [
  {
    title: 'End-To-End Clinician Involvement',
    description:
      'With Epi+Gen CHD™, we connect you to a clinician so you can start your heart health journey with confidence. When you request the test from one of our telemedicine providers, you’ll be asked to fill out a simple, five-minute assessment to determine your eligibility for this test. Once your sample is processed, your results will be reviewed by a clinician who will help tailor your very own personalized prevention plan.',
    icon: '/images/Clinician-Involvement.png',
  },
  {
    title: 'Convenient and Private At-Home Test',
    description:
      'Take the Epi+Gen CHD™ test in the comfort and privacy of your own home, whenever you want. Once your sample is processed, you can schedule a private, telemedicine consultation with the prescribing clinician. For your security, we are compliant with all applicable regulations, such as HIPAA.',
    icon: '/images/Private-At-Home-Test.png',
  },
  {
    title: 'More Than Just Genetics',
    description:
      'In addition to your genetics, Epi+Gen CHD™ measures your epigenetic DNA biomarkers. Epigenetics takes into account how environment and lifestyle can influence your heart health, providing a more holistic estimate of your three-year risk for coronary heart disease.',
    icon: '/images/Just-Genetics.png',
  },
  {
    title: 'Highly Sensitive Early Risk Evaluation',
    description:
      'We analyze your unique DNA biomarker information through our highly sensitive, proprietary Artificial Intelligence algorithms to determine your likelihood of having a coronary heart disease event in the next 3 years.',
    icon: '/images/Early-Risk-Evaluation.png',
  },
]

export const WhyEpigen = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation type="fromBottom">
          <h3 className="text-center w-full py-7">Why Epi+Gen CHD™</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-7">
            {solutions.map((el, i) => (
              <div key={i} className="">
                <Animation type="fromRight" className="w-full mb-6">
                  <img src={el.icon} alt="" />
                </Animation>
                <Animation
                  type="fadeIn"
                  component="h3"
                  className="text-xl mb-4"
                >
                  {el.title}
                </Animation>
                <Animation
                  type="fadeIn"
                  component="p"
                  className="text-justify leading-[1.8] text-base"
                >
                  {el.description}
                </Animation>
              </div>
            ))}
          </div>
        </Animation>
      </div>
    </section>
  )
}
