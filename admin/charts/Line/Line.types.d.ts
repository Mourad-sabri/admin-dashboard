import { LineProps } from "recharts"
import { ChartProps } from "../types"

export interface LineChartProps extends ChartProps {
  lineProps?: LineProps
}
