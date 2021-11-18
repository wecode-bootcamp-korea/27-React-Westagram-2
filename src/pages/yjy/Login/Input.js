import React, { useState } from 'react';
import './Input.scss';

function Input() {
  const [userId, setId] = useState('');
  const [userPwd, setPwd] = useState('');

  return (
    <>
      <input
        type="text"
        className="inputId"
        maxlength="75"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={e => setId(e.target.value)}
      />
      <input
        type="password"
        className="inputPwd"
        placeholder="비밀번호"
        onChange={e => setPwd(e.target.value)}
      />
    </>
  );
}

export default Input;
