import React from 'react'
import styled from 'styled-components'
import SearchBtn from '../assets/SearchBtn.png'
import btn from '../styles/Button'
const SearchBar = () => {
  return (
        <BarWrap>
            <LeftSide>
                <BtnImg src={SearchBtn}/>
                <SearchInput type='text' placeholder='워케이션 떠날 장소를 입력하세요' />
            </LeftSide>
            <RightSide>
            <div>|</div>
            <div>캘랜더 자리 06.04.수 ~ 06.06.금 (2박)</div>
            </RightSide>
            <div>
                <RightBtn style={btn.buttonYb}>검색</RightBtn>
            </div>
            <div/>
        </BarWrap>
  )
}
const BarWrap = styled.div`
    width : 100%; 
    display : flex;
    align-items : center;
    justify-content : space-between;
    border : 1px solid black;
    padding : 10px;
    border-radius: 30px;
    font-size: 14px;
    font-family : ${({ theme }) => theme.fontFamily.secondary};
`;

const BtnImg = styled.img`
    width : 34px;
    height : 34px;
`;
const SearchInput = styled.input`
    background-color : ${({ theme }) => theme.colors.gray[100]};
    width : 80%;
`;


const LeftSide = styled.div`
    width : 100%;
    display : flex;
    gap : 10px;
    align-items : center;
    padding-left: 20px;
`;
const RightSide = styled.div`
    width : 60%;
    display : flex;
    gap : 10px;
`;

const RightBtn = styled.button`
    width : 100px;
    padding : 8px;
    margin-right: 20px;
    color : #111827;
    font-family : ${({ theme }) => theme.fontFamily.primary};
`;
export default SearchBar
