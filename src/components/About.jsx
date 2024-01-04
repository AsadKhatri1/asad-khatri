import React from "react";
import Hero from "../comps/Hero";
// import Services from "../comps/Services";
import WhyUs from "../comps/WhyUs";

const About = () => {
  return (
    <div>
      <Hero
      who="All About"
        title="KATRIS CODE"
        desc="Since 2020, we've been obsessed with crafting digital experiences that captivate audiences, fuel businesses, and dominate search engines. We're not just web developers and designers, we're architects of your online story, weaving together stunning visuals, cutting-edge tech, and a deep understanding of your brand to create websites that work as hard as you do. We obsess over user journeys, future-proof scalability, and dedicated support, because your success is our mission. Let's unleash your online potential. Contact us today for a free consultation and get ready to write a digital masterpiece."
        btnText="Consult Us"
        link="/contact"
      />
      <div>
        <WhyUs title="Why Choose Us" />
      </div>
    </div>
  );
};

export default About;
