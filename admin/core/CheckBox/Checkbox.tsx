import { forwardRef, Ref } from "react"
import { S_CheckBox } from "./checkBox.styled"
import { CheckBoxProps } from "./checkbox.types"

const CheckBox = forwardRef((props: CheckBoxProps, ref: Ref<HTMLDivElement>) => {
  const { label } = props
  return (
    <S_CheckBox {...props} htmlFor={label} ref={ref}>
      <input type="checkbox" name="test" className="checkboxStyled__input" id={label} {...props} />
      <div className="checkboxStyled__label">{label}</div>
    </S_CheckBox>
  )
})

export default CheckBox

CheckBox.displayName = "CheckBox"
