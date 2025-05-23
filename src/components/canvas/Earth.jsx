import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Phone = () => {
  return (
    <group>
      {/* Corps du téléphone */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 0.2]} />
        <meshStandardMaterial color="#1e1e1e" />
      </mesh>

      {/* Écran */}
      <mesh position={[0, 0.2, 0.11]}>
        <planeGeometry args={[1.6, 3.2]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Bouton Home */}
      <mesh position={[0, -1.7, 0.11]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </group>
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [4, 3, 6], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone />
      </Suspense>
    </Canvas>
  );
};

export default PhoneCanvas;
