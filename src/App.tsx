import React from 'react';
import './App.css';
// import { Canvas} from '@react-three/fiber';
// import { Box } from './components/Box';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
        {/* <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas> */}
        <ModelViewer scale={40} />
    </div>
  );
}

export default App;
