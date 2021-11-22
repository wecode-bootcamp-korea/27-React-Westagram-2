import { React, useState, useRef } from 'react';
import './KilLogin.scss';

const KilLogin = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const [checkId, setCheckId] = useState({ value: false });
  const [checkPw, setCheckPw] = useState({ value: false });

  const loginButton = useRef();

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    idValid();
    pwValid();
  };

  const idValid = () => {
    const regex = /[0-9a-zA-z-_.]*@[0-9a-zA-z-_.]/g;

    if (userInfo.userId.match(regex) != null) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }

    loginButton.current.disabled = !(checkId && checkPw);
  };

  const pwValid = () => {
    if (userInfo.userPw.length <= 4) {
      setCheckPw(false);
    } else {
      setCheckPw(true);
    }

    loginButton.current.disabled = !(checkId && checkPw);
  };

  return (
    <body>
      <main className="loginMain">
        <div className="loginWrapper">
          <h1 className="h1back">westagram</h1>
          <div className="formContainer">
            <form id="login">
              <div className="inputWrapper">
                <input
                  name="userId"
                  type="text"
                  placeholder="아이디"
                  id="id"
                  onChange={handleUserInput}
                />
              </div>
              <div className="inputWrapper">
                <input
                  name="userPw"
                  type="password"
                  placeholder="비밀번호"
                  id="pw"
                  onChange={handleUserInput}
                />
              </div>
              <div className="inputWrapper">
                <button id="loginButton" disabled ref={loginButton}>
                  로그인
                </button>
              </div>
              <div className="inputWrapper pwRemind">
                <a href="">비밀번호를 잊으셨나요?</a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </body>
  );
};

export default KilLogin;
