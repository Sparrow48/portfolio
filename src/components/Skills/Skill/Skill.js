import React from "react";

import classes from "./Skill.module.css";
import { Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Skill(props) {
  return (
    <div>
      <Col className='py-2'>
        <Card
          className={`${"py-2"} ${classes.card}`}
          style={{
            width: "8rem",
            height: "8rem",
            textAlign: "center",
          }}>
          <Icon
            icon={props.img}
            color={props.color}
            style={{
              width: "8rem",
              height: "5rem",
              alignItem: "center",
            }}
          />
          <h6>{props.body}</h6>
        </Card>
      </Col>
    </div>
  );
}

export default Skill;
