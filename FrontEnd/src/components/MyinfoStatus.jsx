import React from 'react'
import styled from 'styled-components'
import btn from '../styles/Button'

const MyinfoStatus = () => {
    // userContext 저장 후 실행
    // const { user } = useUser();
    // const { stress, burnout } =user;

  return (
    <InfoBox>
        <Title>나의 심리 정보</Title>
      <InfoStatus>
        <Title>나의 스트레스 상태</Title>
        <TextT>[아이콘] 20/40 점 [아이콘]중증</TextT>
        
        {/* {stress ? (
            <p>[아이콘] 20/40 점 [아이콘]중증</p>
        ) : (
            <p>정보 x</p>
        )} */}

        <Title>나의 번아웃 상태</Title>
        <TestBtn style = {btn.buttonYb}>테스트 하기</TestBtn>
        
        {/* {burnout ? (
            <p>[아이콘] 20/40 점 [아이콘]점수?</p>
        ) : (
            <TestBtn style = {btn.buttonYb}>테스트 하기</TestBtn>
        )} */}

      </InfoStatus>
    </InfoBox>
  )
}
const InfoBox = styled.div`
    width : 40%;
    border: 1px solid yellow;
    margin-left: 50px;
    padding : 10px;
    background-color: white;
`;

const InfoStatus = styled.div`
    text-align : left;
    padding-left: 10px;
    font-family : ${({ theme }) => theme.fontFamily.primary};
`;

const Title = styled.p`
    font-weight: bold;
    margin : 4px 2px 4px 2px;
`;
const TestBtn = styled.button`
    color : black;
    padding : 4px 10px;
`;

const TextT = styled.p`
    font-family : ${({ theme }) => theme.fontFamily.secondary};
    font-size: 14px;
`;
export default MyinfoStatus
