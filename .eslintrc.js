const jestPackage = require('react-scripts/node_modules/jest/package.json');

console.log("Jest version: ", jestPackage.version)

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/all',
    'plugin:react/all',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'import/no-cycle': ['error', { maxDepth: '∞' }],
  },
  settings: {
    jest: {
      version: jestPackage.version,
    },
  },
};
