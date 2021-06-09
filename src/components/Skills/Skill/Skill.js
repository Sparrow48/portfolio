import React from "react";
import { Col, Card } from "react-bootstrap";

function Skill(props) {
  return (
    <div>
      <Col className='py-2'>
        <Card style={{ width: "8rem", height: "10rem" }}>
          <Card.Img variant='top' src={props.img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Skill;
