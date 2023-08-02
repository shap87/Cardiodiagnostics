// components
import { Animation } from '@/components/common'

export const SurveyResult = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation
          type="fromBottom"
          className="w-full flex flex-wrap justify-between gap-7"
        >
          <Animation type="fadeIn" className="md:w-[47.25%]">
            <img
              src="/images/survey-by-Cardio-heart.png"
              className="w-full"
              alt=""
            />
          </Animation>

          <h2 className="md:w-[47.25%] text-3xl md:text-[32px]">
            In a survey by Cardio Diagnostics, 100% of practicing physicians
            agreed that there is a need for a better method for primary
            cardiovascular prevention screening.l
          </h2>
        </Animation>
      </div>
    </section>
  )
}
