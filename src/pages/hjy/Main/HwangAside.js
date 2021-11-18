import React from 'react';
import { Link } from 'react-router-dom';

import './HwangAside.scss';

const HwangAside = () => {
  return (
    <aside id="asideSection" className="section">
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
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile1.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile2.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile3.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile4.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile5.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
            </div>
            <div className="storyFeedBodyWrap">
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile1.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile2.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile3.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile4.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile5.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>dududweb</b>
                    </Link>
                  </p>
                  <p className="storyLastTime">2시간 전</p>
                </span>
              </div>
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
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile1.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>sanghoonlee</b>
                    </Link>
                  </p>
                  <p className="storySameFollowersView">
                    legend_님 외 12명이 팔로우중입니다.
                  </p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile1.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>sanghoonlee</b>
                    </Link>
                  </p>
                  <p className="storySameFollowersView">
                    legend_님 외 12명이 팔로우중입니다.
                  </p>
                </span>
              </div>
              <div className="storyProfile">
                <span className="storyProfileImg">
                  <Link to="#">
                    <img src="images/hjy/Main/webprofile1.png" alt="" />
                  </Link>
                </span>
                <span className="storyProfileDescription">
                  <p className="storyEnglishName">
                    <Link to="#">
                      <b>sanghoonlee</b>
                    </Link>
                  </p>
                  <p className="storySameFollowersView">
                    legend_님 외 12명이 팔로우중입니다.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HwangAside;
