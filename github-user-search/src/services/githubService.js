// services/githubService.js
import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users';

const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API}/${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
};
