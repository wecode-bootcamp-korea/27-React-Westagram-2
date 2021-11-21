import React, { useState } from 'react';
import Feeds from './Feeds';
import Aside from './Aside';
import './YangMain.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from './components/Comment';

const YangMain = () => {
  const [댓글, 댓글변경] = useState([]);
  const [입력값, 입력값변경] = useState([]);

  const getValue = e => {
    입력값변경(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    if (입력값.length !== 0) {
      let new댓글 = [...댓글];
      new댓글.push(입력값);
      댓글변경(new댓글);
    } else {
      alert('내용을 입력해주세요!');
    }
    // 입력값변경({
    //   입력값: '',
    // });
  };

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="wrapper">
          <div className="feeds">
            <div className="feedsBox">
              <div className="feedsHead">
                <div className="feedsHeadLeft">
                  <div className="userHead"></div>
                  <div className="userHeadId">j00_00</div>
                </div>
                <div className="feedsHeadRight"></div>
              </div>
              <div className="feedsImg">
                <img src="/images/yjy/cherry.png" alt="" />
              </div>
              <div className="feedContent">
                <div className="img">
                  <div className="feedIcon">
                    <img src="/images/yjy/likes.png" alt="" />
                    <img src="/images/yjy/heart33.png" alt="" />
                    <img src="/images/yjy/share.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/yjy/bookmark.png" alt="" />
                  </div>
                </div>
                <div className="feedLikes">좋아요 188개</div>
                <ul className="feedText">
                  <li className="idName">j00_00</li>
                  <li>너무 추워</li>
                </ul>
                <form className="feedForm">
                  {/* {댓글.map(function (글, idx) {
                    return (
                      <ul className="feedText">
                        <li className="idName">j00_00</li>
                        <li>{글}</li>
                      </ul>
                    );
                  })} */}
                  <Comment 댓글={댓글} 입력값={입력값} />
                  <div className="commentBox">
                    <input
                      className="comment"
                      type="text"
                      placeholder="댓글달기..."
                      onChange={getValue}
                    />
                    <button
                      id="commentBtn"
                      className={
                        입력값.length !== 0 ? 'activeBtn' : 'unactiveBtn'
                      }
                      type="submit"
                      onClick={addComment}
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
                      <div>cherry</div>
                      <div>16분 전</div>
                    </div>
                  </li>
                  <li>
                    <div className="feedStoryConUser"></div>
                    <div className="feedStoryConTxt">
                      <div>cherry</div>
                      <div>16분 전</div>
                    </div>
                  </li>
                  <li>
                    <div className="feedStoryConUser"></div>
                    <div className="feedStoryConTxt">
                      <div>cherry</div>
                      <div>16분 전</div>
                    </div>
                  </li>
                  <li>
                    <div className="feedStoryConUser"></div>
                    <div className="feedStoryConTxt">
                      <div>cherry</div>
                      <div>16분 전</div>
                    </div>
                  </li>
                  <li>
                    <div className="feedStoryConUser"></div>
                    <div className="feedStoryConTxt">
                      <div>cherry</div>
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
                        <div>cherry</div>
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
                        <div>cherry</div>
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
                        <div>cherry</div>
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
      </div>
    </div>
  );
};

export default YangMain;
