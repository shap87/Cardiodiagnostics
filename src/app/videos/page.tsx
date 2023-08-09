// components
import { Card, Layout, Slider } from '@/components/common'
import { Newsletter } from '@/components/pages/home'
import { events, video } from '@/utils/mockData'

export default function Videos() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-[75px] leading-[1.2] w-full mb-12 font-['Montserrat']">
            Video
          </h1>
          <Slider
            classname="lg:h-[600px] h-[500px] mb-14"
            items={events}
            variant="picture"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6 py-14">
            {video.map((el) => (
              <Card
                key={el.id}
                image={el.image}
                id={el.id}
                date={el.date}
                title={el.title}
                content={el.content}
                hideReadMore
              />
            ))}
          </div>
          <Newsletter />
        </div>
      </section>
    </Layout>
  )
}
