import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './KilLogin.scss';

const KilLogin = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const [checkInput, setCheckInput] = useState(true);

  const idInput = useRef();
  const pwInput = useRef();

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

    inputValid();
  };

  const onSignUp = async () => {
    const data = await fetch('http://10.58.3.62:8000/users/signup', {
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
    const data = await fetch('http://10.58.3.62:8000/users/signin', {
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

    idInput.current.value = '';
    pwInput.current.value = '';
    setCheckInput(true);
  };

  const inputValid = () => {
    const regex = /[0-9a-zA-z-_.]*@[0-9a-zA-z-_.]/g;

    if (userInfo.userId.match(regex) != null && userInfo.userPw.length > 4) {
      setCheckInput(false);
    } else {
      setCheckInput(true);
    }
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
                  ref={idInput}
                  onChange={handleUserInput}
                />
              </div>
              <div className="inputWrapper">
                <input
                  name="userPw"
                  type="password"
                  placeholder="비밀번호"
                  id="pw"
                  ref={pwInput}
                  onChange={handleUserInput}
                />
              </div>
              <div className="inputWrapper">
                <button
                  id="loginButton"
                  disabled={checkInput}
                  onClick={onSignIn}
                >
                  로그인
                </button>
              </div>
              <div className="inputWrapper pwRemind" onClick={onSignUp}>
                <Link to="#">회원가입</Link>
              </div>
              <div className="inputWrapper pwRemind">
                <Link to="#">비밀번호를 잊으셨나요?</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </body>
  );
};

export default KilLogin;
