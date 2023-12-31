import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React, useState } from 'react'
import Linkedin from './Linkedin'
import styled from "styled-components";


const Desc = styled.p`
  width: 190px;
  height: 25px;
  padding: 20px;
  background-color: lightgray;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  @media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
`
const Right = styled.div`
  flex: 1;
  cursor: pointer;
`

const SocialMedia = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    window.open('https://www.linkedin.com/in/elie-chardin-624111230/', '_blank');
  };

  return (
    <>
    <Canvas onClick={handleClick}>
      <Stage environment="city" intensity={0.6}>
        <Linkedin/> 
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={2}/>
    </Canvas>
    <Desc>Cliquez pour voir mon profil Linkedin</Desc>
    </>
  );
};

export default SocialMedia;