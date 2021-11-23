import { React, useRef, useState } from 'react';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../Comments/KilComments';
import './KilFeed.scss';

const KilFeed = ({ feedprops, changeFeed }) => {
  const [commentInput, setCommentInput] = useState('');

  const { userId, imageContent, contents, commentNoIndex, comments } =
    feedprops;

  const nextCommentNo = useRef(commentNoIndex);
  const commentInputSlot = useRef();
  const commentInputButton = useRef();

  const commentInputChange = e => {
    setCommentInput(e.target.value);
  };

  const commentCreate = e => {
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
    commentInputSlot.current.value = '';
    setCommentInput('');
  };

  const commentLiked = commentNo => {
    const adjustedCommentList = comments.map(comment =>
      comment.commentNo === commentNo
        ? { ...comment, isLiked: !comment.isLiked }
        : comment
    );
    changeFeed({
      ...feedprops,
      comments: adjustedCommentList,
    });
  };

  const commentRemove = commentNo => {
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
            <a className="userName" href="#">
              {userId}
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
        <img alt="feed-image" src={imageContent} />
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
                    {userId}
                  </a>
                  &nbsp;<span>{contents}</span>{' '}
                </label>
              </div>
              {comments && (
                <Comments
                  comments={comments}
                  commentRemove={commentRemove}
                  commentLiked={commentLiked}
                />
              )}
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
            ref={commentInputSlot}
            onChange={commentInputChange}
          />
          <button
            className="commentInputButton"
            ref={commentInputButton}
            onClick={commentCreate}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default KilFeed;
