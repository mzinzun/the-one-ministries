import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Menu = () => {
  return (
    <Navbar expand="xl" className='justify-content-center nav1'>
      {/* <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto nav2">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
