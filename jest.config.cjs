module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
  };