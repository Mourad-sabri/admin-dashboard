import React from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import faker from "faker"
import DropDown from "../../../../core/DropDown/DropDown"
import Button from "../../../../core/Buttons/Button"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import DropDownItem from "../../../../core/DropDown/DropDownItem"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"

// fake data

const data = [
  { name: "morocco", value: faker.datatype.number(400) },
  { name: "usa", value: faker.datatype.number(400) },
  { name: "uk", value: faker.datatype.number(400) },
  { name: "Mexico", value: faker.datatype.number(400) },
]

const color = ["green", "orange", "blue", "gray"]

const renderComponent = (
  <DropDown components={<Button icon={<ThreeDotsVertical />} variant="text" />} placement="left-start">
    <DropDownItem> Today </DropDownItem>
    <DropDownItem> yesterday </DropDownItem>
    <DropDownItem> last week </DropDownItem>
  </DropDown>
)

export const VisitorsChart = () => {
  return (
    <ChartContainer title="Visitors" component={renderComponent} className="dashboard__visitorsChart">
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Tooltip content={<CustomChartToolTip />} />
          <Pie data={data} cx="50%" cy="50%" dataKey="value" fill="green" nameKey="name" label={({ value, name }) => `${name}`}>
            {data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
