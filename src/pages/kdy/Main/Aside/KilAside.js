import React from 'react';
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
              <a className="userId" href="#">
                ralo
              </a>
              <p className="userName">김찬호</p>
            </label>
          </div>
          <button className="userConversion">게시</button>
        </div>
        <div className="recommendedPeople">
          <div className="recommendHeader">
            <h5>회원님을 위한 추천</h5>
            <a href="#">모두 보기</a>
          </div>
          <ul className="recommendedPeopleList">
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommendedProfileImg"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommendedUserInfo">
                <a className="userId" href="#">
                  paka9999
                </a>
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
                <a className="userId" href="#">
                  paka9999
                </a>
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
                <a className="userId" href="#">
                  paka9999
                </a>
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
                <a className="userId" href="#">
                  paka9999
                </a>
                <p className="followInfo">회원님을 위한 추천</p>
              </label>
              <button className="followButton">팔로우</button>
            </li>
          </ul>
        </div>
        <div className="corpEtc">
          <ul className="linkList">
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">도움말</a>
            </li>
            <li>
              <a href="#">홍보</a>
            </li>
            <li>
              <a href="#">센터</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">채용 정보</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">약관</a>
            </li>
            <li>
              <a href="#">위치</a>
            </li>
            <li>
              <a href="#">인기 계정</a>
            </li>
            <li>
              <a href="#">해시태그</a>
            </li>
            <li>
              <a href="#">언어</a>
            </li>
          </ul>
          <p>© 2021 WESTAGRAM</p>
        </div>
      </div>
    </section>
  );
};

export default KilAside;
