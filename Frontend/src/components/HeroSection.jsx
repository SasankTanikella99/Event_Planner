import React from "react";
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1> Your personal dream maker</h1>
          <p>Big Dreams and Small Details Matter A Lot</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
