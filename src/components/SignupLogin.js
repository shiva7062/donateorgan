import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import back from '../img/Request.png';
import donate from '../img/donate.png';
import blog from '../img/background.webp'
import '../App.css';
import { Link } from 'react-router-dom';
function SignupLogin(){
  return (
    <div>
         <div className="row">
        <div className="image">
          <img src={blog} alt="" style={{width: '100%', height: '100%'}} />
        </div>
        <div className="content">
          <h2>Organ Donation Awareness</h2>
          <p>
          Pledging your organs is a simple procedure. Just fill out the online pledge form and we will send you a donor card with your unique government registration number. All pledges are registered with the National Organ & Tissue Transplant Organisation (NOT TO). Registering as an Organ donor is merely an expression of your intent to be an Organ donor. The card that we will send you does not carry any legal weight, however, it is a great way to show everyone your intent. So keep it with you at all times and make sure you let your family and friends know about your choice. According to Indian law, it is your next of kin who will decide whether to donate your organs or not upon death. Even if you have pledged your organs, no donation will happen unless the next of kin gives their consent. Therefore, when you pledge to be an organ donor, it's very important that you discuss your wish to donate with your family. This is to enable your family to carry out your wishes in case the need arises. 
          </p>
          <button><Link to='/blog' className="btn">Blog</Link>
          </button>
        </div>
      </div>
      <Container
     fluid
     style={{ backgroundColor: '#E38B8FFF', height: '100vh' }}
     className="d-flex align-items-center justify-content-center"
   >
        
     <Row className="bg-white rounded p-5">
       <Col>
         <h2 className="mb-4">Welcome Back!</h2>
         <Link variant="primary" className="btn btn-primary mr-2" to='/login'>
           Login
         </Link>
         <Link variant="outline-primary" to='/signup'>Sign Up</Link>
       </Col>
     </Row>
   </Container>
    </div>
   
   
  );
};

export default SignupLogin;
