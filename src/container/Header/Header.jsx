import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Epitome of Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Discover the pinnacle of culinary excellence at Gerícht, where every
        dish is a masterpiece. Our talented chefs use only the freshest,
        locally-sourced ingredients to create a menu that is both innovative and
        timeless. From our exquisite appetizers to our decadent desserts, every
        bite is a symphony of flavors and textures. Immerse yourself in the
        elegance of Gerícht and experience the ultimate in fine dining.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header " />
    </div>
  </div>
);

export default Header;
