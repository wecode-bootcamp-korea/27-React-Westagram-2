import React from 'react';

import HwangAside from './HwangAside';
import HwangFeedMain from './HwangFeedMain';

const HwangMain = () => {
  return (
    <main id="main">
      <article id="article">
        <HwangFeedMain />
        <HwangAside />
      </article>
    </main>
  );
};

export default HwangMain;
