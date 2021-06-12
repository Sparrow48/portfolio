import React from "react";
import { Col, Card } from "react-bootstrap";

import classes from "./Service.module.css";

function Service(props) {
  return (
    <div>
      <Col className='py-2'>
        <Card
          className={`${"py-4"} ${classes.card}`}
          style={{ width: "18rem", height: "20rem" }}>
          <Card.Body>
            <Card.Title className={classes.title}>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
