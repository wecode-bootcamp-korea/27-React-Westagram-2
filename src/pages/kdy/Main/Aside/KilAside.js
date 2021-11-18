import React from 'react';
import './KilAside.scss';

const KilAside = () => {
  return (
    <section className="people-section">
      <div className="people-container">
        <div className="user-container">
          <div className="profile-circle">
            <img
              alt="user-profile"
              className="profileImg userProfileImg"
              src="images/kdy/ralo.jpeg"
            />
          </div>
          <div className="user-info">
            <label>
              <a className="user-id" href="#">
                ralo
              </a>
              <p className="user-name">김찬호</p>
            </label>
          </div>
          <button className="user-conversion">게시</button>
        </div>
        <div className="recommended-people">
          <div className="recommend-header">
            <h5>회원님을 위한 추천</h5>
            <a href="#">모두 보기</a>
          </div>
          <ul className="recommended-people-list">
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommended-profile-img"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommended-user-info">
                <a className="user-id" href="#">
                  paka9999
                </a>
                <p className="follow-info">회원님을 위한 추천</p>
              </label>
              <button className="follow-button">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommended-profile-img"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommended-user-info">
                <a className="user-id" href="#">
                  paka9999
                </a>
                <p className="follow-info">회원님을 위한 추천</p>
              </label>
              <button className="follow-button">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommended-profile-img"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommended-user-info">
                <a className="user-id" href="#">
                  paka9999
                </a>
                <p className="follow-info">회원님을 위한 추천</p>
              </label>
              <button className="follow-button">팔로우</button>
            </li>
            <li>
              <img
                alt="recommed-profile1"
                className="smallProfileImg recommended-profile-img"
                src="images/kdy/paka.jpeg"
              />
              <label className="recommended-user-info">
                <a className="user-id" href="#">
                  paka9999
                </a>
                <p className="follow-info">회원님을 위한 추천</p>
              </label>
              <button className="follow-button">팔로우</button>
            </li>
          </ul>
        </div>
        <div className="corp-etc">
          <ul className="link-list">
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
