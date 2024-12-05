import data from "../public/coal.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Coal() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="year" />
      {/* <YAxis
        yAxisId="left"
        tickFormatter={(val) => `£${val * 2}K`}
        orientation="left"
      /> */}
      <YAxis yAxisId="right" orientation="left" />
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
        name="Million tonnes consumed"
        stroke="#82ca9d"
        dot={false}
      />
    </LineChart>
    // </ResponsiveContainer>
  );
}
