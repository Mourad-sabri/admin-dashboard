import React, { Fragment, useState } from "react"
import Tooltip from "../Tooltip/Tooltip"
import { SideBarNavItemProps } from "./sideBar.types"
import SideBarItem from "./SideBarItem"
import SideBarSubMenu from "./SideBarSubMenu"
import { useRouter } from "next/router"
import { S_SideBarItemsContainer } from "./sideBar.styled"

const SideBarNavItem = (props: SideBarNavItemProps) => {
  // props
  const { subMenu, title, isSideBarOpen } = props
  const { pathname } = useRouter()
  function toggle() {
    setIsOpen(!isOpen)
  }
  const isActive = subMenu
    ?.map((item) => {
      if (item.link === pathname) {
        return true
      }
    })
    .includes(true)
  const [isOpen, setIsOpen] = useState(isActive || false)
  const renderContent = (
    <>
      {!isSideBarOpen && subMenu && subMenu.length > 0 ? (
        <S_SideBarItemsContainer>
          {subMenu.map((item, i) => {
            return <SideBarItem key={i} {...item} isSideBarOpen={true} />
          })}
        </S_SideBarItemsContainer>
      ) : (
        <div> {title} </div>
      )}
    </>
  )
  return (
    <Fragment>
      <Tooltip content={renderContent} disabled={isSideBarOpen} placement="right" interactive={subMenu && subMenu.length > 0 ? true : false}>
        <SideBarItem {...props} isSideBarOpen={isSideBarOpen} onClick={toggle} isCollapsed={isOpen} />
      </Tooltip>
      {subMenu && subMenu.length > 0 ? <SideBarSubMenu subMenu={subMenu} isSideBarOpen={isSideBarOpen} isOpen={isOpen} /> : null}
    </Fragment>
  )
}

export default SideBarNavItem
