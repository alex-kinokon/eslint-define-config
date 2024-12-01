import type { RulesObject } from '../rule-config';

/**
 * @maxItems 1
 */
export type KnownDirectivesOption =
  | []
  | [
      {
        /**
         * @minItems 1
         */
        ignoreClientDirectives: [string, ...string[]];
      },
    ];

/**
 * @minItems 1
 * @maxItems 1
 */
export type AlphabetizeOption = [
  {
    /**
     * Fields of `type`, `interface`, and `input`.
     *
     * @minItems 1
     */
    fields?: [
      (
        | 'ObjectTypeDefinition'
        | 'InterfaceTypeDefinition'
        | 'InputObjectTypeDefinition'
      ),
      ...(
        | 'ObjectTypeDefinition'
        | 'InterfaceTypeDefinition'
        | 'InputObjectTypeDefinition'
      )[],
    ];
    /**
     * Values of `enum`.
     */
    values?: boolean;
    /**
     * Selections of `fragment` and operations `query`, `mutation` and `subscription`.
     *
     * @minItems 1
     */
    selections?: [
      'OperationDefinition' | 'FragmentDefinition',
      ...('OperationDefinition' | 'FragmentDefinition')[],
    ];
    /**
     * Variables of operations `query`, `mutation` and `subscription`.
     */
    variables?: boolean;
    /**
     * Arguments of fields and directives.
     *
     * @minItems 1
     */
    arguments?: [
      'FieldDefinition' | 'Field' | 'DirectiveDefinition' | 'Directive',
      ...('FieldDefinition' | 'Field' | 'DirectiveDefinition' | 'Directive')[],
    ];
    /**
     * Definitions – `type`, `interface`, `enum`, `scalar`, `input`, `union` and `directive`.
     */
    definitions?: boolean;
    /**
     * Order group. Example: `['...', 'id', '*', '{']` where:
     * - `...` stands for fragment spreads
     * - `id` stands for field with name `id`
     * - `*` stands for everything else
     * - `{` stands for fields `selection set`
     *
     * @minItems 2
     */
    groups?: [string, string, ...string[]];
  },
];

/**
 * @maxItems 1
 */
export type DescriptionStyleOption =
  | []
  | [
      {
        style?: 'block' | 'inline';
      },
    ];

/**
 * @maxItems 1
 */
export type InputNameOption =
  | []
  | [
      {
        /**
         * Check that the input type name follows the convention \<mutationName>Input
         */
        checkInputType?: boolean;
        /**
         * Allow for case discrepancies in the input type name
         */
        caseSensitiveInputType?: boolean;
        /**
         * Apply the rule to Queries
         */
        checkQueries?: boolean;
        /**
         * Apply the rule to Mutations
         */
        checkMutations?: boolean;
      },
    ];

/**
 * @maxItems 1
 */
export type LoneExecutableDefinitionOption =
  | []
  | [
      {
        /**
         * Allow certain definitions to be placed alongside others.
         *
         * @minItems 1
         * @maxItems 3
         */
        ignore?:
          | ['fragment' | 'query' | 'mutation' | 'subscription']
          | [
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
            ]
          | [
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
            ];
      },
    ];

export namespace MatchDocumentFilename {
  /**
   * @minItems 1
   * @maxItems 1
   */
  export type MatchDocumentFilenameOption = [
    {
      fileExtension?: '.gql' | '.graphql';
      query?: AsString | AsObject;
      mutation?: AsString | AsObject;
      subscription?: AsString | AsObject;
      fragment?: AsString | AsObject;
    },
  ];
  /**
   * One of: `camelCase`, `PascalCase`, `snake_case`, `UPPER_CASE`, `kebab-case`, `matchDocumentStyle`
   */
  export type AsString =
    | 'camelCase'
    | 'PascalCase'
    | 'snake_case'
    | 'UPPER_CASE'
    | 'kebab-case'
    | 'matchDocumentStyle';

