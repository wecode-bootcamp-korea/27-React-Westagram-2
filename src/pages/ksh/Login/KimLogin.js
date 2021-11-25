import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './KimLogin.scss';

const KimLogin = () => {
  const [memberInput, setMemberInput] = useState({
    id: '',
    pwd: '',
    isActive: false,
  });

  const { id, pwd, isActive } = memberInput;

  function handleMemberInput(e) {
    const { name, value } = e.target;
    setMemberInput({ ...memberInput, [name]: value });
  }

  function activeBtn() {
    memberInput.id.includes('@') && memberInput.pwd.length >= 5
      ? setMemberInput({ ...memberInput, isActive: true })
      : setMemberInput({ ...memberInput, isActive: false });
  }

  function handleLogin() {
    fetch('http://10.58.0.32:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pwd,
      }),
    }).then(response => response.json());
    // .then(message => console.log('결과: ', message));
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
          className={'loginBtn ' + (isActive ? 'active' : 'disabled')}
          disabled={!isActive}
          onClick={handleLogin}
          type="button"
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
