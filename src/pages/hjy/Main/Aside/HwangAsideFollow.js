import React from 'react';
import { Link } from 'react-router-dom';

const HwangAsideFollow = ({ userName, writedTime }) => {
  return (
    <div className="storyProfile">
      <span className="storyProfileImg">
        <Link to="#">
          <img src="images/hjy/Main/webprofile1.png" alt="weprofile" />
        </Link>
      </span>
      <span className="storyProfileDescription">
        <p className="storyEnglishName">
          <Link to="#">{userName}</Link>
        </p>
        <p className="storyLastTime">{writedTime}</p>
      </span>
    </div>
  );
};

export default HwangAsideFollow;
