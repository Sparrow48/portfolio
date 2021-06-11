import React from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";

import Fade from "react-reveal/Fade";

import classes from "./Contact.module.css";

const Contact = () => {
  function sendEmail(e) {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_Service_Id}`,
        `${process.env.REACT_APP_Template_Id}`,
        e.target,
        `${process.env.REACT_APP_User_Id}`
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <section id='contact' className={classes.contact}>
      <Fade bottom duration={2500} distance='40px'>
        <Container>
          <div className='text-center'>
            <h1>contact Me</h1>
            <h4>Plese leave a message, in case you have any query.</h4>
          </div>
          <form onSubmit={sendEmail} id='contact-form'>
            <Row className={classes.row}>
              <Col md={6} sm={12}>
                <div className={classes.Input}>
                  <input type='text' name='from_name' required />
                  <label>Name</label>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className={classes.Input} style={{ float: "right" }}>
                  <input type='email' name='email' required />
                  <label>Email</label>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${classes.Input} ${classes.wideArea}`}>
                  <input type='text' name='subject' required />
                  <label>Mail Subject</label>
                </div>
              </Col>

              <Col xs={12}>
                <div className={`${classes.Input} ${classes.wideArea}`}>
                  <textarea required name='message' />
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
