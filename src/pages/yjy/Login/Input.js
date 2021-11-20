import React, { useState } from 'react';
import './Input.scss';
import Button from './Button';

function Input() {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPwd: '',
  });

  const { inputId, inputPwd } = inputs; //비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  return (
    <>
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
      <div>
        {inputId}
        {inputPwd}
      </div>
    </>
  );
}

export default Input;
