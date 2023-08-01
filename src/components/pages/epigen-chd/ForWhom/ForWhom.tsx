// components
import { Animation, Button } from '@/components/common'

const ulData = [
  'Are younger than 35.',
  'Have already been diagnosed with coronary heart disease.',
  'Have had a heart attack or any cardiac operation.',
  'Have angina (pain, heaviness, or discomfort in your chest, arm, jaw or shoulder), especially with exertion.',
  'Have had an abnormal cardiac stress test.',
]

export const ForWhom = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <img src="/images/Who-should-take.png" alt="" />
          </Animation>
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <Animation
              type="fadeIn"
              component="h2"
              className="mb-6 leading-[1.2] font-bold"
            >
              Who should take Epi+Gen CHD™?
            </Animation>

            <Animation
              type="fadeIn"
              component="p"
              className="mb-4 text-base leading-7"
            >
              Our test is designed for those over the age of 35 who are
              interested in determining their risk for coronary heart disease.
              It is not appropriate for those who:
            </Animation>

            <Animation
              component="ul"
              type="fromBottom"
              className="list-disc pb-4 pl-4 text-base leading-7"
            >
              {ulData.map((data, index) => (
                <li key={index} className="">
                  {data}
                </li>
              ))}
            </Animation>

            <Animation
              type="fadeIn"
              component="p"
              className="mb-6 text-base leading-7"
            >
              If you are unsure about any of the above, feel free to contact us
              and we will connect you with a certified medical representative to
              see if you qualify.
            </Animation>
          </Animation>
        </div>
      </div>
    </section>
  )
}
