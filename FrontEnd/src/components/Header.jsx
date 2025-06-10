import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/backgroundImg.jpg';
import logo from '../assets/logo.png';

const menuData = [
  { title: '심리검사', items: ['스트레스 검사', '번아웃 검사', '성향 검사'] },
  { title: '워케이션', items: ['전체보기', '제휴업체', 'AI 추천', '워케이션 등록'] },
  { title: '식단정보', items: [] },
  { title: '직원관리', items: ['직원목록', '워케이션 신청자', '상담 필요자', '직원 신청'] },
  { title: '', items: ['내정보', '신체 정보', '워케이션 신청내역'] }
];

const Header = () => {
  const navMenus = menuData.filter(menu => menu.title); // 타이틀 있는 메뉴만
  const dropdownMenus = menuData.filter(menu => menu.items.length > 0); // 드롭다운 컬럼

  return (
    <HeaderWrap>
      <HeaderBg>
        <HeaderInner>
          <LogoWrap>
            <LogoImg src={logo} alt="logo" />
          </LogoWrap>

          <NavWrap>
            <Nav>
              {navMenus.map((menu, idx) => (
                <NavItem key={idx}>{menu.title}</NavItem>
              ))}
            </Nav>

            <DropdownWrap className="dropdown">
              {dropdownMenus.map((menu, idx) => (
                <DropdownColumn key={idx}>
                  <ul>
                    {menu.items.map((item, subIdx) => (
                      <li key={subIdx}>{item}</li>
                    ))}
                  </ul>
                </DropdownColumn>
              ))}
            </DropdownWrap>
          </NavWrap>

          <LoginButton>로그인</LoginButton>
        </HeaderInner>
      </HeaderBg>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: relative;
  font-family: sans-serif;
`;

const HeaderBg = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 120px;
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.s4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

const NavWrap = styled.div`
  position: relative;
  flex: 1;

  &:hover .dropdown {
    display: flex;
  }
`;

const Nav = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: bold;
  justify-content: space-around;
  cursor: pointer;
`;

const NavItem = styled.li`
  color: #222;
`;

const DropdownWrap = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 1920px;
  background: #fff;
  border-top: 1px solid #ddd;
  padding: 24px 80px;
  z-index: 10;
  justify-content: space-between;
`;

const DropdownColumn = styled.div`
  flex: 1;
  min-width: 180px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 6px 0;
      color: #333;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const LoginButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #333;
  border-radius: 12px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  color: black;
  width: 100px;

  &:hover {
    background: #f3f3f3;
  }
`;

export default Header;
