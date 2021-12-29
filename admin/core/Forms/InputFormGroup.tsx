import { S_InputFormGroup } from "./inputFormGroup.styled"
import { useField } from "formik"
import { InputFormGroupProps } from "./inputFormGroup.types"
import Input from "../Inputs/BaseInput"
import { forwardRef, Ref } from "react"

// this input can only used inside FormGroup

export const InputFormGroup = forwardRef((props: InputFormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { label, name } = props

  const [field, meta, helpers] = useField(props.name!)

  return (
    <S_InputFormGroup ref={ref}>
      {label && (
        <label className="formGroup__label" htmlFor={name}>
          {label}
        </label>
      )}
      <Input className="formGroup__input" intent={meta.touched && meta.error ? "error" : undefined} {...field} {...props} id={name} />
      {/* show error message */}
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

InputFormGroup.displayName = "Input"
