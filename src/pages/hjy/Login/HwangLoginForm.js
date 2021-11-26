import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../config';

import './HwangLoginForm.scss';

const HwangLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleIdInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  const isLoginActiveButton = email.includes('@') && password.length > 4;
  const isPassedLogin = () => {
    return !isLoginActiveButton;
  };

  const login = () => {
    fetch(API.SIGN_IN, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        account: '011',
        name: '황주영',
        phone: '010',
      }),
    })
      .then(res => res.json())
      .then(result =>
        result.token
          ? navigate('/hwangmain')
          : alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.')
      );
  };

  return (
    <div className="hwangLoignWrap">
      <h1 className="logo">Westagram</h1>
      <form className="loginWrap" onKeyUp={isPassedLogin}>
        <input
          className="idInput"
          type="text"
          name="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handlePasswordInput}
        />
        <button
          type="button"
          className={`loginDefaultButton ${
            isLoginActiveButton ? 'activeButton' : 'unActiveButton'
          }`}
          onClick={login}
          disabled={!isLoginActiveButton}
        >
          로그인
        </button>
      </form>
      <p className="searchPassword">
        <Link to="/hwangmain">비밀번호를 잊으셨나요?</Link>
      </p>
    </div>
  );
};

export default HwangLoginForm;