  export interface AsObject {
    style?:
      | 'camelCase'
      | 'PascalCase'
      | 'snake_case'
      | 'UPPER_CASE'
      | 'kebab-case'
      | 'matchDocumentStyle';
    suffix?: string;
    prefix?: string;
  }

  export type MatchDocumentFilenameRuleConfig = MatchDocumentFilenameOption;
}
export namespace NamingConvention {
  /**
   * @maxItems 1
   */
  export type NamingConventionOption =
    | []
    | [
        {
          /**
           * Includes:
           * - `ObjectTypeDefinition`
           * - `InterfaceTypeDefinition`
           * - `EnumTypeDefinition`
           * - `ScalarTypeDefinition`
           * - `InputObjectTypeDefinition`
           * - `UnionTypeDefinition`
           */
          types?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#Argument).
           */
          Argument?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#DirectiveDefinition).
           */
          DirectiveDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumTypeDefinition).
           */
          EnumTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumValueDefinition).
           */
          EnumValueDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FieldDefinition).
           */
          FieldDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FragmentDefinition).
           */
          FragmentDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputObjectTypeDefinition).
           */
          InputObjectTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputValueDefinition).
           */
          InputValueDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InterfaceTypeDefinition).
           */
          InterfaceTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ObjectTypeDefinition).
           */
          ObjectTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#OperationDefinition).
           */
          OperationDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ScalarTypeDefinition).
           */
          ScalarTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#UnionTypeDefinition).
           */
          UnionTypeDefinition?: AsString | AsObject;
          /**
           * > [!NOTE]
           * >
           * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#VariableDefinition).
           */
          VariableDefinition?: AsString | AsObject;
          allowLeadingUnderscore?: boolean;
          allowTrailingUnderscore?: boolean;
        } & {
          [k: string]: AsString | AsObject;
        },
      ];
  /**
   * One of: `camelCase`, `PascalCase`, `snake_case`, `UPPER_CASE`
   */
  export type AsString =
    | 'camelCase'
    | 'PascalCase'
    | 'snake_case'
    | 'UPPER_CASE';

  export interface AsObject {
    style?: 'camelCase' | 'PascalCase' | 'snake_case' | 'UPPER_CASE';
    prefix?: string;
    suffix?: string;
    /**
     * Should be of instance of `RegEx`
     *
     * @minItems 1
     */
    forbiddenPatterns?: [
      {
        [k: string]: any;
      },
      ...{
        [k: string]: any;
      }[],
    ];
    /**
     * Should be of instance of `RegEx`
     *
     * @minItems 1
     */
    requiredPatterns?: [
      {
        [k: string]: any;
      },
      ...{
        [k: string]: any;
      }[],
    ];
    /**
     * > [!WARNING]
     * >
     * > This option is deprecated and will be removed in the next major release. Use [`forbiddenPatterns`](#forbiddenpatterns-array) instead.
     *
     * @minItems 1
     */
    forbiddenPrefixes?: [string, ...string[]];
    /**
     * > [!WARNING]
     * >
     * > This option is deprecated and will be removed in the next major release. Use [`forbiddenPatterns`](#forbiddenpatterns-array) instead.
     *
     * @minItems 1
     */
    forbiddenSuffixes?: [string, ...string[]];
    /**
     * > [!WARNING]
     * >
     * > This option is deprecated and will be removed in the next major release. Use [`requiredPatterns`](#requiredpatterns-array) instead.
     *
     * @minItems 1
     */
    requiredPrefixes?: [string, ...string[]];
    /**
     * > [!WARNING]
     * >
     * > This option is deprecated and will be removed in the next major release. Use [`requiredPatterns`](#requiredpatterns-array) instead.
     *
     * @minItems 1
     */
    requiredSuffixes?: [string, ...string[]];
    /**
     * Option to skip validation of some words, e.g. acronyms
     */
    ignorePattern?: string;
  }

  export type NamingConventionRuleConfig = NamingConventionOption;
}

