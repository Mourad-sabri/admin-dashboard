import { HtmlHTMLAttributes } from "react"
import { Intent } from "../../../@types/types"

export interface AlertsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  intent?: Intent /// apply intent colors to the alert
  message?: string // message to display in the alert
  icon?: JSX.Element // alert icon
  removable?: boolean /** @default true  */ // add remove btn to the alert
  onClickRemove?: () => void // function to call when the remove btn clicked
  show?: boolean /** @default false */ // show the alert
  variant?: "contained" | "outlined"
}
