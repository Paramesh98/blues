import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import girlImage from "../../assets/png/girlChat.png";
import chatScreen from "../../assets/png/chatScreen.png";
import Bluechat from "../../assets/png/bluechat.png";
import BoyChat from "../../assets/png/BoyChat.png";
import blueChatScreen from "../../assets/png/blueChatScreen.png";
import group from "../../assets/png/group.png";
import network from "../../assets/png/network.png";
import share from "../../assets/png/share.png";
import Boy2Chat from "../../assets/png/Boy2Chat.png";
import network2 from "../../assets/png/network2.png";
import adminIcon1 from "../../assets/png/adminIcon1.png";
import adminIcon2 from "../../assets/png/adminIcon2.png";
import adminIcon3 from "../../assets/png/adminIcon3.png";
import adminIcon4 from "../../assets/png/adminIcon4.png";
import adminIcon5 from "../../assets/png/adminIcon5.png";
import adminIcon6 from "../../assets/png/adminIcon6.png";
import Integration from "../../assets/png/Integration.png";
import Data from "../../assets/png/Data.png";
import Certification from "../../assets/png/Certification.png";
import Header from "../header";
import Footer from "../footer";

const Home = () => {
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
  // const logoNameBlack =[ComLogo1,ComLogo2,ComLogo3,ComLogo4,ComLogo5,ComLogo6]
  // const logoName = [ComLogo7,ComLogo8,ComLogo9,ComLogo10,ComLogo11,ComLogo12]
  const Logos = ({ ImageName }) => {
    return (
      <Col md={2}>
        <Image src={ImageName} />
      </Col>
    );
  };

  
  const ImageDiv = ({ ImageName, Description }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Image src={ImageName} style={{ width: 30, height: 30 }} />
        <p className="m-4"> {Description}</p>
      </div>
    );
  };
  return (
    <>
    <Header />
      <Container>
        <style>{fadeFromLeftAnimation}</style>
        {/* First Div Start */}
        <Row
          className="align-items-center"
          style={{ animation: "fade-in 0.5s ease-out forwards" }}
        >
          <Col md={6} className="text-center">
            {/* <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures Messaging</p>
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>Enable sales, support & deskless employees on BlueSecures to engage with customers on <span style={{color:'#1AD03F'}}>WhatsApp.</span></p> */}
            <Image src={girlImage} fluid />
            {/* <p className='mt-4'>Secure Customer & Company Business Data</p>
          <Button variant="primary">Know More</Button>{' '} */}
          </Col>
          <Col md={6} className="text-center">
            <p
              className="mr-4"
              style={{ fontFamily: "Helvetica Neue", fontSize: "2.75rem" }}
            >
              BlueSecures Messaging
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "18px",
                color: "#00ACFF",
              }}
            >
              {" "}
              End to End Encrypted
            </p>
            <p className="mt-4" style={{ color: "#526A7E" }}>
              Enable sales, support & deskless employees on BlueSecures to
              engage with customers on{" "}
              <span style={{ fontWeight: "bold", color: "#1AD03F" }}>
                WhatsApp
              </span>
              .
            </p>
            {/* <Button variant="primary">Know More</Button>{' '} */}
          </Col>
        </Row>
        {/* First Div End */}

        {/* Second Div Start */}
        <Row className="m-4 align-items-center">
          <Col md={6}>
            <p
              className="mr-4"
              style={{ fontFamily: "Helvetica Neue", fontSize: "15px" }}
            >
              Your company is losing customers, revenues & critical business
              data viz.,
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "2.75rem",
                color: "#183B56",
              }}
            >
              Employees on{" "}
              <span style={{ color: "#00ACFF" }}>BlueSecures </span> can send
              and receive messages with their customers who are on{" "}
              <span style={{ color: "#1AD03F" }}> WhatsApp.</span>
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#526A7E",
              }}
            >
              Secure customers and business data
            </p>
          </Col>

          <Col md={6} className="text-center">
            <Image src={BoyChat} fluid />
          </Col>
        </Row>
        {/* Second Div End */}

        {/* Third Div Start */}
        <Row className="m-4 align-items-center">
        <Col md={6} className="text-center">
            <Image src={blueChatScreen} fluid />
          </Col>
          <Col md={6}>
          <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "18px",
                color: "#00ACFF",
              }}
            >
              {" "}
              How It Works?
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "2.75rem",
                color: "#183B56",
              }}
            >
              <span style={{ color: "#00ACFF" }}>BlueSecures </span> API Platform
            </p>
           <ul>
            <li style={{
                fontFamily: "Helvetica Neue",
                fontSize: "18px",
                color: "#526A7E",
              }}>Employees market to customers who are on WhatsApp.</li>
              <li style={{
                fontFamily: "Helvetica Neue",
                fontSize: "18px",
                color: "#526A7E",
              }}>Employees within your company use <span style={{ color: "#00ACFF" }}>BlueSecures</span>.</li>
           </ul>
          </Col>
        </Row>
        {/* Third Div End */}
        </Container>

        {/* Forth Div Start */}
        <Row className="m-4 align-items-center" style={{backgroundColor:'#F9F9F9'}}>
        <Col md={12} className="text-center mt-4">
              <p style={{color:'#183B56',fontSize:'2.75rem'}}>Enable sales to sell more and engage better with customers</p>
        </Col>
        <Col md={12} className="text-center m-4">  
                          
              <Row className="justify-content-center">
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={group} className="mt-4" style={{width:30,height:30}}/>
                        <p>Add WhatsApp users to groups in BlueSecures</p>
                    </div>
                </Col>
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={network} className="mt-4" style={{width:30,height:30}}/>
                        <p>Broadcast marketing collateral to customers who are on  <span style={{ color: "#1AD03F" ,fontWeight:'bold'}}> WhatsApp.</span></p>
                    </div>
                </Col>
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={share} className="mt-4" style={{width:30,height:30}}/>
                        <p>Assign chat history to new sales person when existing one leaves</p>
                    </div>
                </Col>
              </Row>
              

        </Col>

       </Row>
       {/* Forth Div End */}


       {/* Fifth Div Start */}
       <Row className="m-4 align-items-center">
          <Col md={6}>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "2.75rem",
                color: "#183B56",
              }}
            >
              Deskless Employees ( Sales, Support, Services..)
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "15px",
                color: "#526A7E",
              }}
            >
              Use <span style={{ color: "#1AD03F" ,fontWeight:'bold'}}>social messaging apps</span> because they don't have (or) use email?
            </p>

            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "15px",
                color: "#526A7E",
              }}
            >
              Integrate <span style={{ color: "#00ACFF",fontWeight:'bold' }}>BlueSecures</span> into employee communication process
            </p>
            <ImageDiv ImageName={network2} Description='Broadcast, Events | Birthdays | Policies | Update etc.' />
          </Col>

          <Col md={6} className="text-center">
            <Image src={Boy2Chat} fluid />
          </Col>
        </Row>
        {/* Fifth Div End */}

        <Row className="m-4 align-items-center">
        <Col md={12} className="text-center mt-4">
              <p style={{color:'#183B56',fontSize:'2.75rem'}}>Company Admin Manages User Rights</p>
        </Col>
        <Col md={12} className="text-center m-4">  
                          
              <Row className="justify-content-center">
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={adminIcon1} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Add User</p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                    <div>
                        <Image src={adminIcon2} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Download data to mobile</p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={adminIcon3} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Cut & Paste</p>
                    </div>
                </Col>
              </Row>


              {/* Second  */}
              <Row className="justify-content-center">
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={adminIcon4} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Share Externally</p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                    <div>
                        <Image src={adminIcon5} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Send to <span style={{ color: "#1AD03F" ,fontWeight:'bold'}}>Whatsapp</span></p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={adminIcon6} className="mt-4" style={{width:30,height:30}}/>
                        <p style={{color:'#526A7E'}}>Disable Screenshot</p>
                    </div>
                </Col>
              </Row>

        </Col>
        </Row>



        {/* Seventh Div Start */}
        <Row className="m-4 align-items-center" style={{backgroundColor:'#F9F9F9'}}>
        <Col md={12} className="text-center mt-4">
              <p style={{color:'#183B56',fontSize:'2.75rem'}}>Integrations & Certifications</p>
        </Col>
        <Col md={12} className="text-center m-4">  
                          
              <Row className="justify-content-center">
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={Integration} className="mt-4" style={{width:70,height:70}}/>
                        <p className="m-4" style={{color:'#183B56',fontWeight:'bold'}}>Integrations</p>
                        <p>Integrate with Active Directory, HRM, CRM, SCM & ERP Systems etc</p>
                    </div>
                </Col>
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={Data} className="mt-4" style={{width:70,height:70}}/>
                        <p className="m-4" style={{color:'#183B56',fontWeight:'bold'}}>Data storage</p>
                        <p>Public Cloud, Private Cloud or on-premise</p>
                    </div>
                </Col>
                <Col className="m-4" md={3} style={{backgroundColor:'white'}}>
                    <div>
                        <Image src={Certification} className="mt-4" style={{width:70,height:70}}/>
                        <p className="m-4" style={{color:'#183B56',fontWeight:'bold'}}>Certifications</p>
                        <p>Certifications - ISO, VAPT,HIPAA, “ISO 27001”</p>
                    </div>
                </Col>
              </Row>
              

        </Col>

       </Row>
       {/* Seventh Div End */}
        

        
        
        
      <Footer />
      
    </>
  );
};

export default Home;
