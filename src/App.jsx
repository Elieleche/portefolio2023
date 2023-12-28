import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';

const Container = styled.div`
  height: 100vh;
  color: white;
  background: url('./img/bg.jpeg');
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero id="hero" />
      <Who id="who" />
      <Works id="works" />
      <Contact id="contact" />
    </Container>
  );
};

export default App;