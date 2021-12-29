import { useField } from "formik"
import { forwardRef, Ref } from "react"
import DateInput from "../DateInput/DateInput"
import { S_InputFormGroup } from "./inputFormGroup.styled"
import { InputFormGroupProps } from "./inputFormGroup.types"

// this form can only used inside FormGroup

export const DateFormGroup = forwardRef((props: InputFormGroupProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { label, name } = props
  const [field, meta, helpers] = useField(props.name!)

  const { value } = meta

  const { setValue } = helpers

  return (
    <S_InputFormGroup ref={ref}>
      {label && (
        <label className="formGroup__label" htmlFor={name}>
          {label}
        </label>
      )}
      <DateInput
        intent={meta.touched && meta.error ? "error" : undefined}
        className="formGroup__input"
        value={value}
        onChange={(value) => setValue(value)}
      />
      {/* show error message */}
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

DateFormGroup.displayName = "DateInput"
