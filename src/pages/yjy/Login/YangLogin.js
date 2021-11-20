import React, { useState } from 'react';
import './YangLogin.scss';
import '../../../styles/reset.scss';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const YangLogin = () => {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPwd: '',
  });
  const [disabled, setDisabled] = useState(false); //비활성화되어있음.

  const { inputId, inputPwd } = inputs; //비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const navigate = useNavigate();

  const isValid = inputId.includes('@' && '.') && inputPwd.length >= 5;

  const onClick = e => {
    if (isValid) {
      setDisabled(true);
      navigate('/YangMain');
    }
  };
  return (
    <div>
      <div className="login">
        <div className="wrapper">
          <h1>Westagram</h1>
          <form>
            <div className="inputWrap">
              <input
                type="text"
                name="inputId"
                className="inputId"
                maxLength="75"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={onChange}
              />
              <input
                type="password"
                name="inputPwd"
                className="inputPwd"
                placeholder="비밀번호"
                onChange={onChange}
              />
            </div>
            <button
              className={isValid ? 'activeBtn' : 'unactiveBtn'}
              type="button"
              id="loginBtn"
              onClick={onClick}
              disabled={disabled}
            >
              로그인
            </button>
            <div>
              {inputId}
              {inputPwd}
            </div>
          </form>
          <div className="findWrapper">
            <a href="">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YangLogin;
