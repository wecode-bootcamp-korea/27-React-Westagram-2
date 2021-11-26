import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faEllipsisH,
  faHeart,
  faPaperPlane,
  faTruckMonster,
} from '@fortawesome/free-solid-svg-icons';

import HwangReview from './HwangReview';
import './HwangFeedMain.scss';

const HwangFeedMain = ({ userName, content, feedImg, comments }) => {
  const [reviewContentsValue, setReviewContentsValue] = useState('');
  const [postReviewContents, setPostReviewContents] = useState([]);

  const paintReview = e => {
    e.preventDefault();
    const copyArr = [...postReviewContents];
    copyArr.push(reviewContentsValue);
    setPostReviewContents(copyArr);
    setReviewContentsValue('');
  };

  useEffect(() => {
    fetch('/data/hjy/comment/commentData.json')
      .then(res => res.json())
      .then(data => {
        setPostReviewContents(data);
      });
  }, []);

  return (
    <section className="feedSection">
      <div className="feedUser">
        <div className="feedInfo">
          <span className="feedUserProfileImg">
            <Link to="#">
              <img src="images/hjy/Main/webprofile1.png" alt="webprofile1" />s
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
              <FontAwesomeIcon icon={faEllipsisH} />
            </Link>
          </span>
        </div>
      </div>
      <div className="feedContents">
        <div className="feedImg">
          <img src={feedImg} alt="feedImg" />
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
                <img src="images/hjy/Main/webprofile2.png" alt="webprofile2" />
              </Link>
            </span>
            <span className="checkLikeSummary">
              <span className="sameLikeListId">{userName}</span>님 외
              <span className="checkLikeCount">5</span>명이 좋아합니다.
            </span>
          </div>
          <div className="contents minimalContents">
            <span className="writeId">{userName}</span>
            <span className="writeContents">{content}</span>
          </div>
          <span className="moreBtn">더 보기</span>
          {comments.map(item => {
            return (
              <HwangReview
                key={item.id}
                name={item.userName}
                comment={item.content}
              />
            );
          })}
        </div>
        <form
          className="inputReviewContainer"
          method="POST"
          onSubmit={paintReview}
        >
          <input
            value={reviewContentsValue}
            className="inputReview"
            type="text"
            name="review"
            placeholder="댓글달기..."
            onChange={event => {
              setReviewContentsValue(event.target.value);
            }}
          />
          <button
            className={`loginsBtn ${
              reviewContentsValue ? 'activedBtn ' : 'defaultBtn'
            }`}
            onClick={paintReview}
            disabled={!reviewContentsValue}
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default HwangFeedMain;
