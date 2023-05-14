import { Text } from '@react-three/drei'
import React from 'react'

const TorusGeometry = ({ position, scale }) => {
  return (
    <>
      <group position={position} scale={scale}>
        <Text fontSize={0.7} position={[3, 2.4, 0]}>
          P
        </Text>
        <Text fontSize={0.7} position={[3.5, 0.35, 0]}>
          RTF
        </Text>
        <Text fontSize={0.7} position={[3, -1.6, 0]}>
          LI
        </Text>
        <mesh position={[3.5, 1.5, 0]}>
          <torusGeometry args={[0.7, 0.04, 16]} />
          <meshBasicMaterial />
        </mesh>
        <mesh position={[3.5, -0.6, 0]}>
          <torusGeometry args={[0.7, 0.04, 16]} />
          <meshBasicMaterial color='#FFF3E2' />
        </mesh>
        <mesh position={[3.5, -2.6, 0]}>
          <torusGeometry args={[0.7, 0.04, 16]} />
          <meshBasicMaterial color='#FFF3E2' />
        </mesh>
      </group>
    </>
  )
}

export default TorusGeometry
