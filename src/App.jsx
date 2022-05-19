import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Registration from './pages/registration';
import Unverified from './pages/unverified';
import './styles/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="unverified" element={<Unverified />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
