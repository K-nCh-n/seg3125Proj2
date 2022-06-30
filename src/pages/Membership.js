import { Container, Row , Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Memberships</h2>
      <Row>
        <Col md={6} xxl={3} className="my-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <h3 className="fw-bold">Weekly</h3>
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
                <h3 className="fw-bold">Monthly</h3>
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
                <h3 className="fw-bold">MultiPass</h3>
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
                <h3 className="fw-bold">Single Session</h3>
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
        <Link to="/signup" className="btn btn-primary px-4 py-3"> Sign Up Now </Link>
      </div>
      <hr class="my-4" />

      
      <h2 className="fw-bold pt-2 text-center">Coaching</h2>
      <Row>
      <Col md={6} xxl={3} className="my-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <h3 className="fw-bold">Beginner</h3>
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
                <h3 className="fw-bold">Intermediate</h3>
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
                <h3 className="fw-bold">Advanced</h3>
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
                <h3 className="fw-bold">Package</h3>
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
      <div className="d-flex justify-content-center">
        <Link to="/coaches" className="btn btn-primary px-4 py-3"> Meet Our Coaches </Link>
      </div>
    </Container>
  );
}
 
export default Membership;