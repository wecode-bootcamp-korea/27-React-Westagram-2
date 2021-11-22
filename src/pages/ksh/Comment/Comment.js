import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Comments(props) {
  return (
    <li className="commentItem">
      <span className="boldBlackName">Sang_HoOon</span>
      <span className="comment">{props.comments}</span>
      <button className="commentLikeBtn">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button className="commentDel">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
}
export default Comments;
