import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px){
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  user-select: none;
  @media only screen and (max-width: 768px){
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

const Line = styled.img`
  height: 5px;
  user-select: none;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  user-select: none;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const BulletListItem = styled.li`
  margin-bottom: 10px;
  user-select: none;
  font-size: 24px;
  color: lightgray;
  &::before {
    content: "•";
    color: #da4ea2;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
`;

export const Hero = () => {
  return (
    <Section id='presentation'>
      <Navbar/>
      <Container>
        <Left>
          <Title>Apprendre. Utiliser. Recommencer.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Ce que je fais</Subtitle>
          </WhatWeDo>
          <BulletList>
          <BulletListItem>Étudiant en première année à Epitech.</BulletListItem>
          <BulletListItem>20 ans.</BulletListItem>
            <BulletListItem>Programmation en C, Python, Mobile (Flutter), et Web (React, CSS, Three.js).</BulletListItem>
            <BulletListItem>Maitrîse de Canvas.</BulletListItem>
          </BulletList>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}> 
              <MeshDistortMaterial 
                attach="material" 
                distort={0.5} 
                speed={2}
                color="#63199b"
              />
            </Sphere>
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;
