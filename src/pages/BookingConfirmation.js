import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingConfirmation = () => {
  return ( 
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Booking Confirmation</h2>
      <p className="h4">Thank you for booking a session</p>
    </Container>
   );
}
 
export default BookingConfirmation;