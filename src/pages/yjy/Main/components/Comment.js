import React, { useState } from 'react';

const Comment = props => {
  return (
    <div>
      {props.댓글.map(function (글) {
        return (
          <ul className="feedText">
            <li className="idName">{글.userName}</li>
            <li>{글.content}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comment;
