module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
