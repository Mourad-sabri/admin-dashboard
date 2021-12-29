import { CSSProperties, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import { Intent, Rounded, Size } from "../../../@types/types"

export interface SelectInputProps {
  options?: any[] // options list
  multi?: boolean // allow to select multi values
  value?: string | any[]
  handleChange?: (value?: string | any[]) => void
  pageSize?: number
  itemHeight?: number
  size?: Size // input size
  isLoading?: boolean /// show loading spinner
  icon?: JSX.Element // left icon
  rightIcon?: JSX.Element // right icon
  intent?: Intent // apply intent colors
  placeholder?: string
  disabled?: boolean
  create?: boolean
  className?: string
  style?: CSSProperties
  rounded?: Rounded // border-radius
  isFocus?: boolean
  name?: string
  type?: string
  label?: string
}

export interface SelectOptionProps {
  value?: string
  label?: string
  icon?: JSX.Element
  disabled?: boolean
}
