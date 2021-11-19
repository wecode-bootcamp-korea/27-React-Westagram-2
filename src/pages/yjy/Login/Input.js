import React, { useState } from 'react';
import './Input.scss';

function Input() {
  const [userId, setId] = useState('');
  const [userPwd, setPwd] = useState('');

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwdInput = e => {
    setPwd(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="inputId"
        maxlength="75"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
      />
      <input
        type="password"
        className="inputPwd"
        placeholder="비밀번호"
        onChange={handlePwdInput}
      />
    </>
  );
}

export default Input;
