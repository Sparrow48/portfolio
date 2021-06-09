import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./Service/Service";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <section id='services' className='text-center py-5'>
      <Container>
        <h1>Services</h1>
        <p>The services I’m willing to provide.</p>
        <Row className='text-muted text-justify justify-content-center py-5'>
          <Fade left duaration={2000} distance='40px'>
            <Service
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
          <Fade bottom duaration={2000} distance='40px'>
            <Service
              title='Web Development'
              body=' I am a Front-End web developer who focuses on user needs. I am always focus on quality and professionalism.I have already develop some nice
            web application.You can check them from my github accout which is
            already provided in the contact section. Please have a look.'
            />
          </Fade>
          <Fade right duaration={2000} distance='40px'>
            <Service
              title='React Developer'
              body='Currently I am working with react js. I have already built some
            project by using react.js. I am trying to learn more about React. I
            am always curious to learn new things.'
            />
          </Fade>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
