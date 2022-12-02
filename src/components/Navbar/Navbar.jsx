import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
import { navigation } from "../../constants/data";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      {navigation.map((item, index) => {
        return (
          <li key={index} className="p__opensans">
            <a href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay__close"
          onClick={() => {}}
        />
        <ul className="app__navbar-smallscreen-links">
          {navigation.map((item, index) => {
            return (
              <li key={index} className="p__opensans">
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
