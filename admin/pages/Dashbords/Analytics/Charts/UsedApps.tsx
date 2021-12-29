import { datatype } from "faker"
import React from "react"
import { CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { v4 } from "uuid"
import { AreaComponent } from "../../../../charts/Area/Area"
import { CustomChartToolTip } from "../../../../charts/tools/ChartToolTip"
import ChartContainerTabs, { ChartTab } from "../../../../components/ChartContainer/ChartContainerTabs"
import DateInput from "../../../../core/DateInput/DateInput"
import { useForceUpdate } from "../../../../hooks/useForceUpdate/useForceUpdate"

const config = [{ dataKey: "GB", color: "blue", id: v4() }]

const cards = [{ title: "Total Usage (GB)", value: 6070 }]

// fake data

export const UsedApps = () => {
  const data = [
    { GB: datatype.number(500), day: "monday" },
    { GB: datatype.number(500), day: "tuesday" },
    { GB: datatype.number(500), day: "wednesday" },
    { GB: datatype.number(500), day: "thursday" },
    { GB: datatype.number(500), day: "friday" },
    { GB: datatype.number(500), day: "saturday" },
    { GB: datatype.number(500), day: "sunday" },
  ]

  const forceUpdate = useForceUpdate()

  return (
    <div className="dashboard__usedApps">
      <div className="dashboard__usedApps-header">
        <div className="dashboard__usedApps-header-title">Databases Usage</div>
        <div className="dashboard__usedApps-header-date">
          <DateInput value={new Date()} onChange={() => forceUpdate()} />
        </div>
      </div>
      <div className="dashboard__usedApps-chart">
        <ChartContainerTabs>
          <ChartTab title="MongoDB" cards={cards}>
            <AreaComponent data={data} config={config}>
              <Tooltip content={<CustomChartToolTip />} />
              <XAxis
                dataKey="day"
                className="x-Axis"
                style={{
                  fill: "var(--text-color)",
                }}
              />
              <YAxis
                tickFormatter={(value, index) => `${value} GB`}
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
            </AreaComponent>
          </ChartTab>
          <ChartTab title="Redis" cards={cards}>
            <AreaComponent data={data} config={config}>
              <Tooltip content={<CustomChartToolTip />} />
              <XAxis
                dataKey="day"
                className="x-Axis"
                style={{
                  fill: "var(--text-color)",
                }}
              />
              <YAxis
                tickFormatter={(value, index) => `${value} GB`}
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
            </AreaComponent>
          </ChartTab>
          <ChartTab title="MySQl" cards={cards}>
            <AreaComponent data={data} config={config}>
              <Tooltip content={<CustomChartToolTip />} />
              <XAxis
                dataKey="day"
                className="x-Axis"
                style={{
                  fill: "var(--text-color)",
                }}
              />
              <YAxis
                tickFormatter={(value, index) => `${value} GB`}
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
            </AreaComponent>
          </ChartTab>
          <ChartTab title="PostgreSQl" cards={cards}>
            <AreaComponent data={data} config={config}>
              <Tooltip content={<CustomChartToolTip />} />
              <XAxis
                dataKey="day"
                className="x-Axis"
                style={{
                  fill: "var(--text-color)",
                }}
              />
              <YAxis
                tickFormatter={(value, index) => `${value} GB`}
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
            </AreaComponent>
          </ChartTab>
        </ChartContainerTabs>
      </div>
    </div>
  )
}
