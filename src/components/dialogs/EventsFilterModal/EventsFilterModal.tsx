// libs
import { FC, useState } from 'react'
import cn from 'classnames'

// components
import {
  Accordion,
  DatePickerField,
  ModalBaseLayout,
} from '@/components/common'
import {
  CalendarIcon,
  CloseIcon,
  CompasIcon,
  FolderIcon,
  LocationPinIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
} from '@/components/icons'
import { Field, useFormikContext } from 'formik'

interface EventsFilterModalProps {
  show: boolean
  onClose: () => void
}

const categories = [{ value: 'event', label: 'Event' }]

const tags = [{ value: 'tgh', label: 'tgh' }]

export const EventsFilterModal: FC<EventsFilterModalProps> = ({
  show,
  onClose,
}) => {
  const [categoryQuery, setCategoryQuery] = useState('')
  const [tagQuery, setTagQuery] = useState('')
  const { values, setFieldValue, resetForm } = useFormikContext<{
    query: string
    location: string
    date: string
    locationOption: string
    categories: string[]
    tags: string[]
  }>()

  const clearButtonDisabled =
    !values.query &&
    !values.location &&
    !values.date &&
    !values.locationOption &&
    values.categories.length === 0 &&
    values.tags.length === 0
  console.log(clearButtonDisabled)
  return (
    <ModalBaseLayout
      show={show}
      maxWidth="780"
      onClose={onClose}
      title="Show Advanced Search"
      footer={
        <div className="flex items-center justify-between">
          <button
            className="border border-solid border-[#dedede] h-[38px] leading-[38px] uppercase px-7 text-[11px] rounded-[4px] tracking-[1px] font-semibold"
            disabled={clearButtonDisabled}
            type="button"
            onClick={() => resetForm()}
          >
            Clear All
          </button>
          <button className="bg-[#3372f0] text-white rounded-[1px] uppercase h-[38px] leading-[38px] px-7 text-[11px] rounded-[4px] tracking-[1px] font-semibold">
            Search
          </button>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center border border-solid border-[#dedede] w-full">
          <span className="w-9 flex justify-center">
            <MagnifyingGlassIcon classname="w-5 h-5" />
          </span>
          <Field
            name="query"
            placeholder="Search"
            className="rounded-[1px] border-0 outline-0 py-1.5 px-1 h-10 w-full"
          />
        </div>
        <div className="flex items-center border border-solid border-[#dedede] w-full">
          <span className="w-9 flex justify-center">
            <CalendarIcon classname="w-5 h-5" />
          </span>
          <DatePickerField
            name="date"
            placeholderText="Dates"
            className="rounded-[1px] py-1.5 px-1 h-10 w-full"
          />
        </div>
        <div className="flex items-center border border-solid border-[#dedede] w-full">
          <span className="w-9 flex justify-center">
            <LocationPinIcon classname="w-5 h-5" />
          </span>
          <Field
            name="location"
            placeholder="Near..."
            className="rounded-[1px] py-1.5 px-1 h-10 w-full"
          />
        </div>
        <Accordion
          title={
            <div className="flex items-center gap-2.5 text-[18px] py-4">
              <CompasIcon classname="w-5 h-5" /> Location Options
            </div>
          }
          classname="w-full border-b border-solid border-[#dedede]"
          openedStateIcon={<MinusIcon classname="w-5 h-5" />}
          closedStateIcon={<PlusIcon classname="w-5 h-5" />}
        >
          <div className="pb-5">
            <Field
              name="locationOption"
              as="select"
              className="rounded-[1px] py-1.5 px-1 h-10 w-full border border-solid border-[#dedede]"
              placeholder="All Countries"
            >
              <option
                className="rounded-[1px] py-1.5 px-1 h-10 w-full"
                value="usa"
              >
                USA
              </option>
            </Field>
          </div>
        </Accordion>
        <Accordion
          title={
            <div className="flex items-center gap-2.5 text-[18px] pb-4">
              <FolderIcon classname="w-5 h-5" /> Categories
              {values.categories.length > 0 && (
                <div className="rounded-full text-white bg-[#F36752] text-sm flex items-center justify-center w-6 h-6">
                  {values.categories.length}
                </div>
              )}
            </div>
          }
          classname="w-full border-b border-solid border-[#dedede]"
          openedStateIcon={<MinusIcon classname="w-5 h-5" />}
          closedStateIcon={<PlusIcon classname="w-5 h-5" />}
        >
          <div className="pb-5">
            <div className="flex flex-wrap gap-2 mb-2.5">
              {values.categories.map((val) => (
                <div
                  key={val}
                  className="flex items-center bg-[#dff4fd] border border-solid border-[#97dbf9]"
                >
                  <span className="text-[#0095c3] px-2 text-base border-r border-solid border-[#97dbf9]">
                    {categories.find((c) => c.value === val)?.label ?? ''}
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center p-2"
                    onClick={() =>
                      setFieldValue(
                        'categories',
                        values.categories.filter((c) => c !== val),
                      )
                    }
                  >
                    <CloseIcon classname="w-3 h-3 stroke-[#0095c3]" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center border border-solid border-[#dedede] w-full">
              <span className="w-9 flex justify-center">
                <MagnifyingGlassIcon classname="w-5 h-5" />
              </span>
              <input
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.currentTarget.value)}
                placeholder="Search Categories..."
                className="rounded-[1px] border-0 outline-0 py-1.5 px-1 h-10 w-full"
              />
            </div>
            {categories
              .filter((c) =>
                c.label.toLowerCase().includes(categoryQuery.toLowerCase()),
              )
              .map((c) => (
                <label
                  key={c.label}
                  className={cn(
                    'flex items-center px-2.5 py-1 bg-[#e9ecef] !text-base my-1 checkbox !normal-case !font-normal',
                    values.categories.includes(c.value)
                      ? '!text-[#0095c3]'
                      : '!text-[#1e2125]',
                  )}
                >
                  <Field
                    type="checkbox"
                    name="categories"
                    value={c.value}
                    className="w-4"
                  />
                  <span className="icon" /> {c.label}
                </label>
              ))}
          </div>
        </Accordion>
        <Accordion
          title={
            <div className="flex items-center gap-2.5 text-[18px] pb-4">
              <TagIcon classname="w-5 h-5" /> Tags
              {values.tags.length > 0 && (
                <div className="rounded-full text-white bg-[#F36752] text-sm flex items-center justify-center w-6 h-6">
                  {values.tags.length}
                </div>
              )}
            </div>
          }
          classname="w-full"
          openedStateIcon={<MinusIcon classname="w-5 h-5" />}
          closedStateIcon={<PlusIcon classname="w-5 h-5" />}
        >
          <div className="pb-5">
            <div className="flex flex-wrap gap-2 mb-2.5">
              {values.tags.map((val) => (
                <div
                  key={val}
                  className="flex items-center bg-[#dff4fd] border border-solid border-[#97dbf9]"
                >
                  <span className="text-[#0095c3] px-2 text-base border-r border-solid border-[#97dbf9]">
                    {tags.find((c) => c.value === val)?.label ?? ''}
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center p-2"
                    onClick={() =>
                      setFieldValue(
                        'tags',
                        values.tags.filter((c) => c !== val),
                      )
                    }
                  >
                    <CloseIcon classname="w-3 h-3 stroke-[#0095c3]" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center border border-solid border-[#dedede] w-full">
              <span className="w-9 flex justify-center">
                <MagnifyingGlassIcon classname="w-5 h-5" />
              </span>
              <input
                value={tagQuery}
                onChange={(e) => setTagQuery(e.currentTarget.value)}
                placeholder="Search Tags..."
                className="rounded-[1px] border-0 outline-0 py-1.5 px-1 h-10 w-full"
              />
            </div>
            {tags
              .filter((c) =>
                c.label.toLowerCase().includes(tagQuery.toLowerCase()),
              )
              .map((c) => (
                <label
                  key={c.label}
                  className={cn(
                    'flex items-center px-2.5 py-1 bg-[#e9ecef] !text-base my-1 checkbox !normal-case !font-normal',
                    values.tags.includes(c.value)
                      ? '!text-[#0095c3]'
                      : '!text-[#1e2125]',
                  )}
                >
                  <Field
                    type="checkbox"
                    name="tags"
                    value={c.value}
                    className="w-4"
                  />
                  <span className="icon" /> {c.label}
                </label>
              ))}
          </div>
        </Accordion>
      </div>
    </ModalBaseLayout>
  )
}
