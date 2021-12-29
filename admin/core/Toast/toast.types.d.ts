import React from "react"
import { Props } from "react-bootstrap-icons"
import { Intent } from "../../../@types/types"

export interface ToastProps {
  position?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" // toast poition
  intent?: Intent /// apply intent color
  icon?: Props | JSX.Element
  message?: string // message to display
  children?: JSX.Element | string
  onHide?: () => void // function to call when the Toast hide
  onShow?: () => void // function to call when the Toast show
  onActionButtonClick?: () => void // function to call when the user click action button require actionButtonTitle to be provided
  actionButtonTitle?: string // show action button
  showToast?: boolean /// show toast default false
  onClose?: () => void /// pass function to hide the Toast
}
