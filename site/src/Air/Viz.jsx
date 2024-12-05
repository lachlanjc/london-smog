import React from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import chartData from "../../public/london.json";
import NumberFlow from "@number-flow/react";

export default function Viz() {
  const minSpm = chartData
    .map((item) => item.spm)
    .reduce((a, b) => Math.min(a, b));
  const maxSpm = chartData
    .map((item) => item.spm)
    .reduce((a, b) => Math.max(a, b));
  const lastSpm = chartData.at(-1).spm;

  const [currentValue, setCurrentValue] = React.useState([
    chartData.at(-1).year,
    lastSpm,
  ]);

  const handleMouseMove = (state) => {
    if (state?.activePayload?.length) {
      console.log(state.activePayload[0]);
      const currentYear = Number(state.activePayload[0].payload.year);
      const currentValue = Number(state.activePayload[0].value);
      setCurrentValue([currentYear, currentValue]);
    }
  };

  return (
    <>
      <div>
        {/* <NumberFlowGroup> */}
        <span className="text-6xl font-bold text-center block mb-4 tabular-nums text-white">
          <NumberFlow
            value={Math.round(currentValue[0])}
            format={{
              useGrouping: false,
            }}
            style={{
              "--number-flow-mask-width": "4ch",
              width: "4ch",
              textAlign: "right",
              justifyContent: "end",
            }}
          />
          {": "}
          <NumberFlow
            value={Math.round(currentValue[1])}
            continuous
            style={{
              "--number-flow-mask-width": "3ch",
              width: "3ch",
              textAlign: "right",
              justifyContent: "end",
            }}
          />{" "}
          SPM
        </span>
        {/* </NumberFlowGroup> */}
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <AreaChart
        width={1536}
        height={768}
        data={chartData}
        onMouseMove={handleMouseMove}
      >
        <defs>
          <linearGradient id="fillOrange" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-orange)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-orange)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} opacity={0.25} />
        <XAxis dataKey="year" axisLine={false} minTickGap={24} />
        <YAxis domain={[0, 620]} />
        <Area
          type="monotone"
          dataKey="spm"
          stroke="var(--color-orange)"
          strokeWidth={2}
          fill="url(#fillOrange)"
          // fillOpacity={0.4}
          name="SPM"
          dot={false}
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
}
