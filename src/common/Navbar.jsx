import React from 'react';
import { Link} from 'react-router-dom';

import './Navbar.css'
// import { AlertLink } from 'react-bootstrap';
import logo from "../images/logo.png"

const Navbar = () => {
    
  return (
    <header classNameName='header-x '>
 <nav className="navbar navbar-expand-lg navbar-light backg px-5 header">

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
        <Link className="nav-link link " to="/services">Services</Link>
      </li>
      <li className="nav-item text-light">
        <Link className="nav-link link" to="/contact">Contact</Link>
      </li>
    
    </ul>
  </div>
</nav>
    </header>
  );
}

export default Navbar;
