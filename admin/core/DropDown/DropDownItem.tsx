import { forwardRef, Ref } from "react"
import { S_DropDownItem } from "./dropdown.styled"
import { DropDownItemProps } from "./dropdown.types"
import { useRouter } from "next/router"

const DropDownItem = forwardRef((props: DropDownItemProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { children, title, href, onClick, disabeld, icon } = props

  const { push } = useRouter()

  function handleRouting() {
    if (href && !onClick && !disabeld) {
      push(href)
    } else if (onClick && !disabeld) {
      onClick()
    }
  }

  return (
    <S_DropDownItem onClick={handleRouting} {...props} ref={ref}>
      {icon && <span className="dropDownItemStyled__icon">{icon}</span>}
      <span className="dropDownItemStyled__title"> {children || title} </span>
    </S_DropDownItem>
  )
})

DropDownItem.displayName = "DropDownItem"

export default DropDownItem
