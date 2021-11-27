import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import './YangLogin.scss';

const YangLogin = () => {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPwd: '',
  });
  const { inputId, inputPwd } = inputs;
  const navigate = useNavigate();

  const onChangeLoginInput = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const isLoginInputValid =
    inputId.includes('@' && '.') && inputPwd.length >= 5;

  const loginBtnClick = e => {
    if (isLoginInputValid) {
      fetch('http://10.58.3.8:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: inputId,
          password: inputPwd,
        }),
      })
        .then(response => response.json())
        .then(result => console.log('결과: ', result));
      navigate('/YangMain');
    }
    // fetch('http://10.58.3.8:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: inputId,
    //     password: inputPwd,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
    // navigate('/YangMain');
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1>Westagram</h1>
        <form className="loginForm">
          <div className="inputWrap">
            <input
              type="text"
              name="inputId"
              className="inputId"
              maxLength="75"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={onChangeLoginInput}
            />
            <input
              type="password"
              name="inputPwd"
              className="inputPwd"
              placeholder="비밀번호"
              onChange={onChangeLoginInput}
            />
          </div>
          <button
            className={`loginButton ${
              isLoginInputValid ? 'activated' : 'deactivated'
            }`}
            type="button"
            onClick={loginBtnClick}
          >
            로그인
          </button>
        </form>
        <div className="findWrapper">
          <Link to="">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default YangLogin;
