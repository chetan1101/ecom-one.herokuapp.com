import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userRegister } from "../Store/Actions/userActions";

function RegisterPage(props) {
  const newUserRegister = useSelector((state) => state.newUserRegister);
  const { userInfo, loading, error } = newUserRegister;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const redirect = props.location.search ? props.location.search.split("=")[1]:'/';

  useEffect(() => {
    if(userInfo){
      history.push(redirect)
    }
 
  }, [userInfo])

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(name, email, password));

  };
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="form_container">
      <h4 className="mb-4 bg-light p-2">Create an account</h4>
      <Form onSubmit={(e) => sumbitHandler(e)} autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="passowrd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="repassowrd"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Register
        </Button>
        <Button onClick={()=>props.history.push(redirect === "/" ? "signin" : "signin?redirect=" + redirect)} variant="outline-info" type="button" block>
          SignIn
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
