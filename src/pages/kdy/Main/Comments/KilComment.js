import React from 'react';
import { Link } from 'react-router-dom';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './KilComment.scss';

const Comment = ({ comment, setCommentLiked, removeComment }) => {
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
          onClick={() => setCommentLiked(comment.commentNo)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="commentDeleteButton"
          onClick={() => removeComment(comment.commentNo)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </label>
    </div>
  );
};

export default Comment;
