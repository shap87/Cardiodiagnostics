// components
import { Animation } from '@/components/common'

export const Solution = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation type="fromBottom" className="w-full">
          <div className="flex flex-col items-center max-w-[800px] mx-auto md:py-7">
            <h2 className="text-center text-3xl md:text-4xl font-light mb-[2.75%] pb-2.5 !leading-normal">
              The NextGen Solution to Drive Better Health Outcomes, One Member
              at a Time
            </h2>
            <p className="text-center text-black leading-8">
              The cost of cardiovascular disease is high, both for members and
              their health plans. Yet, up to 80% of these Coronary Heart
              Disease-related events are preventable. By including Epi+Gen CHD
              in your health plan offerings, you can champion prevention and
              health equity for your members while minimizing costly heart
              attacks and cardiovascular disease-related hospitalizations.
            </p>
          </div>
        </Animation>
      </div>
    </section>
  )
}
