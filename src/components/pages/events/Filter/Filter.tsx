'use client'
import { DatePickerField } from '@/components/common'
import { EventsFilterModal } from '@/components/dialogs'
import {
  CalendarIcon,
  FilterIcon,
  ListIcon,
  LocationPinIcon,
  MagnifyingGlassIcon,
} from '@/components/icons'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <Formik
      initialValues={{
        query: '',
        location: '',
        date: '',
        locationOption: '',
        categories: [],
        tags: [],
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
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 w-full"
            />
          </div>
          <div className="flex items-center border-r border-solid border-[#dedede] w-full">
            <span className="w-10 flex justify-center">
              <LocationPinIcon classname="w-5 h-5" />
            </span>
            <Field
              name="location"
              placeholder="Near..."
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 w-full"
            />
          </div>
          <div className="flex items-center border-r border-solid border-[#dedede] w-[180px]">
            <span className="w-10 flex justify-center">
              <CalendarIcon classname="w-5 h-5" />
            </span>
            <DatePickerField
              name="date"
              placeholderText="Dates"
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 w-[140px]"
            />
          </div>
          <button
            type="button"
            className="px-4"
            onClick={() => setShowFilter(true)}
          >
            <FilterIcon classname="w-6 h-6" />
          </button>
          <button type="button" className="px-4">
            <ListIcon classname="w-6 h-6" />
          </button>
          <button
            type="submit"
            className="bg-[#3372f0] font-semibold text-white px-5 py-1 rounded-[4px] rounded-[4px] tracking-[1px] h-[34px] text-[11px]"
          >
            SEARCH
          </button>
          <EventsFilterModal
            show={showFilter}
            onClose={() => setShowFilter(false)}
          />
        </Form>
      )}
    </Formik>
  )
}
