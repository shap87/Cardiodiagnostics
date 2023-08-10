'use client'
import React, { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerFieldProps
  extends Omit<ReactDatePickerProps, 'onChange' | 'selected'> {
  name: string
}

export const DatePickerField: FC<DatePickerFieldProps> = (props) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props.name)
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val)
      }}
    />
  )
}
