import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import Profile from "../assets/profile.jpg";

const Forum = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Forum</h2>
      {/* AESTHETICS */}
      <Row>
        <Col xxl={6}>
          <Card className="mb-4">
            <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/LookingForBeginnerPartner">Looking For Beginner Partner</Link>
              </Card.Title>
              <Card.Text>
                Hi, I am Alan, I am a beginner table tennis player who has just started a few weeks and I am looking for a partner to play with.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="mb-4">
          <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/EarlyMorningPlayer">Any player looking to play when the club opens?</Link>
              </Card.Title>
              <Card.Text>
                Hey, I am looking for early birds who enjoy are around the intermediate level and want to play with me when the club opens.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xxl={6}>
          <Card className="mb-4">
            <Card.Img style={{width: '75px'}} className="mt-3 ms-3" variant="top" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <Card.Body>
              <Card.Title>
                <Link to="/forum/QuestionAboutEquipment">Looking for reccomendations for rubber</Link>
              </Card.Title>
              <Card.Text>
                I've been playing for a year now and my rubber has started to wear down quite a bit. 
                I am looking for any recommendations for offensive players who like to loop.  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Forum;