import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Welcome from './components/Welcome';
import AboutPage from './components/about/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
