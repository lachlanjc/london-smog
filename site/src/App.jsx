import React from "react";

// import useSound from "use-sound";
import Air from "./Air/Air";
import Intro from "./Intro/Intro";
import Coal from "./Coal/Intro";
import Closure from "./Closure/Closure";
import Solutions from "./Solutions/Solutions";
import Stations from "./Stations/Stations";
import Congestion from "./Congestion/Congestion";
import Smog from "./Smog/Smog";

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

function Button({ onClick, children }) {
  return (
    <button
      className="bg-accent cursor-pointer rounded-full font-semibold py-6 px-12 text-4xl text-white flex items-center gap-4 hover:brightness-125 transition-[filter]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden
      >
        <path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40l0 148.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48l0 48 0 16 0 48c0 70.7-57.3 128-128 128l-16 0-64 0-.1 0-5.2 0c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7L128 40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm48-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z" />
      </svg>
      {children}
    </button>
  );
}
export default function App() {
  // const [playBite] = useSound("/bite.mp3");
  // const broadcast = useBroadcastEvent();

  return (
    <>
      {/* <Map /> */}
      <Intro />
      <div className="-mt-12 -mb-12 container mx-auto relative z-1">
        <Button onClick={() => broadcast(1)}>Experience it firsthand</Button>
      </div>
      <Air />
      <Coal />
      <Stations />
      <Smog />
      <div className="mt-8 -mb-12 container mx-auto relative z-1">
        <Button onClick={() => broadcast(2)}>Experience the improvement</Button>
      </div>
      <Solutions />
      <Closure />
      <Congestion />
    </>
  );
}
