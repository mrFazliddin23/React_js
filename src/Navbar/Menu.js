import '../Navbar/Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../Navbar/icons/logo.svg';

function Menu(){
    return(
            <Navbar bg="danger" expand="md" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#"><img src={Logo} className="navbar_logo" alt='Logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbar">
              <Nav.Link href="#action1" className='text-white me-2 fw-normal'style={{fontFamily:'Open Sans'}}>Menu</Nav.Link>
              <Nav.Link href="#action1" className='text-white me-2 fw-normal'style={{fontFamily:'Open Sans'}}>News</Nav.Link>
              <Nav.Link href="#action1" className='text-white me-2 fw-normal'style={{fontFamily:'Open Sans'}}>About Us</Nav.Link>
              <Nav.Link href="#action1" className='text-white me-2 fw-normal'style={{fontFamily:'Open Sans'}}>Contact Us</Nav.Link>
            </Nav>
            <Button variant="danger" className='ms-5 btn fw-bolder'style={{fontFamily:'Open Sans'}}>Log in</Button>{' '}
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    );
}
export default Menu;