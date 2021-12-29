import React from "react"
import CircleProgress from "../../../../core/CircleProgress/CircleProgress"
import faker from "faker"
import DropDown from "../../../../core/DropDown/DropDown"
import Button from "../../../../core/Buttons/Button"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import DropDownItem from "../../../../core/DropDown/DropDownItem"
import CircleProgressCard from "../../../../components/CircleProgressCard/CircleProgressCard"

const renderCompnent = (
  <DropDown components={<Button icon={<ThreeDotsVertical />} variant="text" />} placement="top-start">
    <DropDownItem>Today</DropDownItem>
    <DropDownItem>last week</DropDownItem>
  </DropDown>
)

export const ResourceUsage = () => {
  return (
    <div className="dashboard__resourceUsage">
      <CircleProgressCard title="CPU Usage" className="dashboard__resourceUsage-card" component={renderCompnent}>
        <CircleProgress percent={faker.datatype.number(100)} size={200} />
      </CircleProgressCard>
      <CircleProgressCard title="RAM Usage" className="dashboard__resourceUsage-card" component={renderCompnent}>
        <CircleProgress percent={faker.datatype.number(100)} size={200} />
      </CircleProgressCard>
      <CircleProgressCard title="Storage Usage" className="dashboard__resourceUsage-card" component={renderCompnent}>
        <CircleProgress percent={faker.datatype.number(100)} size={200} />
      </CircleProgressCard>
      <CircleProgressCard title="Bandwidth Usage" className="dashboard__resourceUsage-card" component={renderCompnent}>
        <CircleProgress percent={faker.datatype.number(100)} size={200} />
      </CircleProgressCard>
    </div>
  )
}
