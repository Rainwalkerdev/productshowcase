import { Canvas } from "@react-three/fiber";
import React from "react";
import { Bottle } from "./Bottle";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="container-3d">
      <Canvas className={"canvas"} camera={{ fov: 35, position: [0, 4, 10] }}>
        <ambientLight intensity={10.8} color={0xffffff} />
        <directionalLight
          position={[5, 5, 15]}
          intensity={3.8}
          color="#ffffff"
        />

        <ScrollControls pages={4} damping={0.5}>
          <Bottle position={[0, -2, 0]} />
        </ScrollControls>

        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enableRotate={false}
        />
        {/* <Environment preset="sunset" /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
