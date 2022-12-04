import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div id="home" className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
    </div>
    <div className="app__wrapper_img">

    </div>
  </div>
);

export default Header;
