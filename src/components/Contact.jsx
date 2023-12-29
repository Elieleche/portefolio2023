import styled from "styled-components";
import Map from './Map';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  user-select: none;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px){
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
    display: none;
  }
`





const Contact = () => {
  const ref = useRef()
  const [success,setSuccess] = useState(null)
  const handleSubmit =e=>{
    e.preventDefault()
  
    emailjs.sendForm('service_6xrx2a1', 'template_3yvf0yj', ref.current, 'Cs9DYSVTdFHbChLR0')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contactez-moi</Title>
            <Input placeholder="Nom" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Laissez-moi votre message" rows={10} name="message"/>
            <Button type="submit">envoyer</Button>
            {success &&
              "Votre message à bein été envoyé , je reviens vers vous au plus tôt"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}


export default Contact