import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faPaperPlane,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import MockComment from '../Comment/MockComment';
import Comment from '../Comment/Comment';

function Feed(props) {
  const { feedId, userName, feedImg, content } = props;

  const [mockCommentList, setMockCommentList] = useState([]);

  let eachComment = mockCommentList.filter(el => el.feedId === feedId);

  useEffect(() => {
    fetch('http://localhost:3000/data/ksh/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMockCommentList(data);
      });
  }, []);

  const [comment, setComment] = useState({
    newComment: '',
    comments: [],
  });

  const { newComment, comments } = comment;

  function getComment(e) {
    const { value } = e.target;
    setComment({ ...comment, newComment: value });
  }

  function addComment() {
    if (!newComment) {
      return;
    }

    setComment({
      ...comment,
      comments: comments.concat([newComment]),
      newComment: '',
    });
  }

  function addCommentEnter(e) {
    if (e.key === 'Enter' && newComment) {
      addComment();
    }
  }

  return (
    <article>
      <div className="feedHeader">
        <div className="profile">
          <img src="/images/ksh/PumpkinCat.PNG" alt="" />
          <span>{userName}</span>
        </div>
        <div className="moreBtn">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="feedImg">
        <img src={feedImg} alt="" />
      </div>
      <div className="likesAndComments">
        <div className="icons">
          <ul>
            <li>
              <button className="likeBtn">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} />
            </li>
          </ul>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div className="likes">
          <img src="/images/ksh/PumpkinCat.PNG" alt="" />
          <span>
            <span className="boldBlackName">Sang_HoOon</span>님
            <span className="boldBlackName">외 10명</span>이 좋아합니다
          </span>
        </div>
        <div className="mainText">
          <span className="boldBlackName">{userName}</span>
          <span className="content">{content}</span>
        </div>
        <ul className="commentBox">
          {eachComment.map(el => {
            return (
              <MockComment
                key={el.id}
                name={el.userName}
                comment={el.content}
              />
            );
          })}
          {comments.map((el, index) => {
            return <Comment key={index} comments={el} />;
          })}
        </ul>
        <span className="smallGrayText">42분 전</span>
      </div>
      <div className="commentInputBox">
        <input
          type="text"
          className="commentInput"
          placeholder="댓글 달기..."
          onChange={getComment}
          onKeyPress={addCommentEnter}
          value={newComment}
        />
        <button className="submitBtn" onClick={addComment}>
          게시
        </button>
      </div>
    </article>
  );
}
export default Feed;
