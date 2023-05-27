import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import girlImage from "../../assets/images/homepage/hero1.jpg";
import chatww from "../../assets/images/homepage/chatww.png";
import chatScreen from "../../assets/png/chatScreen.png";
import Bluechat from "../../assets/images/homepage/what.png";
import Icon1 from "../../assets/png/icon1.png";
import Icon2 from "../../assets/png/icon2.png";
import Icon3 from "../../assets/png/icon3.png";
import Icon4 from "../../assets/png/icon4.png";
import Desktop from "../../assets/images/homepage/3rdsection.png";
import Icon11 from "../../assets/png/icon11.png";
import Icon12 from "../../assets/png/icon12.png";
import Icon13 from "../../assets/png/icon13.png";
import Icon14 from "../../assets/png/icon14.png";
import Icon15 from "../../assets/png/icon15.png";
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
import Header from "../header";
import Footer from "../footer";
import { Heading } from "../heading";
import { Content } from "../content";
import { CustomButton } from "../button";
import "./chat.css";
import CustomSlider from "../slider";
import BlueIcon from "../../assets/images/homepage/blue.svg";
import WA from "../../assets/images/homepage/wa.svg";
import Robo from "../../assets/images/homepage/robo.svg";
import Group from "../../assets/images/homepage/group.svg";
import Focus from "../../assets/images/homepage/focus.svg";
import intel from "../../assets/images/homepage/intel.svg";
import user_setting from "../../assets/images/homepage/user-setting.svg";
import ChatHistory from "../../assets/images/homepage/ChatHistory.svg";
import E2E from "../../assets/images/homepage/end-to-end.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export const logoName = [
  ComLogo7,
  ComLogo8,
  ComLogo9,
  ComLogo10,
  ComLogo11,
  ComLogo12,
];
const Homepage = () => {
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

  const Logos = ({ ImageName }) => {
    return (
      <li>
        <Image style={{ maxHeight: "50px" }} src={ImageName} />
      </li>
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
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.screen.width || 1000);
  }, [window.screen.width]);
  const mobileHeadingFont = {
    fontSize: "25px",
    lineHeight: "35px",
  };
  const isMobile = width < 500;
  return (
    <>
      <Header />
      <div className="home-container">
        <Container className="home-page" fluid>
          <style>{fadeFromLeftAnimation}</style>
          {/* First Div Start */}
          <Row
            className="h-50"
            style={{ animation: "fade-in 0.5s ease-out forwards" }}
          >
            <Col md={6} style={{ paddingBottom: "70px" }} className="pt-5">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <div>
                  {isMobile && (
                    <Image
                      style={{
                        width: "75%",
                        ...(isMobile && { width: "90%" }),
                      }}
                      src={girlImage}
                      fluid
                    />
                  )}
                  <Heading style={{ ...(isMobile && mobileHeadingFont) }}>
                    BlueSecures Messaging
                  </Heading>
                  <Content className="mr-4">
                    Emoloyees using{" "}
                    <span style={{ color: "#1AD03F" }}>WhatsApp</span> at work ?
                    losing customers & data ? with{" "}
                    <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
                      BlueSecures,
                    </span>{" "}
                    retain & message customers on{" "}
                    <span style={{ color: "#1AD03F" }}>WhatsApp.</span>
                  </Content>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {!isMobile && (
                      <Image
                        style={{
                          width: "55%",
                          maxHeight: "26vw",
                          ...(isMobile && { width: "90%" }),
                        }}
                        src={girlImage}
                        fluid
                      />
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <Content>Secure Customer & Company Business Data</Content>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="mt-3"
                >
                  <CustomButton>
                    <Link
                      className="button-link"
                      style={{ color: "white" }}
                      to="/"
                    >
                      Know More
                    </Link>
                  </CustomButton>
                </div>
              </ScrollAnimation>
            </Col>
            {/* second column */}
            <Col
              md={6}
              className="text-center pt-5"
              style={{ backgroundColor: "#F9F9F9", paddingBottom: "70px" }}
            >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <Heading style={{ ...(isMobile && mobileHeadingFont) }}>
                  BlueSecures AI
                </Heading>
                <Content>
                  AI driven marketing platform to engage <br /> with customers
                  on <span style={{ color: "#1AD03F" }}>WhatsApp.</span>
                </Content>
                <Image
                  src={chatww}
                  style={{
                    maxHeight: "26vw",
                    ...(isMobile && { width: "60%", maxHeight: "100vh" }),
                  }}
                  fluid
                />
                <div className="mt-5">
                  <Content>
                    Campaigns, Notifications, Payment Links & Chatbots
                  </Content>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="mt-3"
                >
                  <CustomButton>
                    <Link
                      className="button-link"
                      style={{ color: "white" }}
                      to="/contact"
                    >
                      Know More
                    </Link>
                  </CustomButton>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          {/* First Div End */}

          {/* Second Div Start */}
          <Row
            style={{
              marginTop: "140px",
              ...(isMobile && { marginTop: "30px" }),
            }}
          >
            <Col md={6}>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <p
                  className="mr-4"
                  style={{ fontFamily: "Helvetica Neue", fontSize: "2.5rem" }}
                ></p>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ width: "68%", ...(isMobile && { width: "90%" }) }}
                    src={Bluechat}
                    fluid
                  />
                </div>
              </ScrollAnimation>
            </Col>
            <Col style={{ paddingLeft: "60px" }} md={6} className="mt-4">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <Heading
                  style={{
                    textAlign: "left",
                    marginTop: "60px",
                    ...(isMobile && mobileHeadingFont),
                  }}
                >
                  BlueSecures Messaging
                </Heading>
                <b>
                  <Content
                    style={{
                      width: "100%",
                      textAlign: "left",
                      margin: "0",
                      fontSize: "25px",
                      marginTop: "30px",
                    }}
                  >
                    Two way communication between <br />
                    <span style={{ color: "#00ACFF", fontWeight: "bold" }}>
                      BlueSecures{" "}
                    </span>
                    &
                    <span style={{ color: "#1AD03F", fontWeight: "bold" }}>
                      {" "}
                      WhatsApp.
                    </span>
                  </Content>
                </b>
                <div
                  className="mt-5"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image src={BlueIcon} style={{ width: 30 }} />
                  <p className="m-3">
                    <span style={{ fontWeight: "bold", color: "#00ACFF" }}>
                      BlueSecures{" "}
                    </span>
                    <span style={{ color: "#526A7E" }}> API Platform</span>
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image src={WA} style={{ width: 30 }} />
                  <p className="m-3" style={{ fontFamily: "Helvetica Neue" }}>
                    <span style={{ fontWeight: "bold", color: "#1AD03F" }}>
                      WhatsApp
                    </span>
                    <span style={{ color: "#526A7E" }}> Business API</span>
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image src={Robo} style={{ width: 30 }} />
                  <p className="m-3" style={{ fontFamily: "Helvetica Neue" }}>
                    <span style={{ color: "#526A7E" }}>
                      Users on Blue and customers on{" "}
                    </span>
                    <span style={{ fontWeight: "bold", color: "#1AD03F" }}>
                      WhatsApp
                    </span>
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          {/* Second Div End */}

          <Row
            style={{
              marginTop: "140px",
              ...(isMobile && { marginTop: "30px" }),
            }}
          >
            <Col md={12}>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <Container>
                  <Row>
                    <Col md={6}>
                      <Heading
                        style={{
                          textAlign: "left",
                          ...(isMobile && mobileHeadingFont),
                        }}
                      >
                        BlueSecures AI
                      </Heading>
                      <b>
                        <Content
                          style={{
                            width: "100%",
                            textAlign: "left",
                            margin: "0",
                            fontSize: "25px",
                            marginTop: "30px",
                          }}
                        >
                          Send promotional messages to millions of users on
                          <span
                            style={{ color: "#1AD03F", fontWeight: "bold" }}
                          >
                            {" "}
                            WhatsApp.
                          </span>
                        </Content>
                      </b>

                      <div
                        className="mt-4"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Image src={BlueIcon} style={{ width: 30 }} />
                        <p
                          className="m-3"
                          style={{ fontFamily: "Helvetica Neue" }}
                        >
                          {" "}
                          <span
                            style={{ fontWeight: "bold", color: "#00ACFF" }}
                          >
                            BlueSecures API Platform{" "}
                          </span>{" "}
                          <span style={{ color: "#526A7E" }}>
                            {" "}
                            ( end to end encrypted )
                          </span>
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image src={WA} style={{ width: 30 }} />
                        <p
                          className="m-3"
                          style={{ fontFamily: "Helvetica Neue" }}
                        >
                          {" "}
                          <span
                            style={{ fontWeight: "bold", color: "#1AD03F" }}
                          >
                            WhatsApp
                          </span>{" "}
                          <span style={{ color: "#526A7E" }}>
                            {" "}
                            Business API
                          </span>
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image src={Robo} style={{ width: 30 }} />
                        <p
                          className="m-3"
                          style={{ fontFamily: "Helvetica Neue" }}
                        >
                          {" "}
                          <span style={{ color: "#526A7E" }}> Chatbot on </span>
                          <span
                            style={{ fontWeight: "bold", color: "#1AD03F" }}
                          >
                            WhatsApp
                          </span>
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image src={Group} style={{ width: 30 }} />
                        <p
                          className="m-3"
                          style={{ fontFamily: "Helvetica Neue" }}
                        >
                          {" "}
                          <span style={{ color: "#526A7E" }}>
                            {" "}
                            Engage with millions of users on{" "}
                          </span>
                          <span
                            style={{ fontWeight: "bold", color: "#1AD03F" }}
                          >
                            WhatsApp
                          </span>
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="text-center">
                      <Image src={Desktop} fluid />
                    </Col>
                  </Row>
                </Container>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "140px",
              ...(isMobile && { marginTop: "50px" }),
            }}
          >
            <Col md={12} className="text-center">
              <Heading style={{ ...(isMobile && mobileHeadingFont) }}>
                Functions of{" "}
                <span style={{ color: "#00ACFF" }}>BlueSecures</span> API
                platform
              </Heading>
            </Col>
          </Row>

          <Row className="functioning mt-4">
            <Col md={2}></Col>
            <Col md={8}>
              <Container>
                <Row className="m-4">
                  <Col md={6} className=" mt-2">
                    <div
                      className="pl-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F9F9F9",
                        borderRadius: "10px",
                      }}
                    >
                      <Image src={intel} style={{ width: 30 }} />
                      <p className="m-4">
                        {" "}
                        Intelligent 2 way routing between{" "}
                        <span style={{ fontWeight: "bold", color: "#00ACFF" }}>
                          Blue
                        </span>{" "}
                        and{" "}
                        <span style={{ fontWeight: "bold", color: "#1AD03F" }}>
                          WA
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col md={6} sm={4} className="mt-2 box-item-home12">
                    <ImageDiv
                      ImageName={Icon14}
                      Description="Business can save, secure and own their data"
                    />
                  </Col>
                </Row>
                <Row className="m-4">
                  <Col md={6} className="mt-2 box-item-home12">
                    <ImageDiv
                      ImageName={Focus}
                      Description="Track messages both ways"
                    />
                  </Col>

                  <Col md={6} className="text-center mt-2 box-item-home12">
                    <ImageDiv
                      ImageName={ChatHistory}
                      Description="Maintain Chat history"
                    />
                  </Col>
                </Row>
                <Row className="m-4">
                  <Col md={6} className="mt-2 box-item-home12">
                    <ImageDiv
                      ImageName={user_setting}
                      Description="User & rights management"
                    />
                  </Col>
                  <Col md={6} className=" mt-2 box-item-home12">
                    <ImageDiv
                      ImageName={E2E}
                      Description="End to end data encryption"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>

        <Row
          className="mt-4"
          style={{
            backgroundColor: "#F9F9F9",
            paddingTop: "50px",
            paddingBottom: "20px",
          }}
        >
          <Col md={12} className="text-center mt-2">
            <Heading
              style={{
                marginBottom: "50px",
                ...(isMobile && mobileHeadingFont),
              }}
            >
              Customer Engagement
            </Heading>
          </Col>
          <Col md={12} className="text-center mt-2">
            <Container>
              <CustomSlider />

              {/* <div className="slider">
                  <ul>
                    {logoName.map((l) => {
                      return <Logos ImageName={l} />;
                    })}
                  </ul>
                </div> */}
            </Container>
          </Col>
        </Row>
        <Footer isMobile={isMobile} />
      </div>
    </>
  );
};

export default Homepage;
