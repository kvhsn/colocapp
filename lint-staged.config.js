module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': (files) => [
    'nx run @colocapp/ui:lint -- --fix',
    `prettier --write ${files.join(' ')}`,
  ],
  'packages/api/src/**/*.{js,jsx,ts,tsx}': (files) => [
    'nx run @colocapp/api:lint -- --fix',
    `prettier --write ${files.join(' ')}`,
  ],
  '*.{json,md,yaml,yml}': (files) => [`prettier --write ${files.join(' ')}`],
};
