import { Container, Row , Col, Image, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import fr from '../assets/languages/fr';

const Home = () => {

  const languages = [
    { value: 'en', text: "English" },
    { value: 'fr', text: "French" }
]

  const [lang, setLang] = useState('en');

  const handleChange = (e) => {
    setLang(e.target.value);
  }

  const translate = (text) => {
    if (lang === 'en') {
      return text;
    } else if (lang === 'fr') {
      return fr[text];
    }

    return text;
  };

  return (
    <Container fluid="xxl" className="my-2 py-2 bg-light" id="background-container">
      
      <div className="text-end">
        <select className="float-right" value={lang} onChange={handleChange}>
          {languages.map(item => {
            return (<option key={item.value} 
            value={item.value}>{item.text}</option>);
          })}
        </select>
      </div>

      <Row>
        <Col lg="8">
          <Card className="position-relative">
            <Image className="card-img-top" src="https://images.unsplash.com/photo-1584813539806-2538b8d918c6?ixlib=rb-1.2.1" alt="Ping Pong Lovers" fluid />
            <Card.ImgOverlay className="card-img-overlay text-center">
              <Card.Title className="display-5 text-center fw-bold p-1 bg-light d-inline">Ping Pong Lovers</Card.Title>
              <Card.Footer className="bg-transparent border-0">
                <div className="position-absolute bottom-0 mb-5 w-100 start-0">
                  <Link to="/membership" className="btn btn-primary rounded-pill px-3 py-2 mx-3">{translate('Member Portal')}</Link>
                  <Link to="/book" className="btn btn-success rounded-pill px-3 py-2 mx-3">{translate('Book')}</Link>
                </div>
              </Card.Footer>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg="4" className="bg-light d-lg-flex flex-column">
          <h3 className="fw-bold">{translate('Location')}</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.191527488916!2d-75.70806718472085!3d45.405477245381384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce044abee2251b%3A0x90b00f4155715c9e!2sOttawa%20Table%20Tennis%20Club!5e0!3m2!1sen!2sca!4v1656533561741!5m2!1sen!2sca"
          className="w-100 h-75" title="Location" style={{border:0}} allowFullScreen
           loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div>
            <h3 className="mt-3 fw-bold">{translate('Opening Hours')}</h3>
            <Row>
              <Col>
                <p><span className="fw-bold">{translate('Monday - Friday:')}</span></p>
                <p><span className="fw-bold">{translate('Weekends and Holidays:')}</span></p>
              </Col>
              <Col>
                <p>8:00am - 10:00pm</p>
                <p>8:00am - 8:00pm</p>
              </Col>
            </Row>   
          </div>
        </Col>
      </Row>

      <h2 className="pt-5 pb-2 mt-5">{translate('Frequently Asked Questions')}</h2>
      <Accordion className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{translate('How do I find a partner?')}</Accordion.Header>
          <Accordion.Body>
          {translate('You can bring your own partner or you can find one using our Forum.')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{translate('Do you sell equipment?')}</Accordion.Header>
          <Accordion.Body>
          {translate('Yes, we do. We have a large selection of equipment available for sale and for rent.')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{translate('Do you have chnage rooms?')}</Accordion.Header>
          <Accordion.Body>
          {translate('Yes, we have change rooms, showers and lockers available for free.')}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
 
export default Home;