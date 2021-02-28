import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Letter } from "./Letter";
import { Ground } from "./Ground";

function App() {
  return (
    <div className="app">
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 100], fov: 50 }}
      >
        <Stars />
        {/*<hemisphereLight intensity={0.35} />*/}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[-200, 100, 50]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
          color={"blue"}
        />
        <spotLight
          position={[200, 100, 50]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
          color={"blue"}
        />
        <color attach="background" args={["black"]} />
        <OrbitControls autoRotate={true} />
        <Physics gravity={[0, -150, 0]}>
          <Suspense fallback={null}>
            <Letter position={[-70, 50, 0]}>M</Letter>
            <Letter position={[-45, 50, 0]}>A</Letter>
            <Letter position={[-25, 50, 0]}>D</Letter>
            <Letter position={[-2.5, 50, 0]}>O</Letter>
            <Letter position={[20, 50, 0]}>L</Letter>
            <Letter position={[40, 50, 0]}>E</Letter>
            <Letter position={[60, 50, 0]}>.</Letter>
            <Letter position={[70, 50, 0]}>X</Letter>
            <Letter position={[90, 50, 0]}>Y</Letter>
            <Letter position={[110, 50, 0]}>Z</Letter>
          </Suspense>
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
