// components
import { Layout } from '@/components/common'
import {
  ContactForm,
  EmployersBenefit,
  More,
  Privilege,
  TechnologySolution,
} from '@/components/pages/employers'

export default function Employers() {
  return (
    <Layout>
      <EmployersBenefit />
      <TechnologySolution />
      <Privilege />
      <More />
      <ContactForm />
    </Layout>
  )
}
