import { Container, Row, Col, Button, Card } from "react-bootstrap";


const ShopRow = (props) => {
  //const { category } = props;

  const addToCart = (event) => {
    if (event.target.innerHTML !== "Added to Cart") {
      event.target.innerHTML = "Added to Cart";
    } else {
      event.target.innerHTML = "Removed from Cart";
    }
  }
  
  return (
    <Container fluid="xxl" id="background-container">
      <Row>
        <Col xl="4" className="my-2">
          <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-1.2.1" />
            <Card.Body>
              <Card.Title>Item #1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">$10.00</Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime cumque? Alias, tempore maiores. Assumenda!
              </Card.Text>
              <Button variant="primary" onClick={addToCart}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4" className="my-2">
          <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1611251135345-18c56206b863?ixlib=rb-1.2.1" />
            <Card.Body>
              <Card.Title>Item #2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">$10.00</Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime cumque? Alias, tempore maiores. Assumenda!
              </Card.Text>
              <Button variant="primary" onClick={addToCart}>Buy</Button>
            </Card.Body>
          </Card>
        </Col><Col xl="4" className="my-2">
          <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-1.2.1" /> 
          {/* THIS THING */}
            <Card.Body>
              <Card.Title>Item #3</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">$10.00</Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime cumque? Alias, tempore maiores. Assumenda!
              </Card.Text>
              <Button variant="primary" onClick={addToCart}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShopRow;