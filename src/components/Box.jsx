import React from 'react';
import { useTexture, Decal } from '@react-three/drei';

export default function Box() {
    const discover = useTexture("../src/assets/discover.png")
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            <meshLambertMaterial attach="material" color="hotpink" />
            <Decal position={0.4} scale={7.0} map={discover} />
        </mesh>
    );
}