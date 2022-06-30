import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const Cart = () => {
  let navigate = useNavigate();
  const items = [
    {
      id: 1,
      name: "Item #1",
      price: 10,
      quantity: 1
    },
    {
      id: 2,
      name: "Item #2",
      price: 20,
      quantity: 2
    },
    {
      id: 3,
      name: "Item #3",
      price: 30,
      quantity: 3
    }
  ];
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text center">Shopping Cart</h2>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {items.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          </tbody>
        ))}
        <tbody key="total">
            <tr>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>{items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</td>
            </tr>
          </tbody>
        </Table>
        <Row>
        <Col sm="6" md="8"></Col>
        <Col className="text-end">
          <Button variant="primary" className="rounded-pill my-3 w-100" onClick={() => navigate("/confirmation")} >Checkout</Button> <br />
          <Button variant="primary" className="rounded-pill px-4 w-100" onClick={() => navigate("/confirmation")}>Checkout with Paypal</Button>
        </Col>
        </Row>
    </Container>
  );
}
 
export default Cart;