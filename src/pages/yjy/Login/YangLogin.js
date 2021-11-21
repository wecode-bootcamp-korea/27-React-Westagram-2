import React, { useState } from 'react';
import './YangLogin.scss';
import '../../../styles/reset.scss';
import { useNavigate } from 'react-router-dom';

const YangLogin = () => {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPwd: '',
  });
  const { inputId, inputPwd } = inputs;

  const [disabled, setDisabled] = useState(true); // 비활성화되어있음

  //const inputId = inputs.inputId;
  //const inputPwd = inputs.inputPwd;

  const onChange = e => {
    const { value, name } = e.target;
    //const value = e.target.value;
    //const name = e.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const isValid = inputId.includes('@' && '.') && inputPwd.length >= 5;

  const onClick = e => {
    if (isValid) {
      setDisabled(false);
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
