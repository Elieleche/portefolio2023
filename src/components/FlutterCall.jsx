import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React, useState } from 'react'
import styled from "styled-components";
import Flutter from './Flutter';


const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Right = styled.div`
  flex: 1;
`

const FlutterCall = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Flutter/> 
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={2}/>
    </Canvas>
    </>
  );
};

export default FlutterCall;