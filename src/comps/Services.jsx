import React, { useState } from 'react';
import wordpress from '../images/mern.png'
import mern from '../images/wordpress.png'
import uiux from '../images/uiux.png'
import {NavLink} from 'react-router-dom'
const Services = () => {
    const [service, setService] = useState([
        {
            icon: mern,
            title: 'MernStack Web Apps',
            description: 'We provide website development services with MernStack Technology, ensuring smooth and fast connectivity of APIs with the client side.'
           

        },
        {
            icon: wordpress,
            title: 'Wordpress Development',
            description: 'We provide website development services with wordpress. We are covering full range of Blog, Personal, Business or Ecommerce website development from scratch.'
            
        },
        {
            icon: uiux,
            title: 'UI/UX Designing',
            description: 'We provide UI/UX designing services along with logo designing, banner creation and all the mandatory designing necessities.'
   
        }
    ])
    return (
        <>
            <h1 className='text-center mt-3' style={{ fontFamily: "Fira Code, monospace", fontSize: '42px', fontWeight: '900' }}>Services We Provide</h1>
            <div className="container text-center">

                <div className='row'>

                    {service.map((ser) => {
                        return (
                            <div className="col-lg-4 col-12 my-5" >
                                <div className="card d-flex flex-column justify-content-center align-items-center p-5" style={{minHeight:'450px', maxHeight:'600px', backgroundColor:'#21036e', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                    <img src={ser.icon} alt="service icon" className='py-2' />
                                    <h3 className='text-center' style={{ fontFamily: "Fira Code, monospace", fontWeight: '600', color: 'white' }}>{ser.title}</h3>
                                    <span style={{ fontFamily: "Fira Code, monospace", opacity: '0.8', color: 'white' }} >{ser.description}</span>
                                    <button className='btn my-4 px-3' style={{backgroundColor:'#0c002b', color:'white', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'white', textDecoration:'none'}} to="/contact">Order Now</NavLink></button>
                                    
                                </div>

                            </div>
                        )
                    })}
                    {/* <div className="col-lg-4 col-12">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img src="" alt="" />
                <h3 className='text-center' style={{ fontFamily: "Fira Code, monospace", fontWeight: '600' }}>MernStack Development</h3>
                </div>

            </div> */}


                </div>
            </div>
        </>
    );
}

export default Services;