/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRootTypeOption = [
  {
    /**
     * @minItems 1
     */
    disallow: ['mutation' | 'subscription', ...('mutation' | 'subscription')[]];
  },
];

/**
 * @maxItems 1
 */
export type NoUnusedFieldsOption =
  | []
  | [
      {
        /**
         * Fields that will be ignored and are allowed to be unused.
         *
         * E.g. The following selector will ignore all the relay pagination fields for every connection exposed in the schema:
         * ```json
         * [
         *   "[parent.name.value=PageInfo][name.value=/(endCursor|startCursor|hasNextPage|hasPreviousPage)/]",
         *   "[parent.name.value=/Edge$/][name.value=cursor]",
         *   "[parent.name.value=/Connection$/][name.value=pageInfo]"
         * ]
         * ```
         * > [!TIP]
         * >
         * > These fields are defined by ESLint [`selectors`](https://eslint.org/docs/developer-guide/selectors).
         * > Paste or drop code into the editor in [ASTExplorer](https://astexplorer.net) and inspect the generated AST to compose your selector.
         *
         * @minItems 1
         */
        ignoredFieldSelectors?: [string, ...string[]];
      },
    ];

/**
 * @maxItems 1
 */
export type RelayArgumentsOption =
  | []
  | [
      {
        /**
         * Enforce including both forward and backward pagination arguments
         */
        includeBoth?: boolean;
      },
    ];

/**
 * @maxItems 1
 */
export type RelayEdgeTypesOption =
  | []
  | [
      {
        /**
         * Edge type name must end in "Edge".
         */
        withEdgeSuffix?: boolean;
        /**
         * Edge type's field `node` must implement `Node` interface.
         */
        shouldImplementNode?: boolean;
        /**
         * A list type should only wrap an edge type.
         */
        listTypeCanWrapOnlyEdgeType?: boolean;
      },
    ];

/**
 * @maxItems 1
 */
export type RequireDeprecationDateOption =
  | []
  | [
      {
        argumentName?: string;
      },
    ];

/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireDescriptionOption = [
  {
    /**
     * Includes:
     * - `ObjectTypeDefinition`
     * - `InterfaceTypeDefinition`
     * - `EnumTypeDefinition`
     * - `ScalarTypeDefinition`
     * - `InputObjectTypeDefinition`
     * - `UnionTypeDefinition`
     */
    types?: true;
    /**
     * Definitions within `Query`, `Mutation`, and `Subscription` root types.
     */
    rootField?: true;
    /**
     * Ignore specific selectors
     * > [!TIP]
     * >
     * > These fields are defined by ESLint [`selectors`](https://eslint.org/docs/developer-guide/selectors).
     * > Paste or drop code into the editor in [ASTExplorer](https://astexplorer.net) and inspect the generated AST to compose your selector.
     *
     * @minItems 1
     */
    ignoredSelectors?: [string, ...string[]];
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#DirectiveDefinition).
     */
    DirectiveDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumTypeDefinition).
     */
    EnumTypeDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumValueDefinition).
     */
    EnumValueDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FieldDefinition).
     */
    FieldDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputObjectTypeDefinition).
     */
    InputObjectTypeDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputValueDefinition).
     */
    InputValueDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InterfaceTypeDefinition).
     */
    InterfaceTypeDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ObjectTypeDefinition).
     */
    ObjectTypeDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#OperationDefinition).
     *
     * > [!WARNING]
     * >
     * > You must use only comment syntax `#` and not description syntax `"""` or `"`.
     */
    OperationDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ScalarTypeDefinition).
     */
    ScalarTypeDefinition?: boolean;
    /**
     * > [!NOTE]
     * >
     * > Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#UnionTypeDefinition).
     */
    UnionTypeDefinition?: boolean;
  },
];

