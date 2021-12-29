import { NamedColor } from "../../@types/colors-names"

export interface ChartProps {
  data?: any[]
  config?: ConfigChartProps[]
  children?: JSX.Element | JSX.Element[]
}

export interface ConfigChartProps {
  id: string
  color: NamedColor | string
  dataKey: string
}
