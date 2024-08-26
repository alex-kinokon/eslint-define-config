import type { LiteralUnion } from '../utility-types';

/**
 * This is a special exported interface for other packages to declare
 * additional plugins that should bail out for eslint plugins. For example
 * `'@typescript-eslint/eslint-plugin'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomPlugins {
 *     '@typescript-eslint': void;
 *   }
 * }
 * ```
 */
export interface CustomPlugins {}

/** Plugin. */
export type Plugin = LiteralUnion<
  | '@eslint-react/eslint-plugin'
  | '@graphql-eslint'
  | '@stylistic'
  | '@tanstack/query'
  | '@typescript-eslint'
  | 'astro'
  | 'deprecation'
  | 'import-x'
  | 'import'
  | 'inclusive-language'
  | 'jest'
  | 'jsdoc'
  | 'jsonc'
  | 'jsx-a11y'
  | 'mdx'
  | 'perfectionist'
  | 'prettier'
  | 'promise'
  | 'react-hooks'
  | 'react-refresh'
  | 'regexp'
  | 'solid'
  | 'sonarjs'
  | 'spellcheck'
  | 'svelte'
  | 'testing-library'
  | 'unicorn'
  | 'vitest'
  | 'vue'
  | 'yml'
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  | keyof CustomPlugins
>;
