import { Container, Row , Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const SignUp = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    membership: "DEFAULT",
  }); 
  // const [isPending, setIsPending] = useState(false);

  const handleChange = (event) => {
    setUser(previousState => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  }

  const handleSubmit = (event) => {
    console.log(user);
    event.preventDefault();
    navigate("/billingInfo");
    // setIsPending(true);

    // fetch("http://localhost:3000/api/users", {
    //   method: "POST",
    //   headers: {ContentType: "application/json"},
    //   body: JSON.stringify(user)
    //   }).then(() => {
    //     console.log("User created");
    //     setIsPending(false);
    //   })
  };

  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Sign Up</h2>
      <Form id="personal-info" onSubmit={handleSubmit}>
        <h4 className="px-2">Personal Information</h4>
        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" type="text" placeholder="Enter your first name" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" type="text" placeholder="Enter your last name" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="Enter phone number" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Enter password" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="my-3">
          <Form.Label>Membership Type</Form.Label>
          <Form.Select name="membership" onChange={handleChange}>
            <option>Membership #1</option>
            <option>Membership #2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
            <Button variant="primary"  type="submit">Next</Button>
        </Form.Group>
      </Form>
    </Container>
   );
}
 
export default SignUp;