// components
import { Layout, Slider } from '@/components/common'
import { Filter } from '@/components/pages/events'
import { events } from '@/utils/mockData'

export default function Events() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <Slider
            classname="lg:h-[600px] h-[500px] mb-7"
            items={events}
            variant="picture"
          />
          <Filter />
          <p className="py-10 text-lg">No events</p>
        </div>
      </section>
    </Layout>
  )
}
