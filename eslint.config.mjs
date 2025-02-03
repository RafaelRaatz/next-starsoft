import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends([
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ]),
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default eslintConfig;
