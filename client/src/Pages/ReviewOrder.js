import React, { useEffect } from "react";
import Cookie from "js-cookie";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
  Image,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChckoutSteps from "../Components/ChckoutSteps";

function ReviewOrder(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userInfo = Cookie.getJSON("userInfo");
 console.log(cart)
  useEffect(() => {}, []);

  return (
    <>
      <div style={{ width: "50%", margin: "30px auto 0" }}>
        <ChckoutSteps step1 step2 step3 step4/>
      </div>

      <Container style={{ marginTop: "15px" }}>

        <Row>
          <Col sm={8}>
            <Card className="mb-3">
              <Card.Body>
              <h5>Shipping address</h5>
              <div className="info_box">
              <p>{userInfo.name}</p>
              <p>{cart.shipping.address}</p>
              <p>{cart.shipping.city}</p>
              <p>{cart.shipping.postalCode}</p>
              <p>{cart.shipping.country}</p>
              </div>

              </Card.Body>
            </Card>


            <Card className="mb-3">
              <Card.Body>
              <h5>Shipping address</h5>
                <div className="info_box">
                    <p>Payment: {cart.payment}</p>
                </div>
              </Card.Body>
            </Card>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan="2">
                    <h5>Order Items</h5>
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
                        <h5>
                          <Link to={`/view-item/${item._id}/${item.name}`}>
                            {item.name}
                          </Link>
                        </h5>
                        <div>Qty: {item.Qty}</div>
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
                  onClick=""
                >
                Make payment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReviewOrder;
