import React from 'react';
import Hero from '../comps/Hero';
import Services from '../comps/Services';
import Subscribe from '../comps/Subscribe';


const Home = () => {
    return (
       <>
       <Hero who="Welcome To" title="KATRIS CODE" desc="Your brand deserves a digital showcase that ignites imaginations and sparks connections. At KatrisCode, we're not just web developers and designers, we're architects of online experiences. Since 2020, we've poured our passion into crafting websites that dazzle with design, thrive with technology, and evolve with your business." btnText="Learn More" link="/about"/>
     
        <Services title="Services We Provide"/>
       <div>
        <Subscribe/>
       </div>
       </>
    );
}

export default Home;
