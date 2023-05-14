import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './signup1.css';
function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState('Please enter your details.');
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);

    await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(() => { // Add arrow function here
        // navigate('/donate2');
        console.log("Data Submitted");
        setServerMessage("Data Submitted");
        navigate('/login');
      }).catch(error => {
        setServerMessage("Problem with Signup Please try again");
        console.error('Error:', error);
      });
    // add your submit logic here
  };

  return (
    <div className='signup'>
    <Row className="justify-content-md-center signup1" style={{padding:'50px'}}>
      <Col md={6}>
      <div className="alert alert-info">{serverMessage}</div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username<span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" required className="form-control-danger" />
          </Form.Group>
    <br/>
          <Form.Group controlId="formName">
            <Form.Label>Name<span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" required className="form-control-danger" />
          </Form.Group>
          <br/>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone<span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required className="form-control-danger" />
          </Form.Group>
          <br/>
          <Form.Group controlId="formEmail">
            <Form.Label>Email<span className="text-danger">*</span></Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required className="form-control-danger" />
          </Form.Group>
          <br/>
          <Form.Group controlId="formPassword">
            <Form.Label>Password<span className="text-danger">*</span></Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="form-control-danger" />
          </Form.Group>
          <br/>
          <center>
            <Button variant="primary" className="btn btn-danger" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      </Col>
    </Row>
    </div>
  );
}

export default SignUp;
