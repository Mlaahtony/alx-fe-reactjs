// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getUser } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setError('');
    const user = await getUser(username);
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
      setError('User not found or API error.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center gap-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{userData.name || userData.login}</h2>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;


