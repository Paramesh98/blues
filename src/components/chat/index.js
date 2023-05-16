import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import girlImage from '../../assets/png/girlChat.png';
import chatScreen from '../../assets/png/chatScreen.png';
import Bluechat from '../../assets/png/bluechat.png';
import Icon1 from '../../assets/png/icon1.png';
import Icon2 from '../../assets/png/icon2.png';
import Icon3 from '../../assets/png/icon3.png';
import Icon4 from '../../assets/png/icon4.png';
import Desktop from '../../assets/png/desktop.png';
import Icon11 from '../../assets/png/icon11.png';
import Icon12 from '../../assets/png/icon12.png';
import Icon13 from '../../assets/png/icon13.png';
import Icon14 from '../../assets/png/icon14.png';
import Icon15 from '../../assets/png/icon15.png';
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
import Header from '../header';
import Footer from '../footer';

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
const logoNameBlack =[ComLogo1,ComLogo2,ComLogo3,ComLogo4,ComLogo5,ComLogo6]
const logoName = [ComLogo7,ComLogo8,ComLogo9,ComLogo10,ComLogo11,ComLogo12]
const Logos = ({ImageName}) =>{
    return(<Col md={2}>
        <Image src={ImageName} />
    </Col>)
}
const ImageDiv = ({ImageName,Description}) =>{
    return (<div className='pl-4' style={{ display: 'flex', alignItems: 'center',backgroundColor:'#F9F9F9',borderRadius:'10px'}}>
    <Image src={ImageName}  style={{ width: 30, height: 30 }}/>
    <p className='m-4'> {Description}</p>
</div>)
}
  return (
    <>
    <Header />
    <Container >
         <style>{fadeFromLeftAnimation}</style>
         {/* First Div Start */}
      <Row className='h-50' style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
        <Col md={6} className="text-center">
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures Messaging</p>
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>Enable sales, support & deskless employees on BlueSecures to engage with customers on <span style={{color:'#1AD03F'}}>WhatsApp.</span></p>
          <Image src={girlImage} fluid />
          <p className='mt-4' style={{fontFamily:'Helvetica Neue'}}>Secure Customer & Company Business Data</p>
          <Button variant="primary">Know More</Button>{' '}
          
        </Col>
        <Col md={6} className="text-center" style={{backgroundColor:'#F9F9F9'}}>
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures Messaging</p>
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>AI driven marketing platform to engage
 with customers on <span style={{color:'#1AD03F'}}>WhatsApp.</span></p>
          <Image src={chatScreen} fluid />
          <p className='mt-4' style={{fontFamily:'Helvetica Neue'}}>Campaigns, Notifications, Payment Links & Chatbots</p>
          <Button variant="primary">Know More</Button>{' '}
        </Col>
      </Row>
      {/* First Div End */}


      {/* Second Div Start */}
      <Row >
        <Col md={6}>
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.5rem'}}></p>
          <Image src={Bluechat} fluid />
        </Col>
        <Col md={6} className="text-center">
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures Messaging</p>
        <b><p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>
        Two way communication between <span style={{color:'#00ACFF'}}>BlueSecures </span> &
             <span style={{color:'#1AD03F'}}> WhatsApp.</span></p></b>
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon1}  style={{ width: 30, height: 30 }}/>
                <p className='m-4'> <span style={{fontWeight:'bold',color:'#00ACFF'}}>BlueSecures </span> API Platform</p>
          </div>
            
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon3}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp</span> Business API</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon2}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> Users on Blue and customers on <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp</span></p>
          </div>
        </Col>
      </Row>
      {/* Second Div End */}
      <Row>
      <Col md={6} className="text-center">
        <p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'2.75rem'}}>BlueSecures AI</p>
        <b><p className='mr-4' style={{fontFamily:'Helvetica Neue',fontSize:'18px'}}>
        Send promotional messages
to millions of users on 
             <span style={{color:'#1AD03F'}}> WhatsApp.</span></p></b>
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon1}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> <span style={{fontWeight:'bold',color:'#00ACFF'}}>BlueSecures API Platform  </span> ( end to end encrypted )</p>
          </div>
            
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon3}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp</span> Business API</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon2}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> Chatbot on <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp</span></p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Icon4}  style={{ width: 30, height: 30 }}/>
                <p className='m-4' style={{fontFamily:'Helvetica Neue'}}> Engage with millions of users on <span style={{fontWeight:'bold',color:'#1AD03F'}}>WhatsApp</span></p>
          </div>
        </Col>
        <Col md={6} className="text-center">
        <Image src={Desktop} fluid />
        </Col>
      </Row>
      <Row className='m-4'>
      <Col md={12} className="text-center">
        <p style={{fontSize:'2.75rem',fontFamily:'Helvetica Neue'}}>Functions of <span style={{fontWeight:'bold',color:'#00ACFF'}}>BlueSecures</span> API platform</p>
        </Col>
      </Row>

      <Row className='m-4'>
      <Col md={6}  className="text-center mt-2">
      <div className='pl-4' style={{ display: 'flex', alignItems: 'center',backgroundColor:'#F9F9F9',borderRadius:'10px'}}>
                <Image src={Icon11}  style={{ width: 30, height: 30 }}/>
                <p className='m-4'> Intelligent 2 way routing between <span style={{fontWeight:'bold',color:'#00ACFF'}}>Blue</span> and <span style={{fontWeight:'bold',color:'#1AD03F'}}>WA</span></p>
          </div>
        </Col>
        <Col md={6} sm={4} className="text-center mt-2">
            <ImageDiv ImageName={Icon14} Description='Business can save, secure and own their data' />
        </Col>
      </Row>
      <Row className='m-4'>
      <Col md={6} className="text-center mt-2">
            <ImageDiv ImageName={Icon12} Description='Track messages both ways' />
        </Col>
        <Col md={6} className="text-center mt-2">
            <ImageDiv ImageName={Icon15} Description='Maintain Chat history' />
        </Col>
      </Row>
      <Row className='m-4'>
      <Col md={6} className="text-center mt-2">
            <ImageDiv ImageName={Icon13} Description='User & rights management' />
        </Col>
        <Col md={6} className="text-center mt-2">
            <ImageDiv ImageName={Icon16} Description='End to end data encryption' />
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
      <Footer />
    </>
  );
}

export default Homepage;
