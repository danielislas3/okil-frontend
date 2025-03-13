import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,

  {
    name: 'custom-config',

    files: ['**/*.ts', '**/*.vue'],

    rules: {
      'no-debugger': 'error',
      'semi': ['error', 'never'],
      'no-console': 'warn',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',

      'vue/require-default-prop': 'off'
    }
  }
)
