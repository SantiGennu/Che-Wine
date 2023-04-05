import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container className="nav-container">
          <Navbar.Brand className="logo" href="#home">
            <img
              src="/public/Che Wine1.png
                    "
              alt="Che wine"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Wines</Nav.Link>
              <Nav.Link href="#link">Best Sellers</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>

            <Nav className="nav-cart ms-auto">
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
