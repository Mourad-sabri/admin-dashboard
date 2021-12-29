import { Children, cloneElement, forwardRef, Ref } from "react"
import { S_ButtonGroup } from "./buttonGroup.styled"
import { ButtonsGroupProps } from "./buttonGroup.types"

const ButtonsGroup = forwardRef((props: ButtonsGroupProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { children, rounded = "sm", intent, variant = "contained", size = "md" } = props
  return (
    <S_ButtonGroup rounded={rounded} {...props}>
      {Children.map(children, (child: any) => {
        return cloneElement(child, { intent, variant, size })
      })}
    </S_ButtonGroup>
  )
})

export default ButtonsGroup

ButtonsGroup.displayName = "ButtonsGroup"
