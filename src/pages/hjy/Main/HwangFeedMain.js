import React from 'react'
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import '../Main/HwangFeedMain.scss';



function HwangFeedMain(){
  return (
    <section id="feed-section" className="section">
    <div className="feed-user">
      <div className="feed-info">
        <span className="feed-user-profile-img"><Link to="#"><img src="/images/webprofile1.png" alt="webprofile1"/></Link></span>
        <span className="feed-user-profile-name"><Link to="#"><b>dududweb</b></Link></span>
      </div>
      <div className="feed-user-menu">
        <span className="menu-btn"><Link to="#"><i className="fas fa-ellipsis-h"></i></Link></span>
      </div>
    </div>
    <div className="feed-contents">
      <div className="feed-img"><img src="/images/feedimg.png" alt="feed-img"/></div>
      <div className="interaction">
        <div className="reaction-menu">
          <span className="like-btn"><Link to="#"><FontAwesomeIcon icon={faHeart}/></Link></span>
          <span className="review-btn"><Link to="#"><FontAwesomeIcon icon={faComment}/></Link></span>
          <span className="share-btn"><Link to="#"><FontAwesomeIcon icon={faPaperPlane}/></Link></span>
        </div>
        <div className="keep-menu">
          <span className="keep-btn"><Link to="#"><FontAwesomeIcon icon={faBookmark}/></Link></span>
        </div>
      </div> 
       <div className="reaction-contents-wrap">
        <div className="check-like">
          <span className="check-like-id-profile-1">
            <Link to="#"><img src="/images/webprofile2.png" alt=""/></Link>
          </span>
          <span className="check-like-summary">
            <span className="same-like-list-id">dududweb</span>님 외
            <span className="checkLikeCount">5</span>명이 좋아합니다.
          </span>
        </div>
        <div className="contents minimal-contents">
          <span className="write-id"><b>dududweb</b></span>
          <span className="write-contents">
            Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took 
             a galley of type and scrambled it to make a type specimen book.
          </span>
        </div>
        <span className="more-btn">더 보기</span>
          <div className="review-list">
          </div>
      </div>
        <form className="input-review-container" action="main.html" method="POST">
          <input className="input-review" type="text" placeholder="댓글달기..." />
          <button className="review-upload-btn">게시</button>
        </form>
    </div>
  </section>
  );
}

export default HwangFeedMain;