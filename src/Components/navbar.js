import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navigation() {
  return (
    <div className="navb">
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light">
          <Container>
            <Link className="buttons" to="/home">
              Nirvana
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link className="buttons" to="/events">
                  Events
                </Link>
                <Link className="buttons" to="/about">
                  About
                </Link>
                <Link className="buttons" to="/contact">
                  Contact us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
