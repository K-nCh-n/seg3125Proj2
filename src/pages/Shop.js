import { Container, Button, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ShopRow from "../components/ShopRow";

const Shop = () => {
  const { category } = useParams();
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <Row>
        <Col md="4" lg="3" xl="2" className="mb-3">
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/blades">Blades</Link>
          <Link className="btn d-block w-100 btn-light text-start ps-4" to="/shop/shakehand">  Shakehand</Link>
          <Link className="btn d-block w-100 btn-light text-start ps-4" to="/shop/penhold">  Penhold</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/rubber">Rubber</Link>
          <Link className="btn d-block w-100 btn-light text-start ps-4" to="/shop/inverted">  Inverted</Link>
          <Link className="btn d-block w-100 btn-light text-start ps-4" to="/shop/pips">  Pips Out</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/premades">Premades</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/shoes">Shoes</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/balls">Balls</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/glue">Glue</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/accessories">Accessories</Link>
          <Link className="btn d-block w-100 btn-light text-start" to="/shop/apparel">Apparel</Link>
        </Col>
        <Col md="8" lg="9" xl="10">
          <Row>       
            <Col xs="11">
              <h2 className="fw-bold text-center text-capitalize">{category ?? "Shop"}</h2>
            </Col>
            <Col xs="1">
              <Link className="p-3 btn btn-secondary" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </Link>
            </Col>
          </Row>
          <ShopRow category={category}/>
          <ShopRow category={category}/>
        </Col>


      </Row>
    
    </Container>
  );
}

export default Shop;