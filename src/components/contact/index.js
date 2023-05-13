import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import girlImage from '../../assets/png/girlChat.png';
import chatScreen from '../../assets/png/chatScreen.png';
import Bluechat from '../../assets/png/bluechat.png';
import Icon1 from '../../assets/png/icon1.png';
import Icon2 from '../../assets/png/icon2.png';
import allText from '../../assets/png/allText.png';
import messageScreen1 from '../../assets/png/messageScreen1.png';
import Boy3Chat from '../../assets/png/Boy3Chat.png';
import ContactChat from '../../assets/png/ContactChat.png';
import ContactIcon1 from '../../assets/png/ContactIcon1.png';
import ContactIcon2 from '../../assets/png/ContactIcon2.png';
import ContactIcon3 from '../../assets/png/ContactIcon3.png';
import allGroup from '../../assets/png/allGroup.png';
import Icon16 from '../../assets/png/icon16.png';
import ComLogo1 from '../../assets/png/ComLogo1.png';
import ComLogo2 from '../../assets/png/ComLogo2.png';
import ComLogo3 from '../../assets/png/ComLogo3.png';
import ComLogo4 from '../../assets/png/ComLogo4.png';
import ComLogo5 from '../../assets/png/ComLogo5.png';
import ComLogo6 from '../../assets/png/ComLogo6.png';
import ComLogo7 from '../../assets/png/ComLogo7.png';
import ComLogo8 from '../../assets/png/ComLogo8.png';
import ComLogo9 from '../../assets/png/ComLogo9.png';
import ComLogo10 from '../../assets/png/ComLogo10.png';
import ComLogo11 from '../../assets/png/ComLogo11.png';
import ComLogo12 from '../../assets/png/ComLogo12.png';
import ComLogo13 from '../../assets/png/ComLogo13.png';
import Header from '../header';
import Footer from '../footer';

