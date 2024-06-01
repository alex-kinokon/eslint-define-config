import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingImportOption {
  allowModules?: string[];
  resolvePaths?: string[];
  tryExtensions?: string[];
  tsconfigPath?: string;
  typescriptExtensionMap?:
    | any[][]
    | ('react' | 'react-jsx' | 'react-jsxdev' | 'react-native' | 'preserve');
}

/**
 * Options.
 */
export type NoMissingImportOptions = [NoMissingImportOption?];

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md)
 */
export type NoMissingImportRuleConfig = RuleConfig<NoMissingImportOptions>;

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md)
 */
export interface NoMissingImportRule {
  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @see [no-missing-import](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md)
   */
  'n/no-missing-import': NoMissingImportRuleConfig;
}
