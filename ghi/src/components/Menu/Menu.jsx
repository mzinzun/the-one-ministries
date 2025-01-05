/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Menu = ({user}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);
  user?console.log('user logged in: ',user.email):console.log('user not logged in: ')
  return (
    <Navbar expand="lg" className='nav1' expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav2">
          <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
          <Nav.Link as={Link} to="/one-less" onClick={handleLinkClick}>One Less</Nav.Link>
          <Nav.Link as={Link} to="/news-stories" onClick={handleLinkClick}>News Stories</Nav.Link>
          <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
