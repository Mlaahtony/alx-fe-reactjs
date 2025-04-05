import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <Router>
        <Routes>
          {/* Define the route for Home */}
          <Route path="/home" element={<Home />} />
          
          {/* Default Route: Home */}
          <Route path="/" element={<Home />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* Dynamic Route for Blog Post */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

