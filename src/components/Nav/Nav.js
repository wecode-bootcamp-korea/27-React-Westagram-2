import React from 'react';
import './Nav.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <header className="topSideHeader">
      <nav className="topSideNav">
        <div className="navContainer">
          <div className="navLogo">
            <span className="logoIcon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <h1 className="h1Logo">westagram</h1>
          </div>
          <label className="navInputContainer">
            <input className="navInput" type="text" placeholder="검색" />
            <div className="navIcon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </label>
          <div className="menuIconWrapper">
            <img
              className="navMenuIcon"
              alt="compas"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="navMenuIcon"
              alt="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="navMenuIcon"
              alt="people"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
