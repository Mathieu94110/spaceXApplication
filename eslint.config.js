import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import angularEslint from '@angular-eslint/eslint-plugin';
import angularEslintTemplate from '@angular-eslint/eslint-plugin-template';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Ajoute prettier à la fin
  ),

  {
    files: ['*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angularEslint,
      'import': importPlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      // Prettier doit être un warning ou une erreur selon ta préférence
      'prettier/prettier': 'warn',

      // Règles pour les imports
      'import/order': [
        'warn',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
