import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary customNavbar">
      <Container>
        <Navbar.Brand href="#home" className='epicLogo'>Epicode-Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
            <Nav.Link href="#link" className='navLink'>About</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;