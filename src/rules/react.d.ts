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
      ignoreFilesWithoutCode?: boolean;
    };

/**
 * All React rules.
 */
export interface ReactRules {
  /**
   * Enforces explicit boolean values for boolean attributes.
   * @see [avoid-shorthand-boolean](https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean)
   */
  '@eslint-react/avoid-shorthand-boolean': null;

  /**
   * Enforces explicit `<Fragment>` components instead of the shorthand `<>` or `</>` syntax.
   * @see [avoid-shorthand-fragment](https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment)
   */
  '@eslint-react/avoid-shorthand-fragment': null;

  /**
   * Disallow accessing `this.state` inside `setState` calls.
   * @see [no-access-state-in-setstate](https://eslint-react.xyz/docs/rules/no-access-state-in-setstate)
   */
  '@eslint-react/no-access-state-in-setstate': null;

  /**
   * Disallow an item's index in the array as its key.
   * @see [no-array-index-key](https://eslint-react.xyz/docs/rules/no-array-index-key)
   */
  '@eslint-react/no-array-index-key': null;

  /**
   * Disallow `Children.count`.
   * @see [no-children-count](https://eslint-react.xyz/docs/rules/no-children-count)
   */
  '@eslint-react/no-children-count': null;

  /**
   * Disallow 'Children.forEach'.
   * @see [no-children-for-each](https://eslint-react.xyz/docs/rules/no-children-for-each)
   */
  '@eslint-react/no-children-for-each': null;

  /**
   * Disallow `Children.map`.
   * @see [no-children-map](https://eslint-react.xyz/docs/rules/no-children-map)
   */
  '@eslint-react/no-children-map': null;

  /**
   * Disallow `Children.only`.
   * @see [no-children-only](https://eslint-react.xyz/docs/rules/no-children-only)
   */
  '@eslint-react/no-children-only': null;

  /**
   * Disallow passing `children` as a prop.
   * @see [no-children-prop](https://eslint-react.xyz/docs/rules/no-children-prop)
   */
  '@eslint-react/no-children-prop': null;

  /**
   * Disallow `Children.toArray`.
   * @see [no-children-to-array](https://eslint-react.xyz/docs/rules/no-children-to-array)
   */
  '@eslint-react/no-children-to-array': null;

  /**
   * Disallow class components except for error boundaries.
   * @see [no-class-component](https://eslint-react.xyz/docs/rules/no-class-component)
   */
  '@eslint-react/no-class-component': null;

  /**
   * Disallow `cloneElement`.
   * @see [no-clone-element](https://eslint-react.xyz/docs/rules/no-clone-element)
   */
  '@eslint-react/no-clone-element': null;

  /**
   * Prevents comments from being inserted as text nodes.
   * @see [no-comment-textnodes](https://eslint-react.xyz/docs/rules/no-comment-textnodes)
   */
  '@eslint-react/no-comment-textnodes': null;

  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see [no-complex-conditional-rendering](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)
   */
  '@eslint-react/no-complex-conditional-rendering': null;

  /**
   * Replace usages of `componentWillMount` with `UNSAFE_componentWillMount`.
   * @see [no-component-will-mount](https://eslint-react.xyz/docs/rules/no-component-will-mount)
   */
  '@eslint-react/no-component-will-mount': null;

  /**
   * Replace usages of `componentWillReceiveProps` with `UNSAFE_componentWillReceiveProps`.
   * @see [no-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-component-will-receive-props)
   */
  '@eslint-react/no-component-will-receive-props': null;

  /**
   * Replace usages of `componentWillUpdate` with `UNSAFE_componentWillUpdate`.
   * @see [no-component-will-update](https://eslint-react.xyz/docs/rules/no-component-will-update)
   */
  '@eslint-react/no-component-will-update': null;

  /**
   * Replace usages of `<Context.Provider>` with `<Context>`.
   * @see [no-context-provider](https://eslint-react.xyz/docs/rules/no-context-provider)
   */
  '@eslint-react/no-context-provider': null;

  /**
   * Disallow `createRef` in function components.
   * @see [no-create-ref](https://eslint-react.xyz/docs/rules/no-create-ref)
   */
  '@eslint-react/no-create-ref': null;

  /**
   * Disallow `defaultProps` property in favor of ES6 default parameters.
   * @see [no-default-props](https://eslint-react.xyz/docs/rules/no-default-props)
   */
  '@eslint-react/no-default-props': null;

  /**
   * Disallow direct mutation of `this.state`.
   * @see [no-direct-mutation-state](https://eslint-react.xyz/docs/rules/no-direct-mutation-state)
   */
  '@eslint-react/no-direct-mutation-state': null;

  /**
   * Disallow duplicate `key` on elements in the same array or a list of `children`.
   * @see [no-duplicate-key](https://eslint-react.xyz/docs/rules/no-duplicate-key)
   */
  '@eslint-react/no-duplicate-key': null;

  /**
   * Replaces usages of `forwardRef` with passing `ref` as a prop.
   * @see [no-forward-ref](https://eslint-react.xyz/docs/rules/no-forward-ref)
   */
  '@eslint-react/no-forward-ref': null;

  /**
   * Prevents `key` from not being explicitly specified (e.g. spreading `key` from objects).
   * @see [no-implicit-key](https://eslint-react.xyz/docs/rules/no-implicit-key)
   */
  '@eslint-react/no-implicit-key': null;

  /**
   * Prevents problematic leaked values from being rendered.
   * @see [no-leaked-conditional-rendering](https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering)
   */
  '@eslint-react/no-leaked-conditional-rendering': null;

  /**
   * Enforces that all components have a `displayName` which can be used in devtools.
   * @see [no-missing-component-display-name](https://eslint-react.xyz/docs/rules/no-missing-component-display-name)
   */
  '@eslint-react/no-missing-component-display-name': null;

  /**
   * Enforces that all contexts have a `displayName` which can be used in devtools.
   * @see [no-missing-context-display-name](https://eslint-react.xyz/docs/rules/no-missing-context-display-name)
   */
  '@eslint-react/no-missing-context-display-name': null;

  /**
   * Disallow missing `key` on items in list rendering.
   * @see [no-missing-key](https://eslint-react.xyz/docs/rules/no-missing-key)
   */
  '@eslint-react/no-missing-key': null;

  /**
   * Prevents incorrect usage of `captureOwnerStack`.
   * @see [no-misused-capture-owner-stack](https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack)
   */
  '@eslint-react/no-misused-capture-owner-stack': null;

  /**
   * Disallow nesting component definitions inside other components.
   * @see [no-nested-component-definitions](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)
   */
  '@eslint-react/no-nested-component-definitions': null;

  /**
   * Disallow nesting lazy component declarations inside other components.
   * @see [no-nested-lazy-component-declarations](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)
   */
  '@eslint-react/no-nested-lazy-component-declarations': null;

  /**
   * Disallow `propTypes` in favor of TypeScript or another type-checking solution.
   * @see [no-prop-types](https://eslint-react.xyz/docs/rules/no-prop-types)
   */
  '@eslint-react/no-prop-types': null;

  /**
   * Disallow `shouldComponentUpdate` when extending `React.PureComponent`.
   * @see [no-redundant-should-component-update](https://eslint-react.xyz/docs/rules/no-redundant-should-component-update)
   */
  '@eslint-react/no-redundant-should-component-update': null;

  /**
   * Disallow calling `this.setState` in `componentDidMount` outside of functions, such as callbacks.
   * @see [no-set-state-in-component-did-mount](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount)
   */
  '@eslint-react/no-set-state-in-component-did-mount': null;

  /**
   * Disallow calling `this.setState` in `componentDidUpdate` outside of functions, such as callbacks.
   * @see [no-set-state-in-component-did-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update)
   */
  '@eslint-react/no-set-state-in-component-did-update': null;

  /**
   * Disallows calling `this.setState` in `componentWillUpdate` outside of functions, such as callbacks.
   * @see [no-set-state-in-component-will-update](https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update)
   */
  '@eslint-react/no-set-state-in-component-will-update': null;

  /**
   * Replaces string refs with callback refs.
   * @see [no-string-refs](https://eslint-react.xyz/docs/rules/no-string-refs)
   */
  '@eslint-react/no-string-refs': null;

  /**
   * Warns the usage of `UNSAFE_componentWillMount` in class components.
   * @see [no-unsafe-component-will-mount](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount)
   */
  '@eslint-react/no-unsafe-component-will-mount': null;

  /**
   * Warns the usage of `UNSAFE_componentWillReceiveProps` in class components.
   * @see [no-unsafe-component-will-receive-props](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props)
   */
  '@eslint-react/no-unsafe-component-will-receive-props': null;

