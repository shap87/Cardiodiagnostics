// components
import { Layout } from '@/components/common'
import {
  Info,
  InfoForm,
  OurApproach,
  ScreeningMethods,
  Stats,
  SurveyResult,
} from '@/components/pages/health-care-providers'

export default function HealthCareProviders() {
  return (
    <Layout>
      <OurApproach />
      <Stats />
      <ScreeningMethods />
      <SurveyResult />
      <Info />
      <InfoForm />
    </Layout>
  )
}
