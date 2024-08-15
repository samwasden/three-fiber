import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

const Scene = () => {
  const mesh = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    if (mesh.current) {
      const scale = Math.sin(clock.getElapsedTime()) + 2 / 2;
      mesh.current.scale.set(scale, scale, scale);
      const rotation = Math.sin(clock.getElapsedTime()) / 2;
      mesh.current.rotation.set(rotation, rotation, rotation);
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 10]} />
      <mesh ref={mesh}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export { Scene };
