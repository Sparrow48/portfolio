import React from "react";
import { Col, Card } from "react-bootstrap";

import classes from "./Project.module.css";

function Service(props) {
  return (
    <div>
      <Col className='py-2'>
        <Card
          className={`${"py-4"} ${classes.card}`}
          style={{ width: "18rem", height: "28rem" }}>
          <Card.Img
            className={`${"p-3"}`}
            variant='top'
            style={{ width: "18rem", height: "12rem" }}
            src={props.img}
          />
          <Card.Body>
            <Card.Title className={classes.title}>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
            <Card.Link href={props.github} target='_blank'>
              Github
            </Card.Link>
            <Card.Link href={props.live} target='_blank'>
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
