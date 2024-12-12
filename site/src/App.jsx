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

function broadcast(value) {
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

function Slide({ index, setSlide, children }) {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView) {
        console.log(index);
        setSlide(index);
        broadcast(index);
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

const numSlides = 8;

export default function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  // const [playBite] = useSound("/bite.mp3");

  return (
    <div className="flex w-[900vw]">
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
      {/* <Map /> */}
      <Slide index={1} setSlide={setActiveSlide}>
        <Intro />
      </Slide>
      {/* <div className="-mt-12 -mb-12 container mx-auto relative z-1">
        <Button onClick={() => broadcast(1)}>Experience it firsthand</Button>
      </div> */}
      <Slide index={2} setSlide={setActiveSlide}>
        <Air />
      </Slide>
      <Slide index={3} setSlide={setActiveSlide}>
        <Coal />
      </Slide>
      <Slide index={4} setSlide={setActiveSlide}>
        <Stations />
      </Slide>
      <Slide index={5} setSlide={setActiveSlide}>
        <Smog />
      </Slide>
      <Slide index={6} setSlide={setActiveSlide}>
        <Solutions />
      </Slide>
      <Slide index={7} setSlide={setActiveSlide}>
        <Closure />
      </Slide>
      <Slide index={8} setSlide={setActiveSlide}>
        <Congestion />
      </Slide>
    </div>
  );
}
