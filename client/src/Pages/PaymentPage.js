import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ChckoutSteps from "../Components/ChckoutSteps";
import { savePayment } from "../Store/Actions/cartActions";

function PaymentPage(props) {
  const [paymentMethod, setpaymentMethod] = useState("");
  const dispatch = useDispatch();

  const sumbitHandler = (e) => {
    e.preventDefault();
      dispatch(savePayment(paymentMethod));
    props.history.push("/review-order");
  };
  return (
    <div className="form_container">
      <ChckoutSteps step1 step2 step3/>
      <h4 className="mb-4 bg-light p-2">Payment</h4>
      <Form onSubmit={(e) => sumbitHandler(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="my-4"
            label="PAYPAL"
            name="paymentMethod"
            value="paypal"
            onChange={(e)=>setpaymentMethod(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Continue
        </Button>
        <Button variant="outline-info" type="button" block>
          Back
        </Button>
      </Form>
    </div>
  );
}

export default PaymentPage;
