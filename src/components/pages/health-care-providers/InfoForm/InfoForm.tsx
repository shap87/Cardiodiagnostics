'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// components
import { Animation, Button } from '@/components/common'
import Link from 'next/link'

const newsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
export const InfoForm = () => {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-24">
      <div className="container">
        <Animation type="fromBottom">
          <Formik
            validationSchema={newsletterSchema}
            initialValues={{
              name: '',
              last: '',
              email: '',
            }}
            onSubmit={(values) => {
              console.log(values, 'values')
              alert(JSON.stringify(values))
            }}
          >
            {() => (
              <Form className="text-center shadow-form p-[7%] rounded-xl md:rounded-[40px]">
                <h2 className="mb-4 text-[26px] font-medium">
                  Would you like more information on the Epi+Gen CHD test or are
                  you considering it for your patients?
                </h2>
                <h3 className="mb-10 text-[18px] font-medium">
                  Request our Healthcare Professionals Information Guide for the
                  Epi+Gen CHD Test
                </h3>
                <div className="text-left flex flex-wrap items-start justify-between">
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="name" placeholder="Name" />
                  </label>
                  <label className="w-full md:w-[48%] mb-12">
                    <Field name="last" placeholder="Last" />
                  </label>
                </div>
                <label className="w-full mb-12">
                  <Field name="email" placeholder="E-mail" />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="input-error"
                  />
                </label>
                <div className="text-center mx-auto mb-6">
                  <Button
                    className="!px-2.5 !py-4 !text-xs !max-w-[230px] !bg-[#e1388b] !border-[#e1388b] !rounded-full hover:!text-[#e1388b] hover:!bg-transparent"
                    color="red"
                    type="submit"
                  >
                    Receive Your Healthcare Professional Guide
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
