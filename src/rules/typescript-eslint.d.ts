import type { RulesObject } from '../rule-config';

export interface ArrayTypeOption {
  /**
   * The array type expected for mutable cases.
   */
  default?: 'array' | 'generic' | 'array-simple';
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: 'array' | 'generic' | 'array-simple';
}

export namespace BanTsComment {
  export type DirectiveConfigSchema =
    | boolean
    | 'allow-with-description'
    | {
        descriptionFormat?: string;
      };

  export interface BanTsCommentOption {
    'ts-expect-error'?: DirectiveConfigSchema;
    'ts-ignore'?: DirectiveConfigSchema;
    'ts-nocheck'?: DirectiveConfigSchema;
    'ts-check'?: DirectiveConfigSchema;
    minimumDescriptionLength?: number;
  }

  export type BanTsCommentRuleConfig = [BanTsCommentOption?];
}

export interface ClassMethodsUseThisOption {
  /**
   * Allows specified method names to be ignored with this rule
   */
  exceptMethods?: string[];
  /**
   * Enforces that functions used as instance field initializers utilize `this`
   */
  enforceForClassFields?: boolean;
  /**
   * Ignore members marked with the `override` modifier
   */
  ignoreOverrideMethods?: boolean;
  /**
   * Ignore classes that specifically implement some interface
   */
  ignoreClassesThatImplementAnInterface?: boolean | 'public-fields';
}

export type ConsistentTypeAssertionsOption =
  | {
      assertionStyle: 'never';
    }
  | {
      assertionStyle: 'as' | 'angle-bracket';
      objectLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
    };

export interface ConsistentTypeImportsOption {
  disallowTypeAnnotations?: boolean;
  fixStyle?: 'separate-type-imports' | 'inline-type-imports';
  prefer?: 'type-imports' | 'no-type-imports';
}

export interface ExplicitFunctionReturnTypeOption {
  /**
   * Whether to allow arrow functions that start with the `void` keyword.
   */
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
  /**
   * Whether to ignore function expressions (functions which are not part of a declaration).
   */
  allowExpressions?: boolean;
  /**
   * Whether to ignore functions immediately returning another function expression.
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * Whether to ignore type annotations on the variable of function expressions.
   */
  allowTypedFunctionExpressions?: boolean;
  /**
   * Whether to ignore arrow functions immediately returning a `as const` value.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * Whether to ignore functions that don't have generic type parameters.
   */
  allowFunctionsWithoutTypeParameters?: boolean;
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[];
  /**
   * Whether to ignore immediately invoked function expressions (IIFEs).
   */
  allowIIFEs?: boolean;
}

export namespace ExplicitMemberAccessibility {
  export type AccessibilityLevel = 'explicit' | 'no-public' | 'off';

  export interface ExplicitMemberAccessibilityOption {
    accessibility?: AccessibilityLevel;
    overrides?: {
      accessors?: AccessibilityLevel;
      constructors?: AccessibilityLevel;
      methods?: AccessibilityLevel;
      properties?: AccessibilityLevel;
      parameterProperties?: AccessibilityLevel;
    };
    ignoredMethodNames?: string[];
  }

  export type ExplicitMemberAccessibilityRuleConfig = [
    ExplicitMemberAccessibilityOption?,
  ];
}

export interface ExplicitModuleBoundaryTypesOption {
  /**
   * Whether to ignore arguments that are explicitly typed as `any`.
   */
  allowArgumentsExplicitlyTypedAsAny?: boolean;
  /**
   * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
   * You must still type the parameters of the function.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[];
  /**
   * Whether to ignore return type annotations on functions immediately returning another function expression.
   * You must still type the parameters of the function.
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * Whether to ignore type annotations on the variable of a function expression.
   */
  allowTypedFunctionExpressions?: boolean;
}

export type InitDeclarationsOption =
  | []
  | ['always']
  | ['never']
  | [
      'never',
      {
        ignoreForLoopInit?: boolean;
      },
    ];

