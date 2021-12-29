import { InputHTMLAttributes, Ref } from "react"
import { Intent, Rounded, Size } from "../../../@types/types"

export interface InputProps extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
  intent?: Intent // apply intent color to the input
  icon?: JSX.Element // left icon
  rightIcon?: JSX.Element // right icon
  isLoading?: boolean // show loading spinner
  rounded?: Rounded // border-radius
  size?: Size // input size
  rigthIconSize?: number
  IconWidthSize?: number
  inputStyle?: any
  inputRef?: Ref<HTMLInputElement> /// pass ref to the input
}
