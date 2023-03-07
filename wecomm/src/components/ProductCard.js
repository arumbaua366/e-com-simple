import { Card, Button, Form, Row, Col } from "react-bootstrap";

function ProductCard(props) {
  // props.product is the product we are selling

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
