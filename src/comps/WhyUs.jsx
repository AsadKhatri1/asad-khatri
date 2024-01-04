import React, { useState } from 'react';
import commit from '../images/icons8-handshake-50.png'
import satisfy from '../images/icons8-satisfaction-50.png'
import quick from '../images/icons8-fast-50.png'
import revision from '../images/icons8-infinity-50.png'
import {NavLink} from 'react-router-dom'

const WhyUs = (props) => {
    const [service, setService] = useState([
        {
            icon: commit,
            title: 'Commitment To Work',
            description: "Commitment isn't just a promise, it's our way of life. We pour our hearts and minds into every project, because success isn't just an option, it's our unwavering goal."
        
        },
        {
            icon: satisfy,
            title: 'Customer Satisfaction',
            description: 'Dedicated to your delight. Every interaction is an opportunity to build trust and ensure your experience is smooth, efficient, and leaves you feeling valued.'
            
        },
   
        {
            icon: quick,
            title: 'Fast Deliveries',
            description: 'We streamline your project for rapid completion while exceeding your highest quality expectations. We deliver projects in lightning speed.'
   
        },
        {
            icon: revision,
            title: 'Unlimited Revisions',
            description: "Unlimited revisions, unlimited possibilities. We're here to bring your dream to life, no matter how many drafts it takes."
   
        },
    ])
    return (
        <>
            <h1 className='text-center mt-3' style={{ fontFamily: "Fira Code, monospace", fontSize: '42px', fontWeight: '900' }}>{props.title}</h1>
            <div className="container text-center">

                <div className='row'>

                    {service.map((ser) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12 my-5" >
                                <div className="card d-flex flex-column justify-content-center align-items-center p-5 rounded" style={{height:'540px', maxHeight:'600px', backgroundColor:'#14222f', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                    <img src={ser.icon} alt="service icon" className='py-2' />
                                    <h3 className='text-center' style={{ fontFamily: "Fira Code, monospace", fontWeight: '600', color: 'white' }}>{ser.title}</h3>
                                    <span style={{ fontFamily: "Fira Code, monospace", opacity: '0.8', color: 'white' }} >{ser.description}</span>
                                    <button className='btn my-4 px-3' style={{backgroundColor:'#14222f',border:"1px solid #31EDC5", color:'#0c002b', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'#31EDC5', textDecoration:'none'}} to="/contact">Order Now</NavLink></button>
                                </div>

                            </div>
                        )
                    })}
            


                </div>
            </div>
        </>
    
  );
}

export default WhyUs;
