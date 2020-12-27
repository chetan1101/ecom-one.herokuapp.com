import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Loading from "../Components/Loading";
import { getProduct } from "../Store/Actions/productActions";

function ProductView(porps) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProduct(porps.match.params.id));
  }, []);

  const checkoutHandler = () => {
    history.push(`/cart/${porps.match.params.id}?qty=${qty}`)
  }
  return (
    <>
   
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">Products</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{porps.match.params.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          {loading ? (
            <Loading/>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <>
              <Col xs={12}sm={6} className="mb-4">
                <Card border="warning">
                  <Image src={product.image} alt={product.name} />
                </Card>
              </Col>
              <Col xs={12} sm={6} className="mb-4">
                <Card>
                  <Card.Header>
                    <h4>{product.name}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Price: {product.price}</Card.Title>
                    <Card.Text className="product_detail">
                      <Table
                        style={{ width: "150px" }}
                        striped
                        bordered
                        hover
                        size="sm"
                      >
                        <tr>
                          <td>Brand:</td>
                          <td>{product.brand}</td>
                        </tr>
                        <tr>
                          <td>Rattings:</td>
                          <td>{product.ratting}</td>
                        </tr>
                        <tr>
                          <td>Reviews:</td>
                          <td>{product.numReviews}</td>
                        </tr>
                      </Table>
                      {product.qty > 1 && (
                        <Form.Group
                          controlId="exampleForm.SelectCustomHtmlSize"
                          style={{ width: "150px" }}
                        >
                          <Form.Label>
                            <b>Qty:</b>
                          </Form.Label>

                          <Form.Control
                            as="select"
                            htmlSize={2}
                            custom
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.qty).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      )}
                    </Card.Text>
                    {product.qty > 0 ? 
                    <Button onClick={checkoutHandler} style={{ width: "150px" }} variant="primary">Checkout</Button>
                    :
                    <Button style={{ width: "150px" }} variant="outline-danger" disabled>Out of Stock</Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
   
    </>
  );
}

export default ProductView;
