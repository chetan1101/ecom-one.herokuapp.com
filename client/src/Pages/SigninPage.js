import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { userSignIn } from "../Store/Actions/userActions";

function SigninPage(props) {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1]:'/';
  useEffect(() => {
      if(userInfo){
        props.history.push(redirect)
      }
  }, [userInfo])

  const sumbitHandler = (e) => {
      e.preventDefault();
      dispatch(userSignIn(email, password))
  }
  return ( loading ? <Loading/> : error ? <div>{error}</div> :
    <div className="form_container">
        <h4 className="mb-4 bg-light p-2">Sign-In</h4>
      <Form onSubmit={(e)=>sumbitHandler(e)}>
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
    
        <Button variant="primary" type="submit" block>
          Sign In
        </Button>
    
        <Button onClick={()=>props.history.push(redirect === "/" ? "register" : "register?redirect=" + redirect)} variant="outline-info" type="button" block>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default SigninPage;
