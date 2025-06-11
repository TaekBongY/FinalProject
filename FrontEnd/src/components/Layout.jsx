import React from 'react';
import Header from './Header';
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
=======
import Footer from './Footer';
>>>>>>> d411401 (Footer 완료)

const Layout = () => {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Content>
        <Outlet />
      </Content>
      
=======
      <Content>{children}</Content>
      <Footer></Footer>
>>>>>>> d411401 (Footer 완료)
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