import { Container, Row , Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Membership = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser(previousState => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  }

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log(user);
      navigate("/memberPortal");
    }
    setValidated(true);
  }

  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <Row>
        <Col lg="4" className="order-1 order-lg-2">
          {/* Member Sign In */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h4 className="px-2 fw-bold">Sign In</h4>
            <Row className="my-3">
              <Col sm="6" lg='12'>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter your email" onChange={handleChange} required />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm="6" lg='12'>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Enter password" onChange={handleChange} required />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row> 
            <Form.Group key="cb">
              <Form.Check id="cb" className="my-3" type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Group>
              <Button variant="primary rounded-pill px-3 py-2"  type="submit">Sign In</Button>
            </Form.Group>
          </Form>
        </Col>
        
        <Col lg="8" className="order-2 order-lg-1">
          
            <h2 className="fw-bold pt-2 text-center">Memberships</h2>
            <Row>
              <Col md={6} xxl={3} className="my-4">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="fw-bold">Weekly</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <span className="fw-bold">$15</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam vero iste excepturi commodi facilis nihil ducimus sit illum quis.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xxl={3} className="my-4">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="fw-bold">Monthly</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <span className="fw-bold">$80</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam vero iste excepturi commodi facilis nihil ducimus sit illum quis.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xxl={3} className="my-4">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="fw-bold">MultiPass</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <span className="fw-bold">$60 for 10 sessions</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam vero iste excepturi commodi facilis nihil ducimus sit illum quis.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xxl={3} className="my-4">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="fw-bold">Single Session</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <span className="fw-bold">$8</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam vero iste excepturi commodi facilis nihil ducimus sit illum quis.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <p>Note: The duration of one playing session is 2 hours</p>
            </Row>
            <div className="d-flex justify-content-center">
              <Link to="/signup" className="btn btn-primary px-4 py-3 rounded-pill"> Sign Up Now </Link>
            </div>
            <hr className="my-4" />
        </Col>
      </Row>
    </Container>
  );
}
 
export default Membership;