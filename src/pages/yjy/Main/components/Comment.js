// import React, { useState } from 'react';

const Comment = props => {
  return (
    <div>
      {props.comments.map(function (comment) {
        return (
          <ul className="feedText" key={comment.id}>
            <li className="idName">{comment.userName}</li>
            <li>{comment.content}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comment;
