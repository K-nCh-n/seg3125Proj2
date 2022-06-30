import { Container, Row , Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const BillingInfo = () => {
  let navigate = useNavigate();
  const [billingSame, setBillingSame] = useState(true);
  const [userInfo, setUserInfo] = useState({
    resAddress: "",
    resCity: "",
    resState: "",
    resPostalCode: "",
    Card: "",
    Exp: "",
    Cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingPostalCode: "",
  });

  const toggleBillingAddress = () => {
    const billingAddress = document.getElementById("billing-address");
    billingAddress.classList.toggle("d-none");
    setBillingSame(!billingSame);
  }

  const handleChange = (event) => {
    setUserInfo(previousState => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  }

  const handleSubmit = (event) => {
    console.log(userInfo);
    event.preventDefault();
    navigate("/confirmation");
  }

  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <Button variant="primary" className="rounded-pill px-4" onClick={() => navigate("/confirmation")}>Checkout with Paypal</Button>
      <Form id="billing-info" onSubmit={handleSubmit}>
        <h4 className="px-2 mt-4">Residential Address</h4>
          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control name="resAddress" type="text" placeholder="Enter your address" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control name="resCity" type="text" placeholder="Enter your city" onChange={handleChange} required/>
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Province</Form.Label>
                <Form.Control name="resProvince" type="text" placeholder="Enter province" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control name="resPostalCode" type="text" placeholder="Enter your postal code" onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <h4 className="px-2 mt-4">Payment Information</h4>
          <Form.Group>
            <Form.Label>Card Number</Form.Label>
            <Form.Control name="CardNumber" type="number" placeholder="Enter card number" onChange={handleChange} required />
          </Form.Group>

          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Expiry</Form.Label>
                <Form.Control name="expiry" type="number" maxLength="6" placeholder="MMYYYY" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control name="CVV" type="number" placeholder="Enter CVV" onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Check type="checkbox" label="Billing Address Same as Residential Address" defaultChecked onChange={toggleBillingAddress}/>
          </Form.Group>

          <div id="billing-address" className="d-none">
            <h4 className="px-2 mt-4">Billing Address</h4>
            <Row className="my-3">
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control name="BillAddress" type="text" placeholder="Enter your address" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control name="BillCity" type="text" placeholder="Enter your city" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="my-3">
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>Province</Form.Label>
                  <Form.Control name="BillProvince" type="text" placeholder="Enter province" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control name="BillPostalCode" type="text" placeholder="Enter your postal code" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <Form.Group className="my-3">
            <Button variant="primary"  type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
   );
}
 
export default BillingInfo;