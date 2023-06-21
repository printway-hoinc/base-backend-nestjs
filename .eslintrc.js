module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 'no-unused-vars': ['error', { 'vars': 'local', "ignoreRestSiblings": true }],
    semi: ["error", "always"],
    camelcase: [
      'error',
      { properties: 'always', ignoreDestructuring: true, ignoreImports: true },
    ],
    'import/no-unresolved': 0,
    // quotes: ['error', 'single'],
    'import/no-cycle': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    ],
    'max-len': [2, 180],
    'no-console': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'no-alert': 'error',
  },
};
