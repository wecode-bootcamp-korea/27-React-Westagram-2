import React from 'react';
import Feeds from './Feeds';
import Aside from './Aside';
// import Nav from '../../../../../westagram-react/src/components/Nav';

// import '../../../styles/variables.scss';
import './YangMain.scss';

const YangMain = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="main">
        <div className="wrapper">
          <div className="feeds">
            <Feeds />
          </div>
          <Aside />
        </div>
      </div>
    </>
  );
};

export default YangMain;
