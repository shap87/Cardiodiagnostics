// components
import { Layout } from '@/components/common'
import {
  About,
  ForWhom,
  ForYou,
  HowItWorks,
  TakeControl,
  WhyEpigen,
} from '@/components/pages/epigen-chd'

export default function EpigenChd() {
  return (
    <Layout>
      <About />
      <WhyEpigen />
      <ForWhom />
      <ForYou />
      <HowItWorks />
      <TakeControl />
    </Layout>
  )
}
