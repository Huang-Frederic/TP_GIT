import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended, 
  
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'indent': ['error', 2],
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'eqeqeq': 'error',
      'no-unused-vars': 'warn'
    }
  },
  
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  },
  
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];