import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'
import i18nextPlugin from 'eslint-plugin-i18next'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      i18next: i18nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
  },

  eslintPluginPrettierRecommended,
  prettier,

  {
    files: [
      '**/constants.ts',
      '**/constants.tsx',
      '**/constants/**/*.ts',
      '**/constants/**/*.tsx',
      '**/*.test.tsx',
      '**/*.spec.tsx',
      '**/*.test.ts',
      '**/*.spec.ts',
    ],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
])
