import React from 'react'
import styled from 'styled-components'
import SearchBtn from '../assets/SearchBtn.png'
const SearchBar = () => {
  return (
        <BarWrap>
            <LeftSide>
                <BtnImg src={SearchBtn}/>
                워케이션 떠날 장소를 입력하세요
            </LeftSide>
            <RightSide>
            <div>|</div>
            <div>이미지 06.04.수 ~ 06.06.금 (2박)</div>
            </RightSide>
            <div/>
        </BarWrap>
  )
}
const BarWrap = styled.div`
    width : 100%; 
    display : flex;
    align-items : center;
    justify-content : space-around;
    border : 1px solid black;
    padding : 10px;
    border-radius: 30px;
`;

const BtnImg = styled.img`
    width : 40px;
    height : 40px;
`;

const LeftSide = styled.div`
    width : 100%;
    display : flex;
    gap : 10px;
    align-items : center;
`;
const RightSide = styled.div`
    width : 100%;
    display : flex;
    gap : 10px;
`;
export default SearchBar
