import React from 'react';
import './KilComments.scss';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({ comment, commentLiked, commentRemove }) => {
  return (
    <div className="comment">
      <label>
        {' '}
        <a className="userName" href="#">
          {comment.userId}
        </a>
        &nbsp;<span>{comment.contents}</span>{' '}
      </label>
      <label>
        <button
          className={'commentLikeButton ' + (comment.liked ? 'liked' : '')}
          onClick={() => commentLiked(comment.commentNo)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="commentDeleteButton"
          onClick={() => commentRemove(comment.commentNo)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </label>
    </div>
  );
};

const Comments = ({ commentList, commentLiked, commentRemove }) => {
  const commentItems = commentList.map(el => (
    <Comment
      comment={el}
      key={el.commentNo}
      commentLiked={commentLiked}
      commentRemove={commentRemove}
    />
  ));

  return <div>{commentItems}</div>;
};

export default Comments;
