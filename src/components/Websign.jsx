import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React, useState } from 'react'
import Webdesign3d from './Webdesign'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  height: 100vh;
`;

const WebDesign = () => {
  return (
    <Container>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Webdesign3d/> 
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={2}/>
    </Canvas>
    </Container>
  )
}

export default WebDesign