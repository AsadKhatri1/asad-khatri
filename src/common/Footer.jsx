import React from 'react';
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom';
import fb from "../images/icons8-facebook-50.png"
import insta from "../images/icons8-instagram-circle-50.png"
import linkedin from "../images/icons8-linkedin-50.png"
import mail from "../images/icons8-mail-50.png"
const Footer = () => {
  return (
    <>
    <div className='row pt-5' style={{backgroundColor:'#14222f', zIndex:"-1"}}>
      <div className="col-lg-4 col-12 d-flex direction-column align-items-center justify-content-center">
   
        <NavLink to="/"> <img src={logo} alt="Logo" style={{height:'250px', width:'250px'}} /></NavLink>
      
     
      </div>
      <div className="col-lg-4 text-center col-12 d-flex flex-column align-items-center justify-content-evenly my-3">
       <div>
        <h2 style={{fontFamily:"Fira Code, monospace", fontWeight:'600', color:'white'}}>Our Socials</h2>
        <hr style={{color:'white'}} />
        </div>
    
      <div className='d-flex direction-column' >
      <div className=' d-flex flex-row my-3'>
        <a href='https://www.facebook.com/profile.php?id=61554953861588' target='_blank' className='mx-2'><img src={fb} alt="facebook" /></a>
        <a href='https://www.instagram.com/katriscode?igsh=dmMyM3p3dTg5OG11' target='_blank' className='mx-2'><img src={insta} alt="facebook" /></a>
        <a href='https://www.linkedin.com/company/katris-code/' target='_blank' className='mx-2'><img src={linkedin} alt="facebook" /></a>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-12 d-flex flex-column align-items-center justify-content-evenly">
      <div>
        <h2 style={{fontFamily:"Fira Code, monospace", fontWeight:'600', color:'white'}}>Connect With Us</h2>
        <hr style={{color:'white'}} />
        </div>
    
      <div className='d-flex ' >
      <div className=' d-flex flex-row my-3'>
        <a href='mailto:katriscode@outlook.com' target='_blank' className='mx-2' style={{textDecoration:'none', color:'#31EDC5'}}><img src={mail} alt="facebook" style={{padding:'0px 15px'}}/>katriscode@outlook.com</a>
        
      </div>
      </div>
      </div>
  
     
    </div>
    <div className='text-center py-3' style={{backgroundColor:"#14222f" , borderTop:'1px solid #31EDC5'}}>
      <span className='' style={{color:'white'}}>Copyright © 2024 KatrisCode. All rights reserved</span>
    </div>
    </>
  );
}

export default Footer;
