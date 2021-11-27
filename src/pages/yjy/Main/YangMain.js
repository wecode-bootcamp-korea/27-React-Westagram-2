import React, { useState, useEffect, useRef } from 'react';

import Nav from '../../../components/Nav/Nav';
import Comment from './components/Comment';

import './YangMain.scss';
import Feed from './components/Feed';

const YangMain = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const [feeds, setFeeds] = useState([]);
  const nextId = useRef(4);

  const getValue = e => {
    setInput(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    if (input.length !== 0) {
      const newComment = {
        id: nextId,
        userName: 'joo',
        content: input,
        isLiked: false,
      };
      setComments([...comments, newComment]);
      nextId.current += 1;
      setInput('');
    } else {
      alert('내용을 입력해주세요!');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/yjy/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/yjy/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  });

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="wrapper">
          <Feed
            Comment={Comment}
            comments={comments}
            input={input}
            getValue={getValue}
            addComment={addComment}
          />
          {/* <div className="feeds">
            <div className="feedsBox">
              <div className="feedsHead">
                <div className="feedsHeadLeft">
                  <div className="userHead"></div>
                  <div className="userHeadId">j00_00</div>
                </div>
                <div className="feedsHeadRight"></div>
              </div>
              <div className="feedsImg">
                <img src="/images/yjy/cherry.png" alt="feedImg" />
              </div>
              <div className="feedContent">
                <div className="img">
                  <div className="feedIcon">
                    <img src="/images/yjy/likes.png" alt="like" />
                    <img src="/images/yjy/heart33.png" alt="comment" />
                    <img src="/images/yjy/share.png" alt="share" />
                  </div>
                  <div>
                    <img src="/images/yjy/bookmark.png" alt="bookmark" />
                  </div>
                </div>
                <div className="feedLikes">좋아요 188개</div>
                <ul className="feedText">
                  <li className="idName">j00_00</li>
                  <li>너무 추워</li>
                </ul>
                <form className="feedForm">
                  <Comment comments={comments} input={input} />
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
                        false ? 'commentActivated' : 'commentDeactivated'
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
          </div> */}
          <div className="mainRight">
            <span>
              <div className="user"></div>
              <div className="userId">
                <a href="https://wecode.co.kr/?gclid=Cj0KCQiAhf2MBhDNARIsAKXU5GRdXoiikhCt9HkD6xoo4RxInPHcw87BP0Eny3GmzBjuLpDQy-S-AtYaAnKkEALw_wcB">
                  wecode_bootcamp
                </a>
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
