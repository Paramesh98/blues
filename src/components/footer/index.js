import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/png/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
import "./footer.css";
import { Link } from "react-router-dom";
const textStyle = { color: "#526A7E" };
const Footer = () => {
  return (
    <footer
      className=" py-0 mt-4 footer"
      style={{
        position: "relative",
        zIndex: 100,
        bottom: "0",
        left: 0,
        right: 0,
        width: "100%",
        marginTop: "70px",
      }}
    >
      <Container fluid>
        <Row className="m-4">
          <Col className="mt-4" md={4} sm={6}>
            <img src={Logo} alt="Logo" height="50" />
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Overview</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                <Link to="/about">About Us</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                Pricing
              </li>
              <li className="mt-4" style={textStyle}>
                Customer
              </li>
              <li className="mt-4" style={textStyle}>
                Channel Partners
              </li>
              <li className="mt-4" style={textStyle}>
                Contact Us
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                Business Features
              </li>
              <li className="mt-4" style={textStyle}>
                Admin Features
              </li>
              <li className="mt-4" style={textStyle}>
                User Features
              </li>
              <li className="mt-4" style={textStyle}>
                Security Features
              </li>
              <li className="mt-4" style={textStyle}>
                How It Works
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Elements</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                Using Blue
              </li>
              <li className="mt-4" style={textStyle}>
                Resources
              </li>
              <li className="mt-4" style={textStyle}>
                FAQ's
              </li>
              <li className="mt-4" style={textStyle}>
                Brand Guidelines
              </li>
              <li className="mt-4" style={textStyle}>
                Statutory & Disclosures
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                Privacy Policy
              </li>
              <li className="mt-4" style={textStyle}>
                Terms Of Service
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className="ft-bottom-banner ">
        <Col xs={12} md={6} className="text-center text-md-left">
          <span className="mb-0 ml-5" style={{ color: "#FFFFFF" }}>
            &copy; 2023 Bluesecures. All Rights Reserved.
          </span>
        </Col>
        <Col xs={12} md={6} className="text-center dark text-md-right">
          <ul className="list-unstyled d-inline-flex justify-content-md-end mb-0 mr-5">
            <li className="list-inline-item mx-2">
              <a href="#">
                <Facebook size={25} color="#FFFFFF" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="#">
                <Twitter size={25} color="#FFFFFF" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="#">
                <Instagram size={25} color="#FFFFFF" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="#">
                <Linkedin size={25} color="#FFFFFF" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="#">
                <Youtube size={25} color="#FFFFFF" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
