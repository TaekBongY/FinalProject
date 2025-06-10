import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="App">
        
      </div>
    </ThemeProvider>
  );
}

export default App;
