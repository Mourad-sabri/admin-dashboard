import { CSSProperties, ReactElement } from "react"

export interface ChartContainerProps {
  children: JSX.Element
  title?: string
  icon?: JSX.Element
  component?: ReactElement
  className?: string
  style?: CSSProperties
}

export interface ChartContainerTabsProps {
  children?: JSX.Element | JSX.Element[]
}

interface CardsProps {
  title?: string
  value?: number
}

export interface ChartTabProps {
  children?: JSX.Element
  title?: string
  cards?: CardsProps[]
}
