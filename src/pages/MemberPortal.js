import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useState } from "react";

const MemberPortal = () => {

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "(123) 456-7890",
    address: "123 Main St.",
    city: "Anytown",
    state: "Anystate",
    zip: "12345",
    membership: "DEFAULT",
  });

  const [billingInfo, setBillingInfo] = useState({
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

  const list = Object.entries(user);
  const firstHalf = list.slice(0, Math.ceil(list.length / 2));
  const secondHalf = list.slice(Math.ceil(list.length / 2));

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Member Portal</h2>
      <Row>
        <Col lg="3"  className="mb-2">
          <Card className="card h-100">
            <Card.Body>
              <Card.Title className="fw-bold mb-3">Manage My Account</Card.Title>
              <Card.Text>
                <Link to="/memberPortal/edit">Edit Member Information</Link>
              </Card.Text>
              <Card.Text>
                <Link to="/memberPortal/changePassword">Change Password</Link>
              </Card.Text>
              <Card.Text>
                <Link to="/memberPortal/viewSessions">View My Sessions</Link>
              </Card.Text>
              <Card.Text>
                <Link to="/book/signedin">Book Sessions</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="9">
          {/* Member information */}
          <Card className="card">
            <Card.Body>
              <Card.Title className="fw-bold">Member Information</Card.Title>
              <Row>
                <Col md={6} className="mb-3">
                  {firstHalf.map(([key, value]) => {
                    return (
                      <Card.Text key={key}>
                        {capitalizeFirst(key)} : {value}
                      </Card.Text>
                    );})}
                </Col>
                <Col md={6}>
                  {secondHalf.map(([key, value]) => {
                    return (
                      <Card.Text key={key}>
                        {capitalizeFirst(key)} : {value}
                      </Card.Text>
                    );})}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
 
export default MemberPortal;