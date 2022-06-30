import { Navbar, Container, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.png";

const NavigationBar = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container fluid="xxl">
        <NavLink to="/" className="navbar-brand">
          <Image src={Logo} width="50px" alt="logo" />
          <span className="fw-bold text-light h4 ps-3">Ping Pong Lovers</span>
        </NavLink>
        < Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          />
        <div className="collapse navbar-collapse align-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item px-2"> 
              <NavLink to="/membership" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Memberships &amp; Coaching</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/guides" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Guides</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/forum" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Forum</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/shop" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Shop</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/book" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : 'inactive')}>Book</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
 
export default NavigationBar;