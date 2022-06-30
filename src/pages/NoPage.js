import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"

const NoPage = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2">Error 404: This Page could not be found</h2>
      <Link to="/" className="btn btn-primary px-4 py-3"> Return to Home </Link>
    </Container>
  );
}
 
export default NoPage;