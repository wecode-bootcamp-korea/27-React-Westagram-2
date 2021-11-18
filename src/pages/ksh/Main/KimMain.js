import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faPaperPlane,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import './KimMain.scss';

const KimMain = () => {
  return (
    <div className="Main">
      <main>
        <div className="mainWrap">
          <div className="feeds">
            <article>
              <div className="feedHeader">
                <div className="profile">
                  <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  <span>Sang_HoOon</span>
                </div>
                <div className="moreBtn">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
              <div className="feedImg">
                <img src="/images/ksh/img1.jpg" alt="" />
              </div>
              <div className="likesAndComments">
                <div className="icons">
                  <ul>
                    <li>
                      <button className="likeBtn">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faComment} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </li>
                  </ul>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className="likes">
                  <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  <span>
                    <span className="boldBlackName">Sang_HoOon</span>님
                    <span className="boldBlackName">외 10명</span>이 좋아합니다
                  </span>
                </div>
                <div className="mainText">
                  <span className="boldBlackName">Sang_HoOon</span>
                  <span className="content">
                    adfsasdfasdfasdfasdLorem ipsum dolor
                  </span>
                </div>
                <ul className="commentBox">
                  <li className="commentItem">
                    <span className="boldBlackName">Sang_HoOon</span>
                    <span className="comment">Lorem ipsum dolor </span>
                    <button className="commentLikeBtn">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="commentDel">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </li>
                </ul>
                <span className="smallGrayText">42분 전</span>
              </div>
              <div className="commentInputBox">
                <input
                  type="text"
                  className="commentInput"
                  placeholder="댓글 달기..."
                />
                <button className="submitBtn">게시</button>
              </div>
            </article>
          </div>
          <div className="fixRight">
            <div className="mainRight">
              <div className="rightProfileWrap">
                <div className="rightProfile">
                  <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  <span className="boldBlackName">Sang_HoOon</span>
                </div>
                <span className="blueText">전환</span>
              </div>
              <div className="storyBox">
                <div className="asideHead">
                  <span className="asideH2">스토리</span>
                  <span className="boldBlackName">모두 보기</span>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
                <div className="storyItem">
                  <div className="storyImg">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                  </div>
                  <div className="nameAndTime">
                    <p className="boldBlackName">Sang_HoOon</p>
                    <p className="smallGrayText">16분 전</p>
                  </div>
                </div>
              </div>
              <div className="recommendBox">
                <div className="asideHead">
                  <span className="asideH2">회원님을 위한 추천</span>
                  <span className="boldBlackName">모두 보기</span>
                </div>
                <div className="recommendItem">
                  <div className="imgAndInfo">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                    <div className="nameAndRecommend">
                      <p className="boldBlackName">john_s_area</p>
                      <p className="smallGrayText">회원님을 팔로우합니다</p>
                    </div>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
                <div className="recommendItem">
                  <div className="imgAndInfo">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                    <div className="nameAndRecommend">
                      <p className="boldBlackName">yankiii3939</p>
                      <p className="smallGrayText">
                        john_s_area님이 팔로우합니다
                      </p>
                    </div>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
                <div className="recommendItem">
                  <div className="imgAndInfo">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                    <div className="nameAndRecommend">
                      <p className="boldBlackName">wecode27</p>
                      <p className="smallGrayText">회원님을 팔로우합니다</p>
                    </div>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
                <div className="recommendItem">
                  <div className="imgAndInfo">
                    <img src="/images/ksh/PumpkinCat.PNG" alt="" />
                    <div className="nameAndRecommend">
                      <p className="boldBlackName">Suon34</p>
                      <p className="smallGrayText">
                        dodo_00님 외 4명이 팔로우합니다
                      </p>
                    </div>
                  </div>
                  <button className="followBtn">팔로우</button>
                </div>
              </div>
              <br />
              <p className="smallGrayText">
                소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 ·
                <br />
                약관 · 위치 · 인기 계정 · 해시태그 · 언어
              </p>
              <br />
              <p className="smallGrayText">© 2021 INSTAGRAM FROM META</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KimMain;
