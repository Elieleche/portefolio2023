import React, { useState } from 'react'
import WebDesign from './Websign';
import styled from "styled-components";
import SocialMedia from './SocialMedia';
import Cprogramming from './Cprogramming';
import FlutterCall from './FlutterCall';

const data = [
  "Web Design",
  "C Programming",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  user-select: none;
  scroll-snap-align: center;
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`


const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const ListItem = styled.li`
  position: relative;
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::before {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    visibility: visible;
    z-index: 1;
    color: pink;
    width: 0px;
    overflow: hidden;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    visibility: visible;
    z-index: 1;
    color: pink;
    width: 0;
    overflow: hidden;
    transition: width 0.5s linear ;
    white-space: nowrap;
  }

  &:hover::after {
    animation: both;
    width: 100%; 
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
  }
`

const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section id='projets'>
      <Container>
        <Left>
          <List>
            {data.map((item)=> (
            <ListItem key={item} text={item} onClick={()=>setWork(item)}>
              {item} 
            </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {work === "Web Design" ? (
        <WebDesign />
      ) : work === "Flutter Front" ? (
        <FlutterCall/>
      ) : work === "C Programming" ? (
        <Cprogramming />
      ) : work === "Social Media" ? (
        <SocialMedia />
      ) : (
        <WebDesign/>
      )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works