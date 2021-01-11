import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignout } from "../Store/Actions/userActions";

function MainHeader() {
  const userSignin = useSelector(state=>state.userSignin);

  const {userInfo} = userSignin;
 // const userInfo = Cookie.getJSON("userInfo");
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand title="ecom">
        <Link to="/">
          <Button style={{ background: "#ffc107" }} variant="outline-warning">
            <Image src="/images/ecom-logo.png" width="80" />
          </Button>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <NavDropdown title="Men">
            <NavDropdown.Item>
              <Link to="/">Action</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Women">
            <NavDropdown.Item href="#5">Action</NavDropdown.Item>
            <NavDropdown.Item href="#6">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#7">Something</NavDropdown.Item>
            <NavDropdown.Item href="#8">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Kids">
            <NavDropdown.Item href="#9">Action</NavDropdown.Item>
            <NavDropdown.Item href="#10">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#11">Something</NavDropdown.Item>
            <NavDropdown.Item href="#12">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {!userInfo ? (
            <Button
              onClick={() => history.push("/signin")}
              variant="outline-warning"
            >
              Login
            </Button>
          ) : (
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{minWidth:"10rem"}}>
               {userInfo.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {userInfo.email === "ctn@MediaList.com" &&
                  <Dropdown.Item onClick={()=>history.push("/dashbord")}>Manage Products</Dropdown.Item>
                } 
                <Dropdown.Item onClick={()=>history.push('/cart')}>My Cart</Dropdown.Item>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(userSignout())}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;
