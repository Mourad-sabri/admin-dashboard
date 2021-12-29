import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { BarChartProps } from "./bar.types"

export const BarChartCompoenent = (props: BarChartProps) => {
  const { children, data, config, BarProps } = props
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        {children}

        {config &&
          config.map((bar) => {
            //@ts-ignore
            return <Bar {...BarProps} dataKey={bar.dataKey} fill={bar.color} />
          })}
      </BarChart>
    </ResponsiveContainer>
  )
}
