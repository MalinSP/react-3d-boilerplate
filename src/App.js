import './App.css'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

function Box() {
  return (
    <mesh>
      <planeGeometry args={[2, 2, 10, 10]} />
      <meshBasicMaterial color='darkblue' wireframe />
    </mesh>
  )
}

function App() {
  return (
    <CanvasContainerWrapper>
      <Canvas>
        <ambientLight intensity={0.25} />
        <Box />
      </Canvas>
    </CanvasContainerWrapper>
  )
}
const CanvasContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
`

export default App
