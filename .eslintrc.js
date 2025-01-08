module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:tailwindcss/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  };