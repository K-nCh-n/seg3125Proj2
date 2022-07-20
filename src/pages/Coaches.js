import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Coach from "../assets/profile.jpg";
import coachesData from "../assets/coaches";

const Coaches = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Coaches</h2>

      <p className="alert alert-info lead" >To book a coaching session, please contact our coaches using their phone number, email or directly on the website</p>

      <h2 className="fw-bold pt-2 text-center">Pricing</h2>
      <Row>
      <Col md={6} xxl={3} className="my-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <h4 className="fw-bold">Beginner</h4>
              </Card.Title>
              <Card.Text>
                <p>
                  <span className="fw-bold">$20 per session</span>
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
                <h4 className="fw-bold">Intermediate</h4>
              </Card.Title>
              <Card.Text>
                <p>
                  <span className="fw-bold">$25 per session</span>
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
                <h4 className="fw-bold">Advanced</h4>
              </Card.Title>
              <Card.Text>
                <p>
                  <span className="fw-bold">$30 per session</span>
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
                <h4 className="fw-bold">Package</h4>
              </Card.Title>
              <Card.Text>
                <p>
                  <span className="fw-bold">$150 for 10 sessions irrespective of level</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam vero iste excepturi commodi facilis nihil ducimus sit illum quis.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {coachesData.map((coach) => {
        return (
          <Row className="my-4 px-5 g-3">
            <Col lg="3" className="mb-2">
              <Image src={Coach} fluid alt={"Photo of " + coach.name} />
            </Col>
            <Col lg="9" className="px-5">
              <h3 className="fw-bold">{coach.name}</h3>
              <p className="lead">{coach.experience}</p>
              <p>{coach.description}</p>
              <p>
                <a className="me-5" href={`tel:${coach.phone}`}>{coach.phone}</a>
                <a href={`mailto:${coach.email}`}>{coach.email}</a>
              </p>
              <Button variant="primary"> Contact Coach</Button>
            </Col>
          </Row>
      );})}
    </Container>
  );
}
 
export default Coaches;