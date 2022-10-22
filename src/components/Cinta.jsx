
import React, { useRef } from 'react'
import { useGLTF,
  useCursor,
  useTexture,
  Text,
  Decal,
  Environment,
  OrbitControls,
  RenderTexture,
  RandomizedLight,
  PerspectiveCamera,
  AccumulativeShadows
} from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cinta.gltf')
  const discover = useTexture("../src/assets/discover.png")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={200}>
            <mesh geometry={nodes.TAPE_LP__0.geometry} material={materials['Scene_-_Root']} material-color={"white"}>
            <Decal position={[3.0, 0.75, 0.6]} rotation={-0.7} scale={0.25} map={discover} map-anisotropy={16} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
    
  )
}

useGLTF.preload('/cinta.gltf')
