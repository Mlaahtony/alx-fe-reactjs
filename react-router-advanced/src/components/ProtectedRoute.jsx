import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Access authentication state

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return <Outlet />; // If authenticated, render the child routes (nested routes)
};

export default ProtectedRoute;

