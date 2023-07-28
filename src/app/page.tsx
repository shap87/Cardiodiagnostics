// components
import {
  Banner,
  HowItWorks,
  Clinical,
  OurMission,
  Newsletter,
} from '@/components/pages/home'
import { Layout } from '@/components/common'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <HowItWorks />
      <Clinical />
      <OurMission />
      <Newsletter />
    </Layout>
  )
}
