import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";

import {
  Html,
  //   Environment,
  //   Image,
  //   // ScrollControls,
  //   Billboard,
  //   // Text,
} from "@react-three/drei";
import App from "./App.jsx";
import "./index.css";

const store = createXRStore();

function XRApp() {
  return (
    <>
      <Canvas>
        <XR store={store}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
              <Html className="browser" position={[0, 0, 0]} center>
                <App />
              </Html>
            </group>
          </Suspense>
        </XR>
      </Canvas>
      <button
        onClick={() => store.enterVR()}
        className="absolute top-2 left-2 z-2"
      >
        Enter VR
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <XRApp />
  </React.StrictMode>,
);
