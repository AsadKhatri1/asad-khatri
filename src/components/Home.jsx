import React from 'react';
import Hero from '../comps/Hero';
import Services from '../comps/Services';


const Home = () => {
    return (
       <>
       <Hero title="KATRIS CODE" desc="I am a pofessional MERNSTACK DEVELOPER having experience of numerous years in the field. I design and develop web applications using MERN and wordpress technologies." btnText="Learn More" link="/about"/>
       <div>
        <Services/>
       </div>
       </>
    );
}

export default Home;
