import type { RulesObject } from '../rule-config';

export type NamingConventionComponentNameOption =
  | ('PascalCase' | 'CONSTANT_CASE')
  | {
      excepts?: string[];
      rule?: 'PascalCase' | 'CONSTANT_CASE';
    };

export type NamingConventionFilenameOption =
  | ('PascalCase' | 'camelCase' | 'kebab-case' | 'snake_case')
  | {
      excepts?: string[];
      extensions?: string[];
      rule?: 'PascalCase' | 'camelCase' | 'kebab-case' | 'snake_case';
    };

export type NamingConventionFilenameExtensionOption =
  | ('always' | 'as-needed')
  | {
      allow?: 'always' | 'as-needed';
      extensions?: string[];
    };

/**
 * All React rules.
 */
export interface ReactRules {
  /**
   * Enforce boolean attributes notation in JSX.
   * @see [avoid-shorthand-boolean](https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean)
   */
  'react/avoid-shorthand-boolean': null;

  /**
   * Enforce using fragment component instead of shorthand fragment syntax.
   * @see [avoid-shorthand-fragment](https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment)
   */
  'react/avoid-shorthand-fragment': null;

  /**
   * Require all 'forwardRef' components include a 'ref' parameter.
   * @see [ensure-forward-ref-using-ref](https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref)
   */
  'react/ensure-forward-ref-using-ref': null;

  /**
   * Disallow accessing 'this.state' within 'setState'.
   * @see [no-access-state-in-setstate](https://eslint-react.xyz/docs/rules/no-access-state-in-setstate)
   */
  'react/no-access-state-in-setstate': null;

  /**
   * Disallow using Array index as key.
   * @see [no-array-index-key](https://eslint-react.xyz/docs/rules/no-array-index-key)
   */
  'react/no-array-index-key': null;

  /**
   * Disallow 'Children.count'.
   * @see [no-children-count](https://eslint-react.xyz/docs/rules/no-children-count)
   */
  'react/no-children-count': null;

  /**
   * Disallow 'Children.forEach'.
   * @see [no-children-for-each](https://eslint-react.xyz/docs/rules/no-children-for-each)
   */
  'react/no-children-for-each': null;

  /**
   * Disallow 'Children.map'.
   * @see [no-children-map](https://eslint-react.xyz/docs/rules/no-children-map)
   */
  'react/no-children-map': null;

  /**
   * Disallow 'Children.only'.
   * @see [no-children-only](https://eslint-react.xyz/docs/rules/no-children-only)
   */
  'react/no-children-only': null;

  /**
   * Disallow passing of 'children' as props.
   * @see [no-children-prop](https://eslint-react.xyz/docs/rules/no-children-prop)
   */
  'react/no-children-prop': null;

  /**
   * Disallow 'Children.toArray'.
   * @see [no-children-to-array](https://eslint-react.xyz/docs/rules/no-children-to-array)
   */
  'react/no-children-to-array': null;

  /**
   * Disallow class component.
   * @see [no-class-component](https://eslint-react.xyz/docs/rules/no-class-component)
   */
  'react/no-class-component': null;

  /**
   * Disallow 'cloneElement'.
   * @see [no-clone-element](https://eslint-react.xyz/docs/rules/no-clone-element)
   */
  'react/no-clone-element': null;

  /**
   * Disallow comments from being inserted as text nodes.
   * @see [no-comment-textnodes](https://eslint-react.xyz/docs/rules/no-comment-textnodes)
   */
  'react/no-comment-textnodes': null;

  /**
   * Disallow complicated conditional rendering.
   * @deprecated
   * @see [no-complicated-conditional-rendering](https://eslint-react.xyz/docs/rules/no-complicated-conditional-rendering)
   */
  'react/no-complicated-conditional-rendering': null;

  /**
   * Disallow usage of 'componentWillMount'.
   * @see [no-component-will-mount](https://eslint-react.xyz/docs/rules/no-component-will-mount)
   */
  'react/no-component-will-mount': null;

