import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './HwangLoginForm.scss';

const HwangLoginForm = () => {
  //이메일, 비밀번호 확인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleIdInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };
  //유효성 검사
  const [isActive, setIsActive] = useState(false);
  const isPassedLogin = () => {
    return email.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };
  //인증통과시 메인화면 이동
  const navigate = useNavigate();
  const goToMain = () => {
    isActive === true ? navigate('/hwangmain') : navigate('hwanglogin');
  };
  return (
    <div className="boxWrap">
      <h1 className="logo">Westagram</h1>
      <div className="loginWrap">
        <input
          onChange={handleIdInput}
          onKeyUp={isPassedLogin}
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePasswordInput}
          onKeyUp={isPassedLogin}
          className="password"
          type="text"
          placeholder="비밀번호"
        />
        <button
          type="submit"
          className={isActive ? 'activeBtn' : 'unactiveBtn'}
          onClick={goToMain}
          disabled={email === '' || password === '' ? true : false}
          // disabled={!email || !password}
        >
          로그인
        </button>
      </div>
      <p className="searchPassword">
        <Link to="/hwangmain">비밀번호를 잊으셨나요?</Link>
      </p>
    </div>
  );
};

export default HwangLoginForm;
