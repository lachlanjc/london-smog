import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// import useSound from "use-sound";
import Air from "./Air/Air";
import Intro from "./Intro/Intro";
import Coal from "./Coal/Intro";
import Closure from "./Closure/Closure";
import Solutions from "./Solutions/Solutions";
import Stations from "./Stations/Stations";
import Congestion from "./Congestion/Congestion";
import Smog from "./Smog/Smog";
import Sources from "./Sources/Sources";

async function broadcast(value) {
  return false; // disabling this for archiving project
  let key = localStorage.getItem("AIO_KEY");
  if (!key) {
    key = prompt("IO key — can ignore this");
    localStorage.setItem("AIO_KEY", key);
  }
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

function Slide({ index, setSlide, children }) {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView) {
        setSlide(index);
      }
    },
  });

  return (
    <div
      id={`slide-${index}`}
      ref={ref}
      className="snap-start w-screen h-screen overflow-y-auto relative"
    >
      {children}
    </div>
  );
}

const numSlides = 9;

export default function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [broadcasting, setBroadcasting] = useState(true);
  // const [playBite] = useSound("/bite.mp3");

  const onActiveSlideChanged = (index) => {
    console.log("broadcasting", broadcasting);
    if (broadcasting) {
      console.log(index);
      setActiveSlide(index);
      broadcast(index);
    }
  };

  return (
    <div className="flex w-[900vw]">
      <button
        className="fixed z-4 top-2 left-2 p-5 cursor-pointer leading-none text-lg"
        onDoubleClick={() => setBroadcasting((b) => !b)}
      >
        {broadcasting ? null : "•"}
      </button>
      <button
        title="Previous slide"
        disabled={activeSlide === 1}
        onClick={() => {
          document.getElementById(`slide-${activeSlide - 1}`)?.scrollIntoView();
        }}
        className="fixed z-4 top-4 right-20 p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-90"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        title="Next slide"
        disabled={activeSlide === numSlides}
        onClick={() => {
          document.getElementById(`slide-${activeSlide + 1}`)?.scrollIntoView();
        }}
        className="fixed z-4 top-4 right-4 p-2 cursor-pointer bg-accent text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-90"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Slide index={1} setSlide={onActiveSlideChanged}>
        <Intro />
      </Slide>
      <Slide index={2} setSlide={onActiveSlideChanged}>
        <Air />
      </Slide>
      <Slide index={3} setSlide={onActiveSlideChanged}>
        <Coal />
      </Slide>
      <Slide index={4} setSlide={onActiveSlideChanged}>
        <Stations />
      </Slide>
      <Slide index={5} setSlide={onActiveSlideChanged}>
        <Smog />
      </Slide>
      <Slide index={6} setSlide={onActiveSlideChanged}>
        <Solutions />
      </Slide>
      <Slide index={7} setSlide={onActiveSlideChanged}>
        <Congestion />
      </Slide>
      <Slide index={8} setSlide={onActiveSlideChanged}>
        <Closure />
      </Slide>
      <Slide index={9} setSlide={onActiveSlideChanged}>
        <Sources />
      </Slide>
    </div>
  );
}
