import React from "react";
import { Col, Card } from "react-bootstrap";
import nas from "../../../assets/aboutMe.png";

function Service(props) {
  return (
    <div>
      <Col className='py-2'>
        <Card className='py-4' style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            variant='top'
            style={{ width: "16rem", height: "12rem" }}
            src={nas}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
            <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
