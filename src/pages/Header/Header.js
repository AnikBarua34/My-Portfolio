import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
    return (
        <div>
           <Navbar bg="info" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="fw-bold text-dark" href="#home">Anik Barua Turjoy's Portfolio</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navlink fw-bold text-dark"  as={HashLink} to="#home">Home</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="#projects">My Projects</Nav.Link>
      <Nav.Link  className="navlink fw-bold text-dark"  as={HashLink} to="#contact">Contact Me</Nav.Link>
    </Navbar.Collapse >
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;