import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

function RestrictedWrapper() {
  const { user, loading } = useUser();

  if (loading) return null;
  const isAuthenticated = user && user.role === 'admin';

  return isAuthenticated ? <Outlet /> : <Navigate to="pageNotFound" />;
}
export default RestrictedWrapper;
