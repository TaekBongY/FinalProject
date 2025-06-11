import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';


const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

const Content = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export default Layout;