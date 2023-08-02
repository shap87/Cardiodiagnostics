// components
import { Layout } from '@/components/common'
import {
  DiseaseCost,
  HeartScreening,
  PreventiveAssessment,
  ProvideOutcomesForm,
  Solution,
} from '@/components/pages/health-plans'

export default function HealthPlans() {
  return (
    <Layout>
      <PreventiveAssessment />
      <Solution />
      <DiseaseCost />
      <HeartScreening />
      <ProvideOutcomesForm />
    </Layout>
  )
}
