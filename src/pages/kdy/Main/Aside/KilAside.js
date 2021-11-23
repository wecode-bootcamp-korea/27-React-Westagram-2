import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LIST } from './footerList';
import './KilAside.scss';

const KilAside = () => {
  return (
    <section className="peopleSection">
      <div className="peopleContainer">
        <div className="userContainer">
          <div className="profileCircle">
            <img
              alt="user-profile"
              className="profileImg userProfileImg"
              src="images/kdy/ralo.jpeg"
            />
          </div>
          <div className="userInfo">
            <label>
              <Link className="userId" to="#">
                ralo
              </Link>
              <p className="userName">김찬호</p>
            </label>
          </div>
          <button className="userConversion">게시</button>
        </div>
        <div className="recommendedPeople">
          <div className="recommendHeader">
            <h5>회원님을 위한 추천</h5>
            <Link to="#">모두보기</Link>
          </div>
          <ul className="recommendedPeopleList">
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommendedProfileImg"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommendedUserInfo">
                <Link className="userId" to="#">
                  paka9999
                </Link>
                <p className="followInfo">회원님을 위한 추천</p>
              </label>
              <button className="followButton">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommendedProfileImg"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommendedUserInfo">
                <Link className="userId" to="#">
                  paka9999
                </Link>
                <p className="followInfo">회원님을 위한 추천</p>
              </label>
              <button className="followButton">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommendedProfileImg"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommendedUserInfo">
                <Link className="userId" to="#">
                  paka9999
                </Link>
                <p className="followInfo">회원님을 위한 추천</p>
              </label>
              <button className="followButton">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommendedProfileImg"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommendedUserInfo">
                <Link className="userId" to="#">
                  paka9999
                </Link>
                <p className="followInfo">회원님을 위한 추천</p>
              </label>
              <button className="followButton">팔로우</button>
            </li>
          </ul>
        </div>
        <div className="corpEtc">
          <ul className="linkList">
            {FOOTER_LIST.map(list => (
              <li key={list.id}>
                <Link to="#">{list.item}</Link>
              </li>
            ))}
          </ul>
          <p>© 2021 WESTAGRAM</p>
        </div>
      </div>
    </section>
  );
};

export default KilAside;
