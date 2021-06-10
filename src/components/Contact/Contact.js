import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Fade from "react-reveal/Fade";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' className={`${classes.contact}`}>
      <Fade bottom duration={2500} distance='40px'>
        <Container>
          <div className='text-center'>
            <h1>contact us</h1>
            <h4>We'd love to hear from you!</h4>
          </div>
          <form className='py-5'>
            <Row className='input-container'>
              <Col md={6} sm={12}>
                <div className='styled-input wide'>
                  <input type='text' required />
                  <label>Name</label>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className='styled-input' style={{ float: "right" }}>
                  <input type='text' required />
                  <label>Email</label>
                </div>
              </Col>
              <Col xs={12}>
                <div className='styled-input'>
                  <input type='text' required />
                  <label>Mail Subject</label>
                </div>
              </Col>
              <Col xs={12}>
                <div className='styled-input wide'>
                  <textarea required />
                  <label>Message</label>
                </div>
              </Col>
              <Col xs={12}>
                <button className='btn-lrg submit-btn btn-main'>
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </Fade>
    </section>
  );
};

export default Contact;
