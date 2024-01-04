import React, { useState } from 'react';
import wordpress from '../images/icons8-website-50.png'
import mern from '../images/icons8-development-50.png'
import uiux from '../images/icons8-designing-50.png'
import {NavLink} from 'react-router-dom'
const Services = (props) => {
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
            <h1 className='text-center my-3' style={{ fontFamily: "Fira Code, monospace", fontSize: '48px', fontWeight: '900' }}>{props.title}</h1>
            <div className="container text-center">

                <div className='row'>

                    {service.map((ser) => {
                        return (
                            <div className="col-lg-4 col-12 my-5" >
                                <div className="rounded-lg card d-flex flex-column justify-content-center align-items-center p-5" style={{height:'500px', maxHeight:'600px', backgroundColor: '#14222f',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                                    <img src={ser.icon} alt="service icon" className='py-2' />
                                    <h3 className='text-center' style={{ fontFamily: "Fira Code, monospace", fontWeight: '600', color: 'white' }}>{ser.title}</h3>
                                    <span style={{ fontFamily: "Fira Code, monospace", opacity: '0.8', color: 'white' }} >{ser.description}</span>
                                    <button className='btn my-4 px-3' style={{backgroundColor:'#14222f',border:'1px solid #31EDC5', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'#31EDC5', textDecoration:'none'}} to="/consult">Order Now</NavLink></button>
                                </div>

                            </div>
                        )
                    })}
           

                </div>
            </div>
        </>
    );
}

export default Services;
