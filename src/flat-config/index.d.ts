import type { Linter } from 'eslint';

import type { Settings } from '../config/settings';
import type { Rules } from '../rules';

import type { LanguageOptions } from './language-options';

/**
 * Flat ESLint Configuration.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 */
export interface FlatESLintConfig
  extends Omit<Linter.Config, 'languageOptions' | 'rules' | 'settings'> {
  /**
   * An object containing settings related to how JavaScript is configured for linting.
   *
   * @see [Configuring language options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-language-options)
   */
  languageOptions?: LanguageOptions;

  /**
   * An object containing the configured rules. When `files` or `ignores` are specified, these rule configurations are only available to the matching files.
   *
   * @see [Configuring rules](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-rules)
   */
  rules?: Partial<Rules>;

  /**
   * An object containing name-value pairs of information that should be available to all rules.
   *
   * @see [Configuring shared settings](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-shared-settings)
   */
  settings?: Settings;
}

export * from './language-options';
