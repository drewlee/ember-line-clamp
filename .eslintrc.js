'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
    babelOptions: {
      configFile: './.babel-options.js',
    },
    ecmaFeatures: { legacyDecorators: true },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      extends: ['plugin:qunit/recommended'],
      env: {
        embertest: true,
      },
    },
  ],
};
