import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <div>
      <div className="mainRight">
        <span>
          <div className="user"></div>
          <div className="userId">
            <a href="">wecode_bootcamp</a>
            <span>WeCode | 위코드</span>
          </div>
        </span>
        <div className="feedStory">
          <div className="feedStoryHead">
            <div className="story">스토리</div>
            <div className="viewAll">모두 보기</div>
          </div>
          <div className="feedStoryCon">
            <ul>
              <li>
                <div className="feedStoryConUser"></div>
                <div className="feedStoryConTxt">
                  <div>_yum_s</div>
                  <div>16분 전</div>
                </div>
              </li>
              <li>
                <div className="feedStoryConUser"></div>
                <div className="feedStoryConTxt">
                  <div>_yum_s</div>
                  <div>16분 전</div>
                </div>
              </li>
              <li>
                <div className="feedStoryConUser"></div>
                <div className="feedStoryConTxt">
                  <div>_yum_s</div>
                  <div>16분 전</div>
                </div>
              </li>
              <li>
                <div className="feedStoryConUser"></div>
                <div className="feedStoryConTxt">
                  <div>_yum_s</div>
                  <div>16분 전</div>
                </div>
              </li>
              <li>
                <div className="feedStoryConUser"></div>
                <div className="feedStoryConTxt">
                  <div>_yum_s</div>
                  <div>16분 전</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="feedStory recommend">
          <div className="feedStoryHead">
            <div className="story">회원님을 위한 추천</div>
            <div className="viewAll">모두 보기</div>
          </div>
          <div className="feedStoryCon">
            <ul>
              <li>
                <div className="feedStoryUserInfo">
                  <div className="feedStoryConUser"></div>
                  <div className="feedStoryConTxt">
                    <div>_yum_s</div>
                    <div>16분 전</div>
                  </div>
                </div>
                <div>
                  <div className="follow">팔로우</div>
                </div>
              </li>
              <li>
                <div className="feedStoryUserInfo">
                  <div className="feedStoryConUser"></div>
                  <div className="feedStoryConTxt">
                    <div>_yum_s</div>
                    <div>16분 전</div>
                  </div>
                </div>
                <div>
                  <div className="follow">팔로우</div>
                </div>
              </li>
              <li>
                <div className="feedStoryUserInfo">
                  <div className="feedStoryConUser"></div>
                  <div className="feedStoryConTxt">
                    <div>_yum_s</div>
                    <div>16분 전</div>
                  </div>
                </div>
                <div>
                  <div className="follow">팔로우</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
