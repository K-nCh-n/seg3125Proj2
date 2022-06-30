import { Container, Row , Col, Image, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/homepage.jpg";

const Home = () => {

  return (
    <Container fluid="xxl" className="my-2 py-2 bg-light" id="background-container">
      <Row>
      <h2 className="text-center fw-bold">Ping Pong Lovers</h2>
        <Col lg="8">
            <Image className="position-relative" src={BackgroundImage} alt="Ping Pong Lovers" fluid />
            <div className="top-50 end-50 position-absolute mt-5 pt-5">
          </div>
        </Col>
        <Col lg="4" className="bg-light px-3 pt-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.191527488916!2d-75.70806718472085!3d45.405477245381384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce044abee2251b%3A0x90b00f4155715c9e!2sOttawa%20Table%20Tennis%20Club!5e0!3m2!1sen!2sca!4v1656533561741!5m2!1sen!2sca"
          className="w-100 h-50" title="Location" style={{border:0}} allowFullScreen=""
           loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div>
            <div>
              <p className="pt-2">
                18 Louisa St #240, Ottawa, ON K1R 6Y6 <br />
                <a href="tel:+1-613-555-5555">613-555-5555</a> <br />
                <a href="mailto:PingPongLovers@email.com">PingPongLovers@email.com</a>
              </p>
            </div>
            <div>
              <h3 className="mt-3">Opening Hours</h3>
              <Row>
                <Col>
                  <p><span className="fw-bold">Monday - Friday:</span></p>
                  <p><span className="fw-bold">Weekends and Holidays:</span></p>
                </Col>
                <Col>
                  <p>8:00am - 10:00pm</p>
                  <p>8:00am - 8:00pm</p>
                </Col>
              </Row>   
              <p className="text-center my-3">
              <Link to="/membership" className="btn btn-primary rounded-pill p-2 me-3">Become a Member</Link>
              <Link to="/book" className="btn btn-success rounded-pill p-2 ms-3">Book now</Link>
            </p>
            </div>
          </div>
        </Col>
      </Row>

      <h2 className="pt-5 pb-2 mt-5">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>FAQ #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>FAQ #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>FAQ #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
 
export default Home;