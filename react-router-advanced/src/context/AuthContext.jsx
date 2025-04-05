import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider component that will wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
