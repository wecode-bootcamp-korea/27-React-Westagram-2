import React from 'react';
function HwangReview({ item, i }) {
  return (
    <div className="reviewList">
      <span className="reviewId">fix-id</span>
      <span className="reviewContents">{item}</span>
    </div>
  );
}

export default HwangReview;
