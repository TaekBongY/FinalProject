import React from 'react';
import { buttonLogin, buttonYb, buttonBorder, buttonWhite, buttonDetail } from '../styles/Button.js';
const Button = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <button style={buttonLogin}>로그인</button>
      {/* <button style={buttonYb}>YB</button> */}
      {/* <button style={buttonBorder}>Border</button> */}
      {/* <button style={buttonWhite}>White</button> */}
      {/* <button style={buttonDetail}>상세보기</button> */}
    </div>
  );
};

export default Button;
