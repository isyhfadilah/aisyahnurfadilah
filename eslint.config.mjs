import js from '@eslint/js'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-plugin-prettier/recommended'

const config = [
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs}']
  },
  ...nextCoreWebVitals,
  prettier,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      'react-hooks/set-state-in-effect': 'off'
    }
  }
]

export default config
