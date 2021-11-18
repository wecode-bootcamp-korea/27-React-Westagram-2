import React, { useState } from 'react';
import './Feeds.scss';

function Feeds() {
  return (
    <>
      <div className="feedsBox">
        <div className="feedsHead">
          <div className="feedsHeadLeft">
            <div className="userHead"></div>
            <div className="userHeadId">j00_00</div>
          </div>
          <div className="feedsHeadRight"></div>
        </div>
        <div className="feedsImg">
          <img src="/images/yjy/cherry.png" alt="" />
        </div>
        <div className="feedContent">
          <div className="img">
            <div className="feedIcon">
              <img src="/images/yjy/likes.png" alt="" />
              <img src="/images/yjy/heart33.png" alt="" />
              <img src="/images/yjy/share.png" alt="" />
            </div>
            <div>
              <img src="/images/yjy/bookmark.png" alt="" />
            </div>
          </div>
          <div className="feedLikes">좋아요 188개</div>
          <ul className="feedText">
            <li className="idName">j00_00</li>
            <li>너무 추워</li>
          </ul>
          <form className="feedForm">
            <ul className="commentSpace"></ul>
            <div className="commentBox">
              <input
                className="comment"
                type="text"
                placeholder="댓글달기..."
                onChange={e => {
                  console.log(e);
                }}
              />
              <button className="commentBtn" type="submit">
                게시
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feeds;
