module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    'react',
    'prettier',
    "@typescript-eslint"
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    "react/prop-types": 0,
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }]
  }
}
