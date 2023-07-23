import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.svg";
import React from "react";
const Header = () => {
  return (
    <header>
      <Navbar
        style={{ background: "var(--primary-color)" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="ASH" width="80" height="35" className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
