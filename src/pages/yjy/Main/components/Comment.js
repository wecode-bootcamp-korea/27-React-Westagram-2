import React, { useState } from 'react';

const Comment = props => {
  return (
    <div>
      {props.댓글.map(function (글, idx) {
        return (
          <ul className="feedText" key={idx}>
            <li className="idName">j00_00</li>
            <li>{글}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comment;
