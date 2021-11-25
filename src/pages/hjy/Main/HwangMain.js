import React, { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
import HwangAside from './HwangAside';
import HwangFeedMain from './HwangFeedMain';

const HwangMain = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/hjy/comment/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <main id="main">
        <article id="article">
          <div className="sectionWrap">
            {feed.map(data => {
              return (
                <HwangFeedMain
                  key={data.id}
                  userName={data.userName}
                  content={data.content}
                  feedImg={data.feedImg}
                  comment={data.comment}
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
