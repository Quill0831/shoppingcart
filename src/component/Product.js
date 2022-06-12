import React from 'react';
import {
  Col, Button, Card,
} from 'react-bootstrap';
// import  from "reactstrap"
export default function Product(props) {
  const { product, onAdd } = props;
  return (

    <div className="productCard">

      <Col xs="12" md="4">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" className="img" src={product.img} />
          <Card.Body>
            <Card.Title>
              {product.title}
              $
              {product.price}
            </Card.Title>
            <Card.Text className="productText">
              {product.des}
            </Card.Text>
            <Button variant="primary" className="buyButton" onClick={() => onAdd(product)}>購買</Button>
          </Card.Body>
        </Card>
      </Col>

    </div>
  );
}
