import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import Head from "next/head"
import { Fragment, ReactElement } from "react"
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"

import { LineComponent } from "../../../admin/charts/Line/Line"
import { CustomChartToolTip } from "../../../admin/charts/tools/ChartToolTip"
import { ChartContainer } from "../../../admin/components/ChartContainer/ChartContainer"
import { Layout } from "../../../admin/layouts"
import { ComponentsDocs } from "../../../helpers"

const config = [{ dataKey: "visitors", color: "blue", id: v4() }]

const data = [
  { visitors: datatype.number(50730), day: "monday" },
  { visitors: datatype.number(50038), day: "tuesday" },
  { visitors: datatype.number(50037), day: "wednesday" },
  { visitors: datatype.number(50038), day: "thursday" },
  { visitors: datatype.number(50038), day: "friday" },
  { visitors: datatype.number(50036), day: "saturday" },
  { visitors: datatype.number(50037), day: "sunday" },
]

const config1 = [
  { dataKey: "visitors", color: "blue", id: v4() },
  { dataKey: "sales", color: "green", id: v4() },
]

const data1 = [
  { visitors: datatype.number(50730), sales: datatype.number(50730), day: "monday" },
  { visitors: datatype.number(50038), sales: datatype.number(50038), day: "tuesday" },
  { visitors: datatype.number(50037), sales: datatype.number(50037), day: "wednesday" },
  { visitors: datatype.number(50038), sales: datatype.number(50038), day: "thursday" },
  { visitors: datatype.number(50038), sales: datatype.number(50038), day: "friday" },
  { visitors: datatype.number(50036), sales: datatype.number(50036), day: "saturday" },
  { visitors: datatype.number(50037), sales: datatype.number(50037), day: "sunday" },
]

const code = () => `
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { LineComponent } from "../../../asmaa/charts/Line/Line"
import { CustomChartToolTip } from "../../../asmaa/charts/tools/ChartToolTip"
import { ChartContainer } from "../../../asmaa/components/ChartContainer/ChartContainer"
import { condenseNumber } from "@shopify/condense-number"

const config = [{ dataKey: "visitors", color: "blue", id: v4() }]

const data = [
  { visitors: datatype.number(50730), day: "monday" },
  { visitors: datatype.number(50038), day: "tuesday" },
  { visitors: datatype.number(50037), day: "wednesday" },
  { visitors: datatype.number(50038), day: "thursday" },
  { visitors: datatype.number(50038), day: "friday" },
  { visitors: datatype.number(50036), day: "saturday" },
  { visitors: datatype.number(50037), day: "sunday" },
]

function Charts() {
  return (
    <ChartContainer>
    <LineComponent data={data} config={config}>
      <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
      <XAxis dataKey="day" />
      <CartesianGrid />
      <Tooltip content={<CustomChartToolTip />} />
    </LineComponent>
  </ChartContainer>
  )
}

`
const code2 = () => `
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { LineComponent } from "../../../asmaa/charts/Line/Line"
import { CustomChartToolTip } from "../../../asmaa/charts/tools/ChartToolTip"
import { ChartContainer } from "../../../asmaa/components/ChartContainer/ChartContainer"
import { condenseNumber } from "@shopify/condense-number"

const config = [{ dataKey: "visitors", color: "blue", id: v4() }]

const data = [
  { visitors: datatype.number(50730), day: "monday" },
  { visitors: datatype.number(50038), day: "tuesday" },
  { visitors: datatype.number(50037), day: "wednesday" },
  { visitors: datatype.number(50038), day: "thursday" },
  { visitors: datatype.number(50038), day: "friday" },
  { visitors: datatype.number(50036), day: "saturday" },
  { visitors: datatype.number(50037), day: "sunday" },
]

function Charts() {
  return (
       <ChartContainer>
          <LineComponent data={data1} config={config1}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </LineComponent>
        </ChartContainer>
  )
}

`

const LinePage = () => {
  return (
    <Fragment>
      <Head>
        <title> Line chart </title>
      </Head>
      <ComponentsDocs title="Line Chart" renderCode={code}>
        <ChartContainer>
          <LineComponent data={data} config={config}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </LineComponent>
        </ChartContainer>
      </ComponentsDocs>
      <ComponentsDocs title="Line Chart multi data " renderCode={code2}>
        <ChartContainer>
          <LineComponent data={data1} config={config1}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </LineComponent>
        </ChartContainer>
      </ComponentsDocs>
    </Fragment>
  )
}

export default LinePage

LinePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
