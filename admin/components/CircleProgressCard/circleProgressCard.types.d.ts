import { CSSProperties, ReactElement } from "react"

export interface CircleProgressCardProps {
  title: string
  component?: ReactElement
  children: ReactElement
  className?: string
  style?: CSSProperties
}