  /**
   * Disallow usage of 'componentWillReceiveProps'.
   * @see [no-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-component-will-receive-props)
   */
  'react/no-component-will-receive-props': null;

  /**
   * Disallow usage of 'componentWillUpdate'.
   * @see [no-component-will-update](https://eslint-react.xyz/docs/rules/no-component-will-update)
   */
  'react/no-component-will-update': null;

  /**
   * Disallow 'createRef' in function components.
   * @see [no-create-ref](https://eslint-react.xyz/docs/rules/no-create-ref)
   */
  'react/no-create-ref': null;

  /**
   * Disallow the use of 'defaultProps' property in components.
   * @see [no-default-props](https://eslint-react.xyz/docs/rules/no-default-props)
   */
  'react/no-default-props': null;

  /**
   * Disallow direct mutation of state.
   * @see [no-direct-mutation-state](https://eslint-react.xyz/docs/rules/no-direct-mutation-state)
   */
  'react/no-direct-mutation-state': null;

  /**
   * Disallow duplicate keys in 'key' prop when rendering list.
   * @see [no-duplicate-key](https://eslint-react.xyz/docs/rules/no-duplicate-key)
   */
  'react/no-duplicate-key': null;

  /**
   * Disallow spreading 'key' from objects.
   * @deprecated
   * @see [no-implicit-key](https://eslint-react.xyz/docs/rules/no-implicit-key)
   */
  'react/no-implicit-key': null;

  /**
   * Disallow problematic leaked values from being rendered.
   * @see [no-leaked-conditional-rendering](https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering)
   */
  'react/no-leaked-conditional-rendering': null;

  /**
   * Require 'displayName' for memo and forwardRef components.
   * @see [no-missing-component-display-name](https://eslint-react.xyz/docs/rules/no-missing-component-display-name)
   */
  'react/no-missing-component-display-name': null;

  /**
   * Require 'key' prop when rendering list.
   * @see [no-missing-key](https://eslint-react.xyz/docs/rules/no-missing-key)
   */
  'react/no-missing-key': null;

  /**
   * Disallow usage of unstable nested components.
   * @see [no-nested-components](https://eslint-react.xyz/docs/rules/no-nested-components)
   */
  'react/no-nested-components': null;

  /**
   * Disallow the use of 'propTypes' property in components.
   * @see [no-prop-types](https://eslint-react.xyz/docs/rules/no-prop-types)
   */
  'react/no-prop-types': null;

  /**
   * Disallow usage of 'shouldComponentUpdate' in class component extends 'React.PureComponent'.
   * @see [no-redundant-should-component-update](https://eslint-react.xyz/docs/rules/no-redundant-should-component-update)
   */
  'react/no-redundant-should-component-update': null;

  /**
   * Disallow 'setState' in 'componentDidMount'.
   * @see [no-set-state-in-component-did-mount](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount)
   */
  'react/no-set-state-in-component-did-mount': null;

  /**
   * Disallow 'setState' in 'componentDidUpdate'.
   * @see [no-set-state-in-component-did-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update)
   */
  'react/no-set-state-in-component-did-update': null;

  /**
   * Disallow 'setState' in 'componentWillUpdate'.
   * @see [no-set-state-in-component-will-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update)
   */
  'react/no-set-state-in-component-will-update': null;

  /**
   * Disallow using deprecated string refs.
   * @see [no-string-refs](https://eslint-react.xyz/docs/rules/no-string-refs)
   */
  'react/no-string-refs': null;

  /**
   * Disallow usage of 'UNSAFE_componentWillMount'.
   * @see [no-unsafe-component-will-mount](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount)
   */
  'react/no-unsafe-component-will-mount': null;

  /**
   * Disallow usage of 'UNSAFE_componentWillReceiveProps'.
   * @see [no-unsafe-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props)
   */
  'react/no-unsafe-component-will-receive-props': null;

  /**
   * Disallow usage of 'UNSAFE_componentWillUpdate'.
   * @see [no-unsafe-component-will-update](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update)
   */
  'react/no-unsafe-component-will-update': null;

