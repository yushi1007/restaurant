import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
import { navigation } from "../../constants/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="p__opensans">
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={700}
                offset={50}
              >
                {item.name}
              </Link>
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
        <GiHamburgerMenu
          className="hamburger-menu"
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="p__opensans">
                    <Link
                      to={item.href}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={50}
                      onClick={() => setToggleMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
