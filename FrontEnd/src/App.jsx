import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/Home';
function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          {/* 레이아웃 적용*/}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* 레이아웃 미적용*/}
          {/* <Route path="/error" element={<Error404 />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
=======
    <ThemeProvider theme={theme}>
      <Home />
      
    </ThemeProvider>
>>>>>>> d411401 (Footer 완료)
  );
}

export default App;