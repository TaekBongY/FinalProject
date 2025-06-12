import React, { useState } from 'react';
import styled from 'styled-components';
import loginBg from '../../assets/loginBgImg.jpg';
import logo from '../../assets/LoginLogo.png';
import logoText from '../../assets/LoginText.png';
import Input from '../../styles/Input';


const step1Inputs = [
  { name: 'userId', type: 'text', placeholder: '아이디' },
  { name: 'password', type: 'password', placeholder: '비밀번호' },
  { name: 'passwordCheck', type: 'password', placeholder: '비밀번호 확인' },
  { name: 'username', type: 'text', placeholder: '이름' },
  { name: 'address', type: 'text', placeholder: '주소' },
  { name: 'email', type: 'text', placeholder: '이메일' },
  { name: 'phone', type: 'text', placeholder: '전화번호' },
  
];

// 2페이지 폼을 라디오 선택값에 따라 다르게 구성
const step2InputsForTypeA = [
  { name: 'job', type: 'text', placeholder: '직업' },
  { name: 'purpose', type: 'text', placeholder: '가입 목적' },
];

const step2InputsForTypeB = [
  { name: 'company', type: 'text', placeholder: '회사명' },
  { name: 'position', type: 'text', placeholder: '직급' },
];
const SignUp = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleChange = (e, step) => {
    const { name, value } = e.target;
    if (step === 1) setFormData1(prev => ({ ...prev, [name]: value }));
    else setFormData2(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setFormStep(2);
  const handlePrev = () => setFormStep(1);

  const handleSubmit = () => {
    // axios post 두번 하거나, 백엔드에 한꺼번에 전송하는 로직 작성
    console.log('1번 폼 데이터', formData1);
    console.log('2번 폼 데이터', formData2);
  };
   return (
    <SignUpWrap>
      <ContentWrap>
        <SignUpCard>
          {/* 로고 영역 */}
          <LogoWrap>
            <LogoImg src={logo} alt="logo" />
            <img src={logoText} />
          </LogoWrap>

          {/* 입력 영역 */}
          <InputWrap>
            {step1Inputs.map((input) => (
        <React.Fragment key={input.name}> 
          {/* 왼쪽 input */}
          <InputBox
            name={input.name + '_left'}
            type={input.type}
            placeholder={input.placeholder + ' (왼쪽)'}
            value={formData1[input.name + '_left'] || ''}
            onChange={handleChange}
            variant="yellow"
          />
          {/* 빈 div (간격) */}
          <div />
          {/* 오른쪽 input */}
          <InputBox
            name={input.name + '_right'}
            type={input.type}
            placeholder={input.placeholder + ' (오른쪽)'}
            value={formData1[input.name + '_right'] || ''}
            onChange={handleChange}
            variant="yellow"
          />
        </React.Fragment>
      ))}

            
          </InputWrap>

          {/* 버튼 영역 */}
          <BtnFlex>
            {formStep === 2 && <button onClick={handlePrev}>이전</button>}
            {formStep === 1 && <button onClick={handleNext}>다음</button>}
            {formStep === 2 && <button onClick={handleSubmit}>회원가입 완료</button>}
          </BtnFlex>
        </SignUpCard>
      </ContentWrap>
    </SignUpWrap>
  );
};

const SignUpWrap = styled.div`
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
    width : 1280px;
    height: 80vh;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.67);
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.08);
    padding : 36px 12px;
`;

const SignUpCard = styled.div`
    width : 80%;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.base};
    border : 1px solid black;
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

const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 40% 10% 40%;
  row-gap: 20px;
  column-gap: 0;
  margin-top: 20px;
  width: 100%;
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
  padding: 12px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 0;
`;
const BtnFlex = styled.div`
    display: flex;
    justify-content : space-between;
    gap: 10%;
`;

export default SignUp
