import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import React, { useState } from "react"
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
import { useForceUpdate } from "../../../../hooks/useForceUpdate/useForceUpdate"
// fake data

const data = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]
const config = [{ dataKey: "Amount", color: "burlywood", id: v4(), stopOpacity: [0.17, 0] }]

export const UsersData = () => {
  const data = [
    { Amount: datatype.number(3837323), day: "monday" },
    { Amount: datatype.number(3837323), day: "tuesday" },
    { Amount: datatype.number(3837323), day: "wednesday" },
    { Amount: datatype.number(3837323), day: "thursday" },
    { Amount: datatype.number(3837323), day: "friday" },
    { Amount: datatype.number(3837323), day: "saturday" },
    { Amount: datatype.number(3837323), day: "sunday" },
  ]
  const forceUpdate = useForceUpdate()
  const [value, setValue] = useState("Orders")

  const render = (
    <div className="Dashboard__usersDataHeader-select">
      <select
        onChange={(e) => {
          forceUpdate()
          setValue(e.target.value)
        }}
        value={value}
      >
        <option value="Orders"> Orders </option>
        <option value="Sales"> Sales </option>
        <option value="Payments"> Payement </option>
      </select>
    </div>
  )

  return (
    <ChartContainer className="Dashboard__usersData" title={value} component={render}>
      <AreaComponent data={data} config={config}>
        <Tooltip content={<CustomChartToolTip />} />
        <YAxis tickFormatter={(value, index) => `${condenseNumber(value, "en", { maxPrecision: 1 })} $`} />
        <XAxis dataKey="day" />
        <CartesianGrid />
      </AreaComponent>
    </ChartContainer>
  )
}

//
