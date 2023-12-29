import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollMagic from 'scrollmagic';
import { TweenLite, Power2 } from 'gsap';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  user-select: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  user-select: none;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const AnimatedTitle = styled.h1`
  font-size: 74px;
  user-select: none;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
  span {
    color: white;
  }

  .point {
    color: white;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  gap: 10px;
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
  user-select: none;
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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
`;

const Who = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: titleRef.current,
      triggerHook: 0.7,
      reverse: false
    })
      .on('enter', () => {
        const title = titleRef.current;
        const text = 'Le digital mais pas que.';
        title.textContent = '';

        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            if (text[i] === '.') {
              title.innerHTML += `<span class="point">${text[i]}</span>`;
              TweenLite.to(title.querySelector('.point'), 1, {
                opacity: 0,
                ease: Power2.easeInOut
              });
            } else {
              title.innerHTML += `<span>${text[i]}</span>`;
              TweenLite.to(title.querySelectorAll('span')[i], 1, {
                opacity: 0,
                ease: Power2.easeInOut
              });
            }
          }, i * 150);
        }
      })
      .addTo(controller);

    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <Section id='passions'>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[6, 5, 4]} />
            <Cube></Cube>
          </Canvas>
        </Left>
        <Right>
          <AnimatedTitle ref={titleRef}></AnimatedTitle>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Ce qui m'intéresse</Subtitle>
          </WhatWeDo>
          <BulletList>
            <BulletListItem>Les arts martiaux et leurs valeurs.</BulletListItem>
            <BulletListItem>La musique.</BulletListItem>
            <BulletListItem>Les jeux vidéo compétitifs.</BulletListItem>
            <BulletListItem>La marche.</BulletListItem>
          </BulletList>
          <a href="https://open.spotify.com/user/smahpchardfr" target="_blank" rel="noopener noreferrer">
            <Button>Mon Spotify</Button>
          </a>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
