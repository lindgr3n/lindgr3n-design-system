module.exports = {
  root: true,

  env: {
    node: true,
    jest: true,
    es6: true
  },

  extends: ['plugin:vue/essential', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
