import React, { forwardRef, Fragment, Ref } from "react"
import { UnmountClosed } from "react-collapse"
import { SideBarSubMenuProps } from "./sideBar.types"
import SideBarItem from "./SideBarItem"

const SideBarSubMenu = forwardRef((props: SideBarSubMenuProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { isOpen, subMenu = [], isSideBarOpen } = props
  return (
    <Fragment>
      <div className="sideBarStyled__subMenu" ref={ref}>
        <UnmountClosed isOpened={isSideBarOpen ? isOpen! : false}>
          {subMenu.map((item, i) => {
            return <SideBarItem key={i} {...item} isSideBarOpen={isSideBarOpen} />
          })}
        </UnmountClosed>
      </div>
    </Fragment>
  )
})
export default SideBarSubMenu

SideBarSubMenu.displayName = "SideBarSubMenu"
