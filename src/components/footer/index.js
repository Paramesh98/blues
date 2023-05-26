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
const Footer = ({ isMobile }) => {
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
                <Link to="/about.html">About Us</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/">Pricing</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/customers.html">Customer</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/channelpartner.html"> Channel Partners</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/contact.htm"> Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                <Link to="/business-feature.html"> Business Features</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/admin-feature.html"> Admin Features</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/users-feature.html"> User Features</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/security.html">Security Features</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/how-it-works.html"> How It Works</Link>
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Elements</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                <Link to="/using-blue.html"> Using Blue</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/resources.html">Resources</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/faq.html"> FAQ's</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/brand-guidelines.html">Brand Guidelines</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/statutory.html"> Statutory & Disclosures</Link>
              </li>
            </ul>
          </Col>
          <Col className="mt-4" md={2} sm={6}>
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li className="mt-4" style={textStyle}>
                <Link to="/privacy-policy.html"> Privacy Policy</Link>
              </li>
              <li className="mt-4" style={textStyle}>
                <Link to="/terms.html"> Terms Of Service</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className="ft-bottom-banner ">
        <Col xs={12} md={6} className="text-center text-md-left">
          <span className="mb-0 ml-5 footer-l" style={{ color: "#FFFFFF" }}>
            2023 © Deskfactors Inc. All Rights Reserved.
          </span>
        </Col>
        <Col xs={12} md={6} className="text-center dark text-md-right">
          <ul className="list-unstyled d-inline-flex justify-content-md-end mb-0 mr-5 footer-r ">
            <li className="list-inline-item mx-2">
              <Link target={"_blank"} to="https://www.facebook.com/BlueSecures">
                <Facebook size={25} color="#FFFFFF" />
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link target={"_blank"} to="https://twitter.com/bluesecures">
                <Twitter size={25} color="#FFFFFF" />
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link
                target={"_blank"}
                to="https://www.instagram.com/bluesecures/"
              >
                <Instagram size={25} color="#FFFFFF" />
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link
                target={"_blank"}
                to="https://www.linkedin.com/company/bluesecures/"
              >
                <Linkedin size={25} color="#FFFFFF" />
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link
                target={"_blank"}
                to="https://www.youtube.com/channel/UCQEUXZ2psF16THw7FRE963g"
              >
                <Youtube size={25} color="#FFFFFF" />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
