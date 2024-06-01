import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FilenameCaseOption =
  | {
      case?: 'camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase';
      ignore?: any[];
      multipleFileExtensions?: boolean;
    }
  | {
      cases?: {
        camelCase?: boolean;
        snakeCase?: boolean;
        kebabCase?: boolean;
        pascalCase?: boolean;
      };
      ignore?: any[];
      multipleFileExtensions?: boolean;
    };

/**
 * Options.
 */
export type FilenameCaseOptions = [FilenameCaseOption?];

/**
 * Enforce a case style for filenames.
 *
 * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/filename-case.md)
 */
export type FilenameCaseRuleConfig = RuleConfig<FilenameCaseOptions>;

/**
 * Enforce a case style for filenames.
 *
 * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/filename-case.md)
 */
export interface FilenameCaseRule {
  /**
   * Enforce a case style for filenames.
   *
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': FilenameCaseRuleConfig;
}
