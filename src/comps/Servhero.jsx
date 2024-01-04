import React from "react";
import { NavLink } from "react-router-dom";
import servhero from "../images/servhero.jpg"

const Servhero = () => {
  return (
    <div>
      <div className="container">
        <div className="row h-50 my-5 mx-auto ">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-start justify-content-center">
            <h1
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: "42px",
                fontWeight: "900",
              }}
            >
              Hire Experts Of The Industry
            </h1>
            <span
              style={{ fontFamily: "Fira Code, monospace", opacity: "0.8" }}
            >
             With our award-winning design and technologically astute development, you can ditch the generic websites and enhance your brand. We create custom digital experiences with smooth user journeys, future-proof scalability, and committed support that fascinate your audience, boost your business, and dominate search engines. Together, let's maximize your web potential. Get in touch with us now for a free consultation!
            </span>
            <button className='btn my-3 rounded-lg py-2' style={{backgroundColor:'#14222f', border:'1px solid #31EDC5',color:'white', fontFamily:"Fira Code, monospace", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }><NavLink style={{color:'white', textDecoration:'none'}} to="/consult">Get The Free Consultation</NavLink></button>
          </div>

          <div className="col-lg-6 col-12">
            <img className="rounded" src={servhero} alt="prople working" style={{width:'100%'}}/>
          </div>
        </div>
        <div className="right col-lg-6 col-12 d-flex  flex-column align-items-end justify-content-center"></div>
      </div>
    </div>
  );
};

export default Servhero;
