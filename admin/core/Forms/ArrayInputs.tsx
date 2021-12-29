import { ArrayHelpers, FieldArrayConfig, FieldArrayRenderProps } from "formik"
import React, { forwardRef, Ref } from "react"
import dynamic from "next/dynamic"

const FieldArray = dynamic<FieldArrayConfig>(() => import("formik").then((mod) => mod.FieldArray), { ssr: false })

interface ArrayInputOptions extends ArrayHelpers {
  values: any
}

interface ArrayInputFormGroupProps {
  children: (props: ArrayInputOptions) => JSX.Element | JSX.Element[]
  values?: any
  name: string
}

const ArrayInputs = forwardRef((props: ArrayInputFormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { children, values, name } = props

  return (
    <FieldArray name={name}>
      {(props) => {
        return children({ ...props, values })
      }}
    </FieldArray>
  )
})

ArrayInputs.displayName = "ArrayInput"

export default ArrayInputs
