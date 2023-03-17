import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { modelPath } from  /;

// const modelPath = new URL('../../public/modelpath.blend', import.meta.url)
const modelPath = '../../public/modelPath.gltf'

export const GltfModel = ({ scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // eslint-disable-next-line no-use-before-define
//   useFrame((state, delta) => (ref.current.rotation.y += 0.003)) // eslint-disable-line no-use-before-define
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event: any) => hover(true)}
        onPointerOut={(event: any) => hover(false)}
      />
    </>
  );
};

export default GltfModel;