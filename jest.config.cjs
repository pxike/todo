module.exports =  {
  "verbose": true,
  "testEnvironment": "jsdom",
  "transform": {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};