import { useState, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./userContext";
import './login.css';
// import { UserContext } from '../contexts/UserContext';

function Login() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      console.log(event.target.value);
      setFormData({ ...formData, [name]: value });
    };
    const [serverMessage, setServerMessage] = useState('Please enter your details.');
    const navigate = useNavigate();
    // const { setUserInfo } = useContext(UserContext);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if(res.ok){
          const data = await res.json();
          console.log(data);
  
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("role", data.role);
          navigate('/home');

        }else{
          setServerMessage('Invalid username or password. Please try again.'); 
        }
       
        // setUserInfo({ id: data.id, username: data.username });
        // navigate('/home');
      } catch (error) {
        setServerMessage('Invalid username or password. Please try again.');
      }
    };
  

  return (
    <div className='login'>
    <Row className="justify-content-md-center login1">
      <Col md={6}>
        <div className="card login-card">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="alert alert-info">{serverMessage}</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter username" required />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="submit" className="btn-block">
                Sign In
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
    </div>
  );
}

export default Login;