export namespace RequireSelections {
  /**
   * @maxItems 1
   */
  export type RequireSelectionsOption =
    | []
    | [
        {
          fieldName?: AsString | AsArray;
          /**
           * Whether all fields of `fieldName` option must be included.
           */
          requireAllFields?: boolean;
        },
      ];
  export type AsString = string;
  /**
   * @minItems 1
   */
  export type AsArray = [string, ...string[]];

  export type RequireSelectionsRuleConfig = RequireSelectionsOption;
}

/**
 * @minItems 1
 * @maxItems 1
 */
export type SelectionSetDepthOption = [
  {
    maxDepth: number;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
  },
];

/**
 * @maxItems 1
 */
export type StrictIdInTypesOption =
  | []
  | [
      {
        /**
         * @minItems 1
         */
        acceptedIdNames?: [string, ...string[]];
        /**
         * @minItems 1
         */
        acceptedIdTypes?: [string, ...string[]];
        exceptions?: {
          /**
           * This is used to exclude types with names that match one of the specified values.
           *
           * @minItems 1
           */
          types?: [string, ...string[]];
          /**
           * This is used to exclude types with names with suffixes that match one of the specified values.
           *
           * @minItems 1
           */
          suffixes?: [string, ...string[]];
        };
      },
    ];

/**
 * All GraphQL rules.
 */
export interface GraphQLRules {
  /**
 * A GraphQL document is only valid for execution if all definitions are either operation or fragment definitions.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [executable-definitions](https://the-guild.dev/graphql/eslint/rules/executable-definitions)
 */
  '@graphql-eslint/executable-definitions': null;

  /**
 * A GraphQL document is only valid if all fields selected are defined by the parent type, or are an allowed meta field such as `__typename`.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [fields-on-correct-type](https://the-guild.dev/graphql/eslint/rules/fields-on-correct-type)
 */
  '@graphql-eslint/fields-on-correct-type': null;

  /**
 * Fragments use a type condition to determine if they apply, since fragments can only be spread into a composite type (object, interface, or union), the type condition must also be a composite type.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [fragments-on-composite-type](https://the-guild.dev/graphql/eslint/rules/fragments-on-composite-type)
 */
  '@graphql-eslint/fragments-on-composite-type': null;

  /**
 * A GraphQL field is only valid if all supplied arguments are defined by that field.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [known-argument-names](https://the-guild.dev/graphql/eslint/rules/known-argument-names)
 */
  '@graphql-eslint/known-argument-names': null;

  /**
 * A GraphQL document is only valid if all `@directive`s are known by the schema and legally positioned.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [known-directives](https://the-guild.dev/graphql/eslint/rules/known-directives)
 */
  '@graphql-eslint/known-directives': KnownDirectivesOption;

  /**
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer to fragments defined in the same document.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [known-fragment-names](https://the-guild.dev/graphql/eslint/rules/known-fragment-names)
 */
  '@graphql-eslint/known-fragment-names': null;

  /**
 * A GraphQL document is only valid if referenced types (specifically variable definitions and fragment conditions) are defined by the type schema.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [known-type-names](https://the-guild.dev/graphql/eslint/rules/known-type-names)
 */
  '@graphql-eslint/known-type-names': null;

  /**
 * A GraphQL document that contains an anonymous operation (the `query` short-hand) is only valid if it contains only that one operation definition.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [lone-anonymous-operation](https://the-guild.dev/graphql/eslint/rules/lone-anonymous-operation)
 */
  '@graphql-eslint/lone-anonymous-operation': null;

  /**
 * A GraphQL document is only valid if it contains only one schema definition.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [lone-schema-definition](https://the-guild.dev/graphql/eslint/rules/lone-schema-definition)
 */
  '@graphql-eslint/lone-schema-definition': null;

  /**
 * A GraphQL fragment is only valid when it does not have cycles in fragments usage.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [no-fragment-cycles](https://the-guild.dev/graphql/eslint/rules/no-fragment-cycles)
 */
  '@graphql-eslint/no-fragment-cycles': null;

