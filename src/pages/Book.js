import { Container, Row, Col, Form, Card, Table, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Book = () => {
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
    navigate("/bookingConfirmation");
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
            </Form.Group>
          </Col>
          <Col lg="6">
            <Form.Group className="my-3">
              <Form.Label>Session</Form.Label>
              <Form.Select name="session" onChange={handleChange}>
                <option>Session #1</option>
                <option>Session #2</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg="6">
            <Card>
              <Card.Body>
                <Card.Title>{bookingInfo.session}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p>
                    <strong>Time:</strong> {bookingInfo.session === "Session #1" ? "12:00 PM - 1:00 PM" : "1:00 PM - 2:00 PM"}
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum incidunt illo, sequi esse, iure, eos ratione quam blanditiis voluptatibus neque soluta quisquam distinctio tenetur est aperiam molestiae. Officiis doloremque, reprehenderit commodi modi eius placeat rerum earum beatae repudiandae asperiores reiciendis quae vel eveniet dolore accusantium eos corrupti assumenda debitis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Book
        </Button>
      </Form>

      <Table className="my-3 table table-striped">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
              <td className="bg-warning">Practice: 08:00-10:00</td>
            </tr>
            <tr>
              <td className="bg-info">Match: 10:00-12:00</td>
              <td className="bg-warning">Practice: 10:00-12:00</td>
              <td className="bg-info">Match: 10:00-12:00</td>
              <td className="bg-warning">Practice: 10:00-12:00</td>
              <td className="bg-info">Match: 10:00-12:00</td>
              <td className="bg-info">Match: 10:00-12:00</td>
              <td className="bg-info">Match: 10:00-12:00</td>
            </tr>
            <tr>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
              <td className="bg-warning">Practice: 12:00-14:00</td>
            </tr>
            <tr>
              <td className="bg-info">Match: 14:00-16:00</td>
              <td className="bg-warning">Practice: 14:00-16:00</td>
              <td className="bg-info">Match: 14:00-16:00</td>
              <td className="bg-warning">Practice: 14:00-16:00</td>
              <td className="bg-info">Match: 14:00-16:00</td>
              <td className="bg-info">Match: 14:00-16:00</td>
              <td className="bg-info">Match: 14:00-16:00</td>
            </tr>
            <tr>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
              <td className="bg-warning">Practice: 16:00-18:00</td>
            </tr>
            <tr>
              <td className="bg-warning">Practice: 18:00-20:00</td>
              <td className="bg-info">Match: 18:00-20:00</td>
              <td className="bg-warning">Practice: 18:00-20:00</td>
              <td className="bg-info">Match: 18:00-20:00</td>
              <td className="bg-warning">Practice: 18:00-20:00</td>
              <td className="bg-warning">Practice: 18:00-20:00</td>
              <td className="bg-warning">Practice: 18:00-20:00</td>
            </tr> 
            <tr>
              <td className="bg-warning">Practice: 20:00-22:00</td>
              <td className="bg-warning">Practice: 20:00-22:00</td>
              <td className="bg-warning">Practice: 20:00-22:00</td>
              <td className="bg-warning">Practice: 20:00-22:00</td>
              <td className="bg-warning">Practice: 20:00-22:00</td>
              <td className="bg-danger">Closed</td>
              <td className="bg-danger">Closed</td>
            </tr>
          </tbody>
        </Table>
    </Container>
  );
}
 
export default Book;