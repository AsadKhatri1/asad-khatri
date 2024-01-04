import React from 'react';
import { Link, NavLink} from 'react-router-dom';

import './Navbar.css'
// import { AlertLink } from 'react-bootstrap';
import logo from "../images/logo.jpg"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navs = () => {
    
  return (
    <header classNameName='header-x '>
 {/* <nav className="navbar navbar-expand-lg navbar-light backg px-5 header">

  <Link className="navbar-brand text-light" to="/"><img className='logo' src={logo} alt="Katris Code" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse d-flex justify-content-end navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active text-light">
        <Link className="nav-link link " to="/">Home </Link>
      </li>
      <li className="nav-item text-light">
        <Link className="nav-link link" to="/about">About</Link>
      </li>
      <li className="nav-item text-light">
        <Link className="nav-link link " to="/work">Services</Link>
      </li>
      <li className="nav-item text-light">
        <Link className="nav-link link" to="/consult">Contact</Link>
      </li>
    
    </ul>
  </div>
</nav> */}


    <Navbar expand="lg" className="backg" >
      <Container>
        <Navbar.Brand ><NavLink t0="/"><img src={logo} alt="Logo" className='logo'/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white' , backgroundColor:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto">
            <Nav.Link><NavLink to="/" className="link">Home</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="/about" className="link">About</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="/work" className="link">Services</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="/consult" className="link">Contact</NavLink></Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </header>
  );
}

export default Navs;
