
import React from 'react';

import './HwangLoginForm.scss';
import { Link, useNavigate } from 'react-router-dom';

function HwangLoginForm(){
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };
  return(
  <div className="boxWrap">
      <h1 className="logo">Westagram</h1>
      <div className="loginWrap">
          <input className="idInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input className="passwordInput" type="text" placeholder="비밀번호"/>
          <button className="btnDefalut btnLightBlue"><Link to="/main">로그인</Link></button>
          <button onClick={goToMain}>useNavigate사용</button>
      </div>
          <p className="searchPassword"><a href="#">비밀번호를 잊으셨나요?</a></p>
  </div>
  );
}

export default HwangLoginForm;