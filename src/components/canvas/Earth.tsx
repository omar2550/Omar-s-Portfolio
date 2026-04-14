"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf");

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
      <primitive object={scene} scale={3} position-y={0} rotation-y={0} />
    </Float>
  );
};

const EarthCanvas = () => (
  <Canvas
    frameloop="always"
    dpr={[1, 1.7]}
    shadows
    gl={{ preserveDrawingBuffer: true, antialias: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 3, 2]} intensity={2.3} color="#60a5fa" />
      <pointLight position={[-3, -2, 1]} intensity={0.9} color="#22d3ee" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.8}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
