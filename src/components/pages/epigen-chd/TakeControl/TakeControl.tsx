// components
import { Animation, Button } from '@/components/common'

export const TakeControl = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Animation type="fromBottom" className="flex flex-col items-center">
          <Animation
            component="h2"
            type="fadeIn"
            className="mb-[2.75%] text-center"
          >
            Take Control of Your Heart Health Today
          </Animation>
          <Button type="button" color="purple" arrow>
            Get Heart Healthy
          </Button>
        </Animation>
      </div>
    </section>
  )
}
