import React, { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserContext from './UserContext'; // Import UserContext

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Alice", email: "alice@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Provide userData to the context */}
      <div>
        <ProfilePage />
        <UserProfile />
        <Header />
        <MainContent />
        <Footer />
        <WelcomeMessage />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </UserContext.Provider> 
  );
}

export default App;
