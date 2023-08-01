import { Animation } from '@/components/common'

const solutions = [
  {
    title: '1. Request Test Online',
    description:
      'Fill out a simple eligibility questionnaire online, without the need for an office visit.',
    icon: '/images/briefcase-medical-solid.svg',
  },
  {
    title: '2. Collect and Send DNA Sample',
    description:
      'Upon clinician approval, a step-by-step blood sample collection kit will be sent to your home. Send your sample to our CLIA lab using the prepaid return mailer included in your kit.',
    icon: '/images/truck-solid.svg',
  },
  {
    title: '3. Heart Health Report is Generated',
    description:
      'Once the test and analysis are completed, your risk score and prevention insights will be shared with the ordering clinician and made available via Elicity’s online patient portal.',
    icon: '/images/file-lines-solid.svg',
  },
  {
    title: '4. Discuss Your Results',
    description:
      'Review your report with a clinician, who will help tailor a personalized heart disease prevention plan for you.',
    icon: '/images/comments-solid.svg',
  },
]
export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container">
        <div className="text-center">
          <Animation component="h2" type="fromBottom" className="mb-4">
            How it Works
          </Animation>
          <Animation
            type="fromBottom"
            className="mt-14 flex flex-wrap justify-between"
          >
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="w-full sm:w-[47%] lg:w-[20.8%] px-[15px] py-10"
              >
                <img
                  className="mx-auto h-[65px] mb-7 lg:mb-[13.1%]"
                  src={solution.icon}
                  alt=""
                />
                <h3 className="mb-2 text-[#10217d] text-xl text-left font-medium mb-7 lg:mb-[13.1%]">
                  {solution.title}
                </h3>
                <p className="text-left text-sm leading-7">
                  {solution.description}
                </p>
              </div>
            ))}
          </Animation>
        </div>
      </div>
    </section>
  )
}
