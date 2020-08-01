module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'standard',
    'preact',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['standard', 'json', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
  },
}
