// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');
const tailwind = require('eslint-plugin-tailwindcss');
const path = require('path');

module.exports = defineConfig([
  expoConfig,
  prettierConfig,
  ...tailwind.configs['flat/recommended'],
  {
    ignores: ['dist/*'],
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
    },
  },
]);
