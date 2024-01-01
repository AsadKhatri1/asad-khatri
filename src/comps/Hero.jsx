import React from 'react';
import heroHome from "../images/heroHome.png"
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='container vh-100'>
        <div className='row h-50'>
            <div className='left col-lg-6 col-12  d-flex  flex-column align-items-start justify-content-center pl-3'>

                <p style={{fontFamily:"Fira Code, monospace", opacity:'0.6'}} >This is me</p>
                <h1 style={{fontFamily:"Fira Code, monospace", fontSize:'42px', fontWeight:'900'}}>KATRIS <br></br> CODE</h1>
                <span style={{fontFamily:"Fira Code, monospace", opacity:'0.8'}} >I am a pofessional <span style={{color:'#270580'}}>MERNSTACK developer</span> having experience of 3 years in the field. I design and develop web applications using MERN technology.</span>
              <button className='btn my-3' style={{backgroundColor:'#270580',color:'white', fontFamily:"Fira Code, monospace", } }><NavLink style={{color:'white', textDecoration:'none'}} to="/about">Learn More</NavLink></button>
            </div>
            <div className='right col-lg-6 col-12 text-center d-flex  flex-column align-items-center justify-content-center'>
                <img src={heroHome} alt="home hero " className='heroImg' style={{height:'420px', width:'500px'}}/>
            </div>
        </div>
        </div>
    );
}

export default Hero;
