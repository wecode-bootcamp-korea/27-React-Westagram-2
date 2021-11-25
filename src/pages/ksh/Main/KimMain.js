import { useState, useEffect, React } from 'react';
import Nav from '../../../components/Nav/Nav.js';
import Feed from '../Feed/Feed.js';

import './KimMain.scss';

const KimMain = () => {
  const [mockFeedList, setMockFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ksh/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMockFeedList(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <div className="Main">
        <main>
          <div className="mainWrap">
            <div className="feeds">
              {mockFeedList.map((el, key) => {
                return (
                  <Feed
                    key={key}
                    feedId={el.feedId}
                    userName={el.userName}
                    feedImg={el.feedImg}
                    content={el.content}
                  />
                );
              })}
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
                  소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
                  ·
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
    </>
  );
};

export default KimMain;
