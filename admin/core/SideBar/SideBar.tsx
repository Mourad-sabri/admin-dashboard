import { forwardRef, Ref } from "react"
import Divider from "../Dividers/Divider"
import { S_SideBar } from "./sideBar.styled"
import { SideBarProps } from "./sideBar.types"
import SideBarNavItem from "./SideBarNavItem"

const SideBar = forwardRef((props: SideBarProps, ref: Ref<HTMLDivElement>) => {
  const { items = [], isOpen } = props

  return (
    <S_SideBar {...props} ref={ref}>
      <div className="sideBarStyled__container">
        {items.map((item, i) => {
          if (item.isDivider) {
            return <Divider {...item} title={isOpen ? item.title : undefined} />
          } else {
            return <SideBarNavItem key={i} isSideBarOpen={isOpen} {...item} />
          }
        })}
      </div>
    </S_SideBar>
  )
})

SideBar.displayName = "SideBar"

export default SideBar
