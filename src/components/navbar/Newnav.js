import './Newnav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg" style={{boxShadow: '5px -5px 10px #888888'}}>
      <Container bg="white">
        {/* <Navbar.Brand href="#"
        style={{margin: '20px 0px'}}
        >Navbar scroll</Navbar.Brand> */}
        <img src={logo} alt='logo'
         style={{height: '61px', width: '184px'}}
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',
             marginLeft: '300px',
            fontSize: '19px',
            fontWeight: '300',
          }}
            navbarScroll
          >
            <Nav.Link style={{paddingRight: '40px'}} href="#action1">Home</Nav.Link>
            <Nav.Link style={{paddingRight: '40px'}} href="#action2">Solutions</Nav.Link>
            <Nav.Link style={{paddingRight: '40px'}} href="#action2">Blog</Nav.Link>
            <Nav.Link style={{paddingRight: '40px'}} href="#action2">Our Culture</Nav.Link>

            <button
            style={{border: 'none',
            textAlign: 'center',
            fontSize: '12px' ,
            height: '35px',
            padding: '0px 20px',
            margin: '5px 0px 0px 0px',
            backgroundColor: '#FDEA6A'
          }}
            >Get to know more</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;