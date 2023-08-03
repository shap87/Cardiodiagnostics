'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// components
import { Animation, Button } from '@/components/common'
import Link from 'next/link'

const newsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
export const ContactForm = () => {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-24">
      <div className="container">
        <Animation type="fromBottom">
          <h2 className="text-center py-7 lg:text-5xl md:text-4xl text-3xl !leading-tight">
            Your employees are your most valuable asset, show them you care
          </h2>
          <h2 className="text-center lg:text-[22px] text-lg leading-tight pb-7">
            Contact us for a customized plan to seamlessly integrate the Epi+Gen
            CHD test into your benefits package
          </h2>
          <Formik
            validationSchema={newsletterSchema}
            initialValues={{
              name: '',
              last: '',
              phone: '',
              email: '',
              company: '',
            }}
            onSubmit={(values) => {
              console.log(values, 'values')
              alert(JSON.stringify(values))
            }}
          >
            {() => (
              <Form className="text-center shadow-form p-[7%] rounded-xl md:rounded-[40px]">
                <div className="text-left flex flex-wrap items-start justify-between">
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="name" placeholder="Name" />
                  </label>
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="last" placeholder="Last" />
                  </label>
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="phone" placeholder="Phone" />
                  </label>
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="email" placeholder="Email Address" />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="input-error"
                    />
                  </label>
                </div>
                <label className="w-full mb-12">
                  <Field name="company" placeholder="Company Name" />
                </label>
                <div className="text-center mx-auto mb-6">
                  <Button
                    className="!px-[80px] !bg-[#e1388b] !border-[#e1388b] !rounded-full hover:!text-[#e1388b] hover:!bg-transparent"
                    color="red"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
                <p className="text-[15px] text-start">
                  Do not submit confidential information such as credit card
                  details, mobile and ATM PINs, OTPs, account passwords, etc.{' '}
                  <Link href="/" className="text-[#df1f5a]">
                    Report Abuse
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </Animation>
      </div>
    </section>
  )
}
