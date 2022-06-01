import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { thisUser } from '../redux/features/auth/loginSlice';

function PrivateRoute() {
  const authenticated = useSelector(thisUser);
  return authenticated.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
