/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-svelte'],
  arrowParens: 'avoid',
  bracketSpacing: false,
  singleQuote: true,
  svelteSortOrder: 'options-scripts-markup-styles',
  trailingComma: 'none',
  semi: false
};

module.exports = config;
