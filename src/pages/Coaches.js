import { Container, Row, Col, Image } from "react-bootstrap";
import Coach from "../assets/profile.jpg";

const Coaches = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Coaches</h2>

      <Row className="my-4 px-5 g-3 justify-content-center">
        <Col md="4">
          <Image alt="Photo of Coach#1" src={Coach} fluid></Image>
        </Col>
        <Col md="8" className="px-5">
          <h3 className="fw-bold">Coach#1</h3>
          <p className="lead">10 years of experience</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum distinctio quasi, vel, nihil minus cumque quidem labore quae, optio maiores necessitatibus exercitationem illo. Alias tempora qui natus minima obcaecati, amet ipsam nulla quae quis esse aperiam ipsa aut labore, dolores itaque iusto, quidem exercitationem adipisci ipsum incidunt. Quas, numquam iure in architecto quae voluptatibus maxime aut! Vitae dolorum esse iusto eos laborum nam iure earum, molestiae tempore ad vero nisi molestias animi labore unde consequuntur.
          </p>
        </Col>
      </Row>

      <Row className="my-4 px-5 g-3 justify-content-center">
        <Col md="4">
          <Image alt="Photo of Coach#1" src={Coach} fluid></Image>
        </Col>
        <Col md="8" className="px-5">
          <h3 className="fw-bold">Coach#1</h3>
          <p className="lead">10 years of experience</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum distinctio quasi, vel, nihil minus cumque quidem labore quae, optio maiores necessitatibus exercitationem illo. Alias tempora qui natus minima obcaecati, amet ipsam nulla quae quis esse aperiam ipsa aut labore, dolores itaque iusto, quidem exercitationem adipisci ipsum incidunt. Quas, numquam iure in architecto quae voluptatibus maxime aut! Vitae dolorum esse iusto eos laborum nam iure earum, molestiae tempore ad vero nisi molestias animi labore unde consequuntur.
          </p>
        </Col>
      </Row>

      <Row className="my-4 px-5 g-3 justify-content-center">
        <Col md="4">
          <Image alt="Photo of Coach#1" src={Coach} fluid></Image>
        </Col>
        <Col md="8" className="px-5">
          <h3 className="fw-bold">Coach#1</h3>
          <p className="lead">10 years of experience</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum distinctio quasi, vel, nihil minus cumque quidem labore quae, optio maiores necessitatibus exercitationem illo. Alias tempora qui natus minima obcaecati, amet ipsam nulla quae quis esse aperiam ipsa aut labore, dolores itaque iusto, quidem exercitationem adipisci ipsum incidunt. Quas, numquam iure in architecto quae voluptatibus maxime aut! Vitae dolorum esse iusto eos laborum nam iure earum, molestiae tempore ad vero nisi molestias animi labore unde consequuntur.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Coaches;