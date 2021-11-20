import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        {/* <Link className="link" to="/main"> */}
        로그인
        {/* </Link> */}
      </button>
    </div>
  );
};

export default Button;
