import type { RulesObject } from '../rule-config';

export interface NoUnnormalizedKeysOption {
  form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD';
}

export type SortKeysRuleConfig = [
  ('asc' | 'desc')?,
  {
    caseSensitive?: boolean;
    natural?: boolean;
    minKeys?: number;
    allowLineSeparatedGroups?: boolean;
  }?,
];

/**
 * All EslintJson rules.
 */
export interface EslintJsonRules {
  /**
   * Disallow duplicate keys in JSON objects.
   * @preset `json/recommended`
   * @see [no-duplicate-keys](https://github.com/eslint/json/tree/main/docs/rules/no-duplicate-keys.md)
   */
  'json/no-duplicate-keys': null;

  /**
   * Disallow empty keys in JSON objects.
   * @preset `json/recommended`
   * @see [no-empty-keys](https://github.com/eslint/json/tree/main/docs/rules/no-empty-keys.md)
   */
  'json/no-empty-keys': null;

  /**
   * Disallow JSON keys that are not normalized.
   * @preset `json/recommended`
   * @see [no-unnormalized-keys](https://github.com/eslint/json/tree/main/docs/rules/no-unnormalized-keys.md)
   */
  'json/no-unnormalized-keys': [NoUnnormalizedKeysOption?];

  /**
   * Disallow JSON values that are unsafe for interchange.
   * @preset `json/recommended`
   * @see [no-unsafe-values](https://github.com/eslint/json/tree/main/docs/rules/no-unsafe-values.md)
   */
  'json/no-unsafe-values': null;

  /**
   * Require JSON object keys to be sorted.
   * @see [sort-keys](https://github.com/eslint/json/tree/main/docs/rules/sort-keys.md)
   */
  'json/sort-keys': SortKeysRuleConfig;

  /**
   * Require the JSON top-level value to be an array or object.
   * @see [top-level-interop](https://github.com/eslint/json/tree/main/docs/rules/top-level-interop.md)
   */
  'json/top-level-interop': null;
}

export type EslintJsonRulesObject = RulesObject<EslintJsonRules>;
