import React from 'react';
import './KilMain.scss';
import Nav from '../../../components/Nav/Nav';
import KilFeed from './Feed/KilFeed';
import KilAside from './Aside/KilAside';

const KilMain = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="mainSection">
          <section className="feedsWrapper">
            <KilFeed />
          </section>
          <KilAside />
        </section>
      </main>
    </>
  );
};

export default KilMain;
