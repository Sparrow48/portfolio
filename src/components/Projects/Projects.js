import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project/Project";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <section id='projects' className='text-center py-5'>
      <Container fluid>
        <h1>Projects</h1>
        <p>The Projects I’m willing to provide.</p>
        <Row className='text-muted text-justify justify-content-center py-3'>
          <Fade left duaration={2000} distance='40px'>
            <Project
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Project
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Project
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
        </Row>
        <Row className='text-muted text-justify justify-content-center py-3'>
          <Fade left duaration={2000} distance='40px'>
            <Project
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
          <Fade left duaration={2000} distance='40px'>
            <Project
              title='Web Design'
              body='I value simple content structure, clean design patterns, and thoughtful interactions.'
            />
          </Fade>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
