import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom"
import Profile from "../assets/profile.jpg";

const ForumPost = () => {
  const { post } = useParams();
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">{post}</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={9}>
            <Card className="mb-4 h-100">
              <Card.Body>
                <Card.Text className="p-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem modi quasi facilis delectus numquam quis animi quo molestiae eos ex fuga doloribus, alias enim veniam voluptates repellat, repellendus accusamus nisi incidunt eveniet dolorum neque maiores voluptate ad. Velit sit unde corporis, eos temporibus natus eius alias at nulla facilis illum quod maiores voluptatem excepturi nobis mollitia minima eum commodi nisi atque saepe id aut suscipit tempore. Cumque voluptates consectetur maiores incidunt nobis porro quibusdam necessitatibus sunt? Cum dignissimos, earum ab esse odio necessitatibus sequi sed fugit. Nisi unde sint aut, placeat praesentium doloremque vitae, labore ut velit, consequuntur deserunt porro!
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
                  <span className="fw-bold">UserName</span>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={9}>
            <Card className="mb-4 h-100">
              <Card.Body>
                <Card.Text className="p-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem modi quasi facilis delectus numquam quis animi quo molestiae eos ex fuga doloribus, alias enim veniam voluptates repellat, repellendus accusamus nisi incidunt eveniet dolorum neque maiores voluptate ad. Velit sit unde corporis, eos temporibus natus eius alias at nulla facilis illum quod maiores voluptatem excepturi nobis mollitia minima eum commodi nisi atque saepe id aut suscipit tempore. Cumque voluptates consectetur maiores incidunt nobis porro quibusdam necessitatibus sunt? Cum dignissimos, earum ab esse odio necessitatibus sequi sed fugit. Nisi unde sint aut, placeat praesentium doloremque vitae, labore ut velit, consequuntur deserunt porro!
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