// components
import { Card, Layout } from '@/components/common'
import { science } from '@/utils/mockData'

export default function Science() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-[75px] leading-[1.2] text-center w-full mb-12 font-['Montserrat']">
            Science
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6 py-7">
            {science.map((el) => (
              <Card
                key={el.id}
                image={el.image}
                id={el.id}
                date={el.date}
                title={el.title}
                content={el.content}
                section="science"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
