import { Form, Formik, FormikProps } from "formik"
import React, { Children, cloneElement, forwardRef, ForwardRefExoticComponent, JSXElementConstructor, ReactElement, Ref } from "react"
import { FormGroupProps } from "./inputFormGroup.types"

export const FormGroup = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { children, initialValues, className, style } = props
  return (
    <Formik {...props}>
      {({ values }: FormikProps<typeof initialValues>) => {
        return (
          <Form className={className} style={style}>
            {Children.map(children, (child: ReactElement) => {
              return cloneElement(child, { values })
            })}
          </Form>
        )
      }}
    </Formik>
  )
})

FormGroup.displayName = "Form"
