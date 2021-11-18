import React from 'react';
import './Nav.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="navContainer">
          <div className="navLogo">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <h1>westagram</h1>
          </div>
          <label className="navInput">
            <input type="text" placeholder="검색" />
            <div className="navIcon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </label>
          <div className="menuIconWrapper">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
