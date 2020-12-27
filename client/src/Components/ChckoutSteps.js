import React from "react";
import { ListGroup } from "react-bootstrap";

function ChckoutSteps({step1,step2,step3,step4}) {
  return (
    <div>
      <ListGroup horizontal>
        <ListGroup.Item active={step1}>SignIn</ListGroup.Item>
        <ListGroup.Item active={step2}>Shipping</ListGroup.Item>
        <ListGroup.Item active={step3}>Review order</ListGroup.Item>
        <ListGroup.Item active={step4}>Payment</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ChckoutSteps;