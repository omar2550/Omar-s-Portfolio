"use client";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";
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

  useFrame((state) => {
    if (!modelRef.current) return;

    const idleRotation = Math.sin(state.clock.getElapsedTime() * 0.55) * 0.1;

    modelRef.current.rotation.y +=
      (mousePos.current.x * 0.25 + idleRotation - modelRef.current.rotation.y) *
      0.04;
    modelRef.current.rotation.x +=
      (mousePos.current.y * 0.12 - modelRef.current.rotation.x) * 0.04;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.45}>
      <ambientLight intensity={0.75} />
      <hemisphereLight intensity={0.55} groundColor="#0f172a" />
      <pointLight position={[2, 2.5, 2]} intensity={18} color="#60a5fa" />
      <spotLight
        position={[5, 10, 5]}
        angle={0.35}
        penumbra={1}
        intensity={1.6}
        castShadow
      />
      <primitive
        ref={modelRef}
        object={scene}
        scale={0.8}
        position={[0, -0.6, 0]}
        rotation={[2, 0.45, 0]}
      />
    </Float>
  );
};

const WebdevCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.7]}
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <WebdevModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/webdev/scene.gltf");

export default WebdevCanvas;