  /**
   * Warns the usage of `UNSAFE_componentWillUpdate` in class components.
   * @see [no-unsafe-component-will-update](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update)
   */
  '@eslint-react/no-unsafe-component-will-update': null;

  /**
   * Prevents non-stable values (i.e. object literals) from being used as a value for `Context.Provider`.
   * @see [no-unstable-context-value](https://eslint-react.xyz/docs/rules/no-unstable-context-value)
   */
  '@eslint-react/no-unstable-context-value': null;

  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see [no-unstable-default-props](https://eslint-react.xyz/docs/rules/no-unstable-default-props)
   */
  '@eslint-react/no-unstable-default-props': null;

  /**
   * Warns unused class component methods and properties.
   * @see [no-unused-class-component-members](https://eslint-react.xyz/docs/rules/no-unused-class-component-members)
   */
  '@eslint-react/no-unused-class-component-members': null;

  /**
   * Warns unused class component state.
   * @see [no-unused-state](https://eslint-react.xyz/docs/rules/no-unused-state)
   */
  '@eslint-react/no-unused-state': null;

  /**
   * Replaces usages of `useContext` with `use`.
   * @see [no-use-context](https://eslint-react.xyz/docs/rules/no-use-context)
   */
  '@eslint-react/no-use-context': null;

  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see [no-useless-forward-ref](https://eslint-react.xyz/docs/rules/no-useless-forward-ref)
   */
  '@eslint-react/no-useless-forward-ref': null;

  /**
   * Disallow useless fragment elements.
   * @see [no-useless-fragment](https://eslint-react.xyz/docs/rules/no-useless-fragment)
   */
  '@eslint-react/no-useless-fragment': [NoUselessFragmentOption?];

  /**
   * Enforces destructuring assignment for component props and context.
   * @see [prefer-destructuring-assignment](https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment)
   */
  '@eslint-react/prefer-destructuring-assignment': null;

  /**
   * Enforces React is imported via a namespace import.
   * @see [prefer-react-namespace-import](https://eslint-react.xyz/docs/rules/prefer-react-namespace-import)
   */
  '@eslint-react/prefer-react-namespace-import': null;

  /**
   * Enforces read-only props in components.
   * @see [prefer-read-only-props](https://eslint-react.xyz/docs/rules/prefer-read-only-props)
   */
  '@eslint-react/prefer-read-only-props': null;

  /**
   * Enforces shorthand syntax for boolean attributes.
   * @see [prefer-shorthand-boolean](https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean)
   */
  '@eslint-react/prefer-shorthand-boolean': null;

  /**
   * Enforces shorthand syntax for fragments.
   * @see [prefer-shorthand-fragment](https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment)
   */
  '@eslint-react/prefer-shorthand-fragment': null;

  /**
   * Disallow duplicate props in JSX elements.
   * @see [jsx-no-duplicate-props](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)
   */
  '@eslint-react/jsx-no-duplicate-props': null;

  /**
   * Disallow undefined variables in JSX.
   * @see [jsx-no-undef](https://eslint-react.xyz/docs/rules/jsx-no-undef)
   */
  '@eslint-react/jsx-no-undef': null;

  /**
   * Marks React variables as used when JSX is used.
   * @see [jsx-uses-react](https://eslint-react.xyz/docs/rules/jsx-uses-react)
   */
  '@eslint-react/jsx-uses-react': null;

  /**
   * Marks variables used in JSX elements as used.
   * @see [jsx-uses-vars](https://eslint-react.xyz/docs/rules/jsx-uses-vars)
   */
  '@eslint-react/jsx-uses-vars': null;

  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see [ensure-forward-ref-using-ref](https://eslint-react.xyz/docs/rules/no-useless-forward-ref)
   */
  '@eslint-react/ensure-forward-ref-using-ref': null;

  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see [no-complicated-conditional-rendering](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)
   */
  '@eslint-react/no-complicated-conditional-rendering': null;

  /**
   * Disallow duplicate props in JSX elements.
   * @see [no-duplicate-jsx-props](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)
   */
  '@eslint-react/no-duplicate-jsx-props': null;

  /**
   * Disallow nesting component definitions inside other components.
   * @see [no-nested-components](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)
   */
  '@eslint-react/no-nested-components': null;

  /**
   * Marks variables used in JSX elements as used.
   * @see [use-jsx-vars](https://eslint-react.xyz/docs/rules/jsx-uses-vars)
   */
  '@eslint-react/use-jsx-vars': null;

  /**
   * Disallow `dangerouslySetInnerHTML`.
   * @see [dom/no-dangerously-set-innerhtml](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml)
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml': null;

  /**
   * Disallow `dangerouslySetInnerHTML` and `children` at the same time.
   * @see [dom/no-dangerously-set-innerhtml-with-children](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children)
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': null;

  /**
   * Disallow `findDOMNode`.
   * @see [dom/no-find-dom-node](https://eslint-react.xyz/docs/rules/dom-no-find-dom-node)
   */
  '@eslint-react/dom/no-find-dom-node': null;

  /**
   * Disallow `flushSync`.
   * @see [dom/no-flush-sync](https://eslint-react.xyz/docs/rules/dom-no-flush-sync)
   */
  '@eslint-react/dom/no-flush-sync': null;

  /**
   * Replaces usages of `ReactDom.hydrate()` with `hydrateRoot()`.
   * @see [dom/no-hydrate](https://eslint-react.xyz/docs/rules/dom-no-hydrate)
   */
  '@eslint-react/dom/no-hydrate': null;

  /**
   * Enforces explicit `type` attribute for `button` elements.
   * @see [dom/no-missing-button-type](https://eslint-react.xyz/docs/rules/dom-no-missing-button-type)
   */
  '@eslint-react/dom/no-missing-button-type': null;

  /**
   * Enforces explicit `sandbox` attribute for `iframe` elements.
   * @see [dom/no-missing-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox)
   */
  '@eslint-react/dom/no-missing-iframe-sandbox': null;

  /**
   * Enforces the absence of a `namespace` in React elements.
   * @see [dom/no-namespace](https://eslint-react.xyz/docs/rules/dom-no-namespace)
   */
  '@eslint-react/dom/no-namespace': null;

  /**
   * Replaces usages of `ReactDom.render()` with `createRoot(node).render()`.
   * @see [dom/no-render](https://eslint-react.xyz/docs/rules/dom-no-render)
   */
  '@eslint-react/dom/no-render': null;

  /**
   * Disallow the return value of `ReactDOM.render`.
   * @see [dom/no-render-return-value](https://eslint-react.xyz/docs/rules/dom-no-render-return-value)
   */
  '@eslint-react/dom/no-render-return-value': null;

  /**
   * Disallow `javascript:` URLs as attribute values.
   * @see [dom/no-script-url](https://eslint-react.xyz/docs/rules/dom-no-script-url)
   */
  '@eslint-react/dom/no-script-url': null;

  /**
   * Disallow unknown `DOM` property.
   * @see [dom/no-unknown-property](https://eslint-react.xyz/docs/rules/dom-no-unknown-property)
   */
  '@eslint-react/dom/no-unknown-property': [
    {
      ignore?: string[];
      requireDataLowercase?: boolean;
    }?,
  ];

  /**
   * Enforces `sandbox` attribute for `iframe` elements is not set to unsafe combinations.
   * @see [dom/no-unsafe-iframe-sandbox](https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox)
   */
  '@eslint-react/dom/no-unsafe-iframe-sandbox': null;

  /**
   * Disallow `target="_blank"` without `rel="noreferrer noopener"`.
   * @see [dom/no-unsafe-target-blank](https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank)
   */
  '@eslint-react/dom/no-unsafe-target-blank': null;

  /**
   * Replaces usages of `useFormState` with `useActionState`.
   * @see [dom/no-use-form-state](https://eslint-react.xyz/docs/rules/dom-no-use-form-state)
   */
  '@eslint-react/dom/no-use-form-state': null;

  /**
   * Disallow `children` in void DOM elements.
   * @see [dom/no-void-elements-with-children](https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children)
   */
  '@eslint-react/dom/no-void-elements-with-children': null;

  /**
   * Disallow `children` in void DOM elements.
   * @see [dom/no-children-in-void-dom-elements](https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children)
   */
  '@eslint-react/dom/no-children-in-void-dom-elements': null;

  /**
   * Prevents leaked `addEventListener` in a component or custom Hook.
   * @see [web-api/no-leaked-event-listener](https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener)
   */
  '@eslint-react/web-api/no-leaked-event-listener': null;

  /**
   * Prevents leaked `setInterval` in a component or custom Hook.
   * @see [web-api/no-leaked-interval](https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval)
   */
  '@eslint-react/web-api/no-leaked-interval': null;

  /**
   * Prevents leaked `ResizeObserver` in a component or custom Hook.
   * @see [web-api/no-leaked-resize-observer](https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer)
   */
  '@eslint-react/web-api/no-leaked-resize-observer': null;

  /**
   * Prevents leaked `setTimeout` in a component or custom Hook.
   * @see [web-api/no-leaked-timeout](https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout)
   */
  '@eslint-react/web-api/no-leaked-timeout': null;

  /**
   * Disallow direct calls to the `set` function of `useState` in `useEffect`.
   * @see [hooks-extra/no-direct-set-state-in-use-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect)
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': null;

  /**
   * Disallow direct calls to the `set` function of `useState` in `useLayoutEffect`.
   * @see [hooks-extra/no-direct-set-state-in-use-layout-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect)
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect': null;

  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see [hooks-extra/no-unnecessary-use-callback](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback)
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-callback': null;

  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see [hooks-extra/no-unnecessary-use-memo](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-memo': null;

  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see [hooks-extra/no-unnecessary-use-prefix](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-prefix': null;

  /**
   * Enforces function calls made inside `useState` to be wrapped in an `initializer function`.
   * @see [hooks-extra/prefer-use-state-lazy-initialization](https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization)
   */
  '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': null;

  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see [hooks-extra/ensure-custom-hooks-using-other-hooks](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)
   */
  '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': null;

  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see [hooks-extra/ensure-use-callback-has-non-empty-deps](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback)
   */
  '@eslint-react/hooks-extra/ensure-use-callback-has-non-empty-deps': null;

  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see [hooks-extra/ensure-use-memo-has-non-empty-deps](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)
   */
  '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': null;

  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see [hooks-extra/no-redundant-custom-hook](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)
   */
  '@eslint-react/hooks-extra/no-redundant-custom-hook': null;

  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see [hooks-extra/no-useless-custom-hooks](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)
   */
  '@eslint-react/hooks-extra/no-useless-custom-hooks': null;

  /**
   * Enforces naming conventions for components.
   * @see [naming-convention/component-name](https://eslint-react.xyz/docs/rules/naming-convention-component-name)
   */
  '@eslint-react/naming-convention/component-name': [
    NamingConventionComponentNameOption?,
  ];

  /**
   * Enforces context name to be a valid component name with the suffix `Context`.
   * @see [naming-convention/context-name](https://eslint-react.xyz/docs/rules/naming-convention-context-name)
   */
  '@eslint-react/naming-convention/context-name': null;

  /**
   * Enforces consistent file naming conventions.
   * @see [naming-convention/filename](https://eslint-react.xyz/docs/rules/naming-convention-filename)
   */
  '@eslint-react/naming-convention/filename': [NamingConventionFilenameOption?];

  /**
   * Enforces consistent file naming conventions.
   * @see [naming-convention/filename-extension](https://eslint-react.xyz/docs/rules/naming-convention-filename-extension)
   */
  '@eslint-react/naming-convention/filename-extension': [
    NamingConventionFilenameExtensionOption?,
  ];

  /**
   * Enforces destructuring and symmetric naming of `useState` hook value and setter.
   * @see [naming-convention/use-state](https://eslint-react.xyz/docs/rules/naming-convention-use-state)
   */
  '@eslint-react/naming-convention/use-state': null;

  /**
   * Reports all class components.
   * @see [debug/class-component](https://eslint-react.xyz/docs/rules/debug-class-component)
   */
  '@eslint-react/debug/class-component': null;

  /**
   * Reports all function components.
   * @see [debug/function-component](https://eslint-react.xyz/docs/rules/debug-function-component)
   */
  '@eslint-react/debug/function-component': null;

  /**
   * Reports all React Hooks.
   * @see [debug/hook](https://eslint-react.xyz/docs/rules/debug-hook)
   */
  '@eslint-react/debug/hook': null;

  /**
   * Reports all identifiers that are initialized from React.
   * @see [debug/is-from-react](https://eslint-react.xyz/docs/rules/debug-is-from-react)
   */
  '@eslint-react/debug/is-from-react': null;

  /**
   * Reports all JSX elements and fragments.
   * @see [debug/jsx](https://eslint-react.xyz/docs/rules/debug-jsx)
   */
  '@eslint-react/debug/jsx': null;

  /**
   * Reports all React Hooks.
   * @see [debug/react-hooks](https://eslint-react.xyz/docs/rules/debug-hook)
   */
  '@eslint-react/debug/react-hooks': null;
}

export type ReactRulesObject = RulesObject<ReactRules>;
