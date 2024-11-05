import React from "react";
import { RoomProvider, useBroadcastEvent } from "./liveblocks.config";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
// import useSound from "use-sound";
import chartData from "../public/london.json";

export default function LiveblocksProvider() {
  return (
    <RoomProvider id="air-quality" initialPresence={{}}>
      <App />
    </RoomProvider>
  );
}

const scaleToRange = (value, min, max, scaledMin, scaledMax) => {
  return Math.round(
    ((value - min) / (max - min)) * (scaledMax - scaledMin) + scaledMin,
  );
};

function App() {
  // const [playBite] = useSound("/bite.mp3");
  const broadcast = useBroadcastEvent();
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
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={768}
        height={512}
        data={chartData}
        onMouseMove={handleMouseMove}
      >
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="year" axisLine={false} tickMargin={8} />
        <YAxis domain={[0, maxSpm]} />
        <Line
          type="monotone"
          dataKey="spm"
          stroke="#8884d8"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </>
  );
}
