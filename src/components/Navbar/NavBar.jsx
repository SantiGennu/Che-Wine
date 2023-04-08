import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container className="nav-container">
          <Link className="logo" to={"/"}>
            <img
              src="/Che Wine1.png
                    "
              alt="Che wine"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ms-auto">
              <NavLink
                className={({ isActive }) => (isActive ? "btn-a " : "btn")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "btn-a" : "btn")}
                to="/bestSellers"
              >
                Best Sellers
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "btn-a" : "btn")}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </Nav>

            <Link to="/cart " className="nav-cart ms-auto">
              <CartWidget />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
