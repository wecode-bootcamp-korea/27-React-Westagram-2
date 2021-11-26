import React from 'react';

function HwangReview({ name, comment }) {
  return (
    <div className="reviewList">
      <span className="reviewId">{name}</span>
      <span className="reviewContents">{comment}</span>
    </div>
  );
}

export default HwangReview;
