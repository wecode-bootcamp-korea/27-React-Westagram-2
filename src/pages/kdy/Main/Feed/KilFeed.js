import { React, useRef, useState } from 'react';
import './KilFeed.scss';

import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../Comments/KilComments';

const KilFeed = () => {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([
    {
      commentNo: 0,
      userId: 'ralo',
      contents: '낭만이 있는 김해',
    },
  ]);

  const commentInputChange = e => {
    setCommentInput(e.target.value);
  };

  const nextCommentNo = useRef(1);

  const commentCreate = e => {
    e.preventDefault();

    setCommentList([
      ...commentList,
      {
        commentNo: nextCommentNo.current,
        userId: 'ralo',
        contents: commentInput,
      },
    ]);

    setCommentInput('');

    nextCommentNo.current += 1;
  };

  return (
    <article id="feed-0" className="feed">
      <div className="feed-header">
        <div className="feed-writer">
          <div className="small-profile-circle">
            <img
              alt="feed-profile-img"
              className="small-profile-img"
              src="images/kdy/ralo.jpeg"
            />
          </div>
          <div className="writer-info">
            <a className="user-name" href="#">
              ralo
            </a>
            <a className="location-info" href="#">
              김해시
            </a>
          </div>
        </div>
        <div className="feed-menu">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="feed-image">
        <img
          alt="feed-image"
          src="images/kdy/olcay-ertem-m4R-7ZsENNE-unsplash.jpg"
        />
      </div>
      <div className="feed-body">
        <div className="button-wrapper">
          <div className="button-container">
            <button className="button-like" onclick="feedLikeToggle(this)">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="button-comment">
              <FontAwesomeIcon icon={faComment} />
            </button>
            <button className="button-share">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className="button-container">
            <button className="button-bookmark">
              <FontAwesomeIcon icon={faBookmark} />
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div className="feed-content">
          <p>
            <a className="user-name" href="#">
              paka9999
            </a>
            님 외{' '}
            <a className="user-name" href="#">
              7명
            </a>
            이 좋아합니다
          </p>
          <div className="feed-comments">
            <div className="comments">
              <div className="comment main-comment">
                <label>
                  {' '}
                  <a className="user-name" href="#">
                    ralo
                  </a>
                  &nbsp;<span>ㅇㅇ</span>{' '}
                </label>
              </div>
              <div id="comment-0" className="comment">
                <label>
                  {' '}
                  <a className="user-name" href="#">
                    um_stil_alive
                  </a>
                  &nbsp;<span>ㅇㅇ</span>{' '}
                </label>
              </div>
              <Comments commentList={commentList} />
            </div>
            <div className="feed-time-ago">
              <p>2시간 전</p>
            </div>
          </div>
        </div>
        <form className="comment-input-container">
          <input
            name="comment-input"
            className="comment-input"
            placeholder="댓글 달기..."
            onChange={commentInputChange}
          />
          <button className="comment-input-button" onClick={commentCreate}>
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default KilFeed;
