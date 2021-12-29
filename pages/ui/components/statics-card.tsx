//@ts-nocheck
import { datatype } from "faker"
import Head from "next/head"
import { Fragment, ReactElement } from "react"
import { v4 } from "uuid"
import { AreaComponent } from "../../../admin/charts/Area/Area"
import { BarChartCompoenent } from "../../../admin/charts/Bar/Bar"
import { LineComponent } from "../../../admin/charts/Line/Line"
import StaticsCard from "../../../admin/components/StaticsCard/StaticsCard"
import { StaticsCardContainer } from "../../../admin/components/StaticsCard/StaticsCardContainer"
import CircleProgress from "../../../admin/core/CircleProgress/CircleProgress"
import Tag from "../../../admin/core/Tags/Tag"
import { Layout } from "../../../admin/layouts"

import { ComponentsApi, ComponentsDocs } from "../../../helpers"
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

const data = [
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
  { pv: datatype.number(3837323) },
]
const config = [{ dataKey: "pv", color: "dodgerblue", id: v4() }]

const code1 = () => `
  import StaticsCard from "../../../asmaa/components/StaticsCard/StaticsCard"
  import { StaticsCardContainer } from "../../../asmaa/components/StaticsCard/StaticsCardContainer"
  import { v4 } from "uuid"
  import { AreaComponent } from "../../../asmaa/charts/Area/Area"


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

  function StaticsCardComponent() {
      return (
        <StaticsCardContainer>
        {cards.map((card) => {
          return (
            <StaticsCard title={card.title} value={card.value} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
              <AreaComponent data={card.data} config={card.config} />
            </StaticsCard>
          )
        })}
      </StaticsCardContainer>
      )
  }

  `

const code2 = () => `
  import StaticsCard from "../../../asmaa/components/StaticsCard/StaticsCard"
  import { StaticsCardContainer } from "../../../asmaa/components/StaticsCard/StaticsCardContainer"
  import { v4 } from "uuid"
  import { AreaComponent } from "../../../asmaa/charts/Area/Area"


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

  function StaticsCardComponent() {
      return (
        <StaticsCardContainer>
          {cards.map((card) => {
            return (
              <StaticsCard title={card.title} value={card.value} cardStyle="style-2" tag={<Tag title="+ 23 %" intent="success" />}>
                <AreaComponent data={card.data} config={card.config} />
              </StaticsCard>
            )
          })}
        </StaticsCardContainer>
      )
  }

  `

const code3 = () => `
  import StaticsCard from "../../../asmaa/components/StaticsCard/StaticsCard"
  import { StaticsCardContainer } from "../../../asmaa/components/StaticsCard/StaticsCardContainer"
  import { v4 } from "uuid"
  import { AreaComponent } from "../../../asmaa/charts/Area/Area"
  import { BarChartCompoenent } from "../../../asmaa/charts/Bar/Bar"
  import { LineComponent } from "../../../asmaa/charts/Line/Line"
  import CircleProgress from "../../../asmaa/core/CircleProgress/CircleProgress"

  const data = [
    { pv: datatype.number(3837323) },
    { pv: datatype.number(3837323) },
    { pv: datatype.number(3837323) },
    { pv: datatype.number(3837323) },
    { pv: datatype.number(3837323) },
    { pv: datatype.number(3837323) },
  ]
  const config = [{ dataKey: "pv", color: "dodgerblue", id: v4() }]
  
  function StaticsCardComponent() {
      return (
        <StaticsCardContainer>
        <StaticsCard title="users" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
          <LineComponent data={data} config={config} />
        </StaticsCard>
        <StaticsCard title="subscription" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
          <BarChartCompoenent data={data} config={config} />
        </StaticsCard>
        <StaticsCard title="subscription" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
          <CircleProgress percent={30} size={95} />
        </StaticsCard>
        <StaticsCard title="subscription" value={837363} cardStyle="style-1">
          <AreaComponent data={data} config={config} />
        </StaticsCard>
      </StaticsCardContainer>
      )
  }

  `

const api = [
  { title: "title", value: "string", default: "none" },
  { title: "value", value: "number", default: "none" },
  { title: "cardStyle", value: "style-1 | style-2", default: "style-1" },
  { title: "tag", value: "jsx", default: "none" },
  { title: "icon", value: "jsx", default: "none" },
  { title: "valueIcon", value: "jsx", default: "none" },
  { title: "render (can be used to override the default format) ", value: "function", default: "none" },
]

const StaticsCardPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Statics Cards</title>
      </Head>
      <ComponentsDocs title="statics Card style 1" renderCode={code1}>
        <StaticsCardContainer>
          {cards.map((card, i) => {
            return (
              <StaticsCard key={i} title={card.title} value={card.value} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
                <AreaComponent data={card.data} config={card.config} />
              </StaticsCard>
            )
          })}
        </StaticsCardContainer>
      </ComponentsDocs>

      <ComponentsDocs title="statics Card style 2" renderCode={code2}>
        <StaticsCardContainer>
          {cards.map((card, i) => {
            return (
              <StaticsCard key={i} title={card.title} value={card.value} cardStyle="style-2" tag={<Tag title="+ 23 %" intent="success" />}>
                <AreaComponent data={card.data} config={card.config} />
              </StaticsCard>
            )
          })}
        </StaticsCardContainer>
      </ComponentsDocs>

      <ComponentsDocs title="you can use other charts or progress circle" renderCode={code3}>
        <StaticsCardContainer>
          <StaticsCard title="users" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
            <LineComponent data={data} config={config} />
          </StaticsCard>
          <StaticsCard title="subscription" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
            <BarChartCompoenent data={data} config={config} />
          </StaticsCard>
          <StaticsCard title="subscription" value={837363} cardStyle="style-1" tag={<Tag title="+ 23 %" intent="success" />}>
            <CircleProgress percent={30} size={95} />
          </StaticsCard>
          <StaticsCard title="subscription" value={837363} cardStyle="style-1">
            <AreaComponent data={data} config={config} />
          </StaticsCard>
        </StaticsCardContainer>
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default StaticsCardPage

StaticsCardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
