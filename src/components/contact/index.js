import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import girlImage from "../../assets/png/girlChat.png";
import chatScreen from "../../assets/png/chatScreen.png";
import Bluechat from "../../assets/png/bluechat.png";
import Icon1 from "../../assets/png/icon1.png";
import Icon2 from "../../assets/png/icon2.png";
import allText from "../../assets/png/allText.png";
import messageScreen1 from "../../assets/png/messageScreen1.png";
import Boy3Chat from "../../assets/png/Boy3Chat.png";
import ContactChat from "../../assets/png/ContactChat.png";
import ContactIcon1 from "../../assets/png/ContactIcon1.png";
import ContactIcon2 from "../../assets/png/ContactIcon2.png";
import ContactIcon3 from "../../assets/png/ContactIcon3.png";
import allGroup from "../../assets/png/allGroup.png";
import Icon16 from "../../assets/png/icon16.png";
import ComLogo1 from "../../assets/png/ComLogo1.png";
import ComLogo2 from "../../assets/png/ComLogo2.png";
import ComLogo3 from "../../assets/png/ComLogo3.png";
import ComLogo4 from "../../assets/png/ComLogo4.png";
import ComLogo5 from "../../assets/png/ComLogo5.png";
import ComLogo6 from "../../assets/png/ComLogo6.png";
import ComLogo7 from "../../assets/png/ComLogo7.png";
import ComLogo8 from "../../assets/png/ComLogo8.png";
import ComLogo9 from "../../assets/png/ComLogo9.png";
import ComLogo10 from "../../assets/png/ComLogo10.png";
import ComLogo11 from "../../assets/png/ComLogo11.png";
import ComLogo12 from "../../assets/png/ComLogo12.png";
import ComLogo13 from "../../assets/png/ComLogo13.png";
import Header from "../header";
import Footer from "../footer";
import { Heading } from "../heading";
import { Content } from "../content";
import { CustomButton } from "../button";
import CustomSlider from "../slider";
import "./style.css";

import Carinsurance from "../../assets/images/page2/Carinsurance-man.png";
import chatbot from "../../assets/images/page2/chatbot.png";
import heroimage from "../../assets/images/page2/Hero-image-whatsapp.png";
import payment from "../../assets/images/page2/payment.png";
import shoppingcart from "../../assets/images/page2/shoppingcart.png";

