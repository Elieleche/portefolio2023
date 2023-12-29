import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

const Logo = styled.img`
  height: 50px;
  user-select: none;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  user-select: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  user-select: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

const Icon = styled.img`
  width: 20px;
  user-select: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
`;

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/elielogo.png" />
          <List>
            <ListItem onClick={() => scrollToSection('presentation')}>Presentation</ListItem>
            <ListItem onClick={() => scrollToSection('passions')}>Passions</ListItem>
            <ListItem onClick={() => scrollToSection('projets')}>Projets</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contactez-moi</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Engagez-moi</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
