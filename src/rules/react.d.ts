import type { RulesObject } from '../rule-config';

export interface NoUselessFragmentOption {
  /**
   * Allow fragments with a single expression child
   */
  allowExpressions?: boolean;
}

export type NamingConventionComponentNameOption =
  | ('PascalCase' | 'CONSTANT_CASE')
  | {
      allowAllCaps?: boolean;
      allowLeadingUnderscore?: boolean;
      allowNamespace?: boolean;
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
   * Disallow using shorthand boolean attributes.
   * @see [avoid-shorthand-boolean](https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean)
   */
  '@eslint-react/avoid-shorthand-boolean': null;

  /**
   * Disallow using shorthand fragment syntax.
   * @see [avoid-shorthand-fragment](https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment)
   */
  '@eslint-react/avoid-shorthand-fragment': null;

  /**
   * Require a 'ref' parameter to be set when using 'forwardRef'.
   * @see [ensure-forward-ref-using-ref](https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref)
   */
  '@eslint-react/ensure-forward-ref-using-ref': null;

  /**
   * Disallow duplicate props.
   * @see [jsx-no-duplicate-props](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)
   */
  '@eslint-react/jsx-no-duplicate-props': null;

  /**
   * A helper rule to mark variables as used.
   * @see [jsx-uses-vars](https://eslint-react.xyz/docs/rules/jsx-uses-vars)
   */
  '@eslint-react/jsx-uses-vars': null;

  /**
   * Disallow accessing 'this.state' within 'setState'.
   * @see [no-access-state-in-setstate](https://eslint-react.xyz/docs/rules/no-access-state-in-setstate)
   */
  '@eslint-react/no-access-state-in-setstate': null;

  /**
   * Disallow using Array index as 'key'.
   * @see [no-array-index-key](https://eslint-react.xyz/docs/rules/no-array-index-key)
   */
  '@eslint-react/no-array-index-key': null;

  /**
   * Disallow using 'Children.count'.
   * @see [no-children-count](https://eslint-react.xyz/docs/rules/no-children-count)
   */
  '@eslint-react/no-children-count': null;

  /**
   * Disallow using 'Children.forEach'.
   * @see [no-children-for-each](https://eslint-react.xyz/docs/rules/no-children-for-each)
   */
  '@eslint-react/no-children-for-each': null;

  /**
   * Disallow using 'Children.map'.
   * @see [no-children-map](https://eslint-react.xyz/docs/rules/no-children-map)
   */
  '@eslint-react/no-children-map': null;

  /**
   * Disallow using 'Children.only'.
   * @see [no-children-only](https://eslint-react.xyz/docs/rules/no-children-only)
   */
  '@eslint-react/no-children-only': null;

  /**
   * Disallow passing 'children' as props.
   * @see [no-children-prop](https://eslint-react.xyz/docs/rules/no-children-prop)
   */
  '@eslint-react/no-children-prop': null;

  /**
   * Disallow using 'Children.toArray'.
   * @see [no-children-to-array](https://eslint-react.xyz/docs/rules/no-children-to-array)
   */
  '@eslint-react/no-children-to-array': null;

  /**
   * Disallow using class components.
   * @see [no-class-component](https://eslint-react.xyz/docs/rules/no-class-component)
   */
  '@eslint-react/no-class-component': null;

  /**
   * Disallow using 'cloneElement'.
   * @see [no-clone-element](https://eslint-react.xyz/docs/rules/no-clone-element)
   */
  '@eslint-react/no-clone-element': null;

  /**
   * Disallow comments from being inserted as text nodes.
   * @see [no-comment-textnodes](https://eslint-react.xyz/docs/rules/no-comment-textnodes)
   */
  '@eslint-react/no-comment-textnodes': null;

  /**
   * Disallow complex conditional rendering.
   * @see [no-complex-conditional-rendering](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)
   */
  '@eslint-react/no-complex-conditional-rendering': null;

  /**
   * Disallow using 'componentWillMount'.
   * @see [no-component-will-mount](https://eslint-react.xyz/docs/rules/no-component-will-mount)
   */
  '@eslint-react/no-component-will-mount': null;

  /**
   * Disallow using 'componentWillReceiveProps'.
   * @see [no-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-component-will-receive-props)
   */
  '@eslint-react/no-component-will-receive-props': null;

  /**
   * Disallow using 'componentWillReceiveProps'.
   * @see [no-component-will-update](https://eslint-react.xyz/docs/rules/no-component-will-update)
   */
  '@eslint-react/no-component-will-update': null;

  /**
   * Disallow using 'createRef' in function components.
   * @see [no-create-ref](https://eslint-react.xyz/docs/rules/no-create-ref)
   */
  '@eslint-react/no-create-ref': null;

  /**
   * Disallow using 'defaultProps' property in components.
   * @see [no-default-props](https://eslint-react.xyz/docs/rules/no-default-props)
   */
  '@eslint-react/no-default-props': null;

  /**
   * Disallow direct mutation of state.
   * @see [no-direct-mutation-state](https://eslint-react.xyz/docs/rules/no-direct-mutation-state)
   */
  '@eslint-react/no-direct-mutation-state': null;

  /**
   * Disallow duplicate keys when rendering list.
   * @see [no-duplicate-key](https://eslint-react.xyz/docs/rules/no-duplicate-key)
   */
  '@eslint-react/no-duplicate-key': null;

  /**
   * Disallow implicit 'key' props.
   * @see [no-implicit-key](https://eslint-react.xyz/docs/rules/no-implicit-key)
   */
  '@eslint-react/no-implicit-key': null;

  /**
   * Disallow problematic leaked values from being rendered.
   * @see [no-leaked-conditional-rendering](https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering)
   */
  '@eslint-react/no-leaked-conditional-rendering': null;

  /**
   * Require 'displayName' for 'memo' and 'forwardRef' components.
   * @see [no-missing-component-display-name](https://eslint-react.xyz/docs/rules/no-missing-component-display-name)
   */
  '@eslint-react/no-missing-component-display-name': null;

  /**
   * Require 'key' when rendering list.
   * @see [no-missing-key](https://eslint-react.xyz/docs/rules/no-missing-key)
   */
  '@eslint-react/no-missing-key': null;

  /**
   * Disallow using unstable nested components.
   * @see [no-nested-components](https://eslint-react.xyz/docs/rules/no-nested-components)
   */
  '@eslint-react/no-nested-components': null;

  /**
   * Disallow using 'propTypes' property in components.
   * @see [no-prop-types](https://eslint-react.xyz/docs/rules/no-prop-types)
   */
  '@eslint-react/no-prop-types': null;

  /**
   * Disallow using 'shouldComponentUpdate' in class component extends 'React.PureComponent'.
   * @see [no-redundant-should-component-update](https://eslint-react.xyz/docs/rules/no-redundant-should-component-update)
   */
  '@eslint-react/no-redundant-should-component-update': null;

  /**
   * Disallow using 'setState' in 'componentDidMount'.
   * @see [no-set-state-in-component-did-mount](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount)
   */
  '@eslint-react/no-set-state-in-component-did-mount': null;

  /**
   * Disallow using 'setState' in 'componentDidUpdate'.
   * @see [no-set-state-in-component-did-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update)
   */
  '@eslint-react/no-set-state-in-component-did-update': null;

  /**
   * Disallow using 'setState' in 'componentWillUpdate'.
   * @see [no-set-state-in-component-will-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update)
   */
  '@eslint-react/no-set-state-in-component-will-update': null;

  /**
   * Disallow using deprecated string refs.
   * @see [no-string-refs](https://eslint-react.xyz/docs/rules/no-string-refs)
   */
  '@eslint-react/no-string-refs': null;

  /**
   * Disallow using 'UNSAFE_componentWillMount'.
   * @see [no-unsafe-component-will-mount](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount)
   */
  '@eslint-react/no-unsafe-component-will-mount': null;

  /**
   * Disallow using 'UNSAFE_componentWillReceiveProps'.
   * @see [no-unsafe-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props)
   */
  '@eslint-react/no-unsafe-component-will-receive-props': null;

  /**
   * Disallow using 'UNSAFE_componentWillUpdate'.
   * @see [no-unsafe-component-will-update](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update)
   */
  '@eslint-react/no-unsafe-component-will-update': null;

  /**
   * Disallow passing constructed values to context providers.
   * @see [no-unstable-context-value](https://eslint-react.xyz/docs/rules/no-unstable-context-value)
   */
  '@eslint-react/no-unstable-context-value': null;

  /**
   * Disallow using unstable value as default param in function component.
   * @see [no-unstable-default-props](https://eslint-react.xyz/docs/rules/no-unstable-default-props)
   */
  '@eslint-react/no-unstable-default-props': null;

  /**
   * Disallow unused class component members.
   * @see [no-unused-class-component-members](https://eslint-react.xyz/docs/rules/no-unused-class-component-members)
   */
  '@eslint-react/no-unused-class-component-members': null;

  /**
   * Disallow unused state of class component.
   * @see [no-unused-state](https://eslint-react.xyz/docs/rules/no-unused-state)
   */
  '@eslint-react/no-unused-state': null;

  /**
   * Disallow unnecessary fragments.
   * @see [no-useless-fragment](https://eslint-react.xyz/docs/rules/no-useless-fragment)
   */
  '@eslint-react/no-useless-fragment': [NoUselessFragmentOption?];

  /**
   * Enforce using destructuring assignment in component props and context.
   * @see [prefer-destructuring-assignment](https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment)
   */
  '@eslint-react/prefer-destructuring-assignment': null;

  /**
   * Enforce React is imported via a namespace import.
   * @see [prefer-react-namespace-import](https://eslint-react.xyz/docs/rules/prefer-react-namespace-import)
   */
  '@eslint-react/prefer-react-namespace-import': null;

  /**
   * Enforce read-only props in components.
   * @see [prefer-read-only-props](https://eslint-react.xyz/docs/rules/prefer-read-only-props)
   */
  '@eslint-react/prefer-read-only-props': null;

  /**
   * Enforce using shorthand boolean attributes.
   * @see [prefer-shorthand-boolean](https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean)
   */
  '@eslint-react/prefer-shorthand-boolean': null;

  /**
   * Enforce using fragment syntax instead of 'Fragment' component.
   * @see [prefer-shorthand-fragment](https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment)
   */
  '@eslint-react/prefer-shorthand-fragment': null;

  /**
   * Disallow complex conditional rendering.
   * @see [no-complicated-conditional-rendering](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)
   */
  '@eslint-react/no-complicated-conditional-rendering': null;

  /**
   * Disallow passing 'children' to void DOM elements.
   * @see [dom/no-children-in-void-dom-elements](https://eslint-react.xyz/docs/rules/dom-no-children-in-void-dom-elements)
   */
  '@eslint-react/dom/no-children-in-void-dom-elements': null;

  /**
   * Disallow when a DOM component is using 'dangerouslySetInnerHTML'.
   * @see [dom/no-dangerously-set-innerhtml](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml)
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml': null;

  /**
   * Disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'.
   * @see [dom/no-dangerously-set-innerhtml-with-children](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children)
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': null;

  /**
   * Disallow 'findDOMNode'.
   * @see [dom/no-find-dom-node](https://eslint-react.xyz/docs/rules/dom-no-find-dom-node)
   */
  '@eslint-react/dom/no-find-dom-node': null;

  /**
   * Enforce that button component have an explicit 'type' attribute.
   * @see [dom/no-missing-button-type](https://eslint-react.xyz/docs/rules/dom-no-missing-button-type)
   */
  '@eslint-react/dom/no-missing-button-type': null;

  /**
   * Enforce that 'iframe' component have an explicit 'sandbox' attribute.
   * @see [dom/no-missing-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox)
   */
  '@eslint-react/dom/no-missing-iframe-sandbox': null;

  /**
   * Enforce that namespaces are not used in React elements.
   * @see [dom/no-namespace](https://eslint-react.xyz/docs/rules/dom-no-namespace)
   */
  '@eslint-react/dom/no-namespace': null;

  /**
   * Disallow usage of the return value of 'ReactDOM.render'.
   * @see [dom/no-render-return-value](https://eslint-react.xyz/docs/rules/dom-no-render-return-value)
   */
  '@eslint-react/dom/no-render-return-value': null;

  /**
   * Disallow 'javascript:' URLs as JSX event handler prop's value.
   * @see [dom/no-script-url](https://eslint-react.xyz/docs/rules/dom-no-script-url)
   */
  '@eslint-react/dom/no-script-url': null;

  /**
   * Disallow usage of unknown DOM property.
   * @see [dom/no-unknown-property](https://eslint-react.xyz/docs/rules/dom-no-unknown-property)
   */
  '@eslint-react/dom/no-unknown-property': [
    {
      ignore?: string[];
      requireDataLowercase?: boolean;
    }?,
  ];

  /**
   * Disallow unsafe iframe 'sandbox' attribute combinations.
   * @see [dom/no-unsafe-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox)
   */
  '@eslint-react/dom/no-unsafe-iframe-sandbox': null;

  /**
   * Disallow 'target="_blank"' on an external link without 'rel="noreferrer noopener"'.
   * @see [dom/no-unsafe-target-blank](https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank)
   */
  '@eslint-react/dom/no-unsafe-target-blank': null;

  /**
   * Enforce that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see [web-api/no-leaked-event-listener](https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener)
   */
  '@eslint-react/web-api/no-leaked-event-listener': null;

  /**
   * Enforce that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see [web-api/no-leaked-interval](https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval)
   */
  '@eslint-react/web-api/no-leaked-interval': null;

  /**
   * Enforce cleanup of 'ResizeObserver' instances in components and custom hooks.
   * @see [web-api/no-leaked-resize-observer](https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer)
   */
  '@eslint-react/web-api/no-leaked-resize-observer': null;

  /**
   * Enforce that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see [web-api/no-leaked-timeout](https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout)
   */
  '@eslint-react/web-api/no-leaked-timeout': null;

  /**
   * Disallow direct calls to the 'set' function of 'useState' in 'useEffect'.
   * @see [hooks-extra/no-direct-set-state-in-use-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect)
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': null;

  /**
   * Disallow direct calls to the 'set' function of 'useState' in 'useLayoutEffect'.
   * @see [hooks-extra/no-direct-set-state-in-use-layout-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect)
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect': null;

  /**
   * Enforce custom hooks to use at least one other hook inside.
   * @see [hooks-extra/no-redundant-custom-hook](https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook)
   */
  '@eslint-react/hooks-extra/no-redundant-custom-hook': null;

  /**
   * Disallow unnecessary usage of 'useCallback'.
   * @see [hooks-extra/no-unnecessary-use-callback](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback)
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-callback': null;

  /**
   * Disallow unnecessary usage of 'useMemo'.
   * @see [hooks-extra/no-unnecessary-use-memo](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-memo': null;

  /**
   * Disallow function calls in 'useState' that aren't wrapped in an initializer function.
   * @see [hooks-extra/prefer-use-state-lazy-initialization](https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization)
   */
  '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': null;

  /**
   * Enforce custom hooks to use at least one other hook inside.
   * @see [hooks-extra/ensure-custom-hooks-using-other-hooks](https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook)
   */
  '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': null;

  /**
   * Disallow unnecessary usage of 'useMemo'.
   * @see [hooks-extra/ensure-use-memo-has-non-empty-deps](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)
   */
  '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': null;

  /**
   * Enforce component naming convention to 'PascalCase' or 'CONSTANT_CASE'.
   * @see [naming-convention/component-name](https://eslint-react.xyz/docs/rules/naming-convention-component-name)
   */
  '@eslint-react/naming-convention/component-name': [
    NamingConventionComponentNameOption?,
  ];

  /**
   * Enforce naming convention for JSX filenames.
   * @see [naming-convention/filename](https://eslint-react.xyz/docs/rules/naming-convention-filename)
   */
  '@eslint-react/naming-convention/filename': [NamingConventionFilenameOption?];

  /**
   * Enforce naming convention for JSX file extensions.
   * @see [naming-convention/filename-extension](https://eslint-react.xyz/docs/rules/naming-convention-filename-extension)
   */
  '@eslint-react/naming-convention/filename-extension': [
    NamingConventionFilenameExtensionOption?,
  ];

  /**
   * Enforce destructuring and symmetric naming of 'useState' hook value and setter variables.
   * @see [naming-convention/use-state](https://eslint-react.xyz/docs/rules/naming-convention-use-state)
   */
  '@eslint-react/naming-convention/use-state': null;

  /**
   * Report all class components, including anonymous ones.
   * @see [debug/class-component](https://eslint-react.xyz/docs/rules/debug-class-component)
   */
  '@eslint-react/debug/class-component': null;

  /**
   * Report all function components, including anonymous ones.
   * @see [debug/function-component](https://eslint-react.xyz/docs/rules/debug-function-component)
   */
  '@eslint-react/debug/function-component': null;

  /**
   * Report all React Hooks.
   * @see [debug/hook](https://eslint-react.xyz/docs/rules/debug-hook)
   */
  '@eslint-react/debug/hook': null;

  /**
   * Report all identifiers that are initialized from React.
   * @see [debug/is-from-react](https://eslint-react.xyz/docs/rules/debug-is-from-react)
   */
  '@eslint-react/debug/is-from-react': null;

  /**
   * Report all React Hooks.
   * @see [debug/react-hooks](https://eslint-react.xyz/docs/rules/debug-hook)
   */
  '@eslint-react/debug/react-hooks': null;
}

export type ReactRulesObject = RulesObject<ReactRules>;
