"use client";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const WebdevModel = () => {
  const { scene } = useGLTF("/webdev/scene.gltf");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modelRef = useRef<any>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y +=
        (mousePos.current.x * 0.2 - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x +=
        (mousePos.current.y * 0.1 - modelRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <primitive
        ref={modelRef}
        object={scene}
        scale={0.75}
        position={[0, -0.5, 0]}
        rotation={[2, 0.5, 0]}
      />
    </>
  );
};

const WebdevCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <WebdevModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// to add the module in cash
useGLTF.preload("/webdev/scene.gltf");

export default WebdevCanvas;
