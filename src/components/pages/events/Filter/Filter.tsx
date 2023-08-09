'use client'
import {
  FilterIcon,
  ListIcon,
  LocationPinIcon,
  MagnifyingGlassIcon,
} from '@/components/icons'
import { Field, Form, Formik } from 'formik'

export const Filter = () => {
  return (
    <Formik
      initialValues={{
        query: '',
        location: '',
        date: '',
      }}
      onSubmit={(values) => {
        console.log(values, 'values')
        alert(JSON.stringify(values))
      }}
    >
      {() => (
        <Form className="flex items-center border border-solid border-[#dedede] p-2.5">
          <div className="flex items-center border-r border-solid border-[#dedede] w-full">
            <span className="w-10 flex justify-center">
              <MagnifyingGlassIcon classname="w-5 h-5" />
            </span>
            <Field
              name="query"
              placeholder="Search"
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5"
            />
          </div>
          <div className="flex items-center border-r border-solid border-[#dedede] w-full">
            <span className="w-10 flex justify-center">
              <LocationPinIcon classname="w-5 h-5" />
            </span>
            <Field
              name="location"
              placeholder="Near..."
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5"
            />
          </div>
          <div className="flex items-center border-r border-solid border-[#dedede] w-full">
            <Field
              name="date"
              type="date"
              placeholder="Dates"
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5"
            />
          </div>
          <button className="px-4">
            <FilterIcon classname="w-5 h-5" />
          </button>
          <button className="px-4">
            <ListIcon classname="w-5 h-5" />
          </button>
          <button className="bg-[#3372f0] text-white px-5 py-1 rounded-[1px]">
            SEARCH
          </button>
        </Form>
      )}
    </Formik>
  )
}
