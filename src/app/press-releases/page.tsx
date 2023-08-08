// components
import { Button, Card, Layout, Slider } from '@/components/common'
import { pressReleases } from '@/utils/mockData'

export default function PressReleases() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <Slider
            classname="lg:h-[620px] h-[500px] mb-7"
            items={pressReleases.slice(0, 3)}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6 py-7">
            {pressReleases.map((el) => (
              <Card
                key={el.id}
                id={el.id}
                date={el.date}
                title={el.title}
                content={el.content}
                section="press-releases"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
