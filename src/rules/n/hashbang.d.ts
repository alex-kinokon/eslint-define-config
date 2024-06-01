import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface HashbangOption {
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
export type HashbangOptions = [HashbangOption?];

/**
 * Require correct usage of hashbang.
 *
 * @see [hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
 */
export type HashbangRuleConfig = RuleConfig<HashbangOptions>;

/**
 * Require correct usage of hashbang.
 *
 * @see [hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
 */
export interface HashbangRule {
  /**
   * Require correct usage of hashbang.
   *
   * @see [hashbang](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)
   */
  'n/hashbang': HashbangRuleConfig;
}