  /**
 * A GraphQL operation is only valid if all variables encountered, both directly and via fragment spreads, are defined by that operation.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [no-undefined-variables](https://the-guild.dev/graphql/eslint/rules/no-undefined-variables)
 */
  '@graphql-eslint/no-undefined-variables': null;

  /**
 * A GraphQL document is only valid if all fragment definitions are spread within operations, or spread within other fragments spread within operations.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [no-unused-fragments](https://the-guild.dev/graphql/eslint/rules/no-unused-fragments)
 */
  '@graphql-eslint/no-unused-fragments': null;

  /**
 * A GraphQL operation is only valid if all variables defined by an operation are used, either directly or within a spread fragment.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [no-unused-variables](https://the-guild.dev/graphql/eslint/rules/no-unused-variables)
 */
  '@graphql-eslint/no-unused-variables': null;

  /**
 * A selection set is only valid if all fields (including spreading any fragments) either correspond to distinct response names or can be merged without ambiguity.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [overlapping-fields-can-be-merged](https://the-guild.dev/graphql/eslint/rules/overlapping-fields-can-be-merged)
 */
  '@graphql-eslint/overlapping-fields-can-be-merged': null;

  /**
 * A fragment spread is only valid if the type condition could ever possibly be true: if there is a non-empty intersection of the possible parent types, and possible types which pass the type condition.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [possible-fragment-spread](https://the-guild.dev/graphql/eslint/rules/possible-fragment-spread)
 */
  '@graphql-eslint/possible-fragment-spread': null;

  /**
 * A type extension is only valid if the type is defined and has the same kind.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [possible-type-extension](https://the-guild.dev/graphql/eslint/rules/possible-type-extension)
 */
  '@graphql-eslint/possible-type-extension': null;

  /**
 * A field or directive is only valid if all required (non-null without a default value) field arguments have been provided.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [provided-required-arguments](https://the-guild.dev/graphql/eslint/rules/provided-required-arguments)
 */
  '@graphql-eslint/provided-required-arguments': null;

  /**
 * A GraphQL document is valid only if all leaf fields (fields without sub selections) are of scalar or enum types.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [scalar-leafs](https://the-guild.dev/graphql/eslint/rules/scalar-leafs)
 */
  '@graphql-eslint/scalar-leafs': null;

  /**
 * A GraphQL subscription is valid only if it contains a single root field.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [one-field-subscriptions](https://the-guild.dev/graphql/eslint/rules/one-field-subscriptions)
 */
  '@graphql-eslint/one-field-subscriptions': null;

  /**
 * A GraphQL field or directive is only valid if all supplied arguments are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-argument-names](https://the-guild.dev/graphql/eslint/rules/unique-argument-names)
 */
  '@graphql-eslint/unique-argument-names': null;

  /**
 * A GraphQL document is only valid if all defined directives have unique names.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-directive-names](https://the-guild.dev/graphql/eslint/rules/unique-directive-names)
 */
  '@graphql-eslint/unique-directive-names': null;

  /**
 * A GraphQL document is only valid if all non-repeatable directives at a given location are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-directive-names-per-location](https://the-guild.dev/graphql/eslint/rules/unique-directive-names-per-location)
 */
  '@graphql-eslint/unique-directive-names-per-location': null;

  /**
 * A GraphQL complex type is only valid if all its fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-field-definition-names](https://the-guild.dev/graphql/eslint/rules/unique-field-definition-names)
 */
  '@graphql-eslint/unique-field-definition-names': null;

  /**
 * A GraphQL input object value is only valid if all supplied fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-input-field-names](https://the-guild.dev/graphql/eslint/rules/unique-input-field-names)
 */
  '@graphql-eslint/unique-input-field-names': null;

  /**
 * A GraphQL document is only valid if it has only one type per operation.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-operation-types](https://the-guild.dev/graphql/eslint/rules/unique-operation-types)
 */
  '@graphql-eslint/unique-operation-types': null;

