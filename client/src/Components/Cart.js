import React, { useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
  Image,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../Store/Actions/cartActions";

function Cart(props) {
  const productId = props.match.params.id;
  const Qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, Qty));
    }
  }, []);

  const removeFromCartHandler = (productId) => {
    alert("Are you sure want to delete item?")
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <Container style={{ marginTop: "15px" }}>
      <Breadcrumb style={{ marginTop: "15px" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col sm={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="2">
                  <h4>Shopping Cart</h4>
                </th>
                <th className="text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="3">Cart is empty</td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr>
                    <td width="90">
                      <Image width="70" src={item.image} />
                    </td>
                    <td>
                      <h5> <Link to={`/view-item/${item._id}/${item.name}`}>{item.name}</Link></h5>
                      <div>
                        <Form>
                          <Form.Row className="align-items-center">
                            <Col xs="auto" className="my-1">
                              <Form.Label   
                                className="mr-sm-2"
                                htmlFor="inlineFormCustomSelect"
                                srOnly
                              >
                                Preference
                              </Form.Label>
                              <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                size="sm"
                                custom
                                value={item.Qty}
                                onChange={(e) =>
                                  dispatch(addToCart(item._id, e.target.value))
                                }
                              >
                                {[...Array(item.qty).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col xs="auto" className="my-1">
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() => removeFromCartHandler(item._id)}
                              >
                                Delete
                              </Button>
                            </Col>
                          </Form.Row>
                        </Form>
                      </div>
                    </td>
                    <td className="text-right" width="90">
                      Rs. {item.price}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="pl-1">
                  Subtotal (
                  {cartItems.reduce(
                    (oldItems, newItem) => oldItems + newItem.Qty,
                    0
                  )}
                  Items):
                </div>
                <div className="pr-1">
                  Rs.
                  {cartItems.reduce(
                    (oldItems, newItem) =>
                      oldItems + newItem.price * newItem.Qty,
                    0
                  )}
                </div>
              </div>
              <Button
                className="mt-3"
                variant="primary"
                size="lg"
                block
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
