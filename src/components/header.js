import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Dropdown,DropdownButton } from 'react-bootstrap';
import back from '../img/Request.png';
import logo from '../img/donatelogo.png';
import { useNavigate ,NavLink} from 'react-router-dom';
import './header.css';
function Header(){
    var user = 'user';
    const navigate = useNavigate();
    // const isLoggedin = false;
    const logOutUser = () =>{
      sessionStorage.setItem("isLogin", false);
      sessionStorage.setItem("username", '');
      sessionStorage.setItem("role", '');
      navigate('/login');
    }
    
    var isLoggedin = sessionStorage.getItem("isLogin");
    console.log(isLoggedin);
    var username = sessionStorage.getItem("username");
    if(username==='test'){
      user='admin';
}
    // var user = sessionStorage.getItem("role");
    const NotLogin = () =>{
      return(
        <div >
          
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100rem"
            height="85rem"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span style={{fontSize: '2rem', marginLeft: '2rem'}}>{' Donate Organ'}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <NavLink to='/login' className='nav-link'>Login</NavLink>
<NavLink to='/signup' className='nav-link'>Sign up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
      )
    }
  
    const AdminPanel = () => {
      return (
        <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <img
            src={back}
            width="100rem"
            height="85rem"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Donate Organ'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {`${username}`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={logOutUser}>Log Out</Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <Nav>
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="#" className="nav-link" activeClassName="active">
              View Request
            </NavLink>
            <NavLink to="/hospital" className="nav-link" activeClassName="active">
              Hospitals
            </NavLink>
            <NavLink to="/about-us" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
      );
    };
  
    const UserPanel = () => {
      return (
<div>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={back}
        width="100rem"
            height="85rem"
        className="d-inline-block align-top"
        alt="Logo"
      />
  {' Donate Organ'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
         
      <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {`${username}`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={logOutUser}>Log Out</Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
        <Nav.Link href="#login">Home</Nav.Link>
        <Nav.Link href="#signup">Blogs</Nav.Link>
        <Nav.Link href="#signup">Hostpitals</Nav.Link>
        <Nav.Link href="#signup">About us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>

      );
    };

  return(
    <div style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}}>
    <header  className='headerNav'>
     <nav>
    
       <div>
         {isLoggedin ==='true' ? (
           user === 'admin' ? (
              <AdminPanel />
           ) : (
              <UserPanel />
            )
          ):(
              <NotLogin/>
        )}
       </div>
      </nav>
        </header>
    </div>
  )

}
export default Header;