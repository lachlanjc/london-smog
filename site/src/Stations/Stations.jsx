import { useRef, useState, useEffect } from "react";
import stations from "./stations.json";
import NumberFlow from "@number-flow/react";
import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGFja2NsdWIiLCJhIjoiY2pscGI1eGdhMGRyNzN3bnZvbGY5NDBvZSJ9.Zm4Zduj94TrgU8h890M7gA";

// type Markers = Array<MarkerProps & { key: string }>;

const STATUS_COLORS = {
  Gas: "accent2",
  Coal: "accent",
  Diesel: "amber-500",
  Oil: "neutral-500",
  Waste: "avocado-600",
}; // as const;
const STATUS_KEYS = Object.keys(STATUS_COLORS);
// as Array<
//   keyof typeof STATUS_COLORS
// >;

const initialViewState = {
  latitude: 51.5074,
  longitude: -0.1278,
  zoom: 11,
  bearing: 0,
  pitch: 20,
};

const emptyStation = {
  name: "---",
  lat: "51.4694444",
  lng: "-0.3506305",
  type: "Coal",
  mw: "1",
  opened: "1900",
  closed: "2000",
  demolished: "Yes",
};

export default function Stations() {
  const mapRef = useRef(null);
  const [activeStation, setActiveStation] = useState(emptyStation);

  return (
    <>
      <div
        className="bg-amber-500 bg-avocado-600 bg-lime-500 bg-accent bg-accent2 bg-neutral-500"
        hidden
      />
      <style>{`.mapboxgl-canvas, .mapboxgl-marker { position: absolute !important; }`}</style>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#222",
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
              }`}
              style={{
                transform: `scale(${typeof Number(marker.mw) === "number" ? Number(marker.mw) / 100 : 1})`,
              }}
              title={marker.name}
              onMouseEnter={() => setActiveStation(marker)}
            />
          </Marker>
        ))}

        {/* <div className="z-1 absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-transparent to-black/75" /> */}
        <div
          className="z-2 absolute top-12 left-12 tracking-snug text-white [text-wrap:balance] md:max-w-3xl"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.75)" }}
        >
          <p className="text-lg md:text-4xl">
            Across the twentieth century, over{" "}
            <strong className="font-bold">
              thirty coal power plants polluted
            </strong>{" "}
            London—not including the factories and every house burning more
            coal.
          </p>
        </div>
        <div
          className="absolute bottom-12 left-12 flex flex-col gap-3 text-white bg-black/50 backdrop-blur-md transition-opacity [transition-duration:0.25s] rounded-xl p-6 w-md"
          style={{ opacity: activeStation.name === emptyStation.name ? 0 : 1 }}
        >
          {activeStation.name === "Battersea" && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Battersea_Power_Station_from_the_river.jpg/1024px-Battersea_Power_Station_from_the_river.jpg"
              width={1024}
              height={683}
              alt="Battersea Power Station"
              className="mb-2 rounded-sm"
            />
          )}
          <header className="flex gap-2 items-start justify-start -mb-3">
            <strong className="font-bold text-2xl text-balance flex-auto">
              {activeStation.name} Station
            </strong>
            <button
              className="w-12 h-12 inline-flex justify-center items-center cursor-pointer text-right text-neutral-300 hover:text-neutral-50 transition-colors relative -top-3 -mr-4"
              onClick={() => setActiveStation(emptyStation)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </header>
          <dl className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <dt className="text-neutral-500">Power source</dt>
              <dd className={`flex items-center gap-2 capitalize`}>
                <div
                  className={`h-4 w-4 rounded-full bg-${
                    STATUS_COLORS[activeStation.type]
                  }`}
                />
                {activeStation.type.replace("-", " ")}
              </dd>
            </div>
            <div className="col-span-4">
              <dt className="text-neutral-500">Capacity</dt>
              <dd>
                <NumberFlow
                  value={activeStation.mw}
                  format={{ useGrouping: false }}
                />
                {" MW"}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-neutral-500">Opened</dt>
              <dd>
                {activeStation.opened ? (
                  <NumberFlow
                    value={activeStation.opened}
                    format={{ useGrouping: false }}
                  />
                ) : (
                  "—"
                )}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-neutral-500">Closed</dt>
              <dd>
                {activeStation.closed ? (
                  <NumberFlow
                    value={activeStation.closed}
                    format={{ useGrouping: false }}
                  />
                ) : (
                  "—"
                )}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-neutral-500">Demolished</dt>
              <dd>{activeStation.demolished}</dd>
            </div>
          </dl>
        </div>

        <div
          className="absolute bottom-12 right-12 flex flex-col gap-3 text-white"
          aria-hidden
        >
          <dl>
            {Object.keys(STATUS_COLORS).map((status) => (
              <div
                className={`flex items-center justify-end gap-2`}
                key={status}
              >
                <dd className="capitalize">{status.replace("-", " ")}</dd>
                <div
                  className={`h-4 w-4 rounded-full bg-${STATUS_COLORS[status]}`}
                />
              </div>
            ))}
          </dl>
        </div>
      </Map>
    </>
  );
}
