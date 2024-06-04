import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Cube from "../../public/Cube";

export default function ThreeCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
      <Environment
        files={[
          "/projects-img/museumplein_4k.webp",
          "/projects-img/museumplein_4k-gainmap.webp",
          "/projects-img/museumplein_4k.json",
        ]}
      />
    </Canvas>
  );
}