  /**
   * Disallow passing constructed values to context providers.
   * @see [no-unstable-context-value](https://eslint-react.xyz/docs/rules/no-unstable-context-value)
   */
  'react/no-unstable-context-value': null;

  /**
   * Disallow usage of unstable value as default param in function component.
   * @see [no-unstable-default-props](https://eslint-react.xyz/docs/rules/no-unstable-default-props)
   */
  'react/no-unstable-default-props': null;

  /**
   * Disallow unused class component members.
   * @see [no-unused-class-component-members](https://eslint-react.xyz/docs/rules/no-unused-class-component-members)
   */
  'react/no-unused-class-component-members': null;

  /**
   * Prevents unused state of class component.
   * @see [no-unused-state](https://eslint-react.xyz/docs/rules/no-unused-state)
   */
  'react/no-unused-state': null;

  /**
   * Disallow unnecessary fragments.
   * @see [no-useless-fragment](https://eslint-react.xyz/docs/rules/no-useless-fragment)
   */
  'react/no-useless-fragment': null;

  /**
   * Enforce using destructuring assignment in component props and context.
   * @see [prefer-destructuring-assignment](https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment)
   */
  'react/prefer-destructuring-assignment': null;

  /**
   * Enforce that component props are read-only.
   * @see [prefer-read-only-props](https://eslint-react.xyz/docs/rules/prefer-read-only-props)
   */
  'react/prefer-read-only-props': null;

  /**
   * Enforce boolean attributes notation in JSX.
   * @see [prefer-shorthand-boolean](https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean)
   */
  'react/prefer-shorthand-boolean': null;

  /**
   * Enforce using fragment syntax instead of Fragment component.
   * @see [prefer-shorthand-fragment](https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment)
   */
  'react/prefer-shorthand-fragment': null;

  /**
   * Disallow passing 'children' to void DOM elements.
   * @see [dom/no-children-in-void-dom-elements](https://eslint-react.xyz/docs/rules/dom-no-children-in-void-dom-elements)
   */
  'react/dom/no-children-in-void-dom-elements': null;

  /**
   * Disallow when a DOM component is using 'dangerouslySetInnerHTML'.
   * @see [dom/no-dangerously-set-innerhtml](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml)
   */
  'react/dom/no-dangerously-set-innerhtml': null;

  /**
   * Disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'.
   * @see [dom/no-dangerously-set-innerhtml-with-children](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children)
   */
  'react/dom/no-dangerously-set-innerhtml-with-children': null;

  /**
   * Disallow 'findDOMNode'.
   * @see [dom/no-find-dom-node](https://eslint-react.xyz/docs/rules/dom-no-find-dom-node)
   */
  'react/dom/no-find-dom-node': null;

  /**
   * Enforce that button component have an explicit 'type' attribute.
   * @see [dom/no-missing-button-type](https://eslint-react.xyz/docs/rules/dom-no-missing-button-type)
   */
  'react/dom/no-missing-button-type': null;

  /**
   * Enforce that 'iframe' component have an explicit 'sandbox' attribute.
   * @see [dom/no-missing-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox)
   */
  'react/dom/no-missing-iframe-sandbox': null;

  /**
   * Enforce that namespaces are not used in React elements.
   * @see [dom/no-namespace](https://eslint-react.xyz/docs/rules/dom-no-namespace)
   */
  'react/dom/no-namespace': null;

  /**
   * Disallow usage of the return value of 'ReactDOM.render'.
   * @see [dom/no-render-return-value](https://eslint-react.xyz/docs/rules/dom-no-render-return-value)
   */
  'react/dom/no-render-return-value': null;

  /**
   * Disallow 'javascript:' URLs as JSX event handler prop's value.
   * @see [dom/no-script-url](https://eslint-react.xyz/docs/rules/dom-no-script-url)
   */
  'react/dom/no-script-url': null;

