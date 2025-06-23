// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore build files
  { ignores: ['dist', 'build', 'node_modules'] },

  {
    // Apply to only TypeScript + React files
    files: ['**/*.{ts,tsx}'],

    // Extend base JS + TS + React rules
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.recommended,
    ],

    // Language settings
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // ESLint plugins
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Custom rules
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh (for Vite HMR safety)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Optional: Enforce JSX filename extension
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

      // Optional: Turn off prop-types if using TypeScript
      'react/prop-types': 'off',

      // Optional: Add more lint rules here...
    },
  }
);

