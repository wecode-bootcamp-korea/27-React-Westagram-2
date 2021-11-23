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
//map 함수로 구현
// - 사용자가 댓글 입력 후 enter 를 누르거나 오른쪽 버튼 클릭 시 댓글이 추가 되도록 구현해주세요.
// - 댓글 기능을 구현하기 위해서는 배열 데이터 타입을 활용해야 합니다.
