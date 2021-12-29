import React, { forwardRef, Ref } from "react"
import { RadioProps } from "./radio.types"
import { S_Radio } from "./radion.styled"

const Radio = forwardRef((props: RadioProps, ref: Ref<HTMLLabelElement>) => {
  // props
  const { label, disabled } = props
  return (
    <S_Radio ref={ref} role="radio" htmlFor={label} disabled={disabled}>
      <input type="radio" id={label} className="radioStyled__input" {...props} />
      <div className="radioStyled__radio" />
      {label}
    </S_Radio>
  )
})

Radio.displayName = "Radio"

export default Radio
