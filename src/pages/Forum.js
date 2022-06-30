import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import Profile from "../assets/profile.jpg";

const Forum = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Forum</h2>

      <Row>
        <Col xxl={6}>
          <Card className="mb-4">
            <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src={Profile} />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/PostTitle1">ForumPost</Link>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod, nisi vel consectetur euismod, nisi nisl
                consectetur nisi, eu aliquet nisi nisl euismod nisi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="mb-4">
          <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src={Profile} />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/PostTitle2">ForumPost</Link>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod, nisi vel consectetur euismod, nisi nisl
                consectetur nisi, eu aliquet nisi nisl euismod nisi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xxl={6}>
          <Card className="mb-4">
            <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src={Profile} />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/PostTitle3">ForumPost</Link>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod, nisi vel consectetur euismod, nisi nisl
                consectetur nisi, eu aliquet nisi nisl euismod nisi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="mb-4">
          <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src={Profile} />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/PostTitle4">ForumPost</Link>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod, nisi vel consectetur euismod, nisi nisl
                consectetur nisi, eu aliquet nisi nisl euismod nisi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Forum;