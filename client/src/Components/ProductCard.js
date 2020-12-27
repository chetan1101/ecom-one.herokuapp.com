import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function ProductCard({item}) {
    const history = useHistory();
    return (
        <Col lg={3} md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push(`/view-item/${item._id}/${item.name}`)}
                >
                  View Item
                </Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default ProductCard;
