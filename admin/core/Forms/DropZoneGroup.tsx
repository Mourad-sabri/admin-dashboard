import { useField } from "formik"
import { forwardRef, Ref } from "react"
import DropZone from "../DropZone/DropZone"
import { DropZoneProps } from "../DropZone/dropZone.types"
import { S_InputFormGroup } from "./inputFormGroup.styled"

// this input can only used inside FormGroup

export const DropZoneFormGroup = forwardRef((props: DropZoneProps, ref: Ref<HTMLDivElement>) => {
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
      <DropZone onChange={(value) => setValue(value)} />
      {/* show error message */}
      {meta.touched && meta.error ? <div className="formGroup__errorMessage">{meta.error}</div> : null}
    </S_InputFormGroup>
  )
})

DropZoneFormGroup.displayName = "DropZone"
