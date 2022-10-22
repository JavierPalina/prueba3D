import Box from './components/Box';
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cinta from './components/Cinta';

function App() {

  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[10, 10, 5]} intensity={1.5}/>
          <Cinta height="600px" width="1200px"/>
      </Canvas>
    </div>
  )
}

export default App
