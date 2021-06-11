import React from "react";
import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Skill from "./Skill/Skill";
import classes from "./Skills.module.css";

import reactIcon from "@iconify-icons/cib/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeMongo from "@iconify-icons/vscode-icons/file-type-mongo";
import javascriptIcon from "@iconify-icons/logos/javascript";
import redux from "@iconify-icons/logos/redux";
import mysqlIcon from "@iconify-icons/logos/mysql";
import githubIcon from "@iconify-icons/logos/github-icon";

function Skills() {
  return (
    <section
      id='skills'
      className={`${"text-center py-5"} ${classes.skillSection}`}>
      <Container className='py-3'>
        <h1>Skills</h1>
        <p>Here are some technologies that I have proficiency in. </p>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade top duaration={2000} distance='60px'>
            <Skill img={githubIcon} body='Github' />
          </Fade>
          <Fade top duaration={2000} distance='60px'>
            <Skill img={redux} body='Redux' />
          </Fade>
        </Row>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade left duaration={2000} distance='60px'>
            <Skill img={fileTypeHtml} body='HTML5' />
          </Fade>

          <Skill img={reactIcon} color='#52d8fc' body='React' />
          <Skill img={javascriptIcon} body='JavaScript' />

          <Fade right duaration={2000} distance='60px'>
            <Skill img={fileTypeCss} body='CSS3' />
          </Fade>
        </Row>

        <Row className='text-muted text-justify justify-content-center py-1'>
          <Fade bottom duaration={2000} distance='60px'>
            <Skill img={mysqlIcon} body='MySql' />
          </Fade>
          <Fade bottom duaration={2000} distance='60px'>
            <Skill img={fileTypeMongo} body='MongoDB' />
          </Fade>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
