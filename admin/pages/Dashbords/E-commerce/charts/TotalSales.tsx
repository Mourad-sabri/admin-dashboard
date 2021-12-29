import { datatype } from "faker"
import React from "react"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import { Tooltip } from "recharts"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
import Button from "../../../../core/Buttons/Button"
import DropDown from "../../../../core/DropDown/DropDown"
import DropDownItem from "../../../../core/DropDown/DropDownItem"

// fake data

const SalesData = [
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
  { pv: datatype.number(3837323), name: "test", uv: datatype.number(3837323) },
]

const SalesConfig = [
  { dataKey: "pv", color: "gold", id: v4() },
  { dataKey: "uv", color: "green", id: v4() },
]

const renderComponent = (
  <DropDown components={<Button icon={<ThreeDotsVertical />} variant="text" />} placement="left-start">
    <DropDownItem>Transaction</DropDownItem>
    <DropDownItem>Sales</DropDownItem>
    <DropDownItem>Visitors</DropDownItem>
  </DropDown>
)

export const TotalSales = () => {
  return (
    <ChartContainer title="Sales" component={renderComponent} className="dashboard__TotalSales">
      <AreaComponent data={SalesData} config={SalesConfig}>
        <Tooltip content={<CustomChartToolTip />} />
      </AreaComponent>
    </ChartContainer>
  )
}
