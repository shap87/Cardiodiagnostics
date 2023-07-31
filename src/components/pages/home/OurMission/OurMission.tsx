import { Animation, Button } from '@/components/common'
import { routes } from '@/utils/routes'

export const OurMission = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-y-6">
          <Animation type="fromLeft" className="w-full md:w-[48%]">
            <img className="w-full" src="/images/our-mission.png" alt="" />
          </Animation>
          <Animation
            type="fromRight"
            className="relative z-20 ml-auto w-full md:w-[48%]"
          >
            <h2 className="mb-4">Better Heart Health is Our Mission</h2>
            <p className="mb-4">
              Cardio Diagnostics’ vision is to transform the approach to heart
              disease from treatment-based to prevention-based. We believe that
              prevention and early detection should be the norm, and that
              epigenetics-based technologies driven by artificial intelligence
              will unlock a new era of precision cardiovascular medicine that
              can help save lives and significantly cut unnecessary treatment
              costs.
            </p>
            <p className="mb-4">
              Our team is made up of subject matter experts with deep expertise
              in cardiovascular disease prevention, clinical testing, artificial
              intelligence, and engineering. We also have personal experience
              with heart disease and want to help you and your loved ones avoid
              its devastating impact.
            </p>
            <Button arrow color="blue" href={routes.contact} target="_blank">
              Contact Us
            </Button>
          </Animation>
        </div>
      </div>
    </section>
  )
}
