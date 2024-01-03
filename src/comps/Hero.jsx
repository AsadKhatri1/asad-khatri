import React from 'react';
import heroHome from "../images/heroHome.jpg"
import { NavLink } from 'react-router-dom';

const Hero = (props) => {
    return (
        <div className='container'>
        <div className='row h-50 my-5 mx-auto '>
            <div className='left col-lg-6 col-12 d-flex  flex-column align-items-start justify-content-center pr-5'>

                <p style={{fontFamily:"Fira Code, monospace", opacity:'0.6'}} >This is {props.who}</p>
                <h1 style={{fontFamily:"Fira Code, monospace", fontSize:'48px', fontWeight:'900'}}>{props.title}</h1>
                <span style={{fontFamily:"Fira Code, monospace", opacity:'0.8'}} >{props.desc}</span>
              <button className='btn my-3 rounded-lg' style={{backgroundColor:'#14222f', border:'1px solid #31EDC5',color:'white', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'white', textDecoration:'none'}} to={props.link}>{props.btnText}</NavLink></button>
            </div>
            <div className='right col-lg-6 col-12 d-flex  flex-column align-items-end justify-content-center'>
                <img src={heroHome} alt="home hero " className='heroImg' style={{height:'440px', width:'500px'}}/>
            </div>
        </div>
        </div>
    );
}

export default Hero;
