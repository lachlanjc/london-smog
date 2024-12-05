import { useRef, useState, useEffect } from "react";
import stations from "./stations.json";

import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGFja2NsdWIiLCJhIjoiY2pscGI1eGdhMGRyNzN3bnZvbGY5NDBvZSJ9.Zm4Zduj94TrgU8h890M7gA";

// type Markers = Array<MarkerProps & { key: string }>;

const STATUS_COLORS = {
  Coal: "rose",
  "Coal, Diesel": "red",
  Diesel: "amber",
  "Oil, Gas": "neutral",
  Waste: "sky",
}; // as const;
const STATUS_KEYS = Object.keys(STATUS_COLORS);
// as Array<
//   keyof typeof STATUS_COLORS
// >;

const initialViewState = {
  latitude: 51.5074,
  longitude: -0.1278,
  zoom: 10.5,
  bearing: 0,
  pitch: 20,
};

export default function Stations() {
  const mapRef = useRef(null);
  const rootRef = useRef(null);

  return (
    <>
      <style>{`.mapboxgl-canvas, .mapboxgl-marker { position: absolute !important; }`}</style>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{
          width: "100%",
          height: "100vh",
        }}
        cooperativeGestures
        scrollZoom={false}
        boxZoom={false}
      >
        {stations.map((marker, i) => (
          <Marker
            anchor="bottom"
            latitude={Number(marker.lat)}
            longitude={Number(marker.lng)}
            key={marker.name}
            style={{ position: "relative" }}
          >
            <div
              className={`h-6 w-6 rounded-full opacity-75 bg-${
                STATUS_COLORS[marker["type"]]
              }-500`}
              title={marker.key}
            />
          </Marker>
        ))}

        <div
          className="bg-amber-500 bg-red-500 bg-sky-500 bg-rose-500 bg-neutral-500"
          hidden
        />
        {/* <div className="z-1 absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-transparent to-black/75" /> */}
        <div
          className="z-2 absolute bottom-24 left-2/4 -translate-x-1/2 text-center tracking-snug text-white [text-wrap:balance] md:max-w-3xl"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.75)" }}
        >
          <p className="text-lg md:text-4xl">
            Across the twentieth century, over 20 power stations polluted
            London.
          </p>
        </div>
        <div
          className="absolute bottom-12 right-12 flex flex-col gap-3 text-white"
          aria-hidden
        >
          <dl>
            {Object.keys(STATUS_COLORS).map((status, i) => (
              <div className={`flex items-center justify-end gap-2`}>
                <dd className="capitalize">{status.replace("-", " ")}</dd>
                <div
                  className={`h-4 w-4 rounded-full bg-${
                    STATUS_COLORS[status] // as keyof typeof STATUS_COLORS]
                  }-500`}
                />
              </div>
            ))}
          </dl>
        </div>
      </Map>
    </>
  );
}
