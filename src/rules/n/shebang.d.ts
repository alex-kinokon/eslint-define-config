import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ShebangOption {
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  ignoreUnpublished?: boolean;
  additionalExecutables?: string[];
  executableMap?: {
    /**
     */
    [k: string]: string;
  };
}

/**
 * Options.
 */
export type ShebangOptions = [ShebangOption?];

/**
 * Require correct usage of hashbang.
 *
 * @deprecated
 *
 * @see [shebang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
 */
export type ShebangRuleConfig = RuleConfig<ShebangOptions>;

/**
 * Require correct usage of hashbang.
 *
 * @deprecated
 *
 * @see [shebang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
 */
export interface ShebangRule {
  /**
   * Require correct usage of hashbang.
   *
   * @deprecated
   *
   * @see [shebang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
   */
  'n/shebang': ShebangRuleConfig;
}
