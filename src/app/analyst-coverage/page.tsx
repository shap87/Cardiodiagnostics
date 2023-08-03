// components
import { Layout } from '@/components/common'

export default function AnalystCoverage() {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-[url('/images/bg.png')] bg-right-top bg-[length:40%_auto] bg-no-repeat">
        <div className="container">
          <h1 className="lg:text-7xl text-5xl uppercase w-full text-center pt-4 pb-14">
            Analyst coverage
          </h1>
          <img src="/images/covreage.jpg" alt="" className="lg:py-14 py-10" />
          <div className="py-10 md:py-16 text-black">
            <p className="leading-8 text-base ">
              <b>Firm:</b> The Benchmark Company, LLC
            </p>
            <p className="leading-8 text-base ">
              <b>Analyst:</b> Bruce D. Jackson
            </p>
            <p>
              Cardio Diagnostics, Inc. is followed by the analyst listed above.
              Please note that any opinions, estimates or forecasts regarding
              Cardio Diagnostics, Inc.’s performance made by this analyst are
              theirs alone and do not represent opinions, forecasts or
              predictions of Cardio Diagnostics, Inc. or its management. Cardio
              Diagnostics, Inc. does not by its reference above or distribution
              imply its endorsement of or concurrence with such information,
              conclusions or recommendations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
