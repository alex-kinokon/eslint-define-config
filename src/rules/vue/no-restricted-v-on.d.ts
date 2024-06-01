import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedVOnOption = (
  | (string | null)
  | {
      argument: string | null;
      element?: string;
      message?: string;
      /**
       * @minItems 1
       */
      modifiers?: [
        'prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive',
        ...('prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive')[],
      ];
    }
)[];

/**
 * Options.
 */
export type NoRestrictedVOnOptions = NoRestrictedVOnOption;

/**
 * Disallow specific argument in `v-on`.
 *
 * @see [no-restricted-v-on](https://eslint.vuejs.org/rules/no-restricted-v-on.html)
 */
export type NoRestrictedVOnRuleConfig = RuleConfig<NoRestrictedVOnOptions>;

/**
 * Disallow specific argument in `v-on`.
 *
 * @see [no-restricted-v-on](https://eslint.vuejs.org/rules/no-restricted-v-on.html)
 */
export interface NoRestrictedVOnRule {
  /**
   * Disallow specific argument in `v-on`.
   *
   * @see [no-restricted-v-on](https://eslint.vuejs.org/rules/no-restricted-v-on.html)
   */
  'vue/no-restricted-v-on': NoRestrictedVOnRuleConfig;
}
