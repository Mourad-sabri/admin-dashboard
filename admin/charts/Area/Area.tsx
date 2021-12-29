import { useMemo } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"
import { AreaChartProps } from "./Area.types"

export const AreaComponent = (props: AreaChartProps) => {
  // props
  const { data, config, children, areaProps } = props
  // pass chart data
  const areaData = useMemo(() => data, [data])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={areaData}>
        <defs>
          {config &&
            config.map((s) => {
              return (
                <linearGradient id={s.id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={s.color} stopOpacity={s.stopOpacity && s.stopOpacity[0] ? s.stopOpacity[0] : 0.8} />
                  <stop offset="95%" stopColor={s.color} stopOpacity={s.stopOpacity && s.stopOpacity[1] ? s.stopOpacity[1] : 0} />
                </linearGradient>
              )
            })}
        </defs>

        {children}

        {config &&
          config.map((area) => {
            //@ts-ignore
            return <Area {...areaProps} type="monotone" dataKey={area.dataKey} stroke={area.color} fillOpacity={1} fill={`url(#${area.id})`} />
          })}
      </AreaChart>
    </ResponsiveContainer>
  )
}
