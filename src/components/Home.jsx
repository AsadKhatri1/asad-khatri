import React from 'react';
import Hero from '../comps/Hero';
import Services from '../comps/Services';
import Subscribe from '../comps/Subscribe';


const Home = () => {
    return (
       <>
       <Hero who="us" title="KATRIS CODE" desc="We are a pofessional team of developers & designers having experience of 4 years in the field. We design and develop web applications using MERN technology, wordpress and basic HTML/CSS. KATRIS CODE is succssfully running and catering numerous clients since 2020. Give us the chance to bring your business online." btnText="Learn More" link="/about"/>
     
        <Services title="Services We Provide"/>
       <div>
        <Subscribe/>
       </div>
       </>
    );
}

export default Home;
