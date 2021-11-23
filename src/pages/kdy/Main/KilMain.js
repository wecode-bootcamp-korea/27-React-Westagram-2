import { React, useState, useEffect } from 'react';
import KilFeed from './Feed/KilFeed';
import KilAside from './Aside/KilAside';
import Nav from '../../../components/Nav/Nav';
import './KilMain.scss';

const KilMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedList, setFeedList] = useState([]);

  const dataFetch = async () => {
    const data = await fetch('http://localhost:3000/data/kdy/feedData.json');
    const feeds = await data.json();
    setFeedList(feeds);
  };

  useEffect(() => {
    setIsLoading(true);
    dataFetch();
    setIsLoading(false);
  }, []);

  const changeFeed = newFeed => {
    const newFeedList = feedList.map(feed =>
      feed.feedId === newFeed.feedId ? newFeed : feed
    );
    setFeedList(newFeedList);
  };

  const GenerateFeed = () => {
    return feedList.map(el => (
      <KilFeed feedprops={el} key={el.feedId} changeFeed={changeFeed} />
    ));
  };

  return (
    <div>
      {!isLoading && feedList.length > 0 && (
        <div>
          <Nav />
          <main>
            <section className="mainSection">
              <section className="feedsWrapper">
                <GenerateFeed />
              </section>
              <KilAside />
            </section>
          </main>
        </div>
      )}
    </div>
  );
};

export default KilMain;
