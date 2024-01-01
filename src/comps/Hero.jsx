import React from 'react';
import heroHome from "../images/heroHome.png"
import { NavLink } from 'react-router-dom';

const Hero = (props) => {
    return (
        <div className='container'>
        <div className='row h-50 my-5'>
            <div className='left col-lg-6 col-12  d-flex  flex-column align-items-start justify-content-center pl-3'>

                <p style={{fontFamily:"Fira Code, monospace", opacity:'0.6'}} >This is me</p>
                <h1 style={{fontFamily:"Fira Code, monospace", fontSize:'42px', fontWeight:'900'}}>{props.title}</h1>
                <span style={{fontFamily:"Fira Code, monospace", opacity:'0.8'}} >{props.desc}</span>
              <button className='btn my-3' style={{backgroundColor:'#270580',color:'white', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'white', textDecoration:'none'}} to={props.link}>{props.btnText}</NavLink></button>
            </div>
            <div className='right col-lg-6 col-12 text-center d-flex  flex-column align-items-center justify-content-center'>
                <img src={heroHome} alt="home hero " className='heroImg' style={{height:'420px', width:'500px'}}/>
            </div>
        </div>
        </div>
    );
}

export default Hero;