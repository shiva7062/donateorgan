import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import back from './img/Request.png';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Donate from './components/donate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donate2 from './components/donate2';
import Request from './components/request';
import { UserProvider } from './components/userContext';
import Test from './components/test';
import SignUp from './components/signUp';
import Login from './components/login';
import SignupLogin from './components/SignupLogin';
// import PrivateRoute from './components/privateRoute';
import { useState } from 'react';
import HospitalList from './components/hospital';
function App() {
  sessionStorage.setItem("isLogin", false);
  sessionStorage.setItem("username", '');
  sessionStorage.setItem("role", '');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // setIsAuthenticated(sessionStorage.getItem("isLogin")); 
  const isAuthenticated = sessionStorage.getItem("isLogin");
  return (
    <BrowserRouter>

    <div className='home'>
    <UserProvider>
    <Header/>
      <div style={{marginTop: '10rem'}}><Routes>
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/" component={<SignupLogin/>}  /> */}
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/donate2" element={<Donate2/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/" element={<SignupLogin/>}/>
        <Route path="/hospital" element={<HospitalList/>}/>
      </Routes>
      </div>
      <Footer/>
    </UserProvider>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
