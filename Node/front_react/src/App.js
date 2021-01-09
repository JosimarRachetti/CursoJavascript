import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyle from './styles/styles-global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoContainer={3000} className="toast-container" />
    </Router>
  );
}

export default App;