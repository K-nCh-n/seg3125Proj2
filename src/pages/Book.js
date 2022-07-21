import { Container, Row, Col, Form, Card, Table, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import sessionData from "../assets/sessionData";

const Book = () => {
  const { signedInStatus } = useParams();
  console.log(signedInStatus);

  const sessions = sessionData;

  let navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    session: "Session #1"
  });


  const handleChange = (event) => {
    setBookingInfo(previousState => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookingInfo);
    if (signedInStatus === "signedin") {
      navigate("/bookingConfirmation");
    } else {
      alert("Please sign in to book a session");
      navigate("/membership");
    }
  }

  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Book</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg="6">
            <Form.Group className="my-3">
              <Form.Label>Date</Form.Label>
              <Form.Control name="date" type="date" placeholder="Date" onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">
                Please choose a date.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg="6">
            <Form.Group className="my-3">
              <Form.Label>Session</Form.Label>
              <Form.Select multiple name="session" onChange={handleChange} required>
                {sessions.map((session) => {
                  return (
                    <option>{session[7].time} - {session[6].type}</option>
                  );})}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a session.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg="6">
            <Card>
              <Card.Body>
                <Card.Title>{bookingInfo.session}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span className="fw-bold">{bookingInfo.date}</span>
                </Card.Subtitle>
                <Card.Text>
                  {bookingInfo.session.includes("Practice") ? `
                  Practice session where you can improve your skills and prepare for matches. 
                  Get Help Finding a Partner using our Forum.` : `
                  Organised Match Sessions based on each players level.
                  `}
                </Card.Text>
                <Card.Text>
                  {sessions[1][2].status}
                </Card.Text>
                <Card.Text>
                  Players: {sessions[1][2].players.toString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Book
        </Button>
        <p className="alert alert-warning m-2 my-4">Warning: A fee of 5$ will be charged for every 3 sessions which were booked but not attended </p>
      </Form>

      <Table striped bordered hover className="my-3 table">
        <thead>
          <tr>
            <th style={{width: "10%"}}></th>
            <th style={{width: "10%"}}>Monday</th>
            <th style={{width: "10%"}}>Tuesday</th>
            <th style={{width: "10%"}}>Wednesday</th>
            <th style={{width: "10%"}}>Thursday</th>
            <th style={{width: "10%"}}>Friday</th>
            <th style={{width: "10%"}}>Saturday</th>
            <th style={{width: "10%"}}>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => {
            return (
              <tr>
                <td>{session[7].time}</td>
                <td>{session[0].type}</td>
                <td>{session[1].type}</td>
                <td>{session[2].type}</td>
                <td>{session[3].type}</td>
                <td>{session[4].type}</td>
                <td>{session[5].type}</td>
                <td>{session[6].type}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
}
 
export default Book;