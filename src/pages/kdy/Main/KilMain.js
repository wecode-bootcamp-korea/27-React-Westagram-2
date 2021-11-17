import React from 'react';
import './KilMain.scss';
import Nav from '../../../components/Nav/Nav';
import KilFeed from './Feed/KilFeed';

const KilMain = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="main-section">
          <section className="feeds-wrapper">
            <KilFeed />
          </section>
        </section>
      </main>
    </>
  );
};

export default KilMain;
