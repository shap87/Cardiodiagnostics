'use client'
import { DatePickerField } from '@/components/common'
import { EventsFilterModal } from '@/components/dialogs'
import {
  CalendarIcon,
  FilterIcon,
  GridIcon,
  GroupedListIcon,
  ListIcon,
  LocationPinIcon,
  MagnifyingGlassIcon,
  MapIcon,
} from '@/components/icons'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

const getActiveFiltersCount = (values: {
  query: string
  location: string
  date: string
  locationOption: string
  categories: string[]
  tags: string[]
}) => {
  let count = 0
  if (values.query) count++
  if (values.location) count++
  if (values.date) count++
  if (values.locationOption) count++
  if (values.categories.length > 0) count++
  if (values.tags.length > 0) count++
  return count
}

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [typesListOpened, setTypesListOpened] = useState(false)
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
      {({ values }) => (
        <Form className="flex flex-col md:flex-row gap-2.5 md:gap-0 items-center border border-solid border-[#dedede] p-2.5">
          <div className="flex items-center md:border-y-0 md:border-l-0 border border-solid border-[#dedede] w-full">
            <span className="w-10 flex justify-center">
              <MagnifyingGlassIcon classname="w-5 h-5" />
            </span>
            <Field
              name="query"
              placeholder="Search"
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 w-full"
            />
          </div>
          <div className="flex items-center md:border-y-0 md:border-l-0 border border-solid border-[#dedede] w-full">
            <span className="w-10 flex justify-center">
              <LocationPinIcon classname="w-5 h-5" />
            </span>
            <Field
              name="location"
              placeholder="Near..."
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 w-full"
            />
          </div>
          <div className="flex items-center md:border-y-0 md:border-l-0 border border-solid border-[#dedede] md:w-[180px] w-full">
            <span className="w-10 flex justify-center">
              <CalendarIcon classname="w-5 h-5" />
            </span>
            <DatePickerField
              name="date"
              placeholderText="Dates"
              className="rounded-[1px] border-0 outline-0 py-1.5 px-2.5 h-10 md:w-[140px] w-full"
            />
          </div>
          <div className="flex w-full md:w-auto">
            <div className="relative flex items-center group">
              <button
                type="button"
                className="px-4"
                onClick={() => setShowFilter(true)}
              >
                <FilterIcon classname="w-6 h-6" />
                {getActiveFiltersCount(values) > 0 && (
                  <div className="absolute right-0 -top-2 text-[11px] rounded-full flex items-center justify-center w-4 h-4 text-[#888] bg-[#ddd]">
                    {getActiveFiltersCount(values)}
                  </div>
                )}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 group-hover:flex hidden w-[180px] text-[14px] bg-white p-1 border border-solid border-[#dedede] flex flex-col items-center rounded-[4px]">
                  Show Advanced Search
                  <div className="bg-white z-10 w-3 h-3 -mb-2.5 rotate-45 border-b border-solid border-[#dedede]" />
                </div>
              </button>
            </div>
            <button
              type="button"
              className="px-4 relative group"
              onClick={() => setTypesListOpened(true)}
              onBlur={() => setTypesListOpened(false)}
            >
              <ListIcon classname="w-6 h-6" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 group-hover:flex hidden w-[100px] text-[14px] bg-white p-1 border border-solid border-[#dedede] flex flex-col items-center rounded-[4px]">
                View Types
                <div className="bg-white z-10 w-3 h-3 -mb-2.5 rotate-45 border-b border-solid border-[#dedede]" />
              </div>
              {typesListOpened && (
                <div className="z-40 absolute -bottom-44 left-1/2 -translate-x-1/2 px-2.5 py-1 flex w-[178px] text-[14px] bg-white p-1 border border-solid border-[#dedede] flex flex-col items-center rounded-[4px]">
                  <div className="bg-white z-20 w-3 h-3 -mt-2.5 rotate-45 border-l border-solid border-[#dedede]" />
                  <ul className="w-full">
                    <li className="px-2.5 py-1 text-start flex items-center text-base hover:bg-[#efefef]">
                      <ListIcon classname="w-5 h-5 mr-2.5" /> List
                    </li>
                    <li className="px-2.5 py-1 text-start flex items-center text-base hover:bg-[#efefef]">
                      <GroupedListIcon classname="w-5 h-5 mr-2.5" />
                      Grouped List
                    </li>
                    <li className="px-2.5 py-1 text-start flex items-center text-base hover:bg-[#efefef]">
                      <GridIcon classname="w-5 h-5 mr-2.5" />
                      Grid
                    </li>
                    <li className="px-2.5 py-1 text-start flex items-center text-base hover:bg-[#efefef]">
                      <MapIcon classname="w-5 h-5 mr-2.5" />
                      Map
                    </li>
                    <li className="px-2.5 py-1 text-start flex items-center text-base hover:bg-[#efefef]">
                      <CalendarIcon classname="w-5 h-5 mr-2.5" /> Calendar
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <button
              type="submit"
              className="bg-[#3372f0] font-semibold text-white px-5 py-1 rounded-[4px] rounded-[4px] tracking-[1px] h-[34px] text-[11px]"
            >
              SEARCH
            </button>
          </div>
          <EventsFilterModal
            show={showFilter}
            onClose={() => setShowFilter(false)}
          />
        </Form>
      )}
    </Formik>
  )
}