const Contact = () => {
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
const logoNameBlack =[ComLogo1,ComLogo2,ComLogo3,ComLogo4,ComLogo5,ComLogo6]
const logoName = [ComLogo7,ComLogo8,ComLogo9,ComLogo10,ComLogo11,ComLogo12,ComLogo13]
const Logos = ({ImageName}) =>{
    return(<Col md={2} className="mt-2">
        <Image src={ImageName} />
    </Col>)
}
const ImageDiv = ({ImageName,Description}) =>{
    return (<div className='pl-4' style={{ display: 'flex', alignItems: 'center',backgroundColor:'#F9F9F9',borderRadius:'10px'}}>
    <Image src={ImageName}  style={{ width: 30, height: 30 }}/>
    <p className='m-4'> {Description}</p>
</div>)
}

const [count, setCount] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      if (count <98) {
        setCount(count + 2);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [count]);



  const [count1, setCount1] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      if (count1 <60) {
        setCount1(count1 + 2);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [count1]);


  const [count2, setCount2] = useState(0.0);
  useEffect(() => {
      const interval = setInterval(() => {
        if (count2 <2.4) {
          setCount2(count2 + 0.1);
        }
      }, 25);
      return () => clearInterval(interval);
    }, [count2]);
  return (
    <>
    <Header />
    <Container >
         <style>{fadeFromLeftAnimation}</style>
      <Row>
      <Col md={6} className="text-center">
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures AI</p>
        <b><p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>
             <span style={{color:'#00ACFF'}}> Powered by BlueSecures API Platform</span></p></b>
             <p>AI driven marketing platform to engage with customers on WhatsApp.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={ContactIcon1}  style={{ width: 20, height: 20 }}/>
                <p className='m-4'> Chatbots</p>
          </div>
            
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={ContactIcon2}  style={{ width: 20, height: 20 }}/>
                <p className='m-4'> Notifications</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={ContactIcon3}  style={{ width: 20, height: 20 }}/>
                <p className='m-4'> Automation</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="primary" style={{borderRadius:'15px'}}>Request Demo</Button>{' '}
          </div>
        </Col>
        <Col md={6} className="text-center">
        <Image src={ContactChat} fluid />
        </Col>
      </Row>
      
      
    </Container>
    <Row className='mt-4 pb-4' style={{backgroundColor:'#F9F9F9'}}>
      <Col md={12} className="text-center mt-2">
            <p style={{color:'#183B56',fontSize:'2.75rem'}}>Customer Engagement</p>
        </Col>
        <Col md={12} className="text-center mt-2">
        <Row>
                    {logoName.map((l)=>{
                       return <Logos ImageName={l} />
                    })}
        </Row>
        </Col>
      </Row>
   
      <Row className="m-4 align-items-center">
        <Col md={12} className="text-center mt-4">
              <p style={{color:'#183B56',fontSize:'2.75rem'}}>Why engage with customers on <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp?</span></p>
        </Col>
        <Col md={12} className="text-center m-4">  
                          
              <Row className="justify-content-center">
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                        <p style={{fontSize:'55px'}}> {`>`} {count} {`%`}</p>
                        <p style={{color:'#526A7E',fontWeight:'bold'}}>Open Rate</p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                    <div>
                    <p style={{fontSize:'55px'}}> {`>`} {count1} {`%`}</p>
                        <p style={{color:'#526A7E',fontWeight:'bold'}}>Open Documents</p>
                    </div>
                </Col>
                <Col className="m-4" md={2} style={{backgroundColor:'white'}}>
                    <div>
                    <p style={{fontSize:'55px'}}> {`>`} {parseFloat(count2).toFixed(2)}</p>
                        <p style={{color:'#526A7E'}}>Billion Global Users</p>
                    </div>
                </Col>
              </Row>

        </Col>
        </Row>

        {/*  */}


        <Row className="m-4 align-items-center">
        <Col md={6} className="text-center">
            <Image src={Boy3Chat} fluid />
          </Col>
          <Col md={6}>
          <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "2.75rem",
                color: "#183B56",
              }}
            >
              {" "}
              Integrate Excel, CRM, Order Management, billing systems with <span style={{ color: "#00ACFF",fontWeight:'bold' }}>BlueSecures </span> API platform to automate marketing campaigns
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#183B56",
              }}
            >
              Reach Millions of customers on <span style={{ color: "#1AD03F",fontWeight:'bold' }}>WhatsApp</span>
            </p>
           <ul>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Send promotional messages and personalized notifications.</li>
              <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}> Automate reminders, conformations and online payments.</li>
              <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Get real time campaign and performance MIS, metrics and insights.</li>
           </ul>
          </Col>
        </Row>

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
                Integrate <span style={{ color: "#00ACFF",fontWeight:'bold' }}>BlueSecures </span> API with your Shopping Cart
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#526A7E",
              }}
            >
              {`Send Campaigns Notification and CTA Increase`} <span style={{ color: "#00ACFF",fontWeight:'bold' }}> {`Sales Probability> 75%`} </span>
            </p>

            <ul>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Simplify your e-commerce business with BlueSecure's AI-powered platform.</li>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Automate your order management process for greater efficiency and accuracy.</li>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Improve customer satisfaction with real-time updates on their order status.</li>
            </ul>
          </Col>

          <Col md={6} className="text-center">
            <Image src={messageScreen1} fluid />
          </Col>
        </Row>



        {/*  */}


        <Row className="m-4 align-items-center">
        <Col md={6} className="text-center">
            <Image src={allText} fluid />
          </Col>
          <Col md={6}>
          <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "2.75rem",
                color: "#183B56",
              }}
            >
              {" "}
              Integrate with billing platforms and automate reminders with payment links
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#183B56",
              }}
            >
              <span style={{ color: "#00ACFF",fontWeight:'bold' }}>{`> 90%`}</span> {`on time payment`}
            </p>
           <ul>
              <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>BlueSecures API platform has built in agent messaging licenses.</li>
              <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Broadcast messages to millions of users on <span style={{ color: "#1AD03F",fontWeight:'bold' }}>WhatsApp.</span></li>
           </ul>
          </Col>
        </Row>


        {/*  */}


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
                Deploy chatbots on <span style={{ color: "#1AD03F",fontWeight:'bold' }}>WhatsApp</span> | Blue | Website | Customer App
            </p>
            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#526A7E",
              }}
            >
              Integrate with<span style={{ color: "#00ACFF",fontWeight:'bold' }}>BlueSecures</span> API Platform 
            </p>

            <p
              className="mr-4"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "1.56rem",
                color: "#00ACFF",
                fontWeight:'bold'
              }}
            >
              Enhance sales <span style={{ color: "#526A7E",fontWeight:'1' }}>and customer services</span> by 10X
            </p>
            

            <ul>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>Chatbots for sales, support and services.</li>
            <li style={{fontFamily: "Helvetica Neue",color: "#526A7E",}}>BlueSecures API platform has built in agent messaging licenses for sales and support.</li>
            
            </ul>
          </Col>

          <Col md={6} className="text-center">
            <Image src={allGroup} fluid />
          </Col>
        </Row>

       <Footer />     
    </>
  );
}

export default Contact;
