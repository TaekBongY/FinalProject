import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
