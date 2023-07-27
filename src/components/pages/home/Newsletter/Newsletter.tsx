'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// components
import { Button } from '@/components/common'

const newsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
export const Newsletter = () => {
  return (
    <section className="py-10 py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-[22px] md:text-[46px] font-bold">
            The Heart Health Newsletter
          </h2>
          <p className="mb-4 text-lg font-medium leading-[1.6] text-gray-black">
            Filter out the noise and take control of your heart health with our
            monthly newsletter.
          </p>
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
              <Form className="mt-12 text-left shadow-form p-8 md:p-10 rounded-[22px] mx-auto max-w-[940px]">
                <div className="flex flex-wrap items-start justify-between">
                  <label className="w-full md:w-[48%]">
                    <p>
                      Name <span>*</span>
                    </p>
                    <Field name="name" placeholder="Enter Name" />
                  </label>
                  <label className="w-full md:w-[48%]">
                    <p>
                      Email <span>*</span>
                    </p>
                    <Field name="email" placeholder="Enter Email" />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="input-error"
                    />
                  </label>
                </div>
                <h4 className="mt-4 md:mt-7 text-lg text-second-black mb-4">
                  Who am I *
                </h4>
                <div className="flex flex-wrap items-start gap-x-4 mb-4">
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
                <Button
                  className="w-full py-6 px-1 text-sm md:text-2xl"
                  color="red"
                  type="submit"
                >
                  Get Your Heart Health News
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}
