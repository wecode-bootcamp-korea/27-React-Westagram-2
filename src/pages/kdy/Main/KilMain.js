import { React, useState, useEffect } from 'react';
import './KilMain.scss';
import Nav from '../../../components/Nav/Nav';
import KilFeed from './Feed/KilFeed';
import KilAside from './Aside/KilAside';

const KilMain = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/kdy/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, [feedList]);

  return (
    <>
      <Nav />
      <main>
        <section className="mainSection">
          <section className="feedsWrapper">
            <KilFeed feedData={feedList[0]} />
          </section>
          <KilAside />
        </section>
      </main>
    </>
  );
};

export default KilMain;
