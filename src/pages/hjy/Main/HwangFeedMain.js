import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faEgg,
  faEllipsisH,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import HwangReview from './HwangReview';
import './HwangFeedMain.scss';

const HwangFeedMain = () => {
  //리뷰 id, 글 인풋 값
  const [reviewIdValue, setReviewIdValue] = useState('Fix-Id');
  const [reviewContentsValue, setReviewContentsValue] = useState('');
  //리뷰 콘텐츠 배열 저장소
  const [postReviewContents, setPostReviewContents] = useState([]);
  //리뷰 유효성 검사
  const [isValied, setIsValied] = useState(false);
  const paintReview = e => {
    e.preventDefault();
    const copyArr = [...postReviewContents];
    copyArr.push(reviewContentsValue);
    setPostReviewContents(copyArr);
    setReviewContentsValue('');
  };
  //리뷰 인풋 리셋
  const reset = () => {
    setReviewContentsValue('');
  };
  return (
    <section id="feedSection" className="section">
      <div className="feedUser">
        <div className="feedInfo">
          <span className="feedUserProfileImg">
            <Link to="#">
              <img src="images/hjy/Main/webprofile1.png" alt="webprofile1" />
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
          <img src="images/hjy/Main/feedimg.png" alt="feedImg" />
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
                <img src="images/hjy/Main/webprofile2.png" alt="" />
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
          {postReviewContents.map((item, i) => {
            return (
              <HwangReview reviewIdValue={reviewIdValue} item={item} key={i} />
            );
          })}
        </div>
        <form className="inputReviewContainer" method="POST">
          <input
            value={reviewContentsValue}
            className="inputReview"
            type="text"
            placeholder="댓글달기..."
            onChange={event => {
              setReviewContentsValue(event.target.value);
            }}
            onKeyUp={event => {
              event.target.value.length > 0
                ? setIsValied(true)
                : setIsValied(false);
            }}
          />
          <button
            className={
              isValied === true ? 'reviewUploadBtnActive' : 'reviewUploadBtn'
            }
            onClick={paintReview}
            disabled={isValied ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default HwangFeedMain;
