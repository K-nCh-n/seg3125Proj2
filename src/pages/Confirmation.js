import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Confirmation</h2>
      <p className="h4">Thank you for your purchase!</p>
      <p className="h3">Check out the <Link to="/book">Booking Page</Link> to schedule your next match</p>
    </Container>
   );
}
 
export default Confirmation;