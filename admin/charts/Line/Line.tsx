import { useMemo } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { LineChartProps } from "./Line.types"

export const LineComponent = (props: LineChartProps) => {
  const { data, config, children, lineProps } = props
  const lineData = useMemo(() => data, [data])
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={lineData}>
        {children}

        {config &&
          config.map((line) => {
            //@ts-ignore
            return <Line {...lineProps} type="monotone" dataKey={line.dataKey} stroke={line.color} />
          })}
      </LineChart>
    </ResponsiveContainer>
  )
}
