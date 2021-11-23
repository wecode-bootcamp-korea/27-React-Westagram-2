import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './YangLogin.scss';
import '../../../styles/reset.scss';

const YangLogin = () => {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPwd: '',
  });
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { inputId, inputPwd } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
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
              className={isValid ? 'activated' : 'deactivated'}
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
            <Link to="">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YangLogin;
