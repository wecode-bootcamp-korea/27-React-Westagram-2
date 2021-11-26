import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import HwangAsideFollow from './HwangAsideFollow';
import HwangFeedRecommend from './HwangFeedRecommend';
import ASIDE_STORY_DATA from './AsideStoryData';
import ASIDE_RECOMMEND_DATA from './AsideRecommendData';

import './HwangAside.scss';

const HwangAside = () => {
  return (
    <aside className="asideSection section">
      <div className="asideInner">
        <div className="profile">
          <span className="profileImg">
            <img src="images/hjy/Main/webprofile1.png" alt="" />
          </span>
          <span className="profileDescription">
            <p className="englishName">
              <b>dududweb</b>
            </p>
            <p className="koreanName">dududweb | 황주영</p>
          </span>
        </div>
        <div className="storyFeed">
          <div className="storyWrap">
            <div className="storyFeedHeadWrap">
              <span className="storyFeedTitle">스토리</span>
              <span className="storyFeedAllView">
                <Link to="#">
                  <b>모두 보기</b>
                </Link>
              </span>
            </div>
            <div className="storyFeedBodyWrap">
              {ASIDE_STORY_DATA.map(list => {
                return (
                  <HwangAsideFollow
                    key={list.id}
                    userName={list.userName}
                    writedTime={list.writedTime}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="storyFeedRecommend">
          <div className="storyWrap">
            <div className="storyFeedHeadWrap">
              <span className="storyFeedTitle">회원님을 위한 추천</span>
              <span className="storyFeedAllView">
                <Link to="#">
                  <b>모두 보기</b>
                </Link>
              </span>
            </div>
            <div className="storyFeedBodyWrap">
              {ASIDE_RECOMMEND_DATA.map(list => {
                return (
                  <HwangFeedRecommend
                    userName={list.userName}
                    sameLikeCount={list.sameLikeCount}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HwangAside;
