import { Container, Row , Col, Form, Button, InputGroup } from "react-bootstrap";
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

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(user);
      checkPassword();
      event.preventDefault();
      navigate("/billingInfo");
    }

    setValidated(true);
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

  const checkPassword = () => {
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    }
  }

  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Sign Up</h2>
      <Form noValidate validated={validated}  onSubmit={handleSubmit}>
        <h4 className="px-2">Personal Information</h4>
        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" type="text" placeholder="Enter your first name" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please enter a first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" type="text" placeholder="Enter your last name" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please enter a last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  aria-describedby="inputGroupPrepend"
                  pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Enter password" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm='6'>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please confirm your password.
              </Form.Control.Feedback>
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
            <Button variant="primary"  type="submit">
              Next 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </Button>
        </Form.Group>
      </Form>
    </Container>
   );
}
 
export default SignUp;