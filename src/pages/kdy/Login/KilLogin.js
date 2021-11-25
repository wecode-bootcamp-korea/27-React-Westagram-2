import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ADDRESS } from '../apiData';
import './KilLogin.scss';

const KilLogin = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });

  const emailValidRegex = /[0-9a-zA-z-_.]*@[0-9a-zA-z-_.]/g;
  const isEmailValid = !!userInfo.userId.match(emailValidRegex);
  const isPasswordValid = userInfo.userPw.length > 4;

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onSignUp = async () => {
    const data = await fetch(API_ADDRESS.SIGN_UP, {
      method: 'POST',
      body: JSON.stringify({
        name: 'wecode111',
        email: 'wecode27th@naver.com',
        password: 'Kk@950629',
        phone_number: '01012345678',
      }),
    });
    const res = await data.json();
    await console.log('결과 : ', res);
  };

  const onSignIn = async e => {
    e.preventDefault();

    const { userId, userPw } = userInfo;
    const data = await fetch(API_ADDRESS.SIGN_IN, {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    });
    const res = await data.json();
    await console.log('결과 : ', res);

    setUserInfo({
      userId: '',
      userPw: '',
    });
  };

  return (
    <main className="loginMain">
      <div className="loginWrapper">
        <h1 className="h1Logo">westagram</h1>
        <div className="formContainer">
          <form id="login">
            <div className="inputWrapper">
              <input
                className="userInfoInput"
                value={userInfo.userId}
                name="userId"
                type="text"
                placeholder="아이디"
                id="id"
                onChange={handleUserInput}
              />
            </div>
            <div className="inputWrapper">
              <input
                className="userInfoInput"
                value={userInfo.userPw}
                name="userPw"
                type="password"
                placeholder="비밀번호"
                id="pw"
                onChange={handleUserInput}
              />
            </div>
            <div className="inputWrapper">
              <button
                id="loginButton"
                className="loginButton"
                disabled={!(isEmailValid && isPasswordValid)}
                onClick={onSignIn}
              >
                로그인
              </button>
            </div>
            <div className="inputWrapper signUp" onClick={onSignUp}>
              <Link className="textButton" to="#">
                회원가입
              </Link>
            </div>
            <div className="inputWrapper pwRemind">
              <Link className="textButton" to="#">
                비밀번호를 잊으셨나요?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default KilLogin;
