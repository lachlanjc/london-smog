import React from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
// import useSound from "use-sound";
import chartData from "../public/london.json";

function broadcast(value) {
  const key = localStorage.getItem("AIO_KEY");
  if (!key) return;
  return fetch(
    "https://io.adafruit.com/api/v2/lachlanjc/feeds/airquality/data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AIO-KEY": key,
      },
      body: JSON.stringify({ value }),
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      // console.error(err);
      throw new Error(err);
    });
}

const scaleToRange = (value, min, max, scaledMin, scaledMax) => {
  return Math.round(
    ((value - min) / (max - min)) * (scaledMax - scaledMin) + scaledMin,
  );
};

export default function App() {
  // const [playBite] = useSound("/bite.mp3");
  // const broadcast = useBroadcastEvent();
  const [currentLevel, setCurrentLevel] = React.useState(0);

  const minSpm = chartData
    .map((item) => item.spm)
    .reduce((a, b) => Math.min(a, b));
  const maxSpm = chartData
    .map((item) => item.spm)
    .reduce((a, b) => Math.max(a, b));

  const handleMouseMove = (state) => {
    if (state && state.activePayload && state.activePayload.length) {
      const currentValue = Number(state.activePayload[0].value);
      // map currentValue to 0-255
      const level = scaleToRange(currentValue, minSpm, maxSpm, 0, 255);
      setCurrentLevel(level);
      if (level !== currentLevel) {
        broadcast(level);
        console.log(level);
      }
    }
  };

  return (
    <>
      <div>
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
            display: "block",
            marginBottom: "1rem",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {currentLevel} / 256
        </span>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <AreaChart
        width={768}
        height={512}
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
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="year" axisLine={false} tickCount={4} />
        <YAxis domain={[0, maxSpm]} />
        <Area
          type="monotone"
          dataKey="spm"
          stroke="var(--color-orange)"
          strokeWidth={2}
          fill="url(#fillOrange)"
          // fillOpacity={0.4}
          dot={false}
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
}
