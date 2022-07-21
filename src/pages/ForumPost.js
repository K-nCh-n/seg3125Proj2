import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom"
import Profile from "../assets/profile.jpg";

const ForumPost = () => {
  const { post } = useParams();
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">{post}</h2>
      {/*  */}
      <div>
        <Row className="mb-4">
          <Col xl={3}>
            <Card className="mb-4 h-100">
              <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">UserName</span>
                </Card.Title>
                <Card.Text>
                  Started playing 1 year ago
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={9}>
            <Card className="mb-4 h-100">
              <Card.Body>
                <Card.Text className="p-4">
                  Hey Guys,
                  I am a beginner table tennis player who has just started a few weeks and I am looking for a partner to play with.
                  I'd love to learn from you all and I hope you all enjoy playing with me.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <hr />
        
        <Row className="mb-4">
          <Col xl={3}>
            <Card className="mb-4 h-100">
              <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bold">John</span>
                </Card.Title>
                <Card.Text>
                  10 years experience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={9}>
            <Card className="mb-4 h-100">
              <Card.Body>
                <Card.Text className="p-4">
                  Hey,
                  I will be at the club tonight at 8pm. If you are around then I'd love to play with you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
 
export default ForumPost;