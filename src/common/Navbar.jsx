import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"
import './Navbar.css'

const Navbar = () => {
    
  return (
    <header className='header'>
     <NavLink to={'/'}>
        <img src={logo} alt="Logo" className='logo' />
     </NavLink>
     <nav >
        <div className="menuIcon">
            <ul className="navbar-list">
                <li>
                    <NavLink to="/" className='link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='link'>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className='link'>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className='link'>Contact</NavLink>
                </li>
            </ul>
        </div>
     </nav>
    </header>
  );
}

export default Navbar;
