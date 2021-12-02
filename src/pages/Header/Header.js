import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
    return (
        <div>
           <Navbar bg="info" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="fw-bold text-dark" href="#home"><img style={{width:30}} src="https://img.icons8.com/doodle/48/000000/shoyo_hinata.png" alt=""/>Anik Barua Turjoy's Portfolio</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navlink fw-bold text-dark"  as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="/home#projects">My Projects</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="/home#blogs">My Blogs</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="/home#aboutMe">About Me</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="/home#contact">Contact Me</Nav.Link>
      
    </Navbar.Collapse >
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;