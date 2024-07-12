import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  // Optionally set position and scale of the loaded model
  scene.position.set(0, 0, 0);
  scene.scale.set(1, 1, 1);

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      angle={0.12}
      penumbra={0.12}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive 
      object={scene}
      scale={0.75}
      position={[0,-3.55,-1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;