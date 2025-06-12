import React from 'react'
import styled, { css } from 'styled-components';
import loginBg from '../../assets/loginBgImg.jpg';
import logo from '../../assets/LoginLogo.png';
import logoText from '../../assets/LoginText.png';
import Input from '../../styles/Input';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
const navgigate = useNavigate();

const hangleLogin = () => {
    navgigate('/login/singIn');
}
  return <LoginWrap>
    <ContentWrap>
        <LoginCard>
            <LogoWrap>
                <LogoImg src={logo} alt="logo" />
                <img src={logoText}/>
            </LogoWrap>
                <InputBox variant="orange" type="text" placeholder="아이디 입력" />
                <InputBox variant="yellow" type="password" placeholder="비밀번호 입력" />
            <BtnFlex>
                <SignInBtn type='button' onClick={hangleLogin}>로그인</SignInBtn>
                <SignUpLink to='/signUp' type='button'>회원가입</SignUpLink>
            </BtnFlex>
            <div>
                <br />구글 로그인 영역
            </div>
        </LoginCard>
    </ContentWrap>
    </LoginWrap>;
}
const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginBg});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #333;
`;

const ContentWrap = styled.div`
    width : 800px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.67);
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.08);
`;

const LoginCard = styled.div`
    width : 66%;
    height: 66%;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.base};
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  gap: ${({ theme }) => theme.spacing.s4};
  margin : 20px 10px;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

const InputBox = styled.input`
    ${({ variant }) => {
        switch (variant) {
        case 'yellow':
            return Input.InputYellow;
        case 'gray':
            return Input.InputGray;
        case 'orange':
            return Input.InputOrange;
        default:
            return '';
        }
    }};
    width: 100%;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin : 16px 0;
    padding : 12px;
`;
const BtnFlex = styled.div`
    display: flex;
    justify-content : space-between;
    gap: 10%;
`;

const CommonLoginPage = css`
  width: 50%;
  color: black;
  border: 3px solid black;
  border-radius: 50px;
  margin: 12px 0px;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const SignInBtn = styled.button`
    ${CommonLoginPage}
`;

const SignUpLink = styled(Link)`
    ${CommonLoginPage}
`;
export default Login
