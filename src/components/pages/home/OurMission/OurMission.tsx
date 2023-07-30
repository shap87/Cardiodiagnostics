import { Animation, Button } from '@/components/common'
import { routes } from '@/utils/routes'

export const OurMission = () => {
  return (
    <section className="py-14 bg-[#16c2d5] relative overflow-hidden">
      <div className="w-[30vw] h-[30vw] bg-white right-0 top-0 absolute z-10 rounded-full opacity-25 translate-x-1/2 -translate-y-[40%]" />
      <div className="container">
        <div className="py-6 relative">
          <Animation
            type="fromLeft"
            className="w-11/12 md:w-[82%] h-full md:absolute z-10 top-0 left-0"
          >
            <img
              className="rounded-2xl w-full h-full object-cover"
              src="/images/our-mission.png"
              alt=""
            />
          </Animation>
          <Animation
            type="fromRight"
            className="-mt-20 md:mt-0 relative z-20 ml-auto w-11/12 md:w-[59%] bg-white rounded-2xl px-10 md:px-12 pt-10 md:pt-16 pb-8"
          >
            <h2 className="mb-8 text-[22px] md:text-[32px] font-bold">
              Better Heart Health is Our Mission
            </h2>
            <p className="mb-4 text-lg font-medium leading-[1.56] md:leading-[1.9] text-gray-black">
              Cardio Diagnostics’ vision is to transform the approach to heart
              disease from treatment-based to prevention-based. We believe that
              prevention and early detection should be the norm, and that
              epigenetics-based technologies driven by artificial intelligence
              will unlock a new era of precision cardiovascular medicine that
              can help save lives and significantly cut unnecessary treatment
              costs.
            </p>
            <p className="mb-4 text-lg font-medium leading-[1.56] md:leading-[1.9] text-gray-black">
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
