import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';
import Accommodations from './pages/Accommodations';
import Accomodation from './pages/accommodation';
import BounceRoute from './app/bounce';
import Chat from './pages/Chat';
import DashboardApp from './pages/DashboardApp';
import DashboardLayout from './layouts';
import ForgetPassword from './pages/forgetPassword';
import Home from './pages/index';
import Login from './pages/login';
import PrivateRoute from './app/privateRoute';
import Product from './components/accommodation/productPage';
import Profile from './pages/Profile';
import Registration from './pages/registration';
import ResetPassword from './pages/resetPassword';
import SocialAuth from './components/login/socialAuth';
import SuperAdminRoute from './app/superAdmin';
import TripRequest from './pages/TripRequest';
import Unverified from './pages/unverified';
import Users from './pages/Users';
import VerificationPage from './pages/VerificationPage';
import Welcome from './components/Welcome';

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
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="app" element={<DashboardApp />} />
            <Route path="accomodation/:id" element={<Accomodation />} />
            <Route element={<SuperAdminRoute />}>
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="accommodations" element={<Accommodations />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="trip-request" element={<TripRequest />} />
          </Route>
        </Route>
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
        <Route path="registration" element={<Registration />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="api/users/verify/" element={<VerificationPage />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
