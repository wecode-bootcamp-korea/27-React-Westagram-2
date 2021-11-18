import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './KimLogin.scss';

const KimLogin = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <div className="Login">
      <p className="logo">Westagram</p>
      <form className="loginForm">
        <input
          type="text"
          className="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <br />
        <input type="password" className="password" placeholder="비밀번호" />
        <button className="loginBtn" onClick={goToMain} disabled>
          로그인
        </button>
      </form>
      <Link to="/kimmain">
        <p className="forgotPassword">비밀번호를 잊으셨나요?</p>
      </Link>
    </div>
  );
};

export default KimLogin;
