import type { RulesObject } from '../rule-config';

export type JsxShorthandBooleanOption = -1 | 1;

export type JsxShorthandFragmentOption = -1 | 1;

export interface NoUselessFragmentOption {
  /**
   * Allow empty fragments
   */
  allowEmptyFragment?: boolean;
  /**
   * Allow fragments with a single expression child
   */
  allowExpressions?: boolean;
}

export interface NoForbiddenPropsOption {
  forbid?: (
    | string
    | {
        excludedNodes?: string[];
        prop: string;
      }
    | {
        includedNodes?: string[];
        prop: string;
      }
  )[];
}

/**
 * All React rules.
 */
export interface ReactRules {
  /**
   * Prevents unnecessary dollar signs ('$') from being inserted before an expression in JSX.
   * @see [jsx-dollar](https://eslint-react.xyz/docs/rules/jsx-dollar)
   */
  '@eslint-react/jsx-dollar': null;

  /**
   * Enforces that the 'key' prop is placed before the spread prop in JSX elements when using the new JSX transform (automatic runtime).
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [jsx-key-before-spread](https://eslint-react.xyz/docs/rules/jsx-key-before-spread)
   */
  '@eslint-react/jsx-key-before-spread': null;

  /**
   * Prevents comment strings (e.g., beginning with '//' or '/*') from being accidentally inserted into a JSX element's text nodes.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [jsx-no-comment-textnodes](https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes)
   */
  '@eslint-react/jsx-no-comment-textnodes': null;

  /**
   * Disallows duplicate props in JSX elements.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [jsx-no-duplicate-props](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)
   */
  '@eslint-react/jsx-no-duplicate-props': null;

  /**
   * Disallows 'IIFE' in JSX.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [jsx-no-iife](https://eslint-react.xyz/docs/rules/jsx-no-iife)
   */
  '@eslint-react/jsx-no-iife': null;

  /**
   * Prevents using variables in JSX that are not defined in the scope.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [jsx-no-undef](https://eslint-react.xyz/docs/rules/jsx-no-undef)
   */
  '@eslint-react/jsx-no-undef': null;

  /**
   * Enforces the use of shorthand syntax for boolean attributes.
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [jsx-shorthand-boolean](https://eslint-react.xyz/docs/rules/jsx-shorthand-boolean)
   */
  '@eslint-react/jsx-shorthand-boolean': [JsxShorthandBooleanOption?];

  /**
   * Enforces the use of shorthand syntax for fragments.
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [jsx-shorthand-fragment](https://eslint-react.xyz/docs/rules/jsx-shorthand-fragment)
   */
  '@eslint-react/jsx-shorthand-fragment': [JsxShorthandFragmentOption?];

  /**
   * Marks React variables as used when JSX is present.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [jsx-uses-react](https://eslint-react.xyz/docs/rules/jsx-uses-react)
   */
  '@eslint-react/jsx-uses-react': null;

