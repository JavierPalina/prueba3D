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
  const { nodes, materials } = useGLTF('/cinta2.gltf')
  const discover = useTexture("../src/assets/discover.png")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 86.93, 0]} scale={146.06}>
            <mesh geometry={nodes.pPipe1_logo_0.geometry} material={materials.logo} />
            <mesh geometry={nodes.pPipe1_InnerTape_0.geometry} material={materials.InnerTape} material-color={props.color}/>
            <mesh geometry={nodes.pPipe1_OuterTape_0.geometry} material={materials.OuterTape} material-color={props.color}>
              <Decal position={[1, -0.13, 0]} rotation={1.55} scale={0.5} map={discover}></Decal>
            </mesh>
            <mesh geometry={nodes.pPipe1_InnerPaperThing_0.geometry} material={materials.InnerPaperThing}/>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cinta2.gltf')
