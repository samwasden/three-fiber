import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";

function App() {
  return (
    <div className="App">
      <Canvas shadows={"soft"} className="canvas">
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
