import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavbarMain = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className='mt-3 mb-3'>
          <Navbar.Brand as={Link} to="/" className='poppins-800'>Evoque Innovative Lab</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto hanken-grotesk-500">
              <Nav.Link as={Link} to="/">About</Nav.Link>
              <Nav.Link as={Link} to="/">Marketplace</Nav.Link>
              <Nav.Link as={Link} to="/">Resources</Nav.Link>
              <Nav.Link as={Link} to="/">Contact</Nav.Link>
            </Nav>
              <Button variant="outline-primary" style={{margin:"0 20px 0 0"}}>Login</Button>
              <Button as={Link} to='/'>Sign Up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarMain