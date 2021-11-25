import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LIST, RECOMMENDED_MEMBER } from './AsideInfo';
import RecommendedPeople from './RecommendedPeople';
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
            <h5 className="recommendExpression">회원님을 위한 추천</h5>
            <Link className="showAll" to="#">
              모두보기
            </Link>
          </div>
          <ul className="recommendedPeopleList">
            {RECOMMENDED_MEMBER.map(member => (
              <RecommendedPeople userInfo={member} key={member.id} />
            ))}
          </ul>
        </div>
        <div className="footers">
          <ul className="linkList">
            {FOOTER_LIST.map(list => (
              <li className="linkListChild" key={list.id}>
                <Link className="linkListContent" to="#">
                  {list.item}
                </Link>
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
