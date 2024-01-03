import React from "react";
import Hero from "../comps/Hero";
// import Services from "../comps/Services";
import WhyUs from "../comps/WhyUs";

const About = () => {
  return (
    <div>
      <Hero
      who="me"
        title="ASAD KHATRI"
        desc="I am a pofessional MERNSTACK DEVELOPER having experience of 4 years in the field. I am a computer scientist running KATRIS CODE with a team of well equipped developers & designers."
        btnText="Order Now"
        link="/contact"
      />
      <div>
        <WhyUs title="Why Choose Us" />
      </div>
    </div>
  );
};

export default About;
