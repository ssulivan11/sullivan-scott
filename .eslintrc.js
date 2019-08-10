const eslintConfig = {
  parser: 'babel-eslint',
  root: true,
  plugins: ['@typescript-eslint', 'react', 'jest', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    'babel/object-curly-spacing': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    indent: ['error', 2],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true,
      },
    ],
    'no-unused-vars': 0,
    'prefer-template': 0,
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx'],
      },
    ],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 0,
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': ['warn'],
    'react/prefer-stateless-function': 'warn',
    'react/require-default-props': 0,
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    React: true,
    document: true,
    window: true,
    jQuery: true,
    $: true,
    localStorage: true,
    fetch: true,
  },
}

module.exports = eslintConfig
