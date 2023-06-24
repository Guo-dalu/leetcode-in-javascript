module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    module: 'readonly'
  },
  rules: {
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": ["error", { "int32Hint": false }], // Optional rule for spacing around operators
    "semi": ["error", "always"] // Optional rule for enforcing semicolons
  }
};