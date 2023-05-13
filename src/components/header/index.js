import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/png/logo.png";
import './style.css'; // import the CSS file

function Header() {

    const handleMouseEnter = (event) => {
        event.currentTarget.style.color = '#00ACFF';
      };
    
      const handleMouseLeave = (event) => {
        event.currentTarget.style.color = '';
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="179" height="52" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-container">
          <Nav.Link className="mt-1" href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span style={{color:'#00ACFF',fontWeight:'bold'}}>BlueWeb</span>
      </Nav.Link>
      <Nav.Link className="mt-1" href="/about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        About
      </Nav.Link>
      <Nav.Link className="mt-1" href="/contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Contact
      </Nav.Link>
            <Nav.Link href="#link"> <Button variant="outline-primary" style={{borderRadius:'100px'}}>Request Demo</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
