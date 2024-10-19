import type { Linter } from 'eslint';

import type { Parser, ParserOptions } from '../parser-options';

export type ParserModule =
  | { parse(text: string, options?: any): any }
  | { parseForESLint(text: string, options?: any): any };

/**
 * An object containing settings related to how JavaScript is configured for linting
 */
export interface LanguageOptions
  extends Omit<Linter.LanguageOptions, 'parser' | 'parserOptions'> {
  /**
   * Either an object containing a `parse()` method or a string indicating the name of a parser inside of a plugin (i.e., `"pluginName/parserName"`).
   *
   * @default "@/espree"
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parser?: Parser | ParserModule;

  /**
   * An object specifying additional options that are passed directly to the `parser()` method on the parser. The available options are parser-dependent.
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parserOptions?: ParserOptions;
}
