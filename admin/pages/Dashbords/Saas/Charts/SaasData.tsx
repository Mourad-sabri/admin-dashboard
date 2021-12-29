import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import React from "react"
import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
import DateInput from "../../../../core/DateInput/DateInput"
// fake data

const data = [
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "monday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "tuesday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "wednesday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "thursday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "friday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "saturday" },
  { pv: datatype.number(3837323), uv: datatype.number(3837323), lv: datatype.number(3837323), day: "sunday" },
]

export const SaasData = () => {
  return (
    <ChartContainer className="Dashboard__SaasData" title="Data Usage Analytics" component={<DateInput value={new Date()} />}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <YAxis tickFormatter={(value, i) => condenseNumber(value, "en", { maxPrecision: 2 })} />
          <XAxis dataKey="day" />
          <Tooltip content={<CustomChartToolTip />} />
          <CartesianGrid />
          <Area type="monotone" dataKey="pv" fill="green" stroke="green" />
          <Bar dataKey="lv" barSize={50} fill="blue" />
          <Line dataKey="uv" type="monotone" stroke="orange" />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
