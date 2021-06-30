import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import BGImg from "../../assets/bg.png";

import "./Home.css";

function Home() {
  return (
    <section id="home">
      <Container fluid>
        <Row className="align-items-center justify-content-center home">
          <Col md={6} className="p-md-5 order-2 order-md-1">
            <Fade left duaration={2000} distance="40px">
              <h2>
                Hello I'm <br />
                <span className="name">
                  <strong>Md. Abu Nasib</strong>
                </span>
              </h2>
              <h5 className="title">Front-End Web Developer</h5>

              <p className="text-muted">
                I am a web developer with a strong interest in projects that
                requires both conceptual and analytical thinking.
              </p>
              <a
                className="resume"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1LLtXekemaOceOFDwPBGyZyPdSwka1WfO/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </a>
            </Fade>
          </Col>
          <Col md={4} className="order-1 order-md-2">
            <Fade right duaration={2000} distance="40px">
              <Image src={BGImg} fluid />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
