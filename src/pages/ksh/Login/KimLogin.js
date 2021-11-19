import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './KimLogin.scss';

const KimLogin = () => {
  const [memberInput, setMemberInput] = useState({
    id: '',
    pwd: '',
  });

  const handleMemberInput = e => {
    const { name, value } = e.target;
    setMemberInput({ ...memberInput, [name]: value });
  };

  return (
    <div className="Login">
      <p className="logo">Westagram</p>
      <form className="loginForm">
        <input
          type="text"
          className="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleMemberInput}
          name="id"
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="비밀번호"
          onChange={handleMemberInput}
          name="pwd"
        />
        <button className="loginBtn" disabled>
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
