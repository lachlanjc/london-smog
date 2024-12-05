import data from "./coal.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CoalViz() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={768}
      height={512}
      data={data}
      margin={{
        top: 48,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="year" domain={[1700, 2016]} minTickGap={24} />
      {/* <YAxis
        yAxisId="left"
        tickFormatter={(val) => `£${val * 2}K`}
        orientation="left"
      /> */}
      <YAxis
        yAxisId="right"
        orientation="left"
        domain={[0, 135]}
        tickCount={6}
      />
      <Legend />
      <Tooltip separator=": " />
      {/* <Line
        yAxisId="left"
        dataKey="price"
        name="Price per tonne"
        stroke="#8884d8"
        dot={false}
      /> */}
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="consumption"
        name="Million tonnes of coal consumed"
        stroke="#82ca9d"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
    // </ResponsiveContainer>
  );
}
