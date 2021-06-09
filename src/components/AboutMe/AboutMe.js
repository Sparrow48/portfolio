import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Profile from "../../assets/aboutMe.png";

function AboutMe() {
  return (
    <section id='about'>
      <Container fluid>
        <Row className='align-items-center justify-content-center'>
          <Col md={4} className='p-md-5 order-2 order-md-2'>
            <Fade left duaration={2000} distance='40px'>
              <h2>
                <span className='name'>
                  <strong>About Me</strong>
                </span>
              </h2>

              <p className='text-muted text-justify'>
                Hello, I'm Md. Abu Nasib. I have completed my graduation from
                North South University in 2020. I am a web developer with a
                strong interest in projects that requires both conceptual and
                analytical thinking. I have experience working as part of a team
                and individually. I am always eager to learn from anyone and
                everyone. I am always energetic and eager to learn new skills.
              </p>
            </Fade>
          </Col>
          <Col md={6} className='order-1 order-md-1'>
            <Fade right duaration={2000} distance='40px'>
              <Image src={Profile} fluid />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
