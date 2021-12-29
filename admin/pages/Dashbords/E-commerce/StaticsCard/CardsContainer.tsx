import { datatype } from "faker"
import React from "react"
import { CreditCard, Eye, InfoCircle } from "react-bootstrap-icons"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import StaticsCard from "../../../../components/StaticsCard/StaticsCard"
import { StaticsCardContainer } from "../../../../components/StaticsCard/StaticsCardContainer"
import Alerts from "../../../../core/Alerts/Alerts"
import Tag from "../../../../core/Tags/Tag"
import CountUp from "react-countup"
import { condenseNumber } from "@shopify/condense-number"
import { GrettingCard } from "../../../../components/GrettingCard/GrettingCard"
import faker from "faker"

function ValueCountUp({ value }: { value: number }) {
  return (
    <CountUp
      start={value > 200 ? value - 200 : value / 2}
      end={value}
      duration={3}
      formattingFn={(v) => condenseNumber(v, "en", { maxPrecision: 2 })}
    />
  )
}

// fake data

const data = [
  {
    data: [
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
    ],
    config: [{ dataKey: "pv", color: "orange", id: v4() }],
    title: "Sales",
    icon: <div> $ </div>,
  },
  {
    data: [
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
    ],
    config: [{ dataKey: "pv", color: "blue", id: v4() }],
    title: "orders",
    icon: undefined,
  },
  {
    data: [
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
    ],
    config: [{ dataKey: "pv", color: "green", id: v4() }],
    title: "visitors",
    icon: <Eye />,
  },
  {
    data: [
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
      { pv: datatype.number(3837323) },
    ],
    config: [{ dataKey: "pv", color: "gray", id: v4() }],
    title: "returns",
    icon: undefined,
  },
]

export const CardsContainer = () => {
  return (
    <GrettingCard name={faker.name.firstName()}>
      <div className="dashboard__staticsCard">
        <StaticsCardContainer>
          {data.map((staticsData) => {
            return (
              <StaticsCard
                render={(value) => {
                  return <ValueCountUp value={value} />
                }}
                title={staticsData.title}
                value={datatype.number(232337)}
                tag={<Tag title="+ 30%" intent="success" />}
                valueIcon={staticsData.icon}
              >
                <AreaComponent data={staticsData.data} config={staticsData.config} />
              </StaticsCard>
            )
          })}
        </StaticsCardContainer>
      </div>
      <div>
        <Alerts icon={<InfoCircle />} intent="primary" variant="outlined" className="dashboard__alerts">
          you have 120 unfulfilled Orders
        </Alerts>
        <Alerts icon={<CreditCard />} intent="success" variant="outlined" className="dashboard__alerts">
          you jsut received 2932 $ in your account
        </Alerts>
      </div>
    </GrettingCard>
  )
}
