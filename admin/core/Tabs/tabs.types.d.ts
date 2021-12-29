import { CSSProperties } from "react"

export interface TabsContainerProps {
  children?: JSX.Element | JSX.Element[] /// tabs list
  className?: string
  style?: CSSProperties
}

export interface TabProps {
  title?: string
  icon?: JSX.Element
  children?: any
  className?: string
  style?: CSSProperties
}
