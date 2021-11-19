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
  const [commentList, setCommentList] = useState([]);

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
        liked: false,
        contents: commentInput,
      },
    ]);

    setCommentInput('');

    nextCommentNo.current += 1;
  };

  const commentLiked = commentNo => {
    const adjustedCommentList = commentList.map(comment =>
      comment.commentNo === commentNo
        ? { ...comment, liked: !comment.liked }
        : comment
    );
    setCommentList(adjustedCommentList);
    console.log(commentList);
  };

  const commentRemove = commentNo => {
    const adjustedCommentList = commentList.filter(
      comment => comment.commentNo !== commentNo
    );
    setCommentList(adjustedCommentList);
  };

  return (
    <article id="feed-0" className="feed">
      <div className="feedHeader">
        <div className="feedWriter">
          <div className="smallProfileCircle">
            <img
              alt="feedProfileImg"
              className="smallProfileImg"
              src="images/kdy/ralo.jpeg"
            />
          </div>
          <div className="writerInfo">
            <a className="userName" href="#">
              ralo
            </a>
            <a className="locationInfo" href="#">
              김해시
            </a>
          </div>
        </div>
        <div className="feedMenu">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="feedImage">
        <img
          alt="feed-image"
          src="images/kdy/olcay-ertem-m4R-7ZsENNE-unsplash.jpg"
        />
      </div>
      <div className="feedBody">
        <div className="buttonWrapper">
          <div className="buttonContainer">
            <button className="buttonLike" onclick="feedLikeToggle(this)">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="buttonComment">
              <FontAwesomeIcon icon={faComment} />
            </button>
            <button className="buttonShare">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className="buttonContainer">
            <button className="buttonBookmark">
              <FontAwesomeIcon icon={faBookmark} />
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div className="feedContent">
          <p>
            <a className="userName" href="#">
              paka9999
            </a>
            님 외{' '}
            <a className="userName" href="#">
              7명
            </a>
            이 좋아합니다
          </p>
          <div className="feedComments">
            <div className="comments">
              <div className="comment mainComment">
                <label>
                  {' '}
                  <a className="userName" href="#">
                    ralo
                  </a>
                  &nbsp;<span>ㅇㅇ</span>{' '}
                </label>
              </div>
              <Comments
                commentList={commentList}
                commentRemove={commentRemove}
                commentLiked={commentLiked}
              />
            </div>
            <div className="feedTimeAgo">
              <p>2시간 전</p>
            </div>
          </div>
        </div>
        <form className="commentInputContainer">
          <input
            name="commentInput"
            className="commentInput"
            placeholder="댓글 달기..."
            onChange={commentInputChange}
          />
          <button className="commentInputButton" onClick={commentCreate}>
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default KilFeed;