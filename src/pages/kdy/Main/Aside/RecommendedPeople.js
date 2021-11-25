import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendedPeople.scss';

const RecommendedPeople = ({ userInfo }) => {
  const { profileImg, userId } = userInfo;
  return (
    <li className="recommendedMember">
      <img
        alt="recommed-profile1"
        className="smallProfileImg recommendedProfileImg"
        src={profileImg}
      />
      <label className="recommendedUserInfo">
        <Link className="userId" to="#">
          {userId}
        </Link>
        <p className="followInfo">회원님을 위한 추천</p>
      </label>
      <button className="followButton">팔로우</button>
    </li>
  );
};

export default RecommendedPeople;
