import { AreaProps } from "recharts"
import { NamedColor } from "../../../@types/colors-names"

export interface AreaChartProps {
  data?: any[]
  config?: ConfigChartProps[]
  children?: JSX.Element | JSX.Element[]
  areaProps?: AreaProps /// pass props to the area
}

export interface ConfigChartProps {
  id: string
  color: NamedColor | string
  dataKey: string
  stopOpacity?: number[]
}
