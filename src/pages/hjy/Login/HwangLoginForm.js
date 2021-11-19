import React, { useState } from 'react';

import './HwangLoginForm.scss';
import { Link, useNavigate } from 'react-router-dom';

const HwangLoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [pw, setPw] = useState('');
  const handleIdInput = event => {
    setLoginId(event.target.value);
  };
  const handlePwInput = evnet => {
    setPw(evnet.target.value);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };
  return (
    <div className="boxWrap">
      <h1 className="logo">Westagram</h1>
      <div className="loginWrap">
        <input
          onChange={handleIdInput}
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePwInput}
          className="passwordInput"
          type="text"
          placeholder="비밀번호"
        />
        <button className="btnDefault btnLightBlue">
          <Link to="/hwangmain">로그인</Link>
        </button>
      </div>
      <p className="searchPassword">
        <Link to="/hwangmain">비밀번호를 잊으셨나요?</Link>
      </p>
    </div>
  );
};

export default HwangLoginForm;
