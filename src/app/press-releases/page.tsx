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
            items={pressReleases.slice(0, 3).map((el) => (
              <div key="item1" className="flex flex-col items-center">
                <h2 className="text-white text-center lg:text-[35px] md:text-2xl text-xl leading-[1.4] mb-2.5">
                  {el.title}
                </h2>
                <p className="text-white text-center mb-5 lg:text-base !leading-[1.8] line-clamp-3">
                  {el.content}
                </p>
                <Button color="white" type="button" arrow>
                  Read more
                </Button>
              </div>
            ))}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-6 p-7">
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
