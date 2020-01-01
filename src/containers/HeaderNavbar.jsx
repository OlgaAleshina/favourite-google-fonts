import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function HeaderNavbar() {
  return (
    <Navbar>
      <Navbar.Brand>Google Fonts</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" />
      <Nav>
        <Nav.Link>CATALOG</Nav.Link>
        <Nav.Link>FEATURED</Nav.Link>
        <Nav.Link>ARTICLES</Nav.Link>
        <Nav.Link>ABOUT</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default HeaderNavbar;
