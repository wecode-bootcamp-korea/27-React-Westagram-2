import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './KimLogin.scss';

const KimLogin = () => {
  const [memberInput, setMemberInput] = useState({
    id: '',
    pwd: '',
    isActive: false,
  });

  function handleMemberInput(e) {
    setMemberInput({ ...memberInput, [e.target.name]: e.target.value });
  }

  function activeBtn() {
    memberInput.id.includes('@') && memberInput.pwd.length >= 5
      ? setMemberInput({ ...memberInput, isActive: true })
      : setMemberInput({ ...memberInput, isActive: false });
  }

  return (
    <div className="Login">
      <p className="logo">Westagram</p>
      <form
        className="loginForm"
        onKeyUp={activeBtn}
        onChange={handleMemberInput}
      >
        <input
          type="text"
          className="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="id"
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="비밀번호"
          name="pwd"
        />
        <button
          className={
            'loginBtn ' + (memberInput.isActive ? 'active' : 'disabled')
          }
          disabled={!memberInput.isActive}
        >
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
