import React from 'react';
import './KilComments.scss';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <label>
        {' '}
        <a className="user-name" href="#">
          {comment.userId}
        </a>
        &nbsp;<span>{comment.contents}</span>{' '}
      </label>
      <label>
        <button className="comment-like-button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="comment-delete-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </label>
    </div>
  );
};

const Comments = ({ commentList }) => {
  const commentItems = commentList.map(el => (
    <Comment comment={el} key={el.commentNo} />
  ));

  return (
    <div>
      {commentList[0].id}
      {commentItems}
    </div>
  );
};

export default Comments;
