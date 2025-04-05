import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set isAuthenticated to true
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
