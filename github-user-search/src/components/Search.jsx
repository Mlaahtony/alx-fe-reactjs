// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 p-2 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div className="p-4 bg-white rounded shadow">
          <div className="flex items-center gap-4">
            <img
              src={userData.avatar_url} // ✅ "avatar_url"
              alt={userData.login}      // ✅ "login"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {userData.name || userData.login}
              </h2>
              <p>Login: {userData.login}</p> {/* ✅ Explicit use of "login" */}
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
};
export default Search;
