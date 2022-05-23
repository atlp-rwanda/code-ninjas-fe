import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Registration from './pages/registration';
import Unverified from './pages/unverified';
import Welcome from './components/Welcome';
import PrivateRoute from './app/privateRoute';
import BounceRoute from './app/bounce';
import Login from './pages/login';
import Controlpannel from './pages/controlpannel';
import SocialAuth from './components/login/socialAuth';
import './styles/app.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="unverified" element={<Unverified />} />
      <Route path="welcome" element={<Welcome />} />
      <Route element={<BounceRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="social-auth" element={<SocialAuth />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="controlpannel" element={<Controlpannel />} />
      </Route>       
    </Routes>
    </>
  );
}

export default App;
