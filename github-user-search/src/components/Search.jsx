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
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          aria-label="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 p-2 rounded border border-gray-300 shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-blue-500 text-center font-medium">Loading</p>
      )}

      {error && (
        <p className="text-red-500 text-center font-medium">{error}</p>
      )}

      {userData && (
        <div className="p-6 bg-white rounded-xl shadow space-y-4">
          <div className="flex items-center gap-6">
            <img
              src={userData.avatar_url}
              alt={`Avatar of ${userData.login}`}
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className="text-2xl font-bold">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-600">Login: {userData.login}</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            {userData.bio && (
              <p><span className="font-semibold">Bio:</span> {userData.bio}</p>
            )}
            {userData.location && (
              <p><span className="font-semibold">Location:</span> {userData.location}</p>
            )}
            <p><span className="font-semibold">Public Repos:</span> {userData.public_repos}</p>
            <p><span className="font-semibold">Followers:</span> {userData.followers}</p>
            <p><span className="font-semibold">Following:</span> {userData.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Search;