const Contact = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.screen.width || 1000);
  }, [window.screen.width]);

  const fadeFromLeftAnimation = `
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
  const logoNameBlack = [
    ComLogo1,
    ComLogo2,
    ComLogo3,
    ComLogo4,
    ComLogo5,
    ComLogo6,
  ];
  const logoName = [
    ComLogo7,
    ComLogo8,
    ComLogo9,
    ComLogo10,
    ComLogo11,
    ComLogo12,
    ComLogo13,
  ];
  const Logos = ({ ImageName }) => {
    return (
      <Col md={2} className="mt-2">
        <Image src={ImageName} />
      </Col>
    );
  };
  const ImageDiv = ({ ImageName, Description }) => {
    return (
      <div
        className="pl-4"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F9F9F9",
          borderRadius: "10px",
        }}
      >
        <Image src={ImageName} style={{ width: 30 }} />
        <p className="m-4"> {Description}</p>
      </div>
    );
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 98) {
        setCount(count + 2);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [count]);

  const [count1, setCount1] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 60) {
        setCount1(count1 + 2);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [count1]);

  const [count2, setCount2] = useState(0.0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count2 < 2.4) {
        setCount2(count2 + 0.1);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [count2]);

  const mobileHeadingFont = {
    fontSize: "25px",
    lineHeight: "35px",
  };
  const isMobile = width < 500;
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Header />
      <Container>
        <style>{fadeFromLeftAnimation}</style>
        <Row
          className="reverse-row1"
          style={{ marginTop: "140px", ...(isMobile && { marginTop: "70px" }) }}
        >
          <Col md={6} style={{ marginTop: "30px" }}>
            <Heading
              style={{
                textAlign: "left",
                ...(isMobile && { ...mobileHeadingFont }),
              }}
            >
              BlueSecures AI
            </Heading>
            <b>
              <Content
                style={{
                  width: "100%",
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "25px",
                }}
              >
                <span
                  style={{
                    color: "#00ACFF",
                  }}
                >
                  Powered by BlueSecures API Platform
                </span>
              </Content>
            </b>
            <p style={{ marginTop: "40px" }}>
              AI driven marketing platform to engage with customers on WhatsApp.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={ContactIcon1}
                style={{ width: 20, marginLeft: "20px" }}
              />
              <p className="m-3"> Chatbots</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={ContactIcon2}
                style={{ width: 20, marginLeft: "20px" }}
              />
              <p className="m-3"> Notifications</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={ContactIcon3}
                style={{ width: 20, marginLeft: "20px" }}
              />
              <p className="m-3"> Automation</p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <CustomButton>Request Demo</CustomButton>{" "}
            </div>
          </Col>
          <Col
            md={6}
            className="text-center"
            style={{ ...(isMobile && { marginTop: "50px" }) }}
          >
            <Image src={heroimage} style={{ width: "70%" }} fluid />
          </Col>
        </Row>
      </Container>
      {/**
       *
       *
       * custom engagement section
       *
       * */}
      <Row style={{ marginTop: "70px" }}>
        <CustomSlider />
      </Row>

      <Row
        className="align-items-center"
        style={{
          marginTop: "70px",
          background: "#F9F9F9",
          paddingTop: "30px",
          ...(isMobile && { width: "103%" }),
        }}
      >
        <Col md={12} className="text-center mt-4">
          <Heading style={{ ...(isMobile && mobileHeadingFont) }}>
            Why engage with customers on{" "}
            <span style={{ fontWeight: "bold", color: "#1AD03F" }}>
              WhatsApp?
            </span>
          </Heading>
        </Col>
        <Col md={12} className="text-center m-4 margin-item">
          <Row className="justify-content-center">
            <Col className="p-4" md={3}>
              <div>
                <p
                  style={{
                    fontSize: "55px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {`>`} {count} {`%`}
                </p>
                <Content style={{ fontSize: "24px" }}>Open Rate</Content>
              </div>
            </Col>
            <Col
              className="m-4 marginHori"
              md={3}
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                marginLeft: 0,
                marginRight: 0,
                ...(isMobile && { border: "none" }),
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "55px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {`>`} {count1} {`%`}
                </p>
                <Content style={{ fontSize: "24px" }}>Open Documents</Content>
              </div>
            </Col>
            <Col className="p-4" md={3}>
              <div>
                <p
                  style={{
                    fontSize: "55px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {`>`} {parseFloat(count2).toFixed(2)}
                </p>
                <Content style={{ fontSize: "24px" }}>
                  Billion Global Users
                </Content>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/*  
      
      integrate section
      
      */}

      <Row
        style={{
          marginTop: "70px",
          ...(isMobile && { padding: "30px", marginTop: "30px" }),
        }}
        className="align-items-center reverse-row2"
      >
        <Col md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={Carinsurance}
              fluid
              style={{
                width: "75%",
                ...(isMobile && { width: "90%", marginTop: "0px" }),
              }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Heading
            style={{
              textAlign: "left",
              lineHeight: "64px",
              ...(isMobile && mobileHeadingFont),
              ...(isMobile && { marginTop: "50px" }),
            }}
          >
            Integrate Excel, CRM, Order Management, billing systems with{" "}
            <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
              BlueSecures{" "}
            </span>{" "}
            API platform to automate marketing campaigns
          </Heading>
          <Content
            style={{
              marginTop: "20px",
              width: "100%",
              textAlign: "left",
              marginBottom: "40px",
            }}
          >
            Reach Millions of customers on{" "}
            <span style={{ color: "#1AD03F", fontWeight: "bold" }}>
              WhatsApp
            </span>
          </Content>
          <ul>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              Send promotional messages and personalized notifications.
            </li>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              {" "}
              Automate reminders, conformations and online payments.
            </li>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              Get real time campaign and performance MIS, metrics and insights.
            </li>
          </ul>
        </Col>
      </Row>

      {/**
       * integrate section 2
       *
       *
       */}

      <Row
        className="align-items-center reverse-row1"
        style={{ marginTop: "140px", ...(isMobile && { marginTop: "30px" }) }}
      >
        <Col md={6}>
          <div
            style={{
              paddingLeft: "140px",
              ...(isMobile && { padding: "30px" }),
            }}
          >
            <Heading
              style={{ textAlign: "left", ...(isMobile && mobileHeadingFont) }}
            >
              Integrate{" "}
              <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
                BlueSecures{" "}
              </span>{" "}
              API with your Shopping Cart
            </Heading>
            <Content
              style={{
                textAlign: "left",
                width: "100%",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              {`Send Campaigns Notification and CTA Increase`}{" "}
              <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
                {" "}
                {`Sales Probability> 75%`}{" "}
              </span>
            </Content>

            <ul>
              <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
                Simplify your e-commerce business with BlueSecure's AI-powered
                platform.
              </li>
              <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
                Automate your order management process for greater efficiency
                and accuracy.
              </li>
              <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
                Improve customer satisfaction with real-time updates on their
                order status.
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6} className="text-center">
          <Image
            src={shoppingcart}
            fluid
            style={{ width: "75%", ...(isMobile && { width: "90%" }) }}
          />
        </Col>
      </Row>

      {/*  */}
      <Row
        className="align-items-center reverse-row2"
        style={{
          marginTop: "70px",
          paddingTop: "70px",
          paddingBottom: "70px",
          background: "#F9F9F9",
          ...(isMobile && { padding: "30px", marginTop: "20px" }),
        }}
      >
        <Col md={6} className="text-center">
          <Image src={payment} fluid />
        </Col>
        <Col md={6} style={{ ...(isMobile && { marginTop: "50px" }) }}>
          <Heading
            style={{ textAlign: "left", ...(isMobile && mobileHeadingFont) }}
          >
            {" "}
            Integrate with billing platforms and automate reminders with payment
            links
          </Heading>
          <Content
            style={{
              textAlign: "left",
              width: "100%",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <span
              style={{ color: "#00ACFF", fontWeight: "bold" }}
            >{`> 90%`}</span>{" "}
            {`on time payment`}
          </Content>
          <ul>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              BlueSecures API platform has built in agent messaging licenses.
            </li>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              Broadcast messages to millions of users on{" "}
              <span style={{ color: "#1AD03F", fontWeight: "bold" }}>
                WhatsApp.
              </span>
            </li>
          </ul>
        </Col>
      </Row>
      {/*  */}
      <Row
        className="align-items-center reverse-row1"
        style={{
          marginBottom: "100px",
          marginTop: "70px",
          ...(isMobile && { marginBottom: "0px" }),
        }}
      >
        <Col
          md={6}
          style={{
            paddingLeft: "140px",
            ...(isMobile && { padding: "30px", marginTop: "30px" }),
          }}
        >
          <Heading
            style={{ textAlign: "left", ...(isMobile && mobileHeadingFont) }}
          >
            Deploy chatbots on{" "}
            <span style={{ color: "#1AD03F", fontWeight: "bold" }}>
              WhatsApp
            </span>{" "}
            | Blue | Website | Customer App
          </Heading>
          <Content
            style={{
              textAlign: "left",
              width: "100%",
              marginTop: "30px",
              fontSize: "25px",
            }}
          >
            {" "}
            Integrate with{" "}
            <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
              BlueSecures
            </span>{" "}
            API Platform
          </Content>

          <Content
            style={{
              textAlign: "left",
              width: "100%",
              marginTop: "10px",
              fontSize: "25px",
              marginBottom: "50px",
            }}
          >
            Enhance sales{" "}
            <span style={{ color: "#526A7E", fontWeight: "1" }}>
              and customer services
            </span>{" "}
            by 10X
          </Content>

          <ul style={{ marginLeft: "-25px" }}>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              Chatbots for sales, support and services.
            </li>
            <li style={{ fontFamily: "Helvetica Neue", color: "#526A7E" }}>
              BlueSecures API platform has built in agent messaging licenses for
              sales and support.
            </li>
          </ul>
        </Col>

        <Col md={6} className="text-center">
          <Image src={chatbot} fluid />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Contact;
