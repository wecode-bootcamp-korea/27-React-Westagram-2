import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
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
  // const goToMain = () => {
  //   isActive
  //     ? navigate('/hwangmain')
  //     : alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
  // };
  const login = () => {
    fetch('http://10.58.6.3:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
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
          type="button"
          className={isActive ? 'activeBtn' : 'unActiveBtn'}
          onClick={login}
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
