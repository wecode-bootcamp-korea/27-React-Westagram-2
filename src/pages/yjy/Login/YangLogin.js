import React from 'react';
import './YangLogin.scss';
import '../../../styles/reset.scss';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const YangLogin = () => {
  return (
    <div>
      <div className="login">
        <div className="wrapper">
          <h1>Westagram</h1>
          <form>
            <div className="inputWrap">
              <Input />
            </div>
            <Button />
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
