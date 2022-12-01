import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images'
import { navigation } from '../../constants/data';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      {navigation.map((item, index) => {
        return (
          <li key={index} className="p__opensans">{item.name}</li>
        )
      })}
    </ul>
  </nav>
);

export default Navbar;
