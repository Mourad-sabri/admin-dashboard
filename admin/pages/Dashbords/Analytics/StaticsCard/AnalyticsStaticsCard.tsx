import { datatype } from "faker"
import React from "react"
import { Cash, Grid, HddStack } from "react-bootstrap-icons"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import { BarChartCompoenent } from "../../../../charts/Bar/Bar"
import { LineComponent } from "../../../../charts/Line/Line"
import StaticsCard from "../../../../components/StaticsCard/StaticsCard"
import { StaticsCardContainer } from "../../../../components/StaticsCard/StaticsCardContainer"

// fake data

const Data1 = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]

const Config1 = [{ dataKey: "pv", color: "gray", id: v4() }]

const Data2 = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]

const Config2 = [{ dataKey: "pv", color: "green", id: v4() }]

const Data3 = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]

const Config3 = [{ dataKey: "pv", color: "blue", id: v4() }]

const Data4 = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]

const Config4 = [{ dataKey: "pv", color: "gold", id: v4() }]

export const AnalyticsStaticsCard = () => {
  return (
    <StaticsCardContainer>
      <StaticsCard cardStyle="style-2" title="Projects" value={20} icon={<HddStack style={{ fontSize: 20, marginLeft: 10 }} />}>
        <BarChartCompoenent data={Data1} config={Config1} />
      </StaticsCard>
      <StaticsCard cardStyle="style-2" title="DataBases" value={5383} icon={<HddStack style={{ fontSize: 20, marginLeft: 10 }} />}>
        <LineComponent data={Data2} config={Config2} />
      </StaticsCard>
      <StaticsCard cardStyle="style-2" title="Active Apps" value={20} icon={<Grid style={{ fontSize: 20, marginLeft: 10 }} />}>
        <AreaComponent data={Data3} config={Config3} />
      </StaticsCard>
      <StaticsCard
        cardStyle="style-2"
        title="Total Paid"
        valueIcon={<span style={{ marginRight: 3 }}>$ </span>}
        value={228282}
        icon={<Cash style={{ fontSize: 20, marginLeft: 10 }} />}
      >
        <AreaComponent data={Data4} config={Config4} />
      </StaticsCard>
    </StaticsCardContainer>
  )
}
