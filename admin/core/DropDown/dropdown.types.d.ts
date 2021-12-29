import { TippyProps } from "@tippyjs/react"
import React from "react"
import { Props } from "react-bootstrap-icons"

export interface DropDownProps extends Partial<Omit<TippyProps, "children">> {
  children?: JSX.Element | JSX.Element[] // pass dropDown items
  components?: JSX.Element // target Components
}

export interface DropDownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string // routing link
  onClick?: () => void // pass function to call when the user click the dropdown item
  disabeld?: boolean // disable the item
  icon?: Props | JSX.Element // dropdownItem icon
}
