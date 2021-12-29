import { S_InputFormGroup } from "./inputFormGroup.styled"
import { useField } from "formik"
import { InputFormGroupProps, TextEditorGroupProps } from "./inputFormGroup.types"
import Input from "../Inputs/BaseInput"
import { forwardRef, Ref } from "react"
import { TextEditor } from "../TextEditor/TextEditor"
export const TextEditorGroup = (props: TextEditorGroupProps) => {
  const { label, name } = props

  const [field, meta, helpers] = useField(props.name!)

  const { value } = meta

  const { setValue } = helpers

  return (
    <S_InputFormGroup>
      {label && (
        <label className="formGroup__label" htmlFor={name}>
          {label}
        </label>
      )}
      <TextEditor style={{ marginTop: 5 }} value={value} onChange={(html) => setValue(html)} />
      {/* show error message */}
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
}
