module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'baseui',
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'baseui/deprecated-theme-api': 'warn',
    'baseui/deprecated-component-api': 'warn',
    'baseui/no-deep-imports': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/export': 0,
    'react-hooks/exhaustive-deps': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-danger': 0,
    'import/extensions': 'off',
  },
};
