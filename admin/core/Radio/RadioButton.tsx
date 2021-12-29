import React, { forwardRef, Ref } from "react"

import { RadioProps } from "./radio.types"
import { S_RadioButton, S_RadioButtonGroup } from "./RadioButton.styled"

const RadioButton = forwardRef((props: RadioProps, ref: Ref<HTMLLabelElement>) => {
  // props
  const { label } = props
  return (
    <S_RadioButton htmlFor={label} ref={ref}>
      <input type="radio" className="radioButtonStyled__input" id={label} {...props} />
      <div className="radioButtonStyled__button">button radio</div>
    </S_RadioButton>
  )
})

export const RadioButtonGroup = forwardRef(({ children }: { children: JSX.Element[] }, ref: any) => {
  return <S_RadioButtonGroup ref={ref}>{children}</S_RadioButtonGroup>
})

RadioButton.displayName = "RadioButton"

RadioButtonGroup.displayName = "RadioButton"

export default RadioButton
