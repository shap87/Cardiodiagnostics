// components
import { Button, Card, Layout, Slider } from '@/components/common'
import { blog } from '@/utils/mockData'

export default function Blog() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <Slider
            classname="lg:h-[460px] h-[320px] mb-7"
            items={blog.slice(0, 3)}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6 py-7">
            {blog.map((el) => (
              <Card
                key={el.id}
                image={el.image}
                id={el.id}
                date={el.date}
                title={el.title}
                content={el.content}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
