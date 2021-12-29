import { datatype } from "faker"
import React from "react"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import StaticsCard from "../../../../components/StaticsCard/StaticsCard"
import { StaticsCardContainer } from "../../../../components/StaticsCard/StaticsCardContainer"
import Tag from "../../../../core/Tags/Tag"

export const SaasStaticsCard = () => {
  // fake data

  const cards = [
    {
      value: datatype.number(7363636),
      title: "Users",
      data: [
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
      ],
      config: [{ dataKey: "pv", color: "gold", id: v4() }],
    },
    {
      value: datatype.number(7363636),
      title: "Subscriptions",
      data: [
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
      ],
      config: [{ dataKey: "pv", color: "green", id: v4() }],
    },
    {
      value: datatype.number(7363636),
      title: "Fees",
      data: [
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
      ],
      config: [{ dataKey: "pv", color: "dodgerblue", id: v4() }],
    },
    {
      value: datatype.number(7363636),
      title: "Revenue",
      data: [
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
        { pv: datatype.number(3837323) },
      ],
      config: [{ dataKey: "pv", color: "magenta", id: v4() }],
    },
  ]

  return (
    <StaticsCardContainer>
      {cards.map((card) => {
        return (
          <StaticsCard className="Dashboard__staticsCard" title={card.title} value={card.value} tag={<Tag title="+ 63 %" intent="success" />}>
            <AreaComponent data={card.data} config={card.config} />
          </StaticsCard>
        )
      })}
    </StaticsCardContainer>
  )
}
