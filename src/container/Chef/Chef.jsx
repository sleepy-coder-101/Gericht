import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            As Chef of our fine dining restaurant, we believe in using the
            finest
          </p>
        </div>
        <p className="p__opensans">
          ingredients, supporting sustainable farming practices, and delivering
          exceptional quality. We aim to create a memorable dining experience
          with impeccable service and a welcoming atmosphere. We celebrate the
          art of cooking and the joy of sharing a meal, and constantly strive to
          push the boundaries of our craft.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
