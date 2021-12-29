import { InputHTMLAttributes } from "react"

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string // pass the label
  color?: string // pass color
}
