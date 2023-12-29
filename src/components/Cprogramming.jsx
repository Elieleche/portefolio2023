import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React, useState } from 'react'
import styled from "styled-components";
import { Github } from './Github';

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

const Container = styled.div`
  height: 100vh;
  cursor: pointer;
`;

const Cprogramming = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    window.open('https://github.com/Elieleche', '_blank');
  };
    return (
      <Container>
        <Canvas onClick={handleClick}>
          <Stage environment="city" intensity={0.6}>
            <Github/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={2}/>
        </Canvas>
        <Desc>Cliquez pour accéder à mon github et voir mes projets C</Desc>
      </Container>
      );
}

export default Cprogramming