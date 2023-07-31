'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// components
import { Animation, Button } from '@/components/common'

const newsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
export const Newsletter = () => {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-24">
      <div className="container">
        <Animation type="fromBottom">
          <Formik
            validationSchema={newsletterSchema}
            initialValues={{
              name: '',
              email: '',
              is_heart_healthy: false,
              is_healthcare_professional: false,
              is_terms_and_conditions: false,
            }}
            onSubmit={(values) => {
              console.log(values, 'values')
              alert(JSON.stringify(values))
            }}
          >
            {() => (
              <Form className="text-center shadow-form p-[7%] rounded-xl md:rounded-[40px]">
                <h2 className="mb-4">The Heart Health Newsletter</h2>
                <p className="mb-10">
                  Filter out the noise and take control of your heart health
                  with our monthly newsletter.
                </p>
                <div className="text-left flex flex-wrap items-start justify-between">
                  <label className="w-full md:w-[48%]">
                    <Field name="name" placeholder="Name" />
                  </label>
                  <label className="w-full md:w-[48%]">
                    <Field name="email" placeholder="Email Address" />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="input-error"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-start gap-x-4 mb-4 py-4 md:pt-10">
                  <label className="checkbox">
                    <Field type="checkbox" name="is_heart_healthy" />
                    <span className="icon" /> I want to get Heart Healthy
                  </label>
                  <label className="checkbox">
                    <Field type="checkbox" name="is_healthcare_professional" />
                    <span className="icon" /> I am a Healthcare Professional
                  </label>
                  <label className="checkbox">
                    <Field type="checkbox" name="is_terms_and_conditions" />
                    <span className="icon" /> I accept the Terms and Conditions.
                  </label>
                </div>
                <div className="text-center max-w-[620px] mx-auto">
                  <Button
                    className="w-full !bg-[#e1388b] !border-[#e1388b] !rounded-full hover:!text-[#e1388b] hover:!bg-transparent"
                    color="red"
                    type="submit"
                  >
                    Get Your Heart Health News
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Animation>
      </div>
    </section>
  )
}
