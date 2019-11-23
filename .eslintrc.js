module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'prettier', 'react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-ressing': 'off',
    ' camelcase': 'off',
    'no-unsed-vars': ['error', { argsIngnorePattern: 'next' }],
    'no-param-reassingn': 'off',
    'no-console': ['erro', { allow: ['tron'] }],
  },
};
