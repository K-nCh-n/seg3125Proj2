import { Container, Row , Col, Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const BillingInfo = () => {
  let navigate = useNavigate();

  const [billingSame, setBillingSame] = useState(true);

  const [validated, setValidated] = useState(false);

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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("form is invalid");
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log(userInfo);
      navigate("/confirmation");
    }
    setValidated(true);
  }

  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <Button className="px-3 py-2" variant="secondary" onClick={() => navigate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
        Back
      </Button>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h4 className="px-2 mt-4">Residential Address</h4>
          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                  </svg>
                  </InputGroup.Text>
                  <Form.Control
                    name="resAddress"
                    type="text"
                    placeholder="Enter your address"
                    aria-describedby="inputGroupPrepend"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter an address.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control name="resCity" type="text" placeholder="Enter your city" onChange={handleChange} required/>
                <Form.Control.Feedback type="invalid">
                  Please enter a city.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Province</Form.Label>
                <Form.Control name="resProvince" type="text" placeholder="Enter province" onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                  Please enter a province.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control name="resPostalCode" type="text" placeholder="Enter your postal code" pattern="^[A-Za-z]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$" onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                  Please enter a postal code.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <h4 className="px-2 mt-4">Payment Information</h4>
          <Form.Group>
            <Form.Label>Card Number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
              </svg>
              </InputGroup.Text>
              <Form.Control
                name="CardNumber"
                type="tel"
                placeholder="Enter card number"
                aria-describedby="inputGroupPrepend"
                pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$"
                onChange={handleChange}
                maxLength="16"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid credit card number.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Row className="my-3">
            <Col sm='6'>
              <Form.Group>
                <Form.Label>Expiry</Form.Label>
                <Form.Control name="expiry" type="tel" maxLength="5" placeholder="MM/YY" pattern="(0[1-9]|10|11|12)/[0-9]{2}$" onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid expiry date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control name="CVV" type="text" maxLength={3} placeholder="Enter CVV" pattern="[0-9][0-9][0-9]" onChange={handleChange} required />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                  Please enter a valid CVV.
                </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Group key='cb'>
            <Form.Check id='cb' type="checkbox" label="Billing Address Same as Residential Address" defaultChecked onChange={toggleBillingAddress}/>
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
                  <Form.Control name="billingCity" type="text" placeholder="Enter your city" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="my-3">
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>Province</Form.Label>
                  <Form.Control name="billingProvince" type="text" placeholder="Enter province" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
              <Col sm='6'>
                <Form.Group>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control name="billingPostalCode" type="text" placeholder="Enter your postal code" onChange={handleChange} required={!billingSame} />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <Form.Group className="my-3">
            <Button className="rounded-pill px-3 py-2" variant="primary"  type="submit">
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-check ms-2" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </Button>
            <Button variant="primary" className="mx-5 rounded-pill px-3 py-2" onClick={() => navigate("/confirmation")}>Checkout with Paypal</Button>
          </Form.Group>
        </Form>
      </Container>
   );
}
 
export default BillingInfo;