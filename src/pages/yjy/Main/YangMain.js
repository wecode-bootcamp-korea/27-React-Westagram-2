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
            feeds={feeds}
            Comment={Comment}
            comments={comments}
            input={input}
            getValue={getValue}
            addComment={addComment}
          />
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
