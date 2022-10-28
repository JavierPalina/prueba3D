import Box from './components/Box';
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cinta2 from './components/Cinta2';
import { useState } from 'react';

function App() {
const [color, setColor] = useState('white');
  return (
    <div className="App">
      <Canvas className='canvas' camera={{ position: [1, 1, 850], fov: 25}}>
        <OrbitControls enableZoom={true} enablePan={false} wireframe/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[10, 10, 5]} intensity={1.5}/>
          <Cinta2 color={color}/>
      </Canvas>
      <div>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}

export default App
