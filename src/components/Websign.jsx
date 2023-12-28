import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React, useState } from 'react'
import Webdesign3d from './Webdesign'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Webdesign3d/> 
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={2}/>
    </Canvas>
  )
}

export default WebDesign