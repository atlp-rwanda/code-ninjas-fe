import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Welcome from './components/Welcome';
import AboutPage from './components/about/About';
import Profile from './components/profile/Profile';
import Profiles from './components/profile/Prof';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="new" element={<Profiles />} />
      <Route path="welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
