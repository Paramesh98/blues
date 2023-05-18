import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/png/logo.png";
import "./style.css"; // import the CSS file

function Header() {
  return (
    <Navbar
      style={{
        background: "#fff",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        zIndex: 9999,
        position: "fixed",
        width: "100%",
        top: 0,
      }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="179"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-container">
            <NavLink
              activeClassName="active"
              to="/"
              style={{
                textDecoration: "none",
                padding: "8px",
                color: "#526a7e",
              }}
            >
              BlueWeb
            </NavLink>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                padding: "8px",
                color: "#526a7e",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                padding: "8px",
                color: "#526a7e",
              }}
            >
              Contact
            </NavLink>
            <NavLink href="#link">
              {" "}
              <Button
                variant="outline-primary"
                style={{ borderRadius: "100px" }}
              >
                Request Demo
              </Button>{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
