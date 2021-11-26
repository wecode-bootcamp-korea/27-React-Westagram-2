import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../Comments/KilComment';
import './KilFeed.scss';

const KilFeed = ({ feedprops, changeFeed }) => {
  const [commentInput, setCommentInput] = useState('');

  const { userId, imageContent, contents, commentNoIndex, comments } =
    feedprops;

  const nextCommentNo = useRef(commentNoIndex);

  const commentInputChange = e => {
    setCommentInput(e.target.value);
  };

  const createComment = e => {
    e.preventDefault();

    changeFeed({
      ...feedprops,
      commentNoIndex: nextCommentNo.current + 1,
      comments: [
        ...comments,
        {
          commentNo: nextCommentNo.current,
          userId: 'ralo',
          isLiked: false,
          contents: commentInput,
        },
      ],
    });
    nextCommentNo.current += 1;
    setCommentInput('');
  };

  const setCommentLiked = commentNo => {
    const likedCommentList = comments.map(comment =>
      comment.commentNo === commentNo
        ? { ...comment, isLiked: !comment.isLiked }
        : comment
    );
    changeFeed({
      ...feedprops,
      comments: likedCommentList,
    });
  };

  const removeComment = commentNo => {
    const adjustedCommentList = comments.filter(
      comment => comment.commentNo !== commentNo
    );

    changeFeed({
      ...feedprops,
      comments: adjustedCommentList,
    });
  };

  return (
    <article className="feed">
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
            <Link className="userName" to="#">
              {userId}
            </Link>
            <Link className="locationInfo" to="#">
              김해시
            </Link>
          </div>
        </div>
        <div className="feedMenu">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="feedImageWrapper">
        <img className="feedImg" alt="feedcontent-img" src={imageContent} />
      </div>
      <div className="feedBody">
        <div className="buttonWrapper">
          <div className="buttonContainer">
            <button className="buttonLike">
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
            </button>
          </div>
        </div>
        <div className="feedContent">
          <p>
            <Link className="userName" to="#">
              paka9999
            </Link>
            님 외{' '}
            <Link className="userName" to="#">
              7명
            </Link>
            이 좋아합니다
          </p>
          <div className="feedComments">
            <div className="comments">
              <div className="comment mainComment">
                <label>
                  {' '}
                  <Link className="userName" to="#">
                    {userId}
                  </Link>
                  &nbsp;<span>{contents}</span>{' '}
                </label>
              </div>
              {comments.map(el => (
                <Comment
                  comment={el}
                  key={el.commentNo}
                  removeComment={removeComment}
                  setCommentLiked={setCommentLiked}
                />
              ))}
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
            value={commentInput}
            onChange={commentInputChange}
          />
          <button
            className="commentInputButton"
            onClick={createComment}
            disabled={!commentInput}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default KilFeed;
