import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import React, { useState } from "react"
import { CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { LineComponent } from "../../../../charts/Line/Line"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
import DateInput from "../../../../core/DateInput/DateInput"

// fake data

const SalesData = [
  { orders: datatype.number(50730), returns: datatype.number(50730), day: "monday" },
  { orders: datatype.number(50038), returns: datatype.number(50038), day: "tuesday" },
  { orders: datatype.number(50037), returns: datatype.number(50037), day: "wednesday" },
  { orders: datatype.number(50038), returns: datatype.number(50038), day: "thursday" },
  { orders: datatype.number(50038), returns: datatype.number(50038), day: "friday" },
  { orders: datatype.number(50036), returns: datatype.number(50036), day: "saturday" },
  { orders: datatype.number(50037), returns: datatype.number(50037), day: "sunday" },
]

const SalesConfig = [
  { dataKey: "orders", color: "gold", id: v4() },
  { dataKey: "returns", color: "green", id: v4() },
]

const renderComponent = <DateInput value={new Date()} />

export const ReturnedProducts = () => {
  const [date, setDate] = useState(new Date())
  return (
    <ChartContainer title="Returned products " component={renderComponent}>
      <LineComponent data={SalesData} config={SalesConfig}>
        <Tooltip content={<CustomChartToolTip />} />
        <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 2 })} />
        <XAxis dataKey="day" />
        <CartesianGrid />
        <Legend />
      </LineComponent>
    </ChartContainer>
  )
}
