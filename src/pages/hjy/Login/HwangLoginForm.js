import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './HwangLoginForm.scss';
const HwangLoginForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValues;
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const [isActive, setIsActive] = useState(false);
  const isPassedLogin = () => {
    const isLoginValid = email.includes('@') && password.length > 4;
    return isLoginValid ? setIsActive(true) : setIsActive(false);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    isActive
      ? navigate('/hwangmain')
      : alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
  };
  return (
    <div className="boxWrap">
      <h1 className="logo">Westagram</h1>
      <form className="loginWrap">
        <input
          onKeyUp={isPassedLogin}
          onChange={handleInput}
          className="idInput"
          type="text"
          name="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onKeyUp={isPassedLogin}
          onChange={handleInput}
          className="password"
          type="password"
          name="password"
          placeholder="비밀번호"
        />
        <button
          type="submit"
          className={isActive ? 'activeBtn' : 'unActiveBtn'}
          onClick={goToMain}
          disabled={!isActive}
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
