import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Fade from "react-reveal/Fade";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' className={classes.contact}>
      <Fade bottom duration={2500} distance='40px'>
        <Container>
          <div className='text-center'>
            <h1>contact us</h1>
            <h4>Plese leave a message, in case you have any query.</h4>
          </div>
          <form>
            <Row className={classes.row}>
              <Col md={6} sm={12}>
                <div className={classes.Input}>
                  <input type='text' required />
                  <label>Name</label>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={classes.Input} style={{ float: "right" }}>
                  <input type='text' required />
                  <label>Email</label>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${classes.Input} ${classes.wideArea}`}>
                  <input type='text' required />
                  <label>Mail Subject</label>
                </div>
              </Col>

              <Col xs={12}>
                <div className={`${classes.Input} ${classes.wideArea}`}>
                  <textarea required />
                  <label>Message</label>
                </div>
              </Col>
              <Col xs={12}>
                <button className={`${classes["submit-btn"]}`}>
                  Send Mail
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
