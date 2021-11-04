import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import style from "./NavBar.module.css"
export default function NavBar() {
    return (
<Navbar className={style.fix} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/#home">Alejandro Motta</Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/#home">Home</Nav.Link>
      <Nav.Link href="/#about">About Me</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/#projects">PortFolio</NavDropdown.Item>
        <NavDropdown.Item href="/#cv">Cv</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/#form">Contact Me</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
