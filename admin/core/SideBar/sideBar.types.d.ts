export interface SideBarProps {
  items?: any[] // sideBarItems
  isOpen?: boolean /// isSideBar open
  border?: boolean // showSideBar with border
}

export interface SideBarItemProps {
  title?: string
  icon?: JSX.Element
  isSideBarOpen?: boolean
  onClick?: () => void
  link?: string
  subMenu?: any[]
  isCollapsed?: boolean
  isActive?: boolean
}

export interface SideBarSubMenuProps {
  isOpen?: boolean
  subMenu?: any[]
  isSideBarOpen?: boolean
}

export interface SideBarNavItemProps {
  subMenu?: any[]
  title?: string
  icon?: JSX.Element
  isSideBarOpen?: boolean
}