  /**
 * A GraphQL document is only valid if all defined types have unique names.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-type-names](https://the-guild.dev/graphql/eslint/rules/unique-type-names)
 */
  '@graphql-eslint/unique-type-names': null;

  /**
 * A GraphQL operation is only valid if all its variables are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [unique-variable-names](https://the-guild.dev/graphql/eslint/rules/unique-variable-names)
 */
  '@graphql-eslint/unique-variable-names': null;

  /**
 * A GraphQL document is only valid if all value literals are of the type expected at their position.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [value-literals-of-correct-type](https://the-guild.dev/graphql/eslint/rules/value-literals-of-correct-type)
 */
  '@graphql-eslint/value-literals-of-correct-type': null;

  /**
 * A GraphQL operation is only valid if all the variables it defines are of input types (scalar, enum, or input object).
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [variables-are-input-types](https://the-guild.dev/graphql/eslint/rules/variables-are-input-types)
 */
  '@graphql-eslint/variables-are-input-types': null;

  /**
 * Variables passed to field arguments conform to type.
> This rule is a wrapper around a `graphql-js` validation function.
 * @see [variables-in-allowed-position](https://the-guild.dev/graphql/eslint/rules/variables-in-allowed-position)
 */
  '@graphql-eslint/variables-in-allowed-position': null;

  /**
   * Enforce arrange in alphabetical order for type fields, enum values, input object fields, operation selections and more.
   * @see [alphabetize](https://the-guild.dev/graphql/eslint/rules/alphabetize)
   */
  '@graphql-eslint/alphabetize': AlphabetizeOption;

  /**
   * Require all comments to follow the same style (either block or inline).
   * @see [description-style](https://the-guild.dev/graphql/eslint/rules/description-style)
   */
  '@graphql-eslint/description-style': DescriptionStyleOption;

  /**
 * Require mutation argument to be always called "input" and input type to be called Mutation name + "Input".
Using the same name for all input parameters will make your schemas easier to consume and more predictable. Using the same name as mutation for InputType will make it easier to find mutations that InputType belongs to.
 * @see [input-name](https://the-guild.dev/graphql/eslint/rules/input-name)
 */
  '@graphql-eslint/input-name': InputNameOption;

  /**
   * Require queries, mutations, subscriptions or fragments to be located in separate files.
   * @see [lone-executable-definition](https://the-guild.dev/graphql/eslint/rules/lone-executable-definition)
   */
  '@graphql-eslint/lone-executable-definition': LoneExecutableDefinitionOption;

  /**
   * This rule allows you to enforce that the file name should match the operation name.
   * @see [match-document-filename](https://the-guild.dev/graphql/eslint/rules/match-document-filename)
   */
  '@graphql-eslint/match-document-filename': MatchDocumentFilename.MatchDocumentFilenameRuleConfig;

  /**
   * Require names to follow specified conventions.
   * @see [naming-convention](https://the-guild.dev/graphql/eslint/rules/naming-convention)
   */
  '@graphql-eslint/naming-convention': NamingConvention.NamingConventionRuleConfig;

  /**
   * Require name for your GraphQL operations. This is useful since most GraphQL client libraries are using the operation name for caching purposes.
   * @see [no-anonymous-operations](https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations)
   */
  '@graphql-eslint/no-anonymous-operations': null;

  /**
   * Enforce that deprecated fields or enum values are not in use by operations.
   * @see [no-deprecated](https://the-guild.dev/graphql/eslint/rules/no-deprecated)
   */
  '@graphql-eslint/no-deprecated': null;

  /**
   * Checks for duplicate fields in selection set, variables in operation definition, or in arguments set of a field.
   * @see [no-duplicate-fields](https://the-guild.dev/graphql/eslint/rules/no-duplicate-fields)
   */
  '@graphql-eslint/no-duplicate-fields': null;

  /**
 * Requires to use `"""` or `"` for adding a GraphQL description instead of `#`.
Allows to use hashtag for comments, as long as it's not attached to an AST definition.
 * @see [no-hashtag-description](https://the-guild.dev/graphql/eslint/rules/no-hashtag-description)
 */
  '@graphql-eslint/no-hashtag-description': null;