export namespace MemberOrdering {
  export type BaseConfig =
    | 'never'
    | (AllItems | AllItems[])[]
    | {
        memberTypes?: (AllItems | AllItems[])[] | 'never';
        order?: OrderOptions;
        optionalityOrder?: OptionalityOrderOptions;
      };
  export type AllItems =
    | 'readonly-signature'
    | 'signature'
    | 'readonly-field'
    | 'public-readonly-field'
    | 'public-decorated-readonly-field'
    | 'decorated-readonly-field'
    | 'static-readonly-field'
    | 'public-static-readonly-field'
    | 'instance-readonly-field'
    | 'public-instance-readonly-field'
    | 'abstract-readonly-field'
    | 'public-abstract-readonly-field'
    | 'protected-readonly-field'
    | 'protected-decorated-readonly-field'
    | 'protected-static-readonly-field'
    | 'protected-instance-readonly-field'
    | 'protected-abstract-readonly-field'
    | 'private-readonly-field'
    | 'private-decorated-readonly-field'
    | 'private-static-readonly-field'
    | 'private-instance-readonly-field'
    | '#private-readonly-field'
    | '#private-static-readonly-field'
    | '#private-instance-readonly-field'
    | 'field'
    | 'public-field'
    | 'public-decorated-field'
    | 'decorated-field'
    | 'static-field'
    | 'public-static-field'
    | 'instance-field'
    | 'public-instance-field'
    | 'abstract-field'
    | 'public-abstract-field'
    | 'protected-field'
    | 'protected-decorated-field'
    | 'protected-static-field'
    | 'protected-instance-field'
    | 'protected-abstract-field'
    | 'private-field'
    | 'private-decorated-field'
    | 'private-static-field'
    | 'private-instance-field'
    | '#private-field'
    | '#private-static-field'
    | '#private-instance-field'
    | 'method'
    | 'public-method'
    | 'public-decorated-method'
    | 'decorated-method'
    | 'static-method'
    | 'public-static-method'
    | 'instance-method'
    | 'public-instance-method'
    | 'abstract-method'
    | 'public-abstract-method'
    | 'protected-method'
    | 'protected-decorated-method'
    | 'protected-static-method'
    | 'protected-instance-method'
    | 'protected-abstract-method'
    | 'private-method'
    | 'private-decorated-method'
    | 'private-static-method'
    | 'private-instance-method'
    | '#private-method'
    | '#private-static-method'
    | '#private-instance-method'
    | 'call-signature'
    | 'constructor'
    | 'public-constructor'
    | 'protected-constructor'
    | 'private-constructor'
    | 'accessor'
    | 'public-accessor'
    | 'public-decorated-accessor'
    | 'decorated-accessor'
    | 'static-accessor'
    | 'public-static-accessor'
    | 'instance-accessor'
    | 'public-instance-accessor'
    | 'abstract-accessor'
    | 'public-abstract-accessor'
    | 'protected-accessor'
    | 'protected-decorated-accessor'
    | 'protected-static-accessor'
    | 'protected-instance-accessor'
    | 'protected-abstract-accessor'
    | 'private-accessor'
    | 'private-decorated-accessor'
    | 'private-static-accessor'
    | 'private-instance-accessor'
    | '#private-accessor'
    | '#private-static-accessor'
    | '#private-instance-accessor'
    | 'get'
    | 'public-get'
    | 'public-decorated-get'
    | 'decorated-get'
    | 'static-get'
    | 'public-static-get'
    | 'instance-get'
    | 'public-instance-get'
    | 'abstract-get'
    | 'public-abstract-get'
    | 'protected-get'
    | 'protected-decorated-get'
    | 'protected-static-get'
    | 'protected-instance-get'
    | 'protected-abstract-get'
    | 'private-get'
    | 'private-decorated-get'
    | 'private-static-get'
    | 'private-instance-get'
    | '#private-get'
    | '#private-static-get'
    | '#private-instance-get'
    | 'set'
    | 'public-set'
    | 'public-decorated-set'
    | 'decorated-set'
    | 'static-set'
    | 'public-static-set'
    | 'instance-set'
    | 'public-instance-set'
    | 'abstract-set'
    | 'public-abstract-set'
    | 'protected-set'
    | 'protected-decorated-set'
    | 'protected-static-set'
    | 'protected-instance-set'
    | 'protected-abstract-set'
    | 'private-set'
    | 'private-decorated-set'
    | 'private-static-set'
    | 'private-instance-set'
    | '#private-set'
    | '#private-static-set'
    | '#private-instance-set'
    | 'static-initialization'
    | 'static-static-initialization'
    | 'public-static-static-initialization'
    | 'instance-static-initialization'
    | 'public-instance-static-initialization'
    | 'abstract-static-initialization'
    | 'public-abstract-static-initialization'
    | 'protected-static-static-initialization'
    | 'protected-instance-static-initialization'
    | 'protected-abstract-static-initialization'
    | 'private-static-static-initialization'
    | 'private-instance-static-initialization'
    | '#private-static-static-initialization'
    | '#private-instance-static-initialization';
  export type OrderOptions =
    | 'alphabetically'
    | 'alphabetically-case-insensitive'
    | 'as-written'
    | 'natural'
    | 'natural-case-insensitive';
  export type OptionalityOrderOptions = 'optional-first' | 'required-first';
  export type TypesConfig =
    | 'never'
    | (TypeItems | TypeItems[])[]
    | {
        memberTypes?: (TypeItems | TypeItems[])[] | 'never';
        order?: OrderOptions;
        optionalityOrder?: OptionalityOrderOptions;
      };
  export type TypeItems =
    | 'readonly-signature'
    | 'signature'
    | 'readonly-field'
    | 'field'
    | 'method'
    | 'constructor';

  export interface MemberOrderingOption {
    default?: BaseConfig;
    classes?: BaseConfig;
    classExpressions?: BaseConfig;
    interfaces?: TypesConfig;
    typeLiterals?: TypesConfig;
  }

  export type MemberOrderingRuleConfig = [MemberOrderingOption?];
}

