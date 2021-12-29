import { useField } from "formik"
import { forwardRef, Ref } from "react"
import Select from "../Select/Select"
import { SelectInputProps } from "../Select/select.types"
import { S_InputFormGroup } from "./inputFormGroup.styled"

// this input can only used inside FormGroup

export const SelectFormGroup = forwardRef((props: SelectInputProps, ref: Ref<HTMLDivElement>) => {
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
      <Select
        intent={meta.touched && meta.error ? "error" : undefined}
        className="formGroup__input"
        {...props}
        value={value}
        handleChange={(value) => setValue(value)}
      />
      {/* show error message */}
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

SelectFormGroup.displayName = "Select"