  /**
   * Disallow fragments that are used only in one place.
   * @see [no-one-place-fragments](https://the-guild.dev/graphql/eslint/rules/no-one-place-fragments)
   */
  '@graphql-eslint/no-one-place-fragments': null;

  /**
   * Disallow using root types `mutation` and/or `subscription`.
   * @see [no-root-type](https://the-guild.dev/graphql/eslint/rules/no-root-type)
   */
  '@graphql-eslint/no-root-type': NoRootTypeOption;

  /**
   * Avoid scalar result type on mutation type to make sure to return a valid state.
   * @see [no-scalar-result-type-on-mutation](https://the-guild.dev/graphql/eslint/rules/no-scalar-result-type-on-mutation)
   */
  '@graphql-eslint/no-scalar-result-type-on-mutation': null;

  /**
   * Enforces users to avoid using the type name in a field name while defining your schema.
   * @see [no-typename-prefix](https://the-guild.dev/graphql/eslint/rules/no-typename-prefix)
   */
  '@graphql-eslint/no-typename-prefix': null;

  /**
   * Requires all types to be reachable at some level by root level fields.
   * @see [no-unreachable-types](https://the-guild.dev/graphql/eslint/rules/no-unreachable-types)
   */
  '@graphql-eslint/no-unreachable-types': null;

  /**
   * Requires all fields to be used at some level by siblings operations.
   * @see [no-unused-fields](https://the-guild.dev/graphql/eslint/rules/no-unused-fields)
   */
  '@graphql-eslint/no-unused-fields': NoUnusedFieldsOption;

  /**
 * Set of rules to follow Relay specification for Arguments.

- A field that returns a Connection type must include forward pagination arguments (`first` and `after`), backward pagination arguments (`last` and `before`), or both

Forward pagination arguments

- `first` takes a non-negative integer
- `after` takes the Cursor type

Backward pagination arguments

- `last` takes a non-negative integer
- `before` takes the Cursor type.
 * @see [relay-arguments](https://the-guild.dev/graphql/eslint/rules/relay-arguments)
 */
  '@graphql-eslint/relay-arguments': RelayArgumentsOption;

  /**
 * Set of rules to follow Relay specification for Connection types.

- Any type whose name ends in "Connection" is considered by spec to be a `Connection type`
- Connection type must be an Object type
- Connection type must contain a field `edges` that return a list type that wraps an edge type
- Connection type must contain a field `pageInfo` that return a non-null `PageInfo` Object type.
 * @see [relay-connection-types](https://the-guild.dev/graphql/eslint/rules/relay-connection-types)
 */
  '@graphql-eslint/relay-connection-types': null;

  /**
 * Set of rules to follow Relay specification for Edge types.

- A type that is returned in list form by a connection type's `edges` field is considered by this spec to be an Edge type
- Edge type must be an Object type
- Edge type must contain a field `node` that return either Scalar, Enum, Object, Interface, Union, or a non-null wrapper around one of those types. Notably, this field cannot return a list
- Edge type must contain a field `cursor` that return either String, Scalar, or a non-null wrapper around one of those types
- Edge type name must end in "Edge" _(optional)_
- Edge type's field `node` must implement `Node` interface _(optional)_
- A list type should only wrap an edge type _(optional)_.
 * @see [relay-edge-types](https://the-guild.dev/graphql/eslint/rules/relay-edge-types)
 */
  '@graphql-eslint/relay-edge-types': RelayEdgeTypesOption;

  /**
 * Set of rules to follow Relay specification for `PageInfo` object.

- `PageInfo` must be an Object type
- `PageInfo` must contain fields `hasPreviousPage` and `hasNextPage`, that return non-null Boolean
- `PageInfo` must contain fields `startCursor` and `endCursor`, that return either String or Scalar, which can be null if there are no results.
 * @see [relay-page-info](https://the-guild.dev/graphql/eslint/rules/relay-page-info)
 */
  '@graphql-eslint/relay-page-info': null;

