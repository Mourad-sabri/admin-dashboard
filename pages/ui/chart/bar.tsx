import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import Head from "next/head"
import { Fragment, ReactElement } from "react"
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { BarChartCompoenent } from "../../../admin/charts/Bar/Bar"
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
import { BarChartCompoenent } from "../../../asmaa/charts/Bar/Bar"
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
    <BarChartCompoenent data={data} config={config}>
      <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
      <XAxis dataKey="day" />
      <CartesianGrid />
      <Tooltip content={<CustomChartToolTip />} />
    </BarChartCompoenent>
  </ChartContainer>
  )
}

`
const code2 = () => `
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { BarChartCompoenent } from "../../../asmaa/charts/Bar/Bar"import { CustomChartToolTip } from "../../../asmaa/charts/tools/ChartToolTip"
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
          <BarChartCompoenent data={data1} config={config1}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </BarChartCompoenent>
        </ChartContainer>
  )
}

`

const BarPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Bar chart </title>
      </Head>
      <ComponentsDocs title="Bar Chart" renderCode={code}>
        <ChartContainer>
          <BarChartCompoenent data={data} config={config}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </BarChartCompoenent>
        </ChartContainer>
      </ComponentsDocs>
      <ComponentsDocs title="Bar Chart multi data " renderCode={code2}>
        <ChartContainer>
          <BarChartCompoenent data={data1} config={config1}>
            <YAxis tickFormatter={(value) => condenseNumber(value, "en", { maxPrecision: 1 })} />
            <XAxis dataKey="day" />
            <CartesianGrid />
            <Tooltip content={<CustomChartToolTip />} />
          </BarChartCompoenent>
        </ChartContainer>
      </ComponentsDocs>
    </Fragment>
  )
}

export default BarPage

BarPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
