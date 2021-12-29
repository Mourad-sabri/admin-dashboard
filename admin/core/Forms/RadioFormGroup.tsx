import { useField } from "formik"
import { forwardRef, Ref } from "react"
import { CheckBoxProps } from "../CheckBox/checkbox.types"
import Radio from "../Radio/Radio"

import { S_InputFormGroup } from "./inputFormGroup.styled"

// this input can only used inside FormGroup

export const RadioFormGroup = forwardRef((props: CheckBoxProps, ref: Ref<HTMLDivElement>) => {
  const [field, meta, helpers] = useField(props.name!)

  const { value } = meta

  const { setValue } = helpers

  return (
    <S_InputFormGroup ref={ref}>
      <Radio value={value} onChange={(e) => setValue(e.target.value)} {...props} />
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

RadioFormGroup.displayName = "Radio"
