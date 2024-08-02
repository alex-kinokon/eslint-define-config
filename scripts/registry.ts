import type { Rule } from 'eslint';

/**
 * Map of plugins for which the script will generate rule files.
 */
export const PLUGIN_REGISTRY: Readonly<Record<string, Plugin>> = {
  deprecation: {
    name: 'Deprecation',
    module: 'eslint-plugin-deprecation',
  },
  eslint: {
    name: 'Eslint',
    module: 'eslint',
  },
  'typescript-eslint': {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    module: '@typescript-eslint/eslint-plugin',
  },
  import: {
    name: 'Import',
    module: 'eslint-plugin-import',
  },
  'eslint-comments': {
    name: 'EslintComments',
    module: 'eslint-plugin-eslint-comments',
  },
  'graphql-eslint': {
    name: 'GraphQL',
    prefix: '@graphql-eslint',
    module: '@graphql-eslint/eslint-plugin',
  },
  jsdoc: {
    name: 'JSDoc',
    prefix: 'jsdoc',
    module: 'eslint-plugin-jsdoc',
  },
  jsonc: {
    name: 'Jsonc',
    module: 'eslint-plugin-jsonc',
  },
  'jsx-a11y': {
    name: 'JsxA11y',
    module: 'eslint-plugin-jsx-a11y',
  },
  mdx: {
    name: 'Mdx',
    module: 'eslint-plugin-mdx',
  },
  n: {
    name: 'N',
    module: 'eslint-plugin-n',
  },
  node: {
    name: 'Node',
    module: 'eslint-plugin-node',
  },
  promise: {
    name: 'Promise',
    module: 'eslint-plugin-promise',
  },
  react: {
    name: 'React',
    prefix: '@eslint-react',
    module: '@eslint-react/eslint-plugin',
  },
  'react-refresh': {
    name: 'ReactRefresh',
    module: 'eslint-plugin-react-refresh',
  },
  'react-hooks': {
    name: 'ReactHooks',
    module: 'eslint-plugin-react-hooks',
  },
  'react-query': {
    name: 'ReactQuery',
    prefix: '@tanstack/query',
    module: '@tanstack/eslint-plugin-query',
  },
  sonarjs: {
    name: 'SonarJS',
    prefix: 'sonarjs',
    module: 'eslint-plugin-sonarjs',
  },
  spellcheck: {
    name: 'Spellcheck',
    module: 'eslint-plugin-spellcheck',
  },
  storybook: {
    name: 'Storybook',
    module: 'eslint-plugin-storybook',
  },
  tailwind: {
    name: 'Tailwind',
    prefix: 'tailwindcss',
    module: 'eslint-plugin-tailwindcss',
  },
  'testing-library': {
    name: 'TestingLibrary',
    module: 'eslint-plugin-testing-library',
  },
  unicorn: {
    name: 'Unicorn',
    module: 'eslint-plugin-unicorn',
  },
  vitest: {
    name: 'Vitest',
    module: 'eslint-plugin-vitest',
  },
  vue: {
    name: 'Vue',
    module: 'eslint-plugin-vue',
  },
  'vue-i18n': {
    name: 'VueI18n',
    prefix: '@intlify/vue-i18n',
    module: '@intlify/eslint-plugin-vue-i18n',
  },
  'vue-pug': {
    name: 'VuePug',
    module: 'eslint-plugin-vue-pug',
  },
  yml: {
    name: 'Yml',
    module: 'eslint-plugin-yml',
  },
  'import-x': {
    name: 'ImportX',
    module: 'eslint-plugin-import-x',
  },
} as const;

export type PluginRules = Record<string, Rule.RuleModule>;

export interface Plugin {
  name: string;
  prefix?: string;
  module: string;
  rules?: PluginRules;
}