  /**
   * Marks variables used in JSX elements as used.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [jsx-uses-vars](https://eslint-react.xyz/docs/rules/jsx-uses-vars)
   */
  '@eslint-react/jsx-uses-vars': null;

  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-access-state-in-setstate](https://eslint-react.xyz/docs/rules/no-access-state-in-setstate)
   */
  '@eslint-react/no-access-state-in-setstate': null;

  /**
   * Disallows using an item's index in the array as its key.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-array-index-key](https://eslint-react.xyz/docs/rules/no-array-index-key)
   */
  '@eslint-react/no-array-index-key': null;

  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-children-count](https://eslint-react.xyz/docs/rules/no-children-count)
   */
  '@eslint-react/no-children-count': null;

  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-children-for-each](https://eslint-react.xyz/docs/rules/no-children-for-each)
   */
  '@eslint-react/no-children-for-each': null;

  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-children-map](https://eslint-react.xyz/docs/rules/no-children-map)
   */
  '@eslint-react/no-children-map': null;

  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-children-only](https://eslint-react.xyz/docs/rules/no-children-only)
   */
  '@eslint-react/no-children-only': null;

  /**
   * Disallows passing 'children' as a prop.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-children-prop](https://eslint-react.xyz/docs/rules/no-children-prop)
   */
  '@eslint-react/no-children-prop': null;

  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-children-to-array](https://eslint-react.xyz/docs/rules/no-children-to-array)
   */
  '@eslint-react/no-children-to-array': null;

  /**
   * Disallows class components except for error boundaries.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-class-component](https://eslint-react.xyz/docs/rules/no-class-component)
   */
  '@eslint-react/no-class-component': null;

  /**
   * Disallows 'cloneElement'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-clone-element](https://eslint-react.xyz/docs/rules/no-clone-element)
   */
  '@eslint-react/no-clone-element': null;

  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @preset `@eslint-react/all`, `@eslint-react/no-deprecated`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-component-will-mount](https://eslint-react.xyz/docs/rules/no-component-will-mount)
   */
  '@eslint-react/no-component-will-mount': null;

  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @preset `@eslint-react/all`, `@eslint-react/no-deprecated`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-component-will-receive-props)
   */
  '@eslint-react/no-component-will-receive-props': null;

  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @preset `@eslint-react/all`, `@eslint-react/no-deprecated`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-component-will-update](https://eslint-react.xyz/docs/rules/no-component-will-update)
   */
  '@eslint-react/no-component-will-update': null;

  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-context-provider](https://eslint-react.xyz/docs/rules/no-context-provider)
   */
  '@eslint-react/no-context-provider': null;

  /**
   * Disallows 'createRef' in function components.
   * @preset `@eslint-react/all`, `@eslint-react/no-deprecated`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-create-ref](https://eslint-react.xyz/docs/rules/no-create-ref)
   */
  '@eslint-react/no-create-ref': null;

  /**
   * Disallows the 'defaultProps' property in favor of ES6 default parameters.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-default-props](https://eslint-react.xyz/docs/rules/no-default-props)
   */
  '@eslint-react/no-default-props': null;

  /**
   * Disallows direct mutation of 'this.state'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-direct-mutation-state](https://eslint-react.xyz/docs/rules/no-direct-mutation-state)
   */
  '@eslint-react/no-direct-mutation-state': null;

  /**
   * Disallows duplicate 'key' on elements in the same array or a list of 'children'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-duplicate-key](https://eslint-react.xyz/docs/rules/no-duplicate-key)
   */
  '@eslint-react/no-duplicate-key': null;

  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @preset `@eslint-react/all`, `@eslint-react/no-deprecated`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-forward-ref](https://eslint-react.xyz/docs/rules/no-forward-ref)
   */
  '@eslint-react/no-forward-ref': null;

  /**
   * Prevents 'key' from not being explicitly specified (e.g., spreading 'key' from objects).
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-implicit-key](https://eslint-react.xyz/docs/rules/no-implicit-key)
   */
  '@eslint-react/no-implicit-key': null;

  /**
   * Prevents problematic leaked values from being rendered.
   * @preset `@eslint-react/all`, `@eslint-react/disable-type-checked`, `@eslint-react/off`, `@eslint-react/recommended-type-checked`, `@eslint-react/strict-type-checked`
   * @see [no-leaked-conditional-rendering](https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering)
   */
  '@eslint-react/no-leaked-conditional-rendering': null;

  /**
   * Enforces that all components have a 'displayName' that can be used in devtools.
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [no-missing-component-display-name](https://eslint-react.xyz/docs/rules/no-missing-component-display-name)
   */
  '@eslint-react/no-missing-component-display-name': null;

  /**
   * Enforces that all contexts have a 'displayName' that can be used in devtools.
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [no-missing-context-display-name](https://eslint-react.xyz/docs/rules/no-missing-context-display-name)
   */
  '@eslint-react/no-missing-context-display-name': null;

  /**
   * Disallows missing 'key' on items in list rendering.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-missing-key](https://eslint-react.xyz/docs/rules/no-missing-key)
   */
  '@eslint-react/no-missing-key': null;

  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-misused-capture-owner-stack](https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack)
   */
  '@eslint-react/no-misused-capture-owner-stack': null;

  /**
   * Disallows nesting component definitions inside other components.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-nested-component-definitions](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)
   */
  '@eslint-react/no-nested-component-definitions': null;

  /**
   * Disallows nesting lazy component declarations inside other components.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-nested-lazy-component-declarations](https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations)
   */
  '@eslint-react/no-nested-lazy-component-declarations': null;

  /**
   * Disallows 'propTypes' in favor of TypeScript or another type-checking solution.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-prop-types](https://eslint-react.xyz/docs/rules/no-prop-types)
   */
  '@eslint-react/no-prop-types': null;

  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-redundant-should-component-update](https://eslint-react.xyz/docs/rules/no-redundant-should-component-update)
   */
  '@eslint-react/no-redundant-should-component-update': null;

  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-set-state-in-component-did-mount](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount)
   */
  '@eslint-react/no-set-state-in-component-did-mount': null;

  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-set-state-in-component-did-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update)
   */
  '@eslint-react/no-set-state-in-component-did-update': null;

  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-set-state-in-component-will-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update)
   */
  '@eslint-react/no-set-state-in-component-will-update': null;

  /**
   * Replaces string refs with callback refs.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-string-refs](https://eslint-react.xyz/docs/rules/no-string-refs)
   */
  '@eslint-react/no-string-refs': null;

  /**
   * Prevents 'key' from being placed on non-top-level elements in list rendering.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unnecessary-key](https://eslint-react.xyz/docs/rules/no-unnecessary-key)
   */
  '@eslint-react/no-unnecessary-key': null;

  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unnecessary-use-callback](https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback)
   */
  '@eslint-react/no-unnecessary-use-callback': null;

  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unnecessary-use-memo](https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo)
   */
  '@eslint-react/no-unnecessary-use-memo': null;

  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-unnecessary-use-prefix](https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix)
   */
  '@eslint-react/no-unnecessary-use-prefix': null;

  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-unsafe-component-will-mount](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount)
   */
  '@eslint-react/no-unsafe-component-will-mount': null;

  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-unsafe-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props)
   */
  '@eslint-react/no-unsafe-component-will-receive-props': null;

  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-unsafe-component-will-update](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update)
   */
  '@eslint-react/no-unsafe-component-will-update': null;

  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unstable-context-value](https://eslint-react.xyz/docs/rules/no-unstable-context-value)
   */
  '@eslint-react/no-unstable-context-value': null;

  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unstable-default-props](https://eslint-react.xyz/docs/rules/no-unstable-default-props)
   */
  '@eslint-react/no-unstable-default-props': [
    {
      safeDefaultProps?: string[];
    }?,
  ];

  /**
   * Warns about unused class component methods and properties.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-unused-class-component-members](https://eslint-react.xyz/docs/rules/no-unused-class-component-members)
   */
  '@eslint-react/no-unused-class-component-members': null;

  /**
   * Warns about component props that are defined but never used.
   * @preset `@eslint-react/all`, `@eslint-react/disable-type-checked`, `@eslint-react/off`, `@eslint-react/strict-type-checked`
   * @see [no-unused-props](https://eslint-react.xyz/docs/rules/no-unused-props)
   */
  '@eslint-react/no-unused-props': null;

  /**
   * Warns about unused class component state.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-unused-state](https://eslint-react.xyz/docs/rules/no-unused-state)
   */
  '@eslint-react/no-unused-state': null;

  /**
   * Replaces usage of 'useContext' with 'use'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-use-context](https://eslint-react.xyz/docs/rules/no-use-context)
   */
  '@eslint-react/no-use-context': null;

  /**
   * Disallows useless 'forwardRef' calls on components that don't use 'ref's.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [no-useless-forward-ref](https://eslint-react.xyz/docs/rules/no-useless-forward-ref)
   */
  '@eslint-react/no-useless-forward-ref': null;

  /**
   * Disallows useless fragment elements.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [no-useless-fragment](https://eslint-react.xyz/docs/rules/no-useless-fragment)
   */
  '@eslint-react/no-useless-fragment': [NoUselessFragmentOption?];

  /**
   * Enforces destructuring assignment for component props and context.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`
   * @see [prefer-destructuring-assignment](https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment)
   */
  '@eslint-react/prefer-destructuring-assignment': null;

  /**
   * Enforces importing React via a namespace import.
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [prefer-namespace-import](https://eslint-react.xyz/docs/rules/prefer-namespace-import)
   */
  '@eslint-react/prefer-namespace-import': null;

  /**
   * Enforces read-only props in components.
   * @preset `@eslint-react/all`, `@eslint-react/disable-type-checked`, `@eslint-react/off`
   * @see [prefer-read-only-props](https://eslint-react.xyz/docs/rules/prefer-read-only-props)
   */
  '@eslint-react/prefer-read-only-props': null;

  /**
   * Enforces wrapping function calls made inside 'useState' in an 'initializer function'.
   * @preset `@eslint-react/all`, `@eslint-react/off`, `@eslint-react/recommended`, `@eslint-react/recommended-type-checked`, `@eslint-react/recommended-typescript`, `@eslint-react/strict`, `@eslint-react/strict-type-checked`, `@eslint-react/strict-typescript`, `@eslint-react/x`
   * @see [prefer-use-state-lazy-initialization](https://eslint-react.xyz/docs/rules/prefer-use-state-lazy-initialization)
   */
  '@eslint-react/prefer-use-state-lazy-initialization': null;

  /**
   * Disallows certain props on components.
   * @deprecated
   * @preset `@eslint-react/all`, `@eslint-react/off`
   * @see [no-forbidden-props](https://eslint-react.xyz/docs/rules/no-forbidden-props)
   */
  '@eslint-react/no-forbidden-props': [NoForbiddenPropsOption?];
}

export type ReactRulesObject = RulesObject<ReactRules>;
