import React from 'react';
import { Link } from 'react-router-dom';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './KilComments.scss';

const Comment = ({ comment, commentLiked, commentRemove }) => {
  return (
    <div className="comment">
      <label>
        {' '}
        <Link className="userName" to="#">
          {comment.userId}
        </Link>
        &nbsp;<span>{comment.contents}</span>{' '}
      </label>
      <label>
        <button
          className={'commentLikeButton ' + (comment.isLiked ? 'liked' : '')}
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

const Comments = ({ comments, commentLiked, commentRemove }) => {
  const commentItems = comments.map(el => (
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
