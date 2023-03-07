import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Gerícht, a fine dining restaurant that provides our guests
          with an exceptional culinary experience. Our mission is to create an
          atmosphere of sophistication and elegance where guests can indulge in
          a sensory journey of flavors and textures.
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Founded in 2007 by Chef Kevin Luo, Gerícht quickly gained a reputation
          for outstanding cuisine and sophisticated ambiance. Today, it
          continues to innovate and evolve to provide guests with a memorable
          dining experience.
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
