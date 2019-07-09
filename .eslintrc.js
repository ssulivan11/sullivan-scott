const eslintConfig = {
  parser: 'babel-eslint',
  plugins: ['react', 'jest', 'prettier'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    React: true,
    document: true,
    window: true,
    jQuery: true,
    $: true,
    localStorage: true,
    fetch: true,
  },
  root: true,
  rules: {
    indent: ['error', 2],
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/require-default-props': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': ['warn'],
    'react/jsx-indent-props': 0,
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'prefer-template': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'babel/object-curly-spacing': 0,
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
}

module.exports = eslintConfig
