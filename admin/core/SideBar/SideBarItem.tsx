import React, { forwardRef, Ref } from "react"
import { ChevronDown, ChevronRight } from "react-bootstrap-icons"
import { SideBarItemProps } from "./sideBar.types"
import { useRouter } from "next/router"
import { S_SideBarItem } from "./sideBar.styled"

const SideBarItem = forwardRef((props: SideBarItemProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { title, icon, onClick, link, isSideBarOpen, subMenu, isCollapsed } = props
  const { push, pathname } = useRouter()
  function handleNavigation() {
    if (link) {
      push(link)
    } else if (onClick) {
      onClick()
    }
  }
  return (
    <S_SideBarItem {...props} isActive={pathname === link ? true : false}>
      <div ref={ref} className="sideBarStyled__item" onClick={handleNavigation}>
        {icon && (
          <div className="sideBarStyled__icon" style={{ width: isSideBarOpen ? 30 : "100%" }}>
            {icon}
          </div>
        )}
        <div className="sideBarStyled__title" style={{ display: isSideBarOpen ? "flex" : "none" }}>
          {title}
        </div>
        {isSideBarOpen && subMenu && subMenu?.length > 0 && (
          <div className="sideBarStyled__icon">{isCollapsed ? <ChevronDown /> : <ChevronRight />}</div>
        )}
      </div>
    </S_SideBarItem>
  )
})

export default SideBarItem

SideBarItem.displayName = "SideBarItem"
