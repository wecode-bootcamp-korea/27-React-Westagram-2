import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import '../Main/HwangFeedMain.scss';

const HwangFeedMain = () => {
  return (
    <section id="feedSection" className="section">
      <div className="feedUser">
        <div className="feedInfo">
          <span className="feedUserProfileImg">
            <Link to="#">
              <img src="/images/webprofile1.png" alt="webprofile1" />
            </Link>
          </span>
          <span className="feedUserProfileName">
            <Link to="#">
              <b>dududweb</b>
            </Link>
          </span>
        </div>
        <div className="feedUserMenu">
          <span className="menuBtn">
            <Link to="#">
              <i className="fas fa-ellipsis-h"></i>
            </Link>
          </span>
        </div>
      </div>
      <div className="feedContents">
        <div className="feedImg">
          <img src="/images/feedimg.png" alt="feedImg" />
        </div>
        <div className="interaction">
          <div className="reactionMenu">
            <span className="likeBtn">
              <Link to="#">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </span>
            <span className="reviewBtn">
              <Link to="#">
                <FontAwesomeIcon icon={faComment} />
              </Link>
            </span>
            <span className="shareBtn">
              <Link to="#">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Link>
            </span>
          </div>
          <div className="keepMenu">
            <span className="keepBtn">
              <Link to="#">
                <FontAwesomeIcon icon={faBookmark} />
              </Link>
            </span>
          </div>
        </div>
        <div className="reactionContentsWrap">
          <div className="checkLike">
            <span className="checkLikeIdProfile1">
              <Link to="#">
                <img src="/images/webprofile2.png" alt="" />
              </Link>
            </span>
            <span className="checkLikeSummary">
              <span className="sameLikeListId">dududweb</span>님 외
              <span className="checkLikeCount">5</span>명이 좋아합니다.
            </span>
          </div>
          <div className="contents minimalContents">
            <span className="writeId">
              <b>dududweb</b>
            </span>
            <span className="writeContents">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>
          <span className="moreBtn">더 보기</span>
          <div className="reviewList"></div>
        </div>
        <form className="inputReviewContainer" action="main.html" method="POST">
          <input
            className="inputReview"
            type="text"
            placeholder="댓글달기..."
          />
          <button className="reviewUploadBtn">게시</button>
        </form>
      </div>
    </section>
  );
};

export default HwangFeedMain;
