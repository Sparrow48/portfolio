import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project/Project";
import Fade from "react-reveal/Fade";

import Facebook from "../../assets/facebook.png";
import Burger from "../../assets/burger.png";
import ECloud from "../../assets/E-cloud.png";
import ET from "../../assets/ET.png";
import Portfolio from "../../assets/portfolio.png";

import classes from "./Projects.module.css";

function Projects() {
  return (
    <section
      id="projects"
      className={`${"text-center py-5"} ${classes.projectSection}`}
    >
      <Container fluid className="py-3">
        <h1>Projects</h1>
        <p>Here’s few projects that I've worked on recently.</p>
        <Row className="text-muted text-justify justify-content-center py-3">
          <Fade left duaration={2000} distance="40px">
            <Project
              img={Facebook}
              title="Facebook Home Page "
              body="Facebook home page clone. It is a statis page and build with react & row CSS3. It is also responsive."
              github="https://github.com/Sparrow48/react-facebook"
              live="https://facebook-748.web.app/"
            />
          </Fade>
          <Fade left duaration={2000} distance="40px">
            <Project
              img={Burger}
              title="Burger Builder"
              body="A web app where users can build burgers and order them. I have used React, Redux and CSS3."
              github="https://github.com/Sparrow48/burger-builder"
              live="https://my-burger-476a5.web.app/"
            />
          </Fade>
          <Fade left duaration={2000} distance="40px">
            <Project
              img={ECloud}
              title="E-Cloud"
              body="E-Cloud Home page. I have used HTML5 And CSS3 to build this page."
              github="https://github.com/Sparrow48/E-Cloud"
              live="https://sparrow48.github.io/E-Cloud/"
            />
          </Fade>
        </Row>
        <Row className="text-muted text-justify justify-content-center py-3">
          <Fade left duaration={2000} distance="40px">
            <Project
              img={ET}
              title="Expense Tracker"
              body="By this web app you will be able to keep track of your expenses. Tech: React, HTML5 & CSS3."
              github="https://github.com/Sparrow48/expense-tracker"
              live="https://test-6d415.web.app/"
            />
          </Fade>
          <Fade left duaration={2000} distance="40px">
            <Project
              img={Portfolio}
              title="PortFolio"
              body="A simple portfolio of mine which is build by HTML5, CSS3, Gird & Flex."
              github="https://github.com/Sparrow48/Portfolio-v1"
              live="https://sparrow48.github.io/Portfolio-v1/"
            />
          </Fade>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