  /**
   * Require deletion date on `@deprecated` directive. Suggest removing deprecated things after deprecated date.
   * @see [require-deprecation-date](https://the-guild.dev/graphql/eslint/rules/require-deprecation-date)
   */
  '@graphql-eslint/require-deprecation-date': RequireDeprecationDateOption;

  /**
   * Require all deprecation directives to specify a reason.
   * @see [require-deprecation-reason](https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason)
   */
  '@graphql-eslint/require-deprecation-reason': null;

  /**
   * Enforce descriptions in type definitions and operations.
   * @see [require-description](https://the-guild.dev/graphql/eslint/rules/require-description)
   */
  '@graphql-eslint/require-description': RequireDescriptionOption;

  /**
 * Allow the client in one round-trip not only to call mutation but also to get a wagon of data to update their application.
> Currently, no errors are reported for result type `union`, `interface` and `scalar`.
 * @see [require-field-of-type-query-in-mutation-result](https://the-guild.dev/graphql/eslint/rules/require-field-of-type-query-in-mutation-result)
 */
  '@graphql-eslint/require-field-of-type-query-in-mutation-result': null;

  /**
   * Require fragments to be imported via an import expression.
   * @see [require-import-fragment](https://the-guild.dev/graphql/eslint/rules/require-import-fragment)
   */
  '@graphql-eslint/require-import-fragment': null;

  /**
   * Require `input` or `type` fields to be non-nullable with `@oneOf` directive.
   * @see [require-nullable-fields-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-nullable-fields-with-oneof)
   */
  '@graphql-eslint/require-nullable-fields-with-oneof': null;

  /**
   * Require nullable fields in root types.
   * @see [require-nullable-result-in-root](https://the-guild.dev/graphql/eslint/rules/require-nullable-result-in-root)
   */
  '@graphql-eslint/require-nullable-result-in-root': null;

  /**
   * Enforce selecting specific fields when they are available on the GraphQL type.
   * @see [require-selections](https://the-guild.dev/graphql/eslint/rules/require-selections)
   */
  '@graphql-eslint/require-selections': RequireSelections.RequireSelectionsRuleConfig;

  /**
   * Enforce types with `@oneOf` directive have `error` and `ok` fields.
   * @see [require-type-pattern-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-type-pattern-with-oneof)
   */
  '@graphql-eslint/require-type-pattern-with-oneof': null;

  /**
   * Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://npmjs.com/package/graphql-depth-limit).
   * @see [selection-set-depth](https://the-guild.dev/graphql/eslint/rules/selection-set-depth)
   */
  '@graphql-eslint/selection-set-depth': SelectionSetDepthOption;

  /**
   * Requires output types to have one unique identifier unless they do not have a logical one. Exceptions can be used to ignore output types that do not have unique identifiers.
   * @see [strict-id-in-types](https://the-guild.dev/graphql/eslint/rules/strict-id-in-types)
   */
  '@graphql-eslint/strict-id-in-types': StrictIdInTypesOption;

  /**
 * A GraphQL enum type is only valid if all its values are uniquely named.
> This rule disallows case-insensitive enum values duplicates too.
 * @see [unique-enum-value-names](https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names)
 */
  '@graphql-eslint/unique-enum-value-names': null;

  /**
   * Enforce unique fragment names across your project.
   * @see [unique-fragment-name](https://the-guild.dev/graphql/eslint/rules/unique-fragment-name)
   */
  '@graphql-eslint/unique-fragment-name': null;

  /**
   * Enforce unique operation names across your project.
   * @see [unique-operation-name](https://the-guild.dev/graphql/eslint/rules/unique-operation-name)
   */
  '@graphql-eslint/unique-operation-name': null;
}

export type GraphQLRulesObject = RulesObject<GraphQLRules>;
