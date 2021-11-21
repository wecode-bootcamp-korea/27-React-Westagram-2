import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';

const Button = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="loginButton"
        type="button"
        onClick={() => navigate('/YangMain')}
      >
        로그인
      </button>
      y
    </div>
  );
};

export default Button;
