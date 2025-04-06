import { defaults } from 'jest-config';

export default {
  ...defaults,
  testEnvironment: 'jsdom', // Use jsdom as the test environment
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Add this line to load global setup
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/src/__tests__/**/*.test.js'], // Ensure Jest looks for test files
};

