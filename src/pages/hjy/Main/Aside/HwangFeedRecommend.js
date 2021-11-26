import React from 'react';
import { Link } from 'react-router-dom';

function HwangFeedRecommend({ userName, sameLikeCount }) {
  return (
    <div className="storyProfile">
      <span className="storyProfileImg">
        <Link to="#">
          <img src="images/hjy/Main/webprofile1.png" alt="" />
        </Link>
      </span>
      <span className="storyProfileDescription">
        <p className="storyEnglishName">
          <Link to="#">{userName}</Link>
        </p>
        <p className="storySameFollowersView">{sameLikeCount}</p>
      </span>
    </div>
  );
}

export default HwangFeedRecommend;
