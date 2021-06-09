import React from "react";
import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Skill from "./Skill/Skill";
import react from "../../assets/react.png";

function Skills() {
  return (
    <section id='skills' className='text-center py-5'>
      <Container>
        <h1>Skills</h1>
        <p>Here are some technologies that I have proficiency in. </p>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
        </Row>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
        </Row>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Skill img={react} body='I value ' />
          </Fade>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
