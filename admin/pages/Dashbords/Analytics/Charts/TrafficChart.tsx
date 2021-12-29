import { condenseNumber } from "@shopify/condense-number"
import { datatype } from "faker"
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { LineComponent } from "../../../../charts/Line/Line"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
import DateInput from "../../../../core/DateInput/DateInput"

// fake data

const config = [{ dataKey: "visitors", color: "blue", id: v4() }]

const data = [
  { visitors: datatype.number(50730), day: "monday" },
  { visitors: datatype.number(500383), day: "tuesday" },
  { visitors: datatype.number(500373), day: "wednesday" },
  { visitors: datatype.number(500383), day: "thursday" },
  { visitors: datatype.number(50038843), day: "friday" },
  { visitors: datatype.number(500363), day: "saturday" },
  { visitors: datatype.number(500373), day: "sunday" },
]

const renderComponent = <DateInput value={new Date()} />

export const TrafficChart = () => {
  return (
    <>
      <ChartContainer title="Traffic" component={renderComponent} className="dashboard__trafficChart">
        <LineComponent data={data} config={config}>
          <Tooltip content={<CustomChartToolTip />} />
          <XAxis
            dataKey="day"
            className="x-Axis"
            style={{
              fill: "var(--text-color)",
            }}
          />
          <YAxis
            tickFormatter={(value, index) => condenseNumber(value, "en", { maxPrecision: 1 })}
            style={{
              fill: "var(--text-color)",
            }}
          />
          <CartesianGrid
            strokeDasharray="2 2"
            style={{
              stroke: "var(--text-color)",
            }}
          />
        </LineComponent>
      </ChartContainer>
    </>
  )
}
