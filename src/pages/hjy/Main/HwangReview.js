import React, { useState } from 'react';

const HwangReview = props => {
  return (
    <div className="reviewList">
      <span className="reviewId">{props.reviewIdValue}</span>
      <span className="reviewContents">{props.item}</span>
    </div>
  );
};

export default HwangReview;
