import { useField } from "formik"
import { forwardRef, Ref } from "react"
import CheckBox from "../CheckBox/Checkbox"
import { CheckBoxProps } from "../CheckBox/checkbox.types"

import { S_InputFormGroup } from "./inputFormGroup.styled"

// this input can only used inside FormGroup

export const CheckBoxFormGroup = forwardRef((props: CheckBoxProps, ref: Ref<HTMLDivElement>) => {
  const [field, meta, helpers] = useField(props.name!)

  const { value } = meta

  const { setValue } = helpers

  return (
    <S_InputFormGroup ref={ref}>
      <CheckBox checked={value} onChange={(e) => setValue(e.target.checked)} {...props} />
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

CheckBoxFormGroup.displayName = "CheckBox"
