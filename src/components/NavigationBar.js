import { Navbar, Container, Button, Image, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="py-0">
          <NavLink to="/" className="nav-link">
            <Image src={Logo} width="40px" alt="logo" />
            <span className="fw-bold text-light h4 ps-3 m-0">Ping Pong Lovers</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav>
            <Nav.Item className="px-2"> 
              <NavLink to="/membership" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Memberships &amp; Coaching</NavLink>
            </Nav.Item>
            <Nav.Item className="px-2">
              <NavLink to="/guides" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Guides</NavLink>
            </Nav.Item>
            <Nav.Item className="px-2">
              <NavLink to="/forum" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Forum</NavLink>
            </Nav.Item>
            <Nav.Item className="px-2">
            <NavDropdown menuVariant="dark" title="Shop" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>
              <NavDropdown.Item>
                <NavLink to="/shop" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Shop</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* FUNCTION TO GENERATE MENU ITEMS */}
              <NavDropdown.Item>
                <NavLink to="/shop/blades" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Blades</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/shop/rubber" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Rubber</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            </Nav.Item>
            <Nav.Item className="px-2">
              <NavLink to="/book" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Book</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavigationBar;