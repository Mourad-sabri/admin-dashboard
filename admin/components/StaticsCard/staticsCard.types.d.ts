export interface StaticsCardProps {
  title: string // card title
  value: number // card value
  icon?: JSX.Element // title icon
  tag?: JSX.Element // show tag with some data
  children?: JSX.Element //  charts or ProgressBars
  valueIcon?: JSX.Element // show icon with value
  format?: JSX.Element
  cardStyle?: "style-1" | "style-2" /// card style
  maxPrecision?: number
  roundingRule?: "up" | "down" | "auto"
  render?: (value: number) => number | JSX.Element /// render the value in other format or with animation
  className?: string
}
