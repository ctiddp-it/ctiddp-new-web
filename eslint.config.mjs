import next from '@next/eslint-plugin-next'

export default [
  {
    ignores: ['.next/**', '.next-*/**', 'node_modules/**'],
  },
  {
    ...next.configs['core-web-vitals'],
  },
]

