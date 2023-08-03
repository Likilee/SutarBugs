/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'linebreak-style': 'off',
    camelcase: 'off',
    'import/no-cycle': 'off',
    'arrow-parens': 'off',
    'symbol-description': 'off',
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false,
      },
    ],
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-nested-ternary': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'import/no-unresolved': 'off', // TODO - need to fix alias(@) error
    'import/no-absolute-path': 'off',
  },
};
