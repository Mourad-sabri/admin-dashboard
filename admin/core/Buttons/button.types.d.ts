import { ButtonHTMLAttributes } from "react"
import { Props } from "react-bootstrap-icons"
import { Intent, Rounded, Size, Variant } from "../../../@types/types"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: Intent // apply intent colors to the button error, success, ...
  rounded?: Rounded | "full" // border-radius
  variant?: Variant | "text" // button variant
  size?: Size // button size
  isLoading?: boolean /**@default false */ // loading spinner
  icon?: Props // left icon
  rigthIcon?: Props // right icon
  href?: string /// link
}