export namespace NamingConvention {
  export type FormatOptionsConfig = PredefinedFormats[] | null;
  export type PredefinedFormats =
    | 'camelCase'
    | 'strictCamelCase'
    | 'PascalCase'
    | 'StrictPascalCase'
    | 'snake_case'
    | 'UPPER_CASE';
  export type UnderscoreOptions =
    | 'forbid'
    | 'allow'
    | 'require'
    | 'requireDouble'
    | 'allowDouble'
    | 'allowSingleOrDouble';
  export type PrefixSuffixConfig = string[];
  export type TypeModifiers =
    | 'boolean'
    | 'string'
    | 'number'
    | 'function'
    | 'array';
  export type NamingConventionOption = (
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: (
          | 'default'
          | 'variableLike'
          | 'memberLike'
          | 'typeLike'
          | 'method'
          | 'property'
          | 'accessor'
          | 'variable'
          | 'function'
          | 'parameter'
          | 'parameterProperty'
          | 'classicAccessor'
          | 'enumMember'
          | 'classMethod'
          | 'objectLiteralMethod'
          | 'typeMethod'
          | 'classProperty'
          | 'objectLiteralProperty'
          | 'typeProperty'
          | 'autoAccessor'
          | 'class'
          | 'interface'
          | 'typeAlias'
          | 'enum'
          | 'typeParameter'
          | 'import'
        )[];
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | '#private'
          | 'abstract'
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
          | 'override'
          | 'async'
          | 'default'
          | 'namespace'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'default';
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | '#private'
          | 'abstract'
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
          | 'override'
          | 'async'
          | 'default'
          | 'namespace'
        )[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'variableLike';
        modifiers?: ('unused' | 'async')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'variable';
        modifiers?: (
          | 'const'
          | 'destructured'
          | 'exported'
          | 'global'
          | 'unused'
          | 'async'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'function';
        modifiers?: ('exported' | 'global' | 'unused' | 'async')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'parameter';
        modifiers?: ('destructured' | 'unused')[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'memberLike';
        modifiers?: (
          | 'abstract'
          | 'private'
          | '#private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'classProperty';
        modifiers?: (
          | 'abstract'
          | 'private'
          | '#private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'objectLiteralProperty';
        modifiers?: ('public' | 'requiresQuotes')[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'typeProperty';
        modifiers?: ('public' | 'readonly' | 'requiresQuotes')[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'parameterProperty';
        modifiers?: ('private' | 'protected' | 'public' | 'readonly')[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'property';
        modifiers?: (
          | 'abstract'
          | 'private'
          | '#private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'classMethod';
        modifiers?: (
          | 'abstract'
          | 'private'
          | '#private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'objectLiteralMethod';
        modifiers?: ('public' | 'requiresQuotes' | 'async')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'typeMethod';
        modifiers?: ('public' | 'requiresQuotes')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'method';
        modifiers?: (
          | 'abstract'
          | 'private'
          | '#private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'classicAccessor';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'autoAccessor';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'accessor';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: TypeModifiers[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'enumMember';
        modifiers?: 'requiresQuotes'[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'typeLike';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'class';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'interface';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'typeAlias';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'enum';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'typeParameter';
        modifiers?: 'unused'[];
      }
    | {
        format: FormatOptionsConfig;
        custom?: MatchRegexConfig;
        leadingUnderscore?: UnderscoreOptions;
        trailingUnderscore?: UnderscoreOptions;
        prefix?: PrefixSuffixConfig;
        suffix?: PrefixSuffixConfig;
        failureMessage?: string;
        filter?: string | MatchRegexConfig;
        selector: 'import';
        modifiers?: ('default' | 'namespace')[];
      }
  )[];

  export interface MatchRegexConfig {
    match: boolean;
    regex: string;
  }

  export type NamingConventionRuleConfig = NamingConventionOption;
}

export interface NoEmptyFunctionOption {
  allow?: (
    | 'functions'
    | 'arrowFunctions'
    | 'generatorFunctions'
    | 'methods'
    | 'generatorMethods'
    | 'getters'
    | 'setters'
    | 'constructors'
    | 'private-constructors'
    | 'protected-constructors'
    | 'asyncFunctions'
    | 'asyncMethods'
    | 'decoratedFunctions'
    | 'overrideMethods'
  )[];
}

export interface NoEmptyObjectTypeOption {
  allowInterfaces?: 'always' | 'never' | 'with-single-extends';
  allowObjectTypes?: 'always' | 'never';
  allowWithName?: string;
}

export interface NoExplicitAnyOption {
  /**
   * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
   */
  fixToUnknown?: boolean;
  /**
   * Whether to ignore rest parameter arrays.
   */
  ignoreRestArgs?: boolean;
}

export interface NoExtraneousClassOption {
  /**
   * Whether to allow extraneous classes that contain only a constructor.
   */
  allowConstructorOnly?: boolean;
  /**
   * Whether to allow extraneous classes that have no body (i.e. are empty).
   */
  allowEmpty?: boolean;
  /**
   * Whether to allow extraneous classes that only contain static members.
   */
  allowStaticOnly?: boolean;
  /**
   * Whether to allow extraneous classes that include a decorator.
   */
  allowWithDecorator?: boolean;
}

export interface NoFloatingPromisesOption {
  allowForKnownSafePromises?: (
    | string
    | {
        from: 'file';
        name: string | [string, ...string[]];
        path?: string;
      }
    | {
        from: 'lib';
        name: string | [string, ...string[]];
      }
    | {
        from: 'package';
        name: string | [string, ...string[]];
        package: string;
      }
  )[];
  allowForKnownSafeCalls?: (
    | string
    | {
        from: 'file';
        name: string | [string, ...string[]];
        path?: string;
      }
    | {
        from: 'lib';
        name: string | [string, ...string[]];
      }
    | {
        from: 'package';
        name: string | [string, ...string[]];
        package: string;
      }
  )[];
  /**
   * Whether to check all "Thenable"s, not just the built-in Promise type.
   */
  checkThenables?: boolean;
  /**
   * Whether to ignore `void` expressions.
   */
  ignoreVoid?: boolean;
  /**
   * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
   */
  ignoreIIFE?: boolean;
}

export interface NoInvalidVoidTypeOption {
  allowInGenericTypeArguments?: boolean | [string, ...string[]];
  allowAsThisParameter?: boolean;
}

export interface NoMagicNumbersOption {
  detectObjects?: boolean;
  enforceConst?: boolean;
  ignore?: (number | string)[];
  ignoreArrayIndexes?: boolean;
  ignoreDefaultValues?: boolean;
  ignoreClassFieldInitialValues?: boolean;
  ignoreNumericLiteralTypes?: boolean;
  ignoreEnums?: boolean;
  ignoreReadonlyClassProperties?: boolean;
  ignoreTypeIndexes?: boolean;
}

export interface NoMisusedPromisesOption {
  checksConditionals?: boolean;
  checksVoidReturn?:
    | boolean
    | {
        arguments?: boolean;
        attributes?: boolean;
        properties?: boolean;
        returns?: boolean;
        variables?: boolean;
      };
  checksSpreads?: boolean;
}

export interface NoNamespaceOption {
  /**
   * Whether to allow `declare` with custom TypeScript namespaces.
   */
  allowDeclarations?: boolean;
  /**
   * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
   */
  allowDefinitionFiles?: boolean;
}

export interface NoRequireImportsOption {
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[];
  /**
   * Allows `require` statements in import declarations.
   */
  allowAsImport?: boolean;
}

export type NoRestrictedImportsOption =
  | (
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
          /**
           * Disallow value imports, but allow type-only imports.
           */
          allowTypeImports?: boolean;
        }
    )[]
  | []
  | [
      {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
            }
        )[];
        patterns?:
          | string[]
          | {
              /**
               * @minItems 1
               */
              importNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              group: [string, ...string[]];
              importNamePattern?: string;
              message?: string;
              caseSensitive?: boolean;
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
            }[];
      },
    ];

export namespace NoRestrictedTypes {
  export type BanConfig =
    | true
    | string
    | {
        /**
         * Custom error message
         */
        message?: string;
        /**
         * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
         */
        fixWith?: string;
        /**
         * Types to suggest replacing with.
         */
        suggest?: string[];
      };

  export interface NoRestrictedTypesOption {
    types?: {
      [k: string]: BanConfig;
    };
  }

  export type NoRestrictedTypesRuleConfig = [NoRestrictedTypesOption?];
}

export interface NoShadowOption {
  builtinGlobals?: boolean;
  hoist?: 'all' | 'functions' | 'never';
  allow?: string[];
  ignoreOnInitialization?: boolean;
  ignoreTypeValueShadow?: boolean;
  ignoreFunctionTypeParameterNameValueShadow?: boolean;
}

export interface NoThisAliasOption {
  /**
   * Whether to ignore destructurings, such as `const { props, state } = this`.
   */
  allowDestructuring?: boolean;
  /**
   * Names to ignore, such as ["self"] for `const self = this;`.
   */
  allowedNames?: string[];
}

export interface NoTypeAliasOption {
  /**
   * Whether to allow direct one-to-one type aliases.
   */
  allowAliases?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases for callbacks.
   */
  allowCallbacks?: 'always' | 'never';
  /**
   * Whether to allow type aliases for conditional types.
   */
  allowConditionalTypes?: 'always' | 'never';
  /**
   * Whether to allow type aliases with constructors.
   */
  allowConstructors?: 'always' | 'never';
  /**
   * Whether to allow type aliases with object literal types.
   */
  allowLiterals?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with mapped types.
   */
  allowMappedTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with tuple types.
   */
  allowTupleTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with generic types.
   */
  allowGenerics?: 'always' | 'never';
}

export interface NoUnnecessaryBooleanLiteralCompareOption {
  /**
   * Whether to allow comparisons between nullable boolean variables and `true`.
   */
  allowComparingNullableBooleansToTrue?: boolean;
  /**
   * Whether to allow comparisons between nullable boolean variables and `false`.
   */
  allowComparingNullableBooleansToFalse?: boolean;
}

export interface NoUnnecessaryConditionOption {
  /**
   * Whether to ignore constant loop conditions, such as `while (true)`.
   */
  allowConstantLoopConditions?: boolean;
  /**
   * Whether to not error when running with a tsconfig that has strictNullChecks turned.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
}

export interface NoUnnecessaryTypeAssertionOption {
  /**
   * A list of type names to ignore.
   */
  typesToIgnore?: string[];
}

export type NoUnusedVarsOption =
  | ('all' | 'local')
  | {
      vars?: 'all' | 'local';
      varsIgnorePattern?: string;
      args?: 'all' | 'after-used' | 'none';
      ignoreRestSiblings?: boolean;
      argsIgnorePattern?: string;
      caughtErrors?: 'all' | 'none';
      caughtErrorsIgnorePattern?: string;
      destructuredArrayIgnorePattern?: string;
      ignoreClassWithStaticInitBlock?: boolean;
      reportUsedIgnorePattern?: boolean;
    };

export type NoUseBeforeDefineOption =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      enums?: boolean;
      variables?: boolean;
      typedefs?: boolean;
      ignoreTypeReferences?: boolean;
      allowNamedExports?: boolean;
    };

export interface NoVarRequiresOption {
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[];
}

export namespace ParameterProperties {
  export type Modifier =
    | 'readonly'
    | 'private'
    | 'protected'
    | 'public'
    | 'private readonly'
    | 'protected readonly'
    | 'public readonly';

  export interface ParameterPropertiesOption {
    allow?: Modifier[];
    prefer?: 'class-property' | 'parameter-property';
  }

  export type ParameterPropertiesRuleConfig = [ParameterPropertiesOption?];
}

export namespace PreferDestructuring {
  export type PreferDestructuringOption =
    | {
        VariableDeclarator?: {
          array?: boolean;
          object?: boolean;
        };
        AssignmentExpression?: {
          array?: boolean;
          object?: boolean;
        };
      }
    | {
        array?: boolean;
        object?: boolean;
      };

  export interface PreferDestructuringConfig {
    enforceForRenamedProperties?: boolean;
    enforceForDeclarationWithTypeAnnotation?: boolean;
    [k: string]: any;
  }

  export type PreferDestructuringRuleConfig = [
    PreferDestructuringOption?,
    PreferDestructuringConfig?,
  ];
}

export interface PreferNullishCoalescingOption {
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
  ignoreConditionalTests?: boolean;
  ignoreMixedLogicalExpressions?: boolean;
  ignorePrimitives?:
    | {
        bigint?: boolean;
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        [k: string]: any;
      }
    | true;
  ignoreTernaryTests?: boolean;
}

export interface PreferOptionalChainOption {
  /**
   * Check operands that are typed as `any` when inspecting "loose boolean" operands.
   */
  checkAny?: boolean;
  /**
   * Check operands that are typed as `unknown` when inspecting "loose boolean" operands.
   */
  checkUnknown?: boolean;
  /**
   * Check operands that are typed as `string` when inspecting "loose boolean" operands.
   */
  checkString?: boolean;
  /**
   * Check operands that are typed as `number` when inspecting "loose boolean" operands.
   */
  checkNumber?: boolean;
  /**
   * Check operands that are typed as `boolean` when inspecting "loose boolean" operands.
   */
  checkBoolean?: boolean;
  /**
   * Check operands that are typed as `bigint` when inspecting "loose boolean" operands.
   */
  checkBigInt?: boolean;
  /**
   * Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.
   */
  requireNullish?: boolean;
  /**
   * Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.
   */
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean;
}

export interface PreferReadonlyParameterTypesOption {
  allow?: (
    | string
    | {
        from: 'file';
        name: string | [string, ...string[]];
        path?: string;
      }
    | {
        from: 'lib';
        name: string | [string, ...string[]];
      }
    | {
        from: 'package';
        name: string | [string, ...string[]];
        package: string;
      }
  )[];
  checkParameterProperties?: boolean;
  ignoreInferredTypes?: boolean;
  treatMethodsAsReadonly?: boolean;
}

export interface PreferStringStartsEndsWithOption {
  /**
   * Whether to allow equality checks against the first or last element of a string.
   */
  allowSingleElementEquality?: 'always' | 'never';
}

export interface PromiseFunctionAsyncOption {
  /**
   * Whether to consider `any` and `unknown` to be Promises.
   */
  allowAny?: boolean;
  /**
   * Any extra names of classes or interfaces to be considered Promises.
   */
  allowedPromiseNames?: string[];
  checkArrowFunctions?: boolean;
  checkFunctionDeclarations?: boolean;
  checkFunctionExpressions?: boolean;
  checkMethodDeclarations?: boolean;
}

export interface RequireArraySortCompareOption {
  /**
   * Whether to ignore arrays in which all elements are strings.
   */
  ignoreStringArrays?: boolean;
}

export interface RestrictPlusOperandsOption {
  /**
   * Whether to allow `any` typed values.
   */
  allowAny?: boolean;
  /**
   * Whether to allow `boolean` typed values.
   */
  allowBoolean?: boolean;
  /**
   * Whether to allow potentially `null` or `undefined` typed values.
   */
  allowNullish?: boolean;
  /**
   * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
   */
  allowNumberAndString?: boolean;
  /**
   * Whether to allow `regexp` typed values.
   */
  allowRegExp?: boolean;
  /**
   * Whether to skip compound assignments such as `+=`.
   */
  skipCompoundAssignments?: boolean;
}

export interface RestrictTemplateExpressionsOption {
  /**
   * Whether to allow `any` typed values in template expressions.
   */
  allowAny?: boolean;
  /**
   * Whether to allow `array` typed values in template expressions.
   */
  allowArray?: boolean;
  /**
   * Whether to allow `boolean` typed values in template expressions.
   */
  allowBoolean?: boolean;
  /**
   * Whether to allow `nullish` typed values in template expressions.
   */
  allowNullish?: boolean;
  /**
   * Whether to allow `number` typed values in template expressions.
   */
  allowNumber?: boolean;
  /**
   * Whether to allow `regexp` typed values in template expressions.
   */
  allowRegExp?: boolean;
  /**
   * Whether to allow `never` typed values in template expressions.
   */
  allowNever?: boolean;
}

export interface SortTypeConstituentsOption {
  /**
   * Whether to check intersection types.
   */
  checkIntersections?: boolean;
  /**
   * Whether to check union types.
   */
  checkUnions?: boolean;
  /**
   * Whether to sort using case sensitive sorting.
   */
  caseSensitive?: boolean;
  /**
   * Ordering of the groups.
   */
  groupOrder?: (
    | 'conditional'
    | 'function'
    | 'import'
    | 'intersection'
    | 'keyword'
    | 'nullish'
    | 'literal'
    | 'named'
    | 'object'
    | 'operator'
    | 'tuple'
    | 'union'
  )[];
}

export interface SwitchExhaustivenessCheckOption {
  /**
   * If 'true', allow 'default' cases on switch statements with exhaustive cases.
   */
  allowDefaultCaseForExhaustiveSwitch?: boolean;
  /**
   * If 'true', require a 'default' clause for switches on non-union types.
   */
  requireDefaultForNonUnion?: boolean;
}

export interface TripleSlashReferenceOption {
  lib?: 'always' | 'never';
  path?: 'always' | 'never';
  types?: 'always' | 'never' | 'prefer-import';
}

export interface UnboundMethodOption {
  /**
   * Whether to skip checking whether `static` methods are correctly bound.
   */
  ignoreStatic?: boolean;
}

export interface UnifiedSignaturesOption {
  /**
   * Whether two parameters with different names at the same index should be considered different even if their types are the same.
   */
  ignoreDifferentlyNamedParameters?: boolean;
}

/**
 * All TypeScript rules.
 */
export interface TypeScriptRules {
  /**
   * Require that function overload signatures be consecutive.
   * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
   */
  '@typescript-eslint/adjacent-overload-signatures': null;

  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays.
   * @see [array-type](https://typescript-eslint.io/rules/array-type)
   */
  '@typescript-eslint/array-type': [ArrayTypeOption?];

  /**
   * Disallow awaiting a value that is not a Thenable.
   * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
   */
  '@typescript-eslint/await-thenable': null;

  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives.
   * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
   */
  '@typescript-eslint/ban-ts-comment': BanTsComment.BanTsCommentRuleConfig;

  /**
   * Disallow `// tslint:<rule-flag>` comments.
   * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
   */
  '@typescript-eslint/ban-tslint-comment': null;

  /**
   * Enforce that literals on classes are exposed in a consistent style.
   * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
   */
  '@typescript-eslint/class-literal-property-style': [('fields' | 'getters')?];

  /**
   * Enforce that class methods utilize `this`.
   * @see [class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)
   */
  '@typescript-eslint/class-methods-use-this': [ClassMethodsUseThisOption?];

  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
   * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
   */
  '@typescript-eslint/consistent-generic-constructors': [
    ('type-annotation' | 'constructor')?,
  ];

  /**
   * Require or disallow the `Record` type.
   * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
   */
  '@typescript-eslint/consistent-indexed-object-style': [
    ('record' | 'index-signature')?,
  ];

  /**
   * Require `return` statements to either always or never specify values.
   * @see [consistent-return](https://typescript-eslint.io/rules/consistent-return)
   */
  '@typescript-eslint/consistent-return': [
    {
      treatUndefinedAsUnspecified?: boolean;
    }?,
  ];

  /**
   * Enforce consistent usage of type assertions.
   * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
   */
  '@typescript-eslint/consistent-type-assertions': [
    ConsistentTypeAssertionsOption?,
  ];

  /**
   * Enforce type definitions to consistently use either `interface` or `type`.
   * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
   */
  '@typescript-eslint/consistent-type-definitions': [('interface' | 'type')?];

  /**
   * Enforce consistent usage of type exports.
   * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
   */
  '@typescript-eslint/consistent-type-exports': [
    {
      fixMixedExportsWithInlineTypeSpecifier?: boolean;
    }?,
  ];

  /**
   * Enforce consistent usage of type imports.
   * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
   */
  '@typescript-eslint/consistent-type-imports': [ConsistentTypeImportsOption?];

  /**
   * Enforce default parameters to be last.
   * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
   */
  '@typescript-eslint/default-param-last': null;

  /**
   * Enforce dot notation whenever possible.
   * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
   */
  '@typescript-eslint/dot-notation': [
    {
      allowKeywords?: boolean;
      allowPattern?: string;
      allowPrivateClassPropertyAccess?: boolean;
      allowProtectedClassPropertyAccess?: boolean;
      allowIndexSignaturePropertyAccess?: boolean;
    }?,
  ];

  /**
   * Require explicit return types on functions and class methods.
   * @see [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
   */
  '@typescript-eslint/explicit-function-return-type': [
    ExplicitFunctionReturnTypeOption?,
  ];

  /**
   * Require explicit accessibility modifiers on class properties and methods.
   * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
   */
  '@typescript-eslint/explicit-member-accessibility': ExplicitMemberAccessibility.ExplicitMemberAccessibilityRuleConfig;

  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods.
   * @see [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
   */
  '@typescript-eslint/explicit-module-boundary-types': [
    ExplicitModuleBoundaryTypesOption?,
  ];

  /**
   * Require or disallow initialization in variable declarations.
   * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
   */
  '@typescript-eslint/init-declarations': InitDeclarationsOption;

  /**
   * Enforce a maximum number of parameters in function definitions.
   * @see [max-params](https://typescript-eslint.io/rules/max-params)
   */
  '@typescript-eslint/max-params': [
    {
      maximum?: number;
      max?: number;
      countVoidThis?: boolean;
    }?,
  ];

  /**
   * Require a consistent member declaration order.
   * @see [member-ordering](https://typescript-eslint.io/rules/member-ordering)
   */
  '@typescript-eslint/member-ordering': MemberOrdering.MemberOrderingRuleConfig;

  /**
   * Enforce using a particular method signature syntax.
   * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
   */
  '@typescript-eslint/method-signature-style': [('property' | 'method')?];

  /**
   * Enforce naming conventions for everything across a codebase.
   * @see [naming-convention](https://typescript-eslint.io/rules/naming-convention)
   */
  '@typescript-eslint/naming-convention': NamingConvention.NamingConventionRuleConfig;

  /**
   * Disallow generic `Array` constructors.
   * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
   */
  '@typescript-eslint/no-array-constructor': null;

  /**
   * Disallow using the `delete` operator on array values.
   * @see [no-array-delete](https://typescript-eslint.io/rules/no-array-delete)
   */
  '@typescript-eslint/no-array-delete': null;

  /**
   * Require `.toString()` to only be called on objects which provide useful information when stringified.
   * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
   */
  '@typescript-eslint/no-base-to-string': [
    {
      ignoredTypeNames?: string[];
    }?,
  ];

  /**
   * Disallow non-null assertion in locations that may be confusing.
   * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
   */
  '@typescript-eslint/no-confusing-non-null-assertion': null;

  /**
   * Require expressions of type void to appear in statement position.
   * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
   */
  '@typescript-eslint/no-confusing-void-expression': [
    {
      ignoreArrowShorthand?: boolean;
      ignoreVoidOperator?: boolean;
    }?,
  ];

  /**
   * Disallow duplicate class members.
   * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
   */
  '@typescript-eslint/no-dupe-class-members': null;

  /**
   * Disallow duplicate enum member values.
   * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
   */
  '@typescript-eslint/no-duplicate-enum-values': null;

  /**
   * Disallow duplicate constituents of union or intersection types.
   * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
   */
  '@typescript-eslint/no-duplicate-type-constituents': [
    {
      ignoreIntersections?: boolean;
      ignoreUnions?: boolean;
    }?,
  ];

  /**
   * Disallow using the `delete` operator on computed key expressions.
   * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
   */
  '@typescript-eslint/no-dynamic-delete': null;

  /**
   * Disallow empty functions.
   * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
   */
  '@typescript-eslint/no-empty-function': [NoEmptyFunctionOption?];

  /**
   * Disallow the declaration of empty interfaces.
   * @deprecated
   * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
   */
  '@typescript-eslint/no-empty-interface': [
    {
      allowSingleExtends?: boolean;
    }?,
  ];

  /**
   * Disallow accidentally using the "empty object" type.
   * @see [no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type)
   */
  '@typescript-eslint/no-empty-object-type': [NoEmptyObjectTypeOption?];

  /**
   * Disallow the `any` type.
   * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
   */
  '@typescript-eslint/no-explicit-any': [NoExplicitAnyOption?];

  /**
   * Disallow extra non-null assertions.
   * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
   */
  '@typescript-eslint/no-extra-non-null-assertion': null;

  /**
   * Disallow classes used as namespaces.
   * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
   */
  '@typescript-eslint/no-extraneous-class': [NoExtraneousClassOption?];

  /**
   * Require Promise-like statements to be handled appropriately.
   * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
   */
  '@typescript-eslint/no-floating-promises': [NoFloatingPromisesOption?];

  /**
   * Disallow iterating over an array with a for-in loop.
   * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
   */
  '@typescript-eslint/no-for-in-array': null;

  /**
   * Disallow the use of `eval()`-like methods.
   * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
   */
  '@typescript-eslint/no-implied-eval': null;

  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
   * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
   */
  '@typescript-eslint/no-import-type-side-effects': null;

  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
   */
  '@typescript-eslint/no-inferrable-types': [
    {
      ignoreParameters?: boolean;
      ignoreProperties?: boolean;
    }?,
  ];

  /**
   * Disallow `this` keywords outside of classes or class-like objects.
   * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
   */
  '@typescript-eslint/no-invalid-this': [
    {
      capIsConstructor?: boolean;
    }?,
  ];

  /**
   * Disallow `void` type outside of generic or return types.
   * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
   */
  '@typescript-eslint/no-invalid-void-type': [NoInvalidVoidTypeOption?];

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
   */
  '@typescript-eslint/no-loop-func': null;

  /**
   * Disallow literal numbers that lose precision.
   * @deprecated
   * @see [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
   */
  '@typescript-eslint/no-loss-of-precision': null;

  /**
   * Disallow magic numbers.
   * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
   */
  '@typescript-eslint/no-magic-numbers': [NoMagicNumbersOption?];

  /**
   * Disallow the `void` operator except when used to discard a value.
   * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
   */
  '@typescript-eslint/no-meaningless-void-operator': [
    {
      checkNever?: boolean;
    }?,
  ];

  /**
   * Enforce valid definition of `new` and `constructor`.
   * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
   */
  '@typescript-eslint/no-misused-new': null;

  /**
   * Disallow Promises in places not designed to handle them.
   * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
   */
  '@typescript-eslint/no-misused-promises': [NoMisusedPromisesOption?];

  /**
   * Disallow enums from having both number and string members.
   * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
   */
  '@typescript-eslint/no-mixed-enums': null;

  /**
   * Disallow TypeScript namespaces.
   * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
   */
  '@typescript-eslint/no-namespace': [NoNamespaceOption?];

  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator.
   * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': null;

  /**
   * Disallow non-null assertions after an optional chain expression.
   * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': null;

  /**
   * Disallow non-null assertions using the `!` postfix operator.
   * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
   */
  '@typescript-eslint/no-non-null-assertion': null;

  /**
   * Disallow variable redeclaration.
   * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
   */
  '@typescript-eslint/no-redeclare': [
    {
      builtinGlobals?: boolean;
      ignoreDeclarationMerge?: boolean;
    }?,
  ];

  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
   */
  '@typescript-eslint/no-redundant-type-constituents': null;

  /**
   * Disallow invocation of `require()`.
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  '@typescript-eslint/no-require-imports': [NoRequireImportsOption?];

  /**
   * Disallow specified modules when loaded by `import`.
   * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
   */
  '@typescript-eslint/no-restricted-imports': NoRestrictedImportsOption;

  /**
   * Disallow certain types.
   * @see [no-restricted-types](https://typescript-eslint.io/rules/no-restricted-types)
   */
  '@typescript-eslint/no-restricted-types': NoRestrictedTypes.NoRestrictedTypesRuleConfig;

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   * @see [no-shadow](https://typescript-eslint.io/rules/no-shadow)
   */
  '@typescript-eslint/no-shadow': [NoShadowOption?];

  /**
   * Disallow aliasing `this`.
   * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
   */
  '@typescript-eslint/no-this-alias': [NoThisAliasOption?];

  /**
   * Disallow type aliases.
   * @deprecated
   * @see [no-type-alias](https://typescript-eslint.io/rules/no-type-alias)
   */
  '@typescript-eslint/no-type-alias': [NoTypeAliasOption?];

  /**
   * Disallow unnecessary equality comparisons against boolean literals.
   * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
    NoUnnecessaryBooleanLiteralCompareOption?,
  ];

  /**
   * Disallow conditionals where the type is always truthy or always falsy.
   * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
   */
  '@typescript-eslint/no-unnecessary-condition': [
    NoUnnecessaryConditionOption?,
  ];

  /**
   * Disallow unnecessary assignment of constructor property parameter.
   * @see [no-unnecessary-parameter-property-assignment](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment)
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': null;

  /**
   * Disallow unnecessary namespace qualifiers.
   * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
   */
  '@typescript-eslint/no-unnecessary-qualifier': null;

  /**
   * Disallow unnecessary template expressions.
   * @see [no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression)
   */
  '@typescript-eslint/no-unnecessary-template-expression': null;

  /**
   * Disallow type arguments that are equal to the default.
   * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
   */
  '@typescript-eslint/no-unnecessary-type-arguments': null;

  /**
   * Disallow type assertions that do not change the type of an expression.
   * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
   */
  '@typescript-eslint/no-unnecessary-type-assertion': [
    NoUnnecessaryTypeAssertionOption?,
  ];

  /**
   * Disallow unnecessary constraints on generic types.
   * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
   */
  '@typescript-eslint/no-unnecessary-type-constraint': null;

  /**
   * Disallow type parameters that only appear once.
   * @see [no-unnecessary-type-parameters](https://typescript-eslint.io/rules/no-unnecessary-type-parameters)
   */
  '@typescript-eslint/no-unnecessary-type-parameters': null;

  /**
   * Disallow calling a function with a value with type `any`.
   * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
   */
  '@typescript-eslint/no-unsafe-argument': null;

  /**
   * Disallow assigning a value with type `any` to variables and properties.
   * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
   */
  '@typescript-eslint/no-unsafe-assignment': null;

  /**
   * Disallow calling a value with type `any`.
   * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
   */
  '@typescript-eslint/no-unsafe-call': null;

  /**
   * Disallow unsafe declaration merging.
   * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
   */
  '@typescript-eslint/no-unsafe-declaration-merging': null;

  /**
   * Disallow comparing an enum value with a non-enum value.
   * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
   */
  '@typescript-eslint/no-unsafe-enum-comparison': null;

  /**
   * Disallow using the unsafe built-in Function type.
   * @see [no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type)
   */
  '@typescript-eslint/no-unsafe-function-type': null;

  /**
   * Disallow member access on a value with type `any`.
   * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
   */
  '@typescript-eslint/no-unsafe-member-access': null;

  /**
   * Disallow returning a value with type `any` from a function.
   * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
   */
  '@typescript-eslint/no-unsafe-return': null;

  /**
   * Require unary negation to take a number.
   * @see [no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)
   */
  '@typescript-eslint/no-unsafe-unary-minus': null;

  /**
   * Disallow unused expressions.
   * @see [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)
   */
  '@typescript-eslint/no-unused-expressions': [
    {
      allowShortCircuit?: boolean;
      allowTernary?: boolean;
      allowTaggedTemplates?: boolean;
      enforceForJSX?: boolean;
    }?,
  ];

  /**
   * Disallow unused variables.
   * @see [no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
   */
  '@typescript-eslint/no-unused-vars': [NoUnusedVarsOption?];

  /**
   * Disallow the use of variables before they are defined.
   * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
   */
  '@typescript-eslint/no-use-before-define': [NoUseBeforeDefineOption?];

  /**
   * Disallow unnecessary constructors.
   * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
   */
  '@typescript-eslint/no-useless-constructor': null;

  /**
   * Disallow empty exports that don't change anything in a module file.
   * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
   */
  '@typescript-eslint/no-useless-empty-export': null;

  /**
   * Disallow `require` statements except in import statements.
   * @deprecated
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  '@typescript-eslint/no-var-requires': [NoVarRequiresOption?];

  /**
   * Disallow using confusing built-in primitive class wrappers.
   * @see [no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types)
   */
  '@typescript-eslint/no-wrapper-object-types': null;

  /**
   * Enforce non-null assertions over explicit type casts.
   * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
   */
  '@typescript-eslint/non-nullable-type-assertion-style': null;

  /**
   * Disallow throwing non-`Error` values as exceptions.
   * @see [only-throw-error](https://typescript-eslint.io/rules/only-throw-error)
   */
  '@typescript-eslint/only-throw-error': [
    {
      allowThrowingAny?: boolean;
      allowThrowingUnknown?: boolean;
    }?,
  ];

  /**
   * Require or disallow parameter properties in class constructors.
   * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
   */
  '@typescript-eslint/parameter-properties': ParameterProperties.ParameterPropertiesRuleConfig;

  /**
   * Enforce the use of `as const` over literal type.
   * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
   */
  '@typescript-eslint/prefer-as-const': null;

  /**
   * Require destructuring from arrays and/or objects.
   * @see [prefer-destructuring](https://typescript-eslint.io/rules/prefer-destructuring)
   */
  '@typescript-eslint/prefer-destructuring': PreferDestructuring.PreferDestructuringRuleConfig;

  /**
   * Require each enum member value to be explicitly initialized.
   * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
   */
  '@typescript-eslint/prefer-enum-initializers': null;

  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
   * @see [prefer-find](https://typescript-eslint.io/rules/prefer-find)
   */
  '@typescript-eslint/prefer-find': null;

  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible.
   * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
   */
  '@typescript-eslint/prefer-for-of': null;

  /**
   * Enforce using function types instead of interfaces with call signatures.
   * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
   */
  '@typescript-eslint/prefer-function-type': null;

  /**
   * Enforce `includes` method over `indexOf` method.
   * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
   */
  '@typescript-eslint/prefer-includes': null;

  /**
   * Require all enum members to be literal values.
   * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
   */
  '@typescript-eslint/prefer-literal-enum-member': [
    {
      allowBitwiseExpressions?: boolean;
    }?,
  ];

  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
   * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
   */
  '@typescript-eslint/prefer-namespace-keyword': null;

  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
   * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
   */
  '@typescript-eslint/prefer-nullish-coalescing': [
    PreferNullishCoalescingOption?,
  ];

  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  '@typescript-eslint/prefer-optional-chain': [PreferOptionalChainOption?];

  /**
   * Require using Error objects as Promise rejection reasons.
   * @see [prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors)
   */
  '@typescript-eslint/prefer-promise-reject-errors': [
    {
      allowEmptyReject?: boolean;
    }?,
  ];

  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor.
   * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
   */
  '@typescript-eslint/prefer-readonly': [
    {
      onlyInlineLambdas?: boolean;
    }?,
  ];

  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs.
   * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
   */
  '@typescript-eslint/prefer-readonly-parameter-types': [
    PreferReadonlyParameterTypesOption?,
  ];

  /**
   * Enforce using type parameter when calling `Array#reduce` instead of casting.
   * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
   */
  '@typescript-eslint/prefer-reduce-type-parameter': null;

  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
   * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
   */
  '@typescript-eslint/prefer-regexp-exec': null;

  /**
   * Enforce that `this` is used when only `this` type is returned.
   * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
   */
  '@typescript-eslint/prefer-return-this-type': null;

  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
   * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
   */
  '@typescript-eslint/prefer-string-starts-ends-with': [
    PreferStringStartsEndsWithOption?,
  ];

  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`.
   * @deprecated
   * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
   */
  '@typescript-eslint/prefer-ts-expect-error': null;

  /**
   * Require any function or method that returns a Promise to be marked async.
   * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
   */
  '@typescript-eslint/promise-function-async': [PromiseFunctionAsyncOption?];

  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`.
   * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
   */
  '@typescript-eslint/require-array-sort-compare': [
    RequireArraySortCompareOption?,
  ];

  /**
   * Disallow async functions which do not return promises and have no `await` expression.
   * @see [require-await](https://typescript-eslint.io/rules/require-await)
   */
  '@typescript-eslint/require-await': null;

  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
   * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
   */
  '@typescript-eslint/restrict-plus-operands': [RestrictPlusOperandsOption?];

  /**
   * Enforce template literal expressions to be of `string` type.
   * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
   */
  '@typescript-eslint/restrict-template-expressions': [
    RestrictTemplateExpressionsOption?,
  ];

  /**
   * Enforce consistent awaiting of returned promises.
   * @see [return-await](https://typescript-eslint.io/rules/return-await)
   */
  '@typescript-eslint/return-await': [
    ('in-try-catch' | 'always' | 'never' | 'error-handling-correctness-only')?,
  ];

  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically.
   * @deprecated
   * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
   */
  '@typescript-eslint/sort-type-constituents': [SortTypeConstituentsOption?];

  /**
   * Disallow certain types in boolean expressions.
   * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
   */
  '@typescript-eslint/strict-boolean-expressions': [
    {
      allowString?: boolean;
      allowNumber?: boolean;
      allowNullableObject?: boolean;
      allowNullableBoolean?: boolean;
      allowNullableString?: boolean;
      allowNullableNumber?: boolean;
      allowNullableEnum?: boolean;
      allowAny?: boolean;
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    }?,
  ];

  /**
   * Require switch-case statements to be exhaustive.
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  '@typescript-eslint/switch-exhaustiveness-check': [
    SwitchExhaustivenessCheckOption?,
  ];

  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations.
   * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
   */
  '@typescript-eslint/triple-slash-reference': [TripleSlashReferenceOption?];

  /**
   * Require type annotations in certain places.
   * @see [typedef](https://typescript-eslint.io/rules/typedef)
   */
  '@typescript-eslint/typedef': [
    {
      arrayDestructuring?: boolean;
      arrowParameter?: boolean;
      memberVariableDeclaration?: boolean;
      objectDestructuring?: boolean;
      parameter?: boolean;
      propertyDeclaration?: boolean;
      variableDeclaration?: boolean;
      variableDeclarationIgnoreFunction?: boolean;
    }?,
  ];

  /**
   * Enforce unbound methods are called with their expected scope.
   * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
   */
  '@typescript-eslint/unbound-method': [UnboundMethodOption?];

  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
   * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
   */
  '@typescript-eslint/unified-signatures': [UnifiedSignaturesOption?];

  /**
   * Enforce typing arguments in `.catch()` callbacks as `unknown`.
   * @see [use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable': null;
}

export type TypeScriptRulesObject = RulesObject<TypeScriptRules>;
