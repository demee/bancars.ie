const jestPackage = require('jest/package.json');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'eslint:recommended',
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
    'react-hooks',
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
  overrides: [
    {
      files: ['src/**.test.jsx'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
};
