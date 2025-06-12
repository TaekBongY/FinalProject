import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import Layout2 from './components/Layout2';
import Home from './pages/Home';
<<<<<<< HEAD
import Worcation from './pages/Worcation';
=======
import Workcation from './pages/Workcation';
import Mypage from './pages/Mypage';
>>>>>>> 403bcc420feb013a59cf05db0856fc48b19370d8
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          {/* 레이아웃 적용*/}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wrocation" element={<Worcation />} />
          </Route>
          <Route element={<Layout2 />}>
            <Route path="/my/info" element={<Mypage />} />
          </Route>
          {/* 레이아웃 미적용*/}
          {/* <Route path="/error" element={<Error404 />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
