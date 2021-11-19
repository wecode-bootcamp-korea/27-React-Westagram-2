import React from 'react';
import Nav from '../../../components/Nav/Nav';

import HwangAside from './HwangAside';
import HwangFeedMain from './HwangFeedMain';

const HwangMain = () => {
  return (
    <>
      <Nav />
      <main id="main">
        <article id="article">
          <HwangFeedMain />
          <HwangAside />
        </article>
      </main>
    </>
  );
};

export default HwangMain;
