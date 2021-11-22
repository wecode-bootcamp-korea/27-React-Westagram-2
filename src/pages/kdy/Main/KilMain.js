import { React, useState, useEffect } from 'react';
import './KilMain.scss';
import Nav from '../../../components/Nav/Nav';
import KilFeed from './Feed/KilFeed';
import KilAside from './Aside/KilAside';

const KilMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedList, setFeedList] = useState([]);

  const dataFetch = async () => {
    const data = await fetch('/data/kdy/feedData.json');
    const feeds = await data.json();
    setFeedList(feeds);
  };

  useEffect(() => {
    setIsLoading(true);
    dataFetch();
    setIsLoading(false);
  }, []);

  const GenerateFeed = () => {
    return feedList.map(el => <KilFeed feedprops={el} key={el.feedId} />);
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
