module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setupAfterEnv.js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{js,jsx}'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\]+\\.(js|jsx)$'],
  moduleNameMapper: {
    '^.+\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js'],
};
