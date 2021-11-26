import React, { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
import HwangAside from './Aside/HwangAside';
import HwangFeedMain from './Feed/HwangFeedMain';

const HwangMain = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch('/data/hjy/comment/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <main className="main">
        <article className="article">
          <div className="sectionWrap">
            {feed.map(data => {
              return (
                <HwangFeedMain
                  key={data.id}
                  userName={data.userName}
                  content={data.content}
                  feedImg={data.feedImg}
                  comments={data.comments}
                />
              );
            })}
          </div>
          <HwangAside />
        </article>
      </main>
    </>
  );
};

export default HwangMain;
