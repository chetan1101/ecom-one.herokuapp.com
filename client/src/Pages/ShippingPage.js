import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ChckoutSteps from "../Components/ChckoutSteps";
import { saveShipping } from "../Store/Actions/cartActions";

function ShippingPage(props) {

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();



  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({address, city, postalCode, country}));
    props.history.push('/payment')
  };
  return (
    <div className="form_container">
        <ChckoutSteps step1 step2 />
      <h4 className="mb-4 bg-light p-2">Shipping</h4>
      <Form onSubmit={(e) => sumbitHandler(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Postal code"
            name="postal"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            name="repassowrd"
            onChange={(e) => setCountry(e.target.value)}
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

export default ShippingPage;
