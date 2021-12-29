import Tippy from "@tippyjs/react"
import { S_DropDown } from "./dropdown.styled"
import { DropDownProps } from "./dropdown.types"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale-extreme.css"
import { forwardRef, Ref } from "react"
const DropDown = forwardRef((props: DropDownProps, ref: Ref<HTMLDivElement>) => {
  // props

  const { children, components } = props

  const DropDownList = <S_DropDown>{children}</S_DropDown>

  return (
    <Tippy placement="bottom" trigger="click" interactive {...props} content={DropDownList} theme="asmaa" animation="scale-extreme">
      {components}
    </Tippy>
  )
})

export default DropDown

DropDown.displayName = "DropDown"
