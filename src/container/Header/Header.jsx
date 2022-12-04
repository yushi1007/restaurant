import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div id="home" className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading />
    </div>
    <div className="app__wrapper_img">

    </div>
  </div>
);

export default Header;
