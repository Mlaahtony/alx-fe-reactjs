// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';
const HEADERS = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const searchUsers = async (location = '', minRepos = 0) => {
  try {
    // Construct the search query
    const locationQuery = location ? `location:${encodeURIComponent(location)}` : '';
    const reposQuery = minRepos > 0 ? `repos:>=${minRepos}` : '';
    const query = [locationQuery, reposQuery].filter(Boolean).join('+');

    // Make the API request
    const response = await axios.get(BASE_URL, {
      headers: HEADERS,
      params: {
        q: query,
        per_page: 30, // Adjust as needed
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
