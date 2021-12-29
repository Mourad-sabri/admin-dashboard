import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"
import faker from "faker"
import { ChartContainer } from "../../../../components/ChartContainer/ChartContainer"
// fake data

const data = [
  {
    com: "performance",
    a: faker.datatype.number(238),
    b: faker.datatype.number(238),
  },

  {
    com: "quality",
    a: faker.datatype.number(238),
    b: faker.datatype.number(238),
  },
  {
    com: "availability",
    a: faker.datatype.number(238),
    b: faker.datatype.number(238),
  },
  {
    com: "Price",
    a: faker.datatype.number(238),
    b: faker.datatype.number(238),
  },
]

export const LoadBalancerComparison = () => {
  return (
    <>
      <ChartContainer title="LoadBalancer" className="dashboard__LoadBalancer">
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="com" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Zone 1" dataKey="a" stroke="green" fill="green" fillOpacity={0.6} />
            <Radar name="Zone 2" dataKey="b" stroke="orange" fill="orange" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  )
}