  /**
   * Disallow unsafe iframe 'sandbox' attribute combinations.
   * @see [dom/no-unsafe-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox)
   */
  'react/dom/no-unsafe-iframe-sandbox': null;

  /**
   * Disallow 'target="_blank"' on an external link without 'rel="noreferrer noopener"'.
   * @see [dom/no-unsafe-target-blank](https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank)
   */
  'react/dom/no-unsafe-target-blank': null;

  /**
   * Enforce custom hooks using other hooks.
   * @see [hooks-extra/ensure-custom-hooks-using-other-hooks](https://eslint-react.xyz/docs/rules/hooks-extra-ensure-custom-hooks-using-other-hooks)
   */
  'react/hooks-extra/ensure-custom-hooks-using-other-hooks': null;

  /**
   * Enforce 'useCallback' has non-empty dependencies array.
   * @see [hooks-extra/ensure-use-callback-has-non-empty-deps](https://eslint-react.xyz/docs/rules/hooks-extra-ensure-use-callback-has-non-empty-deps)
   */
  'react/hooks-extra/ensure-use-callback-has-non-empty-deps': null;

  /**
   * Enforce 'useMemo' has non-empty dependencies array.
   * @see [hooks-extra/ensure-use-memo-has-non-empty-deps](https://eslint-react.xyz/docs/rules/hooks-extra-ensure-use-memo-has-non-empty-deps)
   */
  'react/hooks-extra/ensure-use-memo-has-non-empty-deps': null;

  /**
   * Disallow direct calls to the 'set' function of 'useState' in 'useEffect'.
   * @see [hooks-extra/no-direct-set-state-in-use-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect)
   */
  'react/hooks-extra/no-direct-set-state-in-use-effect': null;

  /**
   * Disallow direct calls to the 'set' function of 'useState' in 'useLayoutEffect'.
   * @see [hooks-extra/no-direct-set-state-in-use-layout-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect)
   */
  'react/hooks-extra/no-direct-set-state-in-use-layout-effect': null;

  /**
   * Disallow function calls in 'useState' that aren't wrapped in an initializer function.
   * @see [hooks-extra/prefer-use-state-lazy-initialization](https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization)
   */
  'react/hooks-extra/prefer-use-state-lazy-initialization': null;

  /**
   * Enforce component naming convention to 'PascalCase' or 'CONSTANT_CASE'.
   * @see [naming-convention/component-name](https://eslint-react.xyz/docs/rules/naming-convention-component-name)
   */
  'react/naming-convention/component-name': [
    NamingConventionComponentNameOption?,
  ];

  /**
   * Enforce naming convention for JSX filenames.
   * @see [naming-convention/filename](https://eslint-react.xyz/docs/rules/naming-convention-filename)
   */
  'react/naming-convention/filename': [NamingConventionFilenameOption?];

  /**
   * Enforce naming convention for JSX file extensions.
   * @see [naming-convention/filename-extension](https://eslint-react.xyz/docs/rules/naming-convention-filename-extension)
   */
  'react/naming-convention/filename-extension': [
    NamingConventionFilenameExtensionOption?,
  ];

  /**
   * Enforce destructuring and symmetric naming of 'useState' hook value and setter variables.
   * @see [naming-convention/use-state](https://eslint-react.xyz/docs/rules/naming-convention-use-state)
   */
  'react/naming-convention/use-state': null;

  /**
   * Report all class components, including anonymous ones.
   * @see [debug/class-component](https://eslint-react.xyz/docs/rules/debug-class-component)
   */
  'react/debug/class-component': null;

  /**
   * Report all function components, including anonymous ones.
   * @see [debug/function-component](https://eslint-react.xyz/docs/rules/debug-function-component)
   */
  'react/debug/function-component': null;

  /**
   * Report all React Hooks.
   * @see [debug/react-hooks](https://eslint-react.xyz/docs/rules/debug-react-hooks)
   */
  'react/debug/react-hooks': null;
}

export type ReactRulesObject = RulesObject<ReactRules>;
