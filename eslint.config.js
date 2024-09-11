import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  // JavaScript/TypeScriptファイル全体への設定
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslintParser,
      globals: {
        ...globals.browser,
        expect: 'readonly', // 'expect' をグローバルとして設定
        test: 'readonly', // 'test' もグローバルとして設定
        vi: 'readonly', // 'vi' も必要に応じて追加
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      js: pluginJs,
      '@typescript-eslint': tseslint, // 正しいプラグイン名を指定
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs['eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      '@typescript-eslint/ban-ts-comment': 'warn', // 必要なTypeScript ESLintルールを追加
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },
];
