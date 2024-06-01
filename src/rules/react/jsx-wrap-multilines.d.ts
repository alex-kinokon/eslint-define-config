import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxWrapMultilinesOption {
  declaration?:
    | true
    | false
    | 'ignore'
    | 'parens'
    | 'parens-new-line'
    | 'never';
  assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  return?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  condition?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  logical?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  prop?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
}

/**
 * Options.
 */
export type JsxWrapMultilinesOptions = [JsxWrapMultilinesOption?];

/**
 * Disallow missing parentheses around multiline JSX.
 *
 * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
 */
export type JsxWrapMultilinesRuleConfig = RuleConfig<JsxWrapMultilinesOptions>;

/**
 * Disallow missing parentheses around multiline JSX.
 *
 * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
 */
export interface JsxWrapMultilinesRule {
  /**
   * Disallow missing parentheses around multiline JSX.
   *
   * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
   */
  'react/jsx-wrap-multilines': JsxWrapMultilinesRuleConfig;
}
