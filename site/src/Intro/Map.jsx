import { useRef, useState } from "react";

import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGFja2NsdWIiLCJhIjoiY2pscGI1eGdhMGRyNzN3bnZvbGY5NDBvZSJ9.Zm4Zduj94TrgU8h890M7gA";

const [LDN_LAT, LDN_LNG] = [51.5074, -0.1278];
// type Markers = Array<MarkerProps & { key: string }>;

const initialViewState = {
  latitude: LDN_LAT,
  longitude: LDN_LNG,
  zoom: 3,
  bearing: 0,
  pitch: 20,
};

const initialMarkers = [
  {
    latitude: LDN_LAT,
    longitude: LDN_LNG,
    key: "London",
  },
];

export default function AnimatedMap() {
  const mapRef = useRef(null);
  const rootRef = useRef(null);

  return (
    <div className="relative h-screen w-screen" ref={rootRef}>
      <style>{`.mapboxgl-canvas, .mapboxgl-marker { position: absolute !important; }`}</style>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{
          width: "100%",
          height: "100vh",
          overflowY: "hidden",
          position: "absolute",
          inset: 0,
        }}
        cooperativeGestures
        scrollZoom={false}
        boxZoom={false}
      >
        {initialMarkers.map((marker, i) => (
          <Marker
            anchor="bottom"
            {...marker}
            key={marker.key}
            style={{ position: "relative" }}
          >
            <svg
              className="fill-accent"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <title>{marker.key}</title>
              <path
                d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
              />
            </svg>
          </Marker>
        ))}
        <div className="z-1 absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent to-black/75" />
        <h2
          className="z-2 absolute bottom-16 left-2/4 -translate-x-1/2 text-center text-lg tracking-tight text-white [text-wrap:balance] md:max-w-3xl md:text-4xl"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.75)" }}
        >
          Welcome to London.
        </h2>
      </Map>
    </div>
  );
}
