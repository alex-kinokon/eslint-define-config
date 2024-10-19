import type { RulesObject } from '../rule-config';

/**
 * @minItems 0
 * @maxItems 1
 */
export type ArrowFunctionConventionOption =
  | []
  | [
      {
        requireParameterParentheses?: boolean;
        requireBodyBraces?: boolean;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ClassNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type CognitiveComplexityOption =
  | []
  | [number]
  | [number, 'sonar-runtime' | 'metric'];

/**
 * @minItems 0
 * @maxItems 1
 */
export type CommentRegexOption =
  | []
  | [
      {
        regularExpression?: string;
        message?: string;
        flags?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ContentLengthOption =
  | []
  | [
      {
        fileUploadSizeLimit?: number;
        standardSizeLimit?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type CyclomaticComplexityOption =
  | []
  | [
      {
        threshold?: number;
      },
    ]
  | [
      {
        threshold?: number;
      },
      'sonar-runtime' | 'metric',
    ];

export namespace EnforceTrailingComma {
  export type EnforceTrailingCommaOption =
    | []
    | [
        | Value
        | {
            arrays?: ValueWithIgnore;
            objects?: ValueWithIgnore;
            imports?: ValueWithIgnore;
            exports?: ValueWithIgnore;
            functions?: ValueWithIgnore;
          },
      ];
  export type Value =
    | 'always-multiline'
    | 'always'
    | 'never'
    | 'only-multiline';
  export type ValueWithIgnore =
    | 'always-multiline'
    | 'always'
    | 'ignore'
    | 'never'
    | 'only-multiline';

  export type EnforceTrailingCommaRuleConfig = EnforceTrailingCommaOption;
}

/**
 * @minItems 0
 * @maxItems 2
 */
export type ExpressionComplexityOption =
  | []
  | [
      {
        max?: number;
      },
    ]
  | [
      {
        max?: number;
      },
      'sonar-runtime' | 'metric',
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type FileHeaderOption =
  | []
  | [
      {
        headerFormat?: string;
        isRegularExpression?: boolean;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type FunctionNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxSwitchCasesOption = [] | [number];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxUnionSizeOption =
  | []
  | [
      {
        threshold?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type NestedControlFlowOption =
  | []
  | [
      {
        maximumNestingLevel?: number;
      },
    ]
  | [
      {
        maximumNestingLevel?: number;
      },
      'sonar-runtime' | 'metric',
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type NewOperatorMisuseOption =
  | []
  | [
      {
        considerJSDoc?: boolean;
      },
    ]
  | [
      {
        considerJSDoc?: boolean;
      },
      any,
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoDeprecatedReactOption =
  | []
  | [
      {
        'react-version'?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type NoDuplicateStringOption =
  | []
  | [
      {
        threshold?: number;
        ignoreStrings?: string;
      },
    ]
  | [
      {
        threshold?: number;
        ignoreStrings?: string;
      },
      'sonar-runtime' | 'metric',
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoHardcodedCredentialsOption =
  | []
  | [
      {
        credentialWords?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type NoIdenticalFunctionsOption =
  | []
  | [number]
  | [number, 'sonar-runtime' | 'metric'];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoImplicitDependenciesOption =
  | []
  | [
      {
        whitelist?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoIntrusivePermissionsOption =
  | []
  | [
      {
        permissions?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type NoNestedFunctionsOption =
  | []
  | [
      {
        threshold?: number;
      },
    ]
  | [
      {
        threshold?: number;
      },
      'sonar-runtime' | 'metric',
    ];

/**
 * @minItems 0
 * @maxItems 2
 */
export type RegexComplexityOption =
  | []
  | [
      {
        threshold?: number;
      },
    ]
  | [
      {
        threshold?: number;
      },
      'sonar-runtime' | 'metric',
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type SonarMaxLinesOption =
  | []
  | [
      {
        maximum?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type SonarMaxLinesPerFunctionOption =
  | []
  | [
      {
        maximum?: number;
      },
    ];

export interface SonarNoMagicNumbersOption {
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

export interface SonarPreferOptionalChainOption {
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

/**
 * @minItems 0
 * @maxItems 1
 */
export type VariableNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type SonarMaxParamsOption =
  | []
  | [
      {
        max?: number;
      },
    ];

export interface AltTextOption {
  elements?: string[];
  img?: string[];
  object?: string[];
  area?: string[];
  'input[type="image"]'?: string[];
  [k: string]: any;
}

export type BraceStyleRuleConfig = [
  ('1tbs' | 'stroustrup' | 'allman')?,
  {
    allowSingleLine?: boolean;
  }?,
];

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

export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
    ]
  | ['always']
  | [
      'always',
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      },
    ];

export type ObjectShorthandOption =
  | []
  | [
      | 'always'
      | 'methods'
      | 'properties'
      | 'never'
      | 'consistent'
      | 'consistent-as-needed',
    ]
  | ['always' | 'methods' | 'properties']
  | [
      'always' | 'methods' | 'properties',
      {
        avoidQuotes?: boolean;
      },
    ]
  | ['always' | 'methods']
  | [
      'always' | 'methods',
      {
        ignoreConstructors?: boolean;
        methodsIgnorePattern?: string;
        avoidQuotes?: boolean;
        avoidExplicitReturnArrows?: boolean;
      },
    ];

export interface MediaHasCaptionOption {
  audio?: string[];
  video?: string[];
  track?: string[];
  [k: string]: any;
}

export type NoAccessorFieldMismatchRuleConfig = [
  {
    allowImplicit?: boolean;
  }?,
  ('sonar-runtime' | 'metric')?,
];

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

export interface NoMisusedPromisesOption {
  [k: string]: any;
}

export interface PreferStringStartsEndsWithOption {
  /**
   * Whether to allow equality checks against the first or last element of a string.
   */
  allowSingleElementEquality?: 'always' | 'never';
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

export interface NoUnknownPropertyOption {
  ignore?: string[];
  [k: string]: any;
}

export interface JsxNoUselessFragmentOption {
  allowExpressions?: boolean;
  [k: string]: any;
}

export interface AnchorHasContentOption {
  components?: string[];
  [k: string]: any;
}

export interface AnchorIsValidOption {
  components?: string[];
  specialLink?: string[];
  /**
   * @minItems 1
   */
  aspects?: [
    'noHref' | 'invalidHref' | 'preferButton',
    ...('noHref' | 'invalidHref' | 'preferButton')[],
  ];
  [k: string]: any;
}

export interface LabelHasAssociatedControlOption {
  labelComponents?: string[];
  labelAttributes?: string[];
  controlComponents?: string[];
  /**
   * Assert that the label has htmlFor, a nested label, both or either
   */
  assert?: 'htmlFor' | 'nesting' | 'both' | 'either';
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

/**
 * All SonarJS rules.
 */
export interface SonarJSRules {
  /**
   * Alternatives in regular expressions should be grouped when used with anchors.
   * @see [anchor-precedence](https://sonarsource.github.io/rspec/#/rspec/S5850/javascript)
   */
  'sonarjs/anchor-precedence': null;

  /**
   * Arguments to built-in functions should match documented types.
   * @see [argument-type](https://sonarsource.github.io/rspec/#/rspec/S3782/javascript)
   */
  'sonarjs/argument-type': null;

  /**
   * Parameters should be passed in the correct order.
   * @see [arguments-order](https://sonarsource.github.io/rspec/#/rspec/S2234/javascript)
   */
  'sonarjs/arguments-order': [('sonar-runtime' | 'metric')?];

  /**
   * "arguments" should not be accessed directly.
   * @see [arguments-usage](https://sonarsource.github.io/rspec/#/rspec/S3513/javascript)
   */
  'sonarjs/arguments-usage': [('sonar-runtime' | 'metric')?];

  /**
   * Callbacks of array methods should have return statements.
   * @see [array-callback-without-return](https://sonarsource.github.io/rspec/#/rspec/S3796/javascript)
   */
  'sonarjs/array-callback-without-return': null;

  /**
   * Array constructors should not be used.
   * @see [array-constructor](https://sonarsource.github.io/rspec/#/rspec/S1528/javascript)
   */
  'sonarjs/array-constructor': null;

  /**
   * Braces and parentheses should be used consistently with arrow functions.
   * @see [arrow-function-convention](https://sonarsource.github.io/rspec/#/rspec/S3524/javascript)
   */
  'sonarjs/arrow-function-convention': ArrowFunctionConventionOption;

  /**
   * Tests should include assertions.
   * @see [assertions-in-tests](https://sonarsource.github.io/rspec/#/rspec/S2699/javascript)
   */
  'sonarjs/assertions-in-tests': null;

  /**
   * Creating public APIs is security-sensitive.
   * @see [aws-apigateway-public-api](https://sonarsource.github.io/rspec/#/rspec/S6333/javascript)
   */
  'sonarjs/aws-apigateway-public-api': null;

  /**
   * Allowing public network access to cloud resources is security-sensitive.
   * @see [aws-ec2-rds-dms-public](https://sonarsource.github.io/rspec/#/rspec/S6329/javascript)
   */
  'sonarjs/aws-ec2-rds-dms-public': null;

  /**
   * Using unencrypted EBS volumes is security-sensitive.
   * @see [aws-ec2-unencrypted-ebs-volume](https://sonarsource.github.io/rspec/#/rspec/S6275/javascript)
   */
  'sonarjs/aws-ec2-unencrypted-ebs-volume': null;

  /**
   * Using unencrypted EFS file systems is security-sensitive.
   * @see [aws-efs-unencrypted](https://sonarsource.github.io/rspec/#/rspec/S6332/javascript)
   */
  'sonarjs/aws-efs-unencrypted': null;

  /**
   * Policies granting all privileges are security-sensitive.
   * @see [aws-iam-all-privileges](https://sonarsource.github.io/rspec/#/rspec/S6302/javascript)
   */
  'sonarjs/aws-iam-all-privileges': [('sonar-runtime' | 'metric')?];

  /**
   * Policies granting access to all resources of an account are security-sensitive.
   * @see [aws-iam-all-resources-accessible](https://sonarsource.github.io/rspec/#/rspec/S6304/javascript)
   */
  'sonarjs/aws-iam-all-resources-accessible': [('sonar-runtime' | 'metric')?];

  /**
   * AWS IAM policies should limit the scope of permissions given.
   * @see [aws-iam-privilege-escalation](https://sonarsource.github.io/rspec/#/rspec/S6317/javascript)
   */
  'sonarjs/aws-iam-privilege-escalation': [('sonar-runtime' | 'metric')?];

  /**
   * Policies authorizing public access to resources are security-sensitive.
   * @see [aws-iam-public-access](https://sonarsource.github.io/rspec/#/rspec/S6270/javascript)
   */
  'sonarjs/aws-iam-public-access': [('sonar-runtime' | 'metric')?];

  /**
   * Using unencrypted Elasticsearch domains is security-sensitive.
   * @see [aws-opensearchservice-domain](https://sonarsource.github.io/rspec/#/rspec/S6308/javascript)
   */
  'sonarjs/aws-opensearchservice-domain': null;

  /**
   * Using unencrypted RDS DB resources is security-sensitive.
   * @see [aws-rds-unencrypted-databases](https://sonarsource.github.io/rspec/#/rspec/S6303/javascript)
   */
  'sonarjs/aws-rds-unencrypted-databases': null;

  /**
   * Administration services access should be restricted to specific IP addresses.
   * @see [aws-restricted-ip-admin-access](https://sonarsource.github.io/rspec/#/rspec/S6321/javascript)
   */
  'sonarjs/aws-restricted-ip-admin-access': null;

  /**
   * Granting access to S3 buckets to all or authenticated users is security-sensitive.
   * @see [aws-s3-bucket-granted-access](https://sonarsource.github.io/rspec/#/rspec/S6265/javascript)
   */
  'sonarjs/aws-s3-bucket-granted-access': [('sonar-runtime' | 'metric')?];

  /**
   * Authorizing HTTP communications with S3 buckets is security-sensitive.
   * @see [aws-s3-bucket-insecure-http](https://sonarsource.github.io/rspec/#/rspec/S6249/javascript)
   */
  'sonarjs/aws-s3-bucket-insecure-http': null;

  /**
   * Allowing public ACLs or policies on a S3 bucket is security-sensitive.
   * @see [aws-s3-bucket-public-access](https://sonarsource.github.io/rspec/#/rspec/S6281/javascript)
   */
  'sonarjs/aws-s3-bucket-public-access': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling server-side encryption of S3 buckets is security-sensitive.
   * @deprecated
   * @see [aws-s3-bucket-server-encryption](https://sonarsource.github.io/rspec/#/rspec/S6245/javascript)
   */
  'sonarjs/aws-s3-bucket-server-encryption': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling versioning of S3 buckets is security-sensitive.
   * @see [aws-s3-bucket-versioning](https://sonarsource.github.io/rspec/#/rspec/S6252/javascript)
   */
  'sonarjs/aws-s3-bucket-versioning': [('sonar-runtime' | 'metric')?];

  /**
   * Using unencrypted SageMaker notebook instances is security-sensitive.
   * @see [aws-sagemaker-unencrypted-notebook](https://sonarsource.github.io/rspec/#/rspec/S6319/javascript)
   */
  'sonarjs/aws-sagemaker-unencrypted-notebook': null;

  /**
   * Using unencrypted SNS topics is security-sensitive.
   * @see [aws-sns-unencrypted-topics](https://sonarsource.github.io/rspec/#/rspec/S6327/javascript)
   */
  'sonarjs/aws-sns-unencrypted-topics': null;

  /**
   * Using unencrypted SQS queues is security-sensitive.
   * @see [aws-sqs-unencrypted-queue](https://sonarsource.github.io/rspec/#/rspec/S6330/javascript)
   */
  'sonarjs/aws-sqs-unencrypted-queue': null;

  /**
   * Bitwise operators should not be used in boolean contexts.
   * @see [bitwise-operators](https://sonarsource.github.io/rspec/#/rspec/S1529/javascript)
   */
  'sonarjs/bitwise-operators': null;

  /**
   * Optional boolean parameters should have default value.
   * @see [bool-param-default](https://sonarsource.github.io/rspec/#/rspec/S4798/javascript)
   */
  'sonarjs/bool-param-default': null;

  /**
   * Function call arguments should not start on new lines.
   * @see [call-argument-line](https://sonarsource.github.io/rspec/#/rspec/S1472/javascript)
   */
  'sonarjs/call-argument-line': null;

  /**
   * Disabling Certificate Transparency monitoring is security-sensitive.
   * @see [certificate-transparency](https://sonarsource.github.io/rspec/#/rspec/S5742/javascript)
   */
  'sonarjs/certificate-transparency': [('sonar-runtime' | 'metric')?];

  /**
   * Chai assertions should have only one reason to succeed.
   * @see [chai-determinate-assertion](https://sonarsource.github.io/rspec/#/rspec/S6092/javascript)
   */
  'sonarjs/chai-determinate-assertion': null;

  /**
   * Class names should comply with a naming convention.
   * @see [class-name](https://sonarsource.github.io/rspec/#/rspec/S101/javascript)
   */
  'sonarjs/class-name': ClassNameOption;

  /**
   * Class methods should be used instead of "prototype" assignments.
   * @see [class-prototype](https://sonarsource.github.io/rspec/#/rspec/S3525/javascript)
   */
  'sonarjs/class-prototype': null;

  /**
   * Dynamically executing code is security-sensitive.
   * @see [code-eval](https://sonarsource.github.io/rspec/#/rspec/S1523/javascript)
   */
  'sonarjs/code-eval': null;

  /**
   * Cognitive Complexity of functions should not be too high.
   * @see [cognitive-complexity](https://sonarsource.github.io/rspec/#/rspec/S3776/javascript)
   */
  'sonarjs/cognitive-complexity': CognitiveComplexityOption;

  /**
   * Comma and logical OR operators should not be used in switch cases.
   * @see [comma-or-logical-or-case](https://sonarsource.github.io/rspec/#/rspec/S3616/javascript)
   */
  'sonarjs/comma-or-logical-or-case': null;

  /**
   * Track comments matching a regular expression.
   * @see [comment-regex](https://sonarsource.github.io/rspec/#/rspec/S124/javascript)
   */
  'sonarjs/comment-regex': CommentRegexOption;

  /**
   * Regular expression quantifiers and character classes should be used concisely.
   * @see [concise-regex](https://sonarsource.github.io/rspec/#/rspec/S6353/javascript)
   */
  'sonarjs/concise-regex': null;

  /**
   * A conditionally executed single line should be denoted by indentation.
   * @deprecated
   * @see [conditional-indentation](https://sonarsource.github.io/rspec/#/rspec/S3973/javascript)
   */
  'sonarjs/conditional-indentation': [('sonar-runtime' | 'metric')?];

  /**
   * Allowing confidential information to be logged is security-sensitive.
   * @see [confidential-information-logging](https://sonarsource.github.io/rspec/#/rspec/S5757/javascript)
   */
  'sonarjs/confidential-information-logging': [('sonar-runtime' | 'metric')?];

  /**
   * Objects should not be created to be dropped immediately without being used.
   * @see [constructor-for-side-effects](https://sonarsource.github.io/rspec/#/rspec/S1848/javascript)
   */
  'sonarjs/constructor-for-side-effects': null;

  /**
   * Allowing requests with excessive content length is security-sensitive.
   * @see [content-length](https://sonarsource.github.io/rspec/#/rspec/S5693/javascript)
   */
  'sonarjs/content-length': ContentLengthOption;

  /**
   * Disabling content security policy fetch directives is security-sensitive.
   * @see [content-security-policy](https://sonarsource.github.io/rspec/#/rspec/S5728/javascript)
   */
  'sonarjs/content-security-policy': [('sonar-runtime' | 'metric')?];

  /**
   * Creating cookies without the "HttpOnly" flag is security-sensitive.
   * @see [cookie-no-httponly](https://sonarsource.github.io/rspec/#/rspec/S3330/javascript)
   */
  'sonarjs/cookie-no-httponly': [('sonar-runtime' | 'metric')?];

  /**
   * Writing cookies is security-sensitive.
   * @deprecated
   * @see [cookies](https://sonarsource.github.io/rspec/#/rspec/S2255/javascript)
   */
  'sonarjs/cookies': null;

  /**
   * Having a permissive Cross-Origin Resource Sharing policy is security-sensitive.
   * @see [cors](https://sonarsource.github.io/rspec/#/rspec/S5122/javascript)
   */
  'sonarjs/cors': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling CSRF protections is security-sensitive.
   * @see [csrf](https://sonarsource.github.io/rspec/#/rspec/S4502/javascript)
   */
  'sonarjs/csrf': [('sonar-runtime' | 'metric')?];

  /**
   * Cyclomatic Complexity of functions should not be too high.
   * @see [cyclomatic-complexity](https://sonarsource.github.io/rspec/#/rspec/S1541/javascript)
   */
  'sonarjs/cyclomatic-complexity': CyclomaticComplexityOption;

  /**
   * Variables and functions should not be declared in the global scope.
   * @see [declarations-in-global-scope](https://sonarsource.github.io/rspec/#/rspec/S3798/javascript)
   */
  'sonarjs/declarations-in-global-scope': null;

  /**
   * Deprecated APIs should not be used.
   * @see [deprecation](https://sonarsource.github.io/rspec/#/rspec/S1874/javascript)
   */
  'sonarjs/deprecation': null;

  /**
   * Destructuring syntax should be used for assignments.
   * @see [destructuring-assignment-syntax](https://sonarsource.github.io/rspec/#/rspec/S3514/javascript)
   */
  'sonarjs/destructuring-assignment-syntax': [('sonar-runtime' | 'metric')?];

  /**
   * Strict equality operators should not be used with dissimilar types.
   * @see [different-types-comparison](https://sonarsource.github.io/rspec/#/rspec/S3403/javascript)
   */
  'sonarjs/different-types-comparison': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling auto-escaping in template engines is security-sensitive.
   * @see [disabled-auto-escaping](https://sonarsource.github.io/rspec/#/rspec/S5247/javascript)
   */
  'sonarjs/disabled-auto-escaping': [('sonar-runtime' | 'metric')?];

  /**
   * Using remote artifacts without integrity checks is security-sensitive.
   * @see [disabled-resource-integrity](https://sonarsource.github.io/rspec/#/rspec/S5725/javascript)
   */
  'sonarjs/disabled-resource-integrity': null;

  /**
   * Disabling Mocha timeouts should be explicit.
   * @see [disabled-timeout](https://sonarsource.github.io/rspec/#/rspec/S6080/javascript)
   */
  'sonarjs/disabled-timeout': null;

  /**
   * Allowing browsers to perform DNS prefetching is security-sensitive.
   * @deprecated
   * @see [dns-prefetching](https://sonarsource.github.io/rspec/#/rspec/S5743/javascript)
   */
  'sonarjs/dns-prefetching': [('sonar-runtime' | 'metric')?];

  /**
   * Character classes in regular expressions should not contain the same character twice.
   * @see [duplicates-in-character-class](https://sonarsource.github.io/rspec/#/rspec/S5869/javascript)
   */
  'sonarjs/duplicates-in-character-class': [('sonar-runtime' | 'metric')?];

  /**
   * "if ... else if" constructs should end with "else" clauses.
   * @see [elseif-without-else](https://sonarsource.github.io/rspec/#/rspec/S126/javascript)
   */
  'sonarjs/elseif-without-else': null;

  /**
   * Repeated patterns in regular expressions should not match the empty string.
   * @see [empty-string-repetition](https://sonarsource.github.io/rspec/#/rspec/S5842/javascript)
   */
  'sonarjs/empty-string-repetition': null;

  /**
   * Encrypting data is security-sensitive.
   * @deprecated
   * @see [encryption](https://sonarsource.github.io/rspec/#/rspec/S4787/javascript)
   */
  'sonarjs/encryption': null;

  /**
   * Encryption algorithms should be used with secure mode and padding scheme.
   * @see [encryption-secure-mode](https://sonarsource.github.io/rspec/#/rspec/S5542/javascript)
   */
  'sonarjs/encryption-secure-mode': null;

  /**
   * Trailing commas should be used.
   * @deprecated
   * @see [enforce-trailing-comma](https://sonarsource.github.io/rspec/#/rspec/S3723/javascript)
   */
  'sonarjs/enforce-trailing-comma': EnforceTrailingComma.EnforceTrailingCommaRuleConfig;

  /**
   * Replacement strings should reference existing regular expression groups.
   * @see [existing-groups](https://sonarsource.github.io/rspec/#/rspec/S6328/javascript)
   */
  'sonarjs/existing-groups': null;

  /**
   * Expressions should not be too complex.
   * @see [expression-complexity](https://sonarsource.github.io/rspec/#/rspec/S1067/javascript)
   */
  'sonarjs/expression-complexity': ExpressionComplexityOption;

  /**
   * Track lack of copyright and license headers.
   * @see [file-header](https://sonarsource.github.io/rspec/#/rspec/S1451/javascript)
   */
  'sonarjs/file-header': FileHeaderOption;

  /**
   * Default export names and file names should match.
   * @see [file-name-differ-from-class](https://sonarsource.github.io/rspec/#/rspec/S3317/javascript)
   */
  'sonarjs/file-name-differ-from-class': null;

  /**
   * Setting loose POSIX file permissions is security-sensitive.
   * @see [file-permissions](https://sonarsource.github.io/rspec/#/rspec/S2612/javascript)
   */
  'sonarjs/file-permissions': null;

  /**
   * File uploads should be restricted.
   * @see [file-uploads](https://sonarsource.github.io/rspec/#/rspec/S2598/javascript)
   */
  'sonarjs/file-uploads': [('sonar-runtime' | 'metric')?];

  /**
   * Track uses of "FIXME" tags.
   * @see [fixme-tag](https://sonarsource.github.io/rspec/#/rspec/S1134/javascript)
   */
  'sonarjs/fixme-tag': null;

  /**
   * "for...in" loops should filter properties before acting on them.
   * @see [for-in](https://sonarsource.github.io/rspec/#/rspec/S1535/javascript)
   */
  'sonarjs/for-in': null;

  /**
   * A "for" loop update clause should move the counter in the right direction.
   * @see [for-loop-increment-sign](https://sonarsource.github.io/rspec/#/rspec/S2251/javascript)
   */
  'sonarjs/for-loop-increment-sign': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling content security policy frame-ancestors directive is security-sensitive.
   * @see [frame-ancestors](https://sonarsource.github.io/rspec/#/rspec/S5732/javascript)
   */
  'sonarjs/frame-ancestors': [('sonar-runtime' | 'metric')?];

  /**
   * Functions should not be defined inside loops.
   * @see [function-inside-loop](https://sonarsource.github.io/rspec/#/rspec/S1515/javascript)
   */
  'sonarjs/function-inside-loop': [('sonar-runtime' | 'metric')?];

  /**
   * Function and method names should comply with a naming convention.
   * @see [function-name](https://sonarsource.github.io/rspec/#/rspec/S100/javascript)
   */
  'sonarjs/function-name': FunctionNameOption;

  /**
   * Functions should always return the same type.
   * @see [function-return-type](https://sonarsource.github.io/rspec/#/rspec/S3800/javascript)
   */
  'sonarjs/function-return-type': [('sonar-runtime' | 'metric')?];

  /**
   * Future reserved words should not be used as identifiers.
   * @see [future-reserved-words](https://sonarsource.github.io/rspec/#/rspec/S1527/javascript)
   */
  'sonarjs/future-reserved-words': null;

  /**
   * Generators should explicitly "yield" a value.
   * @see [generator-without-yield](https://sonarsource.github.io/rspec/#/rspec/S3531/javascript)
   */
  'sonarjs/generator-without-yield': null;

  /**
   * Using weak hashing algorithms is security-sensitive.
   * @see [hashing](https://sonarsource.github.io/rspec/#/rspec/S4790/javascript)
   */
  'sonarjs/hashing': null;

  /**
   * Statically serving hidden files is security-sensitive.
   * @see [hidden-files](https://sonarsource.github.io/rspec/#/rspec/S5691/javascript)
   */
  'sonarjs/hidden-files': null;

  /**
   * The return value of "useState" should be destructured and named symmetrically.
   * @see [hook-use-state](https://sonarsource.github.io/rspec/#/rspec/S6754/javascript)
   */
  'sonarjs/hook-use-state': [
    {
      allowDestructuredState?: boolean;
    }?,
  ];

  /**
   * "in" should not be used with primitive types.
   * @see [in-operator-type-error](https://sonarsource.github.io/rspec/#/rspec/S3785/javascript)
   */
  'sonarjs/in-operator-type-error': [('sonar-runtime' | 'metric')?];

  /**
   * Functions should be called consistently with or without "new".
   * @see [inconsistent-function-call](https://sonarsource.github.io/rspec/#/rspec/S3686/javascript)
   */
  'sonarjs/inconsistent-function-call': [('sonar-runtime' | 'metric')?];

  /**
   * "indexOf" checks should not be for positive numbers.
   * @see [index-of-compare-to-positive-number](https://sonarsource.github.io/rspec/#/rspec/S2692/javascript)
   */
  'sonarjs/index-of-compare-to-positive-number': null;

  /**
   * Creating cookies without the "secure" flag is security-sensitive.
   * @see [insecure-cookie](https://sonarsource.github.io/rspec/#/rspec/S2092/javascript)
   */
  'sonarjs/insecure-cookie': [('sonar-runtime' | 'metric')?];

  /**
   * JWT should be signed and verified with strong cipher algorithms.
   * @see [insecure-jwt-token](https://sonarsource.github.io/rspec/#/rspec/S5659/javascript)
   */
  'sonarjs/insecure-jwt-token': [('sonar-runtime' | 'metric')?];

  /**
   * Assertion arguments should be passed in the correct order.
   * @see [inverted-assertion-arguments](https://sonarsource.github.io/rspec/#/rspec/S3415/javascript)
   */
  'sonarjs/inverted-assertion-arguments': [('sonar-runtime' | 'metric')?];

  /**
   * JSX list components should have a key property.
   * @see [jsx-key](https://sonarsource.github.io/rspec/#/rspec/S6477/javascript)
   */
  'sonarjs/jsx-key': null;

  /**
   * React Context Provider values should have stable identities.
   * @see [jsx-no-constructed-context-values](https://sonarsource.github.io/rspec/#/rspec/S6481/javascript)
   */
  'sonarjs/jsx-no-constructed-context-values': null;

  /**
   * Only "while", "do", "for" and "switch" statements should be labelled.
   * @see [label-position](https://sonarsource.github.io/rspec/#/rspec/S1439/javascript)
   */
  'sonarjs/label-position': null;

  /**
   * Authorizing an opened window to access back to the originating window is security-sensitive.
   * @see [link-with-target-blank](https://sonarsource.github.io/rspec/#/rspec/S5148/javascript)
   */
  'sonarjs/link-with-target-blank': null;

  /**
   * "switch" statements should not have too many "case" clauses.
   * @see [max-switch-cases](https://sonarsource.github.io/rspec/#/rspec/S1479/javascript)
   */
  'sonarjs/max-switch-cases': MaxSwitchCasesOption;

  /**
   * Union types should not have too many elements.
   * @see [max-union-size](https://sonarsource.github.io/rspec/#/rspec/S4622/javascript)
   */
  'sonarjs/max-union-size': MaxUnionSizeOption;

  /**
   * "for" loop increment clauses should modify the loops' counters.
   * @see [misplaced-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S1994/javascript)
   */
  'sonarjs/misplaced-loop-counter': null;

  /**
   * Mouse events should have corresponding keyboard events.
   * @see [mouse-events-a11y](https://sonarsource.github.io/rspec/#/rspec/S1082/javascript)
   */
  'sonarjs/mouse-events-a11y': null;

  /**
   * Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply.
   * @see [nested-control-flow](https://sonarsource.github.io/rspec/#/rspec/S134/javascript)
   */
  'sonarjs/nested-control-flow': NestedControlFlowOption;

  /**
   * "new" should only be used with functions and classes.
   * @see [new-operator-misuse](https://sonarsource.github.io/rspec/#/rspec/S2999/javascript)
   */
  'sonarjs/new-operator-misuse': NewOperatorMisuseOption;

  /**
   * All branches in a conditional structure should not have exactly the same implementation.
   * @see [no-all-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S3923/javascript)
   */
  'sonarjs/no-all-duplicated-branches': null;

  /**
   * "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function.
   * @see [no-alphabetical-sort](https://sonarsource.github.io/rspec/#/rspec/S2871/javascript)
   */
  'sonarjs/no-alphabetical-sort': null;

  /**
   * Disabling Angular built-in sanitization is security-sensitive.
   * @see [no-angular-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6268/javascript)
   */
  'sonarjs/no-angular-bypass-sanitization': null;

  /**
   * "delete" should not be used on arrays.
   * @see [no-array-delete](https://sonarsource.github.io/rspec/#/rspec/S2870/javascript)
   */
  'sonarjs/no-array-delete': null;

  /**
   * JSX list components should not use array indexes as key.
   * @see [no-array-index-key](https://sonarsource.github.io/rspec/#/rspec/S6479/javascript)
   */
  'sonarjs/no-array-index-key': null;

  /**
   * Array indexes should be numeric.
   * @see [no-associative-arrays](https://sonarsource.github.io/rspec/#/rspec/S3579/javascript)
   */
  'sonarjs/no-associative-arrays': null;

  /**
   * Constructors should not contain asynchronous operations.
   * @see [no-async-constructor](https://sonarsource.github.io/rspec/#/rspec/S7059/javascript)
   */
  'sonarjs/no-async-constructor': null;

  /**
   * Built-in objects should not be overridden.
   * @see [no-built-in-override](https://sonarsource.github.io/rspec/#/rspec/S2424/javascript)
   */
  'sonarjs/no-built-in-override': null;

  /**
   * "switch" statements should not contain non-case labels.
   * @see [no-case-label-in-switch](https://sonarsource.github.io/rspec/#/rspec/S1219/javascript)
   */
  'sonarjs/no-case-label-in-switch': null;

  /**
   * Using clear-text protocols is security-sensitive.
   * @see [no-clear-text-protocols](https://sonarsource.github.io/rspec/#/rspec/S5332/javascript)
   */
  'sonarjs/no-clear-text-protocols': null;

  /**
   * Tests should not execute any code after "done()" is called.
   * @see [no-code-after-done](https://sonarsource.github.io/rspec/#/rspec/S6079/javascript)
   */
  'sonarjs/no-code-after-done': [('sonar-runtime' | 'metric')?];

  /**
   * Mergeable "if" statements should be combined.
   * @see [no-collapsible-if](https://sonarsource.github.io/rspec/#/rspec/S1066/javascript)
   */
  'sonarjs/no-collapsible-if': [('sonar-runtime' | 'metric')?];

  /**
   * Collection size and array length comparisons should make sense.
   * @see [no-collection-size-mischeck](https://sonarsource.github.io/rspec/#/rspec/S3981/javascript)
   */
  'sonarjs/no-collection-size-mischeck': null;

  /**
   * Sections of code should not be commented out.
   * @see [no-commented-code](https://sonarsource.github.io/rspec/#/rspec/S125/javascript)
   */
  'sonarjs/no-commented-code': null;

  /**
   * Unused assignments should be removed.
   * @see [no-dead-store](https://sonarsource.github.io/rspec/#/rspec/S1854/javascript)
   */
  'sonarjs/no-dead-store': null;

  /**
   * "delete" should be used only with object properties.
   * @see [no-delete-var](https://sonarsource.github.io/rspec/#/rspec/S3001/javascript)
   */
  'sonarjs/no-delete-var': null;

  /**
   * Deprecated React APIs should not be used.
   * @see [no-deprecated-react](https://sonarsource.github.io/rspec/#/rspec/S6957/javascript)
   */
  'sonarjs/no-deprecated-react': NoDeprecatedReactOption;

  /**
   * Union and intersection types should not include duplicated constituents.
   * @see [no-duplicate-in-composite](https://sonarsource.github.io/rspec/#/rspec/S4621/javascript)
   */
  'sonarjs/no-duplicate-in-composite': [('sonar-runtime' | 'metric')?];

  /**
   * String literals should not be duplicated.
   * @see [no-duplicate-string](https://sonarsource.github.io/rspec/#/rspec/S1192/javascript)
   */
  'sonarjs/no-duplicate-string': NoDuplicateStringOption;

  /**
   * Two branches in a conditional structure should not have exactly the same implementation.
   * @see [no-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S1871/javascript)
   */
  'sonarjs/no-duplicated-branches': [('sonar-runtime' | 'metric')?];

  /**
   * Collection elements should not be replaced unconditionally.
   * @see [no-element-overwrite](https://sonarsource.github.io/rspec/#/rspec/S4143/javascript)
   */
  'sonarjs/no-element-overwrite': [('sonar-runtime' | 'metric')?];

  /**
   * Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string.
   * @see [no-empty-after-reluctant](https://sonarsource.github.io/rspec/#/rspec/S6019/javascript)
   */
  'sonarjs/no-empty-after-reluctant': null;

  /**
   * Alternation in regular expressions should not contain empty alternatives.
   * @see [no-empty-alternatives](https://sonarsource.github.io/rspec/#/rspec/S6323/javascript)
   */
  'sonarjs/no-empty-alternatives': null;

  /**
   * Empty collections should not be accessed or iterated.
   * @see [no-empty-collection](https://sonarsource.github.io/rspec/#/rspec/S4158/javascript)
   */
  'sonarjs/no-empty-collection': null;

  /**
   * Regular expressions should not contain empty groups.
   * @see [no-empty-group](https://sonarsource.github.io/rspec/#/rspec/S6331/javascript)
   */
  'sonarjs/no-empty-group': null;

  /**
   * Test files should contain at least one test case.
   * @see [no-empty-test-file](https://sonarsource.github.io/rspec/#/rspec/S2187/javascript)
   */
  'sonarjs/no-empty-test-file': null;

  /**
   * Equality operators should not be used in "for" loop termination conditions.
   * @see [no-equals-in-for-termination](https://sonarsource.github.io/rspec/#/rspec/S888/javascript)
   */
  'sonarjs/no-equals-in-for-termination': null;

  /**
   * Exclusive tests should not be commited to version control.
   * @see [no-exclusive-tests](https://sonarsource.github.io/rspec/#/rspec/S6426/javascript)
   */
  'sonarjs/no-exclusive-tests': null;

  /**
   * Function calls should not pass extra arguments.
   * @see [no-extra-arguments](https://sonarsource.github.io/rspec/#/rspec/S930/javascript)
   */
  'sonarjs/no-extra-arguments': [('sonar-runtime' | 'metric')?];

  /**
   * "for in" should not be used with iterables.
   * @see [no-for-in-iterable](https://sonarsource.github.io/rspec/#/rspec/S4139/javascript)
   */
  'sonarjs/no-for-in-iterable': null;

  /**
   * Function declarations should not be made within blocks.
   * @see [no-function-declaration-in-block](https://sonarsource.github.io/rspec/#/rspec/S1530/javascript)
   */
  'sonarjs/no-function-declaration-in-block': null;

  /**
   * The global "this" object should not be used.
   * @see [no-global-this](https://sonarsource.github.io/rspec/#/rspec/S2990/javascript)
   */
  'sonarjs/no-global-this': null;

  /**
   * Special identifiers should not be bound or assigned.
   * @see [no-globals-shadowing](https://sonarsource.github.io/rspec/#/rspec/S2137/javascript)
   */
  'sonarjs/no-globals-shadowing': null;

  /**
   * Boolean expressions should not be gratuitous.
   * @see [no-gratuitous-expressions](https://sonarsource.github.io/rspec/#/rspec/S2589/javascript)
   */
  'sonarjs/no-gratuitous-expressions': [('sonar-runtime' | 'metric')?];

  /**
   * Hard-coded credentials are security-sensitive.
   * @see [no-hardcoded-credentials](https://sonarsource.github.io/rspec/#/rspec/S2068/javascript)
   */
  'sonarjs/no-hardcoded-credentials': NoHardcodedCredentialsOption;

  /**
   * Using hardcoded IP addresses is security-sensitive.
   * @see [no-hardcoded-ip](https://sonarsource.github.io/rspec/#/rspec/S1313/javascript)
   */
  'sonarjs/no-hardcoded-ip': null;

  /**
   * React's useState hook should not be used directly in the render function or body of a component.
   * @see [no-hook-setter-in-body](https://sonarsource.github.io/rspec/#/rspec/S6442/javascript)
   */
  'sonarjs/no-hook-setter-in-body': null;

  /**
   * "if/else if" chains and "switch" cases should not have the same condition.
   * @see [no-identical-conditions](https://sonarsource.github.io/rspec/#/rspec/S1862/javascript)
   */
  'sonarjs/no-identical-conditions': [('sonar-runtime' | 'metric')?];

  /**
   * Identical expressions should not be used on both sides of a binary operator.
   * @see [no-identical-expressions](https://sonarsource.github.io/rspec/#/rspec/S1764/javascript)
   */
  'sonarjs/no-identical-expressions': [('sonar-runtime' | 'metric')?];

  /**
   * Functions should not have identical implementations.
   * @see [no-identical-functions](https://sonarsource.github.io/rspec/#/rspec/S4144/javascript)
   */
  'sonarjs/no-identical-functions': NoIdenticalFunctionsOption;

  /**
   * Exceptions should not be ignored.
   * @see [no-ignored-exceptions](https://sonarsource.github.io/rspec/#/rspec/S2486/javascript)
   */
  'sonarjs/no-ignored-exceptions': null;

  /**
   * Return values from functions without side effects should not be ignored.
   * @see [no-ignored-return](https://sonarsource.github.io/rspec/#/rspec/S2201/javascript)
   */
  'sonarjs/no-ignored-return': null;

  /**
   * Dependencies should be explicit.
   * @see [no-implicit-dependencies](https://sonarsource.github.io/rspec/#/rspec/S4328/javascript)
   */
  'sonarjs/no-implicit-dependencies': NoImplicitDependenciesOption;

  /**
   * Variables should be declared explicitly.
   * @see [no-implicit-global](https://sonarsource.github.io/rspec/#/rspec/S2703/javascript)
   */
  'sonarjs/no-implicit-global': null;

  /**
   * "in" should not be used on arrays.
   * @see [no-in-misuse](https://sonarsource.github.io/rspec/#/rspec/S4619/javascript)
   */
  'sonarjs/no-in-misuse': null;

  /**
   * Assertions should be complete.
   * @see [no-incomplete-assertions](https://sonarsource.github.io/rspec/#/rspec/S2970/javascript)
   */
  'sonarjs/no-incomplete-assertions': null;

  /**
   * Functions should use "return" consistently.
   * @see [no-inconsistent-returns](https://sonarsource.github.io/rspec/#/rspec/S3801/javascript)
   */
  'sonarjs/no-inconsistent-returns': [('sonar-runtime' | 'metric')?];

  /**
   * Strings and non-strings should not be added.
   * @see [no-incorrect-string-concat](https://sonarsource.github.io/rspec/#/rspec/S3402/javascript)
   */
  'sonarjs/no-incorrect-string-concat': [('sonar-runtime' | 'metric')?];

  /**
   * Users should not use internal APIs.
   * @see [no-internal-api-use](https://sonarsource.github.io/rspec/#/rspec/S6627/javascript)
   */
  'sonarjs/no-internal-api-use': null;

  /**
   * Using intrusive permissions is security-sensitive.
   * @see [no-intrusive-permissions](https://sonarsource.github.io/rspec/#/rspec/S5604/javascript)
   */
  'sonarjs/no-intrusive-permissions': NoIntrusivePermissionsOption;

  /**
   * "await" should only be used with promises.
   * @see [no-invalid-await](https://sonarsource.github.io/rspec/#/rspec/S4123/javascript)
   */
  'sonarjs/no-invalid-await': null;

  /**
   * Function returns should not be invariant.
   * @see [no-invariant-returns](https://sonarsource.github.io/rspec/#/rspec/S3516/javascript)
   */
  'sonarjs/no-invariant-returns': [('sonar-runtime' | 'metric')?];

  /**
   * Boolean checks should not be inverted.
   * @see [no-inverted-boolean-check](https://sonarsource.github.io/rspec/#/rspec/S1940/javascript)
   */
  'sonarjs/no-inverted-boolean-check': null;

  /**
   * Forwarding client IP address is security-sensitive.
   * @see [no-ip-forward](https://sonarsource.github.io/rspec/#/rspec/S5759/javascript)
   */
  'sonarjs/no-ip-forward': [('sonar-runtime' | 'metric')?];

  /**
   * Labels should not be used.
   * @see [no-labels](https://sonarsource.github.io/rspec/#/rspec/S1119/javascript)
   */
  'sonarjs/no-labels': null;

  /**
   * Literals should not be used as functions.
   * @see [no-literal-call](https://sonarsource.github.io/rspec/#/rspec/S6958/javascript)
   */
  'sonarjs/no-literal-call': null;

  /**
   * Allowing browsers to sniff MIME types is security-sensitive.
   * @see [no-mime-sniff](https://sonarsource.github.io/rspec/#/rspec/S5734/javascript)
   */
  'sonarjs/no-mime-sniff': [('sonar-runtime' | 'metric')?];

  /**
   * Array-mutating methods should not be used misleadingly.
   * @see [no-misleading-array-reverse](https://sonarsource.github.io/rspec/#/rspec/S4043/javascript)
   */
  'sonarjs/no-misleading-array-reverse': null;

  /**
   * Allowing mixed-content is security-sensitive.
   * @see [no-mixed-content](https://sonarsource.github.io/rspec/#/rspec/S5730/javascript)
   */
  'sonarjs/no-mixed-content': [('sonar-runtime' | 'metric')?];

  /**
   * Assignments should not be made from within sub-expressions.
   * @see [no-nested-assignment](https://sonarsource.github.io/rspec/#/rspec/S1121/javascript)
   */
  'sonarjs/no-nested-assignment': null;

  /**
   * Ternary operators should not be nested.
   * @see [no-nested-conditional](https://sonarsource.github.io/rspec/#/rspec/S3358/javascript)
   */
  'sonarjs/no-nested-conditional': null;

  /**
   * Functions should not be nested too deeply.
   * @see [no-nested-functions](https://sonarsource.github.io/rspec/#/rspec/S2004/javascript)
   */
  'sonarjs/no-nested-functions': NoNestedFunctionsOption;

  /**
   * Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression.
   * @see [no-nested-incdec](https://sonarsource.github.io/rspec/#/rspec/S881/javascript)
   */
  'sonarjs/no-nested-incdec': null;

  /**
   * "switch" statements should not be nested.
   * @see [no-nested-switch](https://sonarsource.github.io/rspec/#/rspec/S1821/javascript)
   */
  'sonarjs/no-nested-switch': null;

  /**
   * Template literals should not be nested.
   * @see [no-nested-template-literals](https://sonarsource.github.io/rspec/#/rspec/S4624/javascript)
   */
  'sonarjs/no-nested-template-literals': null;

  /**
   * Loops with at most one iteration should be refactored.
   * @see [no-one-iteration-loop](https://sonarsource.github.io/rspec/#/rspec/S1751/javascript)
   */
  'sonarjs/no-one-iteration-loop': null;

  /**
   * Searching OS commands in PATH is security-sensitive.
   * @see [no-os-command-from-path](https://sonarsource.github.io/rspec/#/rspec/S4036/javascript)
   */
  'sonarjs/no-os-command-from-path': null;

  /**
   * Initial values of parameters, caught exceptions, and loop variables should not be ignored.
   * @see [no-parameter-reassignment](https://sonarsource.github.io/rspec/#/rspec/S1226/javascript)
   */
  'sonarjs/no-parameter-reassignment': null;

  /**
   * Wrapper objects should not be used for primitive types.
   * @see [no-primitive-wrappers](https://sonarsource.github.io/rspec/#/rspec/S1533/javascript)
   */
  'sonarjs/no-primitive-wrappers': null;

  /**
   * Assignments should not be redundant.
   * @see [no-redundant-assignments](https://sonarsource.github.io/rspec/#/rspec/S4165/javascript)
   */
  'sonarjs/no-redundant-assignments': null;

  /**
   * Boolean literals should not be used in comparisons.
   * @see [no-redundant-boolean](https://sonarsource.github.io/rspec/#/rspec/S1125/javascript)
   */
  'sonarjs/no-redundant-boolean': null;

  /**
   * Jump statements should not be redundant.
   * @see [no-redundant-jump](https://sonarsource.github.io/rspec/#/rspec/S3626/javascript)
   */
  'sonarjs/no-redundant-jump': null;

  /**
   * Optional property declarations should not use both '?' and 'undefined' syntax.
   * @see [no-redundant-optional](https://sonarsource.github.io/rspec/#/rspec/S4782/javascript)
   */
  'sonarjs/no-redundant-optional': [('sonar-runtime' | 'metric')?];

  /**
   * Redundant pairs of parentheses should be removed.
   * @deprecated
   * @see [no-redundant-parentheses](https://sonarsource.github.io/rspec/#/rspec/S1110/javascript)
   */
  'sonarjs/no-redundant-parentheses': [('sonar-runtime' | 'metric')?];

  /**
   * Variables should be defined before being used.
   * @see [no-reference-error](https://sonarsource.github.io/rspec/#/rspec/S3827/javascript)
   */
  'sonarjs/no-reference-error': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling strict HTTP no-referrer policy is security-sensitive.
   * @see [no-referrer-policy](https://sonarsource.github.io/rspec/#/rspec/S5736/javascript)
   */
  'sonarjs/no-referrer-policy': [('sonar-runtime' | 'metric')?];

  /**
   * "import" should be used to include external code.
   * @see [no-require-or-define](https://sonarsource.github.io/rspec/#/rspec/S3533/javascript)
   */
  'sonarjs/no-require-or-define': null;

  /**
   * Primitive return types should be used.
   * @see [no-return-type-any](https://sonarsource.github.io/rspec/#/rspec/S4324/javascript)
   */
  'sonarjs/no-return-type-any': null;

  /**
   * Assertions should not be given twice the same argument.
   * @see [no-same-argument-assert](https://sonarsource.github.io/rspec/#/rspec/S5863/javascript)
   */
  'sonarjs/no-same-argument-assert': [('sonar-runtime' | 'metric')?];

  /**
   * Conditionals should start on new lines.
   * @see [no-same-line-conditional](https://sonarsource.github.io/rspec/#/rspec/S3972/javascript)
   */
  'sonarjs/no-same-line-conditional': [('sonar-runtime' | 'metric')?];

  /**
   * Methods should not contain selector parameters.
   * @see [no-selector-parameter](https://sonarsource.github.io/rspec/#/rspec/S2301/javascript)
   */
  'sonarjs/no-selector-parameter': [('sonar-runtime' | 'metric')?];

  /**
   * Tests should not be skipped without providing a reason.
   * @see [no-skipped-test](https://sonarsource.github.io/rspec/#/rspec/S1607/javascript)
   */
  'sonarjs/no-skipped-test': null;

  /**
   * "if" statements should be preferred over "switch" when simpler.
   * @see [no-small-switch](https://sonarsource.github.io/rspec/#/rspec/S1301/javascript)
   */
  'sonarjs/no-small-switch': null;

  /**
   * Tabulation characters should not be used.
   * @deprecated
   * @see [no-tab](https://sonarsource.github.io/rspec/#/rspec/S105/javascript)
   */
  'sonarjs/no-tab': null;

  /**
   * HTML "<table>" should not be used for layout purposes.
   * @see [no-table-as-layout](https://sonarsource.github.io/rspec/#/rspec/S5257/javascript)
   */
  'sonarjs/no-table-as-layout': null;

  /**
   * Promise rejections should not be caught by "try" blocks.
   * @see [no-try-promise](https://sonarsource.github.io/rspec/#/rspec/S4822/javascript)
   */
  'sonarjs/no-try-promise': [('sonar-runtime' | 'metric')?];

  /**
   * "undefined" should not be passed as the value of optional parameters.
   * @see [no-undefined-argument](https://sonarsource.github.io/rspec/#/rspec/S4623/javascript)
   */
  'sonarjs/no-undefined-argument': null;

  /**
   * "undefined" should not be assigned.
   * @see [no-undefined-assignment](https://sonarsource.github.io/rspec/#/rspec/S2138/javascript)
   */
  'sonarjs/no-undefined-assignment': null;

  /**
   * Multiline blocks should be enclosed in curly braces.
   * @see [no-unenclosed-multiline-block](https://sonarsource.github.io/rspec/#/rspec/S2681/javascript)
   */
  'sonarjs/no-unenclosed-multiline-block': null;

  /**
   * JSX list components keys should match up between renders.
   * @see [no-uniq-key](https://sonarsource.github.io/rspec/#/rspec/S6486/javascript)
   */
  'sonarjs/no-uniq-key': null;

  /**
   * React legacy lifecycle methods should not be used.
   * @see [no-unsafe](https://sonarsource.github.io/rspec/#/rspec/S6791/javascript)
   */
  'sonarjs/no-unsafe': [
    {
      checkAliases?: boolean;
    }?,
  ];

  /**
   * Expanding archive files without controlling resource consumption is security-sensitive.
   * @see [no-unsafe-unzip](https://sonarsource.github.io/rspec/#/rspec/S5042/javascript)
   */
  'sonarjs/no-unsafe-unzip': null;

  /**
   * React components should not be nested.
   * @see [no-unstable-nested-components](https://sonarsource.github.io/rspec/#/rspec/S6478/javascript)
   */
  'sonarjs/no-unstable-nested-components': [
    {
      customValidators?: string[];
      allowAsProps?: boolean;
    }?,
  ];

  /**
   * Errors should not be created without being thrown.
   * @see [no-unthrown-error](https://sonarsource.github.io/rspec/#/rspec/S3984/javascript)
   */
  'sonarjs/no-unthrown-error': null;

  /**
   * Collection contents should be used.
   * @see [no-unused-collection](https://sonarsource.github.io/rspec/#/rspec/S4030/javascript)
   */
  'sonarjs/no-unused-collection': null;

  /**
   * Unused function parameters should be removed.
   * @see [no-unused-function-argument](https://sonarsource.github.io/rspec/#/rspec/S1172/javascript)
   */
  'sonarjs/no-unused-function-argument': null;

  /**
   * The return value of void functions should not be used.
   * @see [no-use-of-empty-return-value](https://sonarsource.github.io/rspec/#/rspec/S3699/javascript)
   */
  'sonarjs/no-use-of-empty-return-value': null;

  /**
   * "catch" clauses should do more than rethrow.
   * @see [no-useless-catch](https://sonarsource.github.io/rspec/#/rspec/S2737/javascript)
   */
  'sonarjs/no-useless-catch': null;

  /**
   * Values should not be uselessly incremented.
   * @see [no-useless-increment](https://sonarsource.github.io/rspec/#/rspec/S2123/javascript)
   */
  'sonarjs/no-useless-increment': null;

  /**
   * Type intersections should use meaningful types.
   * @see [no-useless-intersection](https://sonarsource.github.io/rspec/#/rspec/S4335/javascript)
   */
  'sonarjs/no-useless-intersection': null;

  /**
   * React state setter function should not be called with its matching state variable.
   * @see [no-useless-react-setstate](https://sonarsource.github.io/rspec/#/rspec/S6443/javascript)
   */
  'sonarjs/no-useless-react-setstate': null;

  /**
   * Variables declared with "var" should be declared before they are used.
   * @see [no-variable-usage-before-declaration](https://sonarsource.github.io/rspec/#/rspec/S1526/javascript)
   */
  'sonarjs/no-variable-usage-before-declaration': [
    ('sonar-runtime' | 'metric')?,
  ];

  /**
   * Disabling Vue.js built-in escaping is security-sensitive.
   * @see [no-vue-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6299/javascript)
   */
  'sonarjs/no-vue-bypass-sanitization': null;

  /**
   * Cipher algorithms should be robust.
   * @see [no-weak-cipher](https://sonarsource.github.io/rspec/#/rspec/S5547/javascript)
   */
  'sonarjs/no-weak-cipher': null;

  /**
   * Cryptographic keys should be robust.
   * @see [no-weak-keys](https://sonarsource.github.io/rspec/#/rspec/S4426/javascript)
   */
  'sonarjs/no-weak-keys': null;

  /**
   * Wildcard imports should not be used.
   * @see [no-wildcard-import](https://sonarsource.github.io/rspec/#/rspec/S2208/javascript)
   */
  'sonarjs/no-wildcard-import': null;

  /**
   * Non-existent operators '=+', '=-' and '=!' should not be used.
   * @see [non-existent-operator](https://sonarsource.github.io/rspec/#/rspec/S2757/javascript)
   */
  'sonarjs/non-existent-operator': null;

  /**
   * Arithmetic operators should only have numbers as operands.
   * @see [non-number-in-arithmetic-expression](https://sonarsource.github.io/rspec/#/rspec/S3760/javascript)
   */
  'sonarjs/non-number-in-arithmetic-expression': [
    ('sonar-runtime' | 'metric')?,
  ];

  /**
   * Properties of variables with "null" or "undefined" values should not be accessed.
   * @see [null-dereference](https://sonarsource.github.io/rspec/#/rspec/S2259/javascript)
   */
  'sonarjs/null-dereference': null;

  /**
   * "<object>" tags should provide an alternative content.
   * @see [object-alt-content](https://sonarsource.github.io/rspec/#/rspec/S5264/javascript)
   */
  'sonarjs/object-alt-content': null;

  /**
   * Arithmetic operations should not result in "NaN".
   * @see [operation-returning-nan](https://sonarsource.github.io/rspec/#/rspec/S3757/javascript)
   */
  'sonarjs/operation-returning-nan': null;

  /**
   * Using shell interpreter when executing OS commands is security-sensitive.
   * @see [os-command](https://sonarsource.github.io/rspec/#/rspec/S4721/javascript)
   */
  'sonarjs/os-command': null;

  /**
   * Origins should be verified during cross-origin communications.
   * @see [post-message](https://sonarsource.github.io/rspec/#/rspec/S2819/javascript)
   */
  'sonarjs/post-message': null;

  /**
   * "default" clauses should be last.
   * @see [prefer-default-last](https://sonarsource.github.io/rspec/#/rspec/S4524/javascript)
   */
  'sonarjs/prefer-default-last': null;

  /**
   * Local variables should not be declared and then immediately returned or thrown.
   * @see [prefer-immediate-return](https://sonarsource.github.io/rspec/#/rspec/S1488/javascript)
   */
  'sonarjs/prefer-immediate-return': null;

  /**
   * Object literal syntax should be used.
   * @see [prefer-object-literal](https://sonarsource.github.io/rspec/#/rspec/S2428/javascript)
   */
  'sonarjs/prefer-object-literal': null;

  /**
   * Shorthand promises should be used.
   * @see [prefer-promise-shorthand](https://sonarsource.github.io/rspec/#/rspec/S4634/javascript)
   */
  'sonarjs/prefer-promise-shorthand': null;

  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
   * @see [prefer-single-boolean-return](https://sonarsource.github.io/rspec/#/rspec/S1126/javascript)
   */
  'sonarjs/prefer-single-boolean-return': null;

  /**
   * Type predicates should be used.
   * @see [prefer-type-guard](https://sonarsource.github.io/rspec/#/rspec/S4322/javascript)
   */
  'sonarjs/prefer-type-guard': null;

  /**
   * A "while" loop should be used instead of a "for" loop.
   * @see [prefer-while](https://sonarsource.github.io/rspec/#/rspec/S1264/javascript)
   */
  'sonarjs/prefer-while': null;

  /**
   * Using command line arguments is security-sensitive.
   * @deprecated
   * @see [process-argv](https://sonarsource.github.io/rspec/#/rspec/S4823/javascript)
   */
  'sonarjs/process-argv': null;

  /**
   * Delivering code in production with debug features activated is security-sensitive.
   * @see [production-debug](https://sonarsource.github.io/rspec/#/rspec/S4507/javascript)
   */
  'sonarjs/production-debug': null;

  /**
   * Using pseudorandom number generators (PRNGs) is security-sensitive.
   * @see [pseudo-random](https://sonarsource.github.io/rspec/#/rspec/S2245/javascript)
   */
  'sonarjs/pseudo-random': null;

  /**
   * Public "static" fields should be read-only.
   * @see [public-static-readonly](https://sonarsource.github.io/rspec/#/rspec/S1444/javascript)
   */
  'sonarjs/public-static-readonly': null;

  /**
   * Using publicly writable directories is security-sensitive.
   * @see [publicly-writable-directories](https://sonarsource.github.io/rspec/#/rspec/S5443/javascript)
   */
  'sonarjs/publicly-writable-directories': null;

  /**
   * "Array.reduce()" calls should include an initial value.
   * @see [reduce-initial-value](https://sonarsource.github.io/rspec/#/rspec/S6959/javascript)
   */
  'sonarjs/reduce-initial-value': null;

  /**
   * Redundant type aliases should not be used.
   * @see [redundant-type-aliases](https://sonarsource.github.io/rspec/#/rspec/S6564/javascript)
   */
  'sonarjs/redundant-type-aliases': null;

  /**
   * Regular expressions should not be too complicated.
   * @see [regex-complexity](https://sonarsource.github.io/rspec/#/rspec/S5843/javascript)
   */
  'sonarjs/regex-complexity': RegexComplexityOption;

  /**
   * Using regular expressions is security-sensitive.
   * @deprecated
   * @see [regular-expr](https://sonarsource.github.io/rspec/#/rspec/S4784/javascript)
   */
  'sonarjs/regular-expr': null;

  /**
   * A new session should be created during user authentication.
   * @see [session-regeneration](https://sonarsource.github.io/rspec/#/rspec/S5876/javascript)
   */
  'sonarjs/session-regeneration': null;

  /**
   * Shorthand object properties should be grouped at the beginning or end of an object declaration.
   * @see [shorthand-property-grouping](https://sonarsource.github.io/rspec/#/rspec/S3499/javascript)
   */
  'sonarjs/shorthand-property-grouping': [('sonar-runtime' | 'metric')?];

  /**
   * Character classes in regular expressions should not contain only one character.
   * @see [single-char-in-character-classes](https://sonarsource.github.io/rspec/#/rspec/S6397/javascript)
   */
  'sonarjs/single-char-in-character-classes': null;

  /**
   * Single-character alternations in regular expressions should be replaced with character classes.
   * @see [single-character-alternation](https://sonarsource.github.io/rspec/#/rspec/S6035/javascript)
   */
  'sonarjs/single-character-alternation': null;

  /**
   * Using slow regular expressions is security-sensitive.
   * @see [slow-regex](https://sonarsource.github.io/rspec/#/rspec/S5852/javascript)
   */
  'sonarjs/slow-regex': null;

  /**
   * Using Sockets is security-sensitive.
   * @deprecated
   * @see [sockets](https://sonarsource.github.io/rspec/#/rspec/S4818/javascript)
   */
  'sonarjs/sockets': null;

  /**
   * Variables should be used in the blocks where they are declared.
   * @see [sonar-block-scoped-var](https://sonarsource.github.io/rspec/#/rspec/S2392/javascript)
   */
  'sonarjs/sonar-block-scoped-var': [('sonar-runtime' | 'metric')?];

  /**
   * React components should not render non-boolean condition values.
   * @see [sonar-jsx-no-leaked-render](https://sonarsource.github.io/rspec/#/rspec/S6439/javascript)
   */
  'sonarjs/sonar-jsx-no-leaked-render': null;

  /**
   * Files should not have too many lines of code.
   * @see [sonar-max-lines](https://sonarsource.github.io/rspec/#/rspec/S104/javascript)
   */
  'sonarjs/sonar-max-lines': SonarMaxLinesOption;

  /**
   * Functions should not have too many lines of code.
   * @see [sonar-max-lines-per-function](https://sonarsource.github.io/rspec/#/rspec/S138/javascript)
   */
  'sonarjs/sonar-max-lines-per-function': SonarMaxLinesPerFunctionOption;

  /**
   * Regular expressions should not contain control characters.
   * @see [sonar-no-control-regex](https://sonarsource.github.io/rspec/#/rspec/S6324/javascript)
   */
  'sonarjs/sonar-no-control-regex': null;

  /**
   * Empty character classes should not be used.
   * @see [sonar-no-empty-character-class](https://sonarsource.github.io/rspec/#/rspec/S2639/javascript)
   */
  'sonarjs/sonar-no-empty-character-class': null;

  /**
   * Switch cases should end with an unconditional "break" statement.
   * @see [sonar-no-fallthrough](https://sonarsource.github.io/rspec/#/rspec/S128/javascript)
   */
  'sonarjs/sonar-no-fallthrough': null;

  /**
   * Regular expressions should be syntactically valid.
   * @see [sonar-no-invalid-regexp](https://sonarsource.github.io/rspec/#/rspec/S5856/javascript)
   */
  'sonarjs/sonar-no-invalid-regexp': null;

  /**
   * Magic numbers should not be used.
   * @see [sonar-no-magic-numbers](https://sonarsource.github.io/rspec/#/rspec/S109/javascript)
   */
  'sonarjs/sonar-no-magic-numbers': [SonarNoMagicNumbersOption?];

  /**
   * Unicode Grapheme Clusters should be avoided inside regex character classes.
   * @see [sonar-no-misleading-character-class](https://sonarsource.github.io/rspec/#/rspec/S5868/javascript)
   */
  'sonarjs/sonar-no-misleading-character-class': null;

  /**
   * Regular expressions should not contain multiple spaces.
   * @see [sonar-no-regex-spaces](https://sonarsource.github.io/rspec/#/rspec/S6326/javascript)
   */
  'sonarjs/sonar-no-regex-spaces': null;

  /**
   * Unused methods of React components should be removed.
   * @see [sonar-no-unused-class-component-methods](https://sonarsource.github.io/rspec/#/rspec/S6441/javascript)
   */
  'sonarjs/sonar-no-unused-class-component-methods': null;

  /**
   * Unused local variables and functions should be removed.
   * @see [sonar-no-unused-vars](https://sonarsource.github.io/rspec/#/rspec/S1481/javascript)
   */
  'sonarjs/sonar-no-unused-vars': null;

  /**
   * Optional chaining should be preferred.
   * @see [sonar-prefer-optional-chain](https://sonarsource.github.io/rspec/#/rspec/S6582/javascript)
   */
  'sonarjs/sonar-prefer-optional-chain': [SonarPreferOptionalChainOption?];

  /**
   * React props should be read-only.
   * @see [sonar-prefer-read-only-props](https://sonarsource.github.io/rspec/#/rspec/S6759/javascript)
   */
  'sonarjs/sonar-prefer-read-only-props': null;

  /**
   * "RegExp.exec()" should be preferred over "String.match()".
   * @see [sonar-prefer-regexp-exec](https://sonarsource.github.io/rspec/#/rspec/S6594/javascript)
   */
  'sonarjs/sonar-prefer-regexp-exec': null;

  /**
   * Formatting SQL queries is security-sensitive.
   * @see [sql-queries](https://sonarsource.github.io/rspec/#/rspec/S2077/javascript)
   */
  'sonarjs/sql-queries': null;

  /**
   * Tests should be stable.
   * @see [stable-tests](https://sonarsource.github.io/rspec/#/rspec/S5973/javascript)
   */
  'sonarjs/stable-tests': null;

  /**
   * Reading the Standard Input is security-sensitive.
   * @deprecated
   * @see [standard-input](https://sonarsource.github.io/rspec/#/rspec/S4829/javascript)
   */
  'sonarjs/standard-input': null;

  /**
   * Regular expressions with the global flag should be used with caution.
   * @see [stateful-regex](https://sonarsource.github.io/rspec/#/rspec/S6351/javascript)
   */
  'sonarjs/stateful-regex': [('sonar-runtime' | 'metric')?];

  /**
   * Disabling Strict-Transport-Security policy is security-sensitive.
   * @see [strict-transport-security](https://sonarsource.github.io/rspec/#/rspec/S5739/javascript)
   */
  'sonarjs/strict-transport-security': [('sonar-runtime' | 'metric')?];

  /**
   * Comparison operators should not be used with strings.
   * @see [strings-comparison](https://sonarsource.github.io/rspec/#/rspec/S3003/javascript)
   */
  'sonarjs/strings-comparison': [('sonar-runtime' | 'metric')?];

  /**
   * "super()" should be invoked appropriately.
   * @see [super-invocation](https://sonarsource.github.io/rspec/#/rspec/S3854/javascript)
   */
  'sonarjs/super-invocation': null;

  /**
   * Tables should have headers.
   * @see [table-header](https://sonarsource.github.io/rspec/#/rspec/S5256/javascript)
   */
  'sonarjs/table-header': null;

  /**
   * Table cells should reference their headers.
   * @see [table-header-reference](https://sonarsource.github.io/rspec/#/rspec/S5260/javascript)
   */
  'sonarjs/table-header-reference': null;

  /**
   * Tests should check which exception is thrown.
   * @see [test-check-exception](https://sonarsource.github.io/rspec/#/rspec/S5958/javascript)
   */
  'sonarjs/test-check-exception': null;

  /**
   * Track uses of "TODO" tags.
   * @see [todo-tag](https://sonarsource.github.io/rspec/#/rspec/S1135/javascript)
   */
  'sonarjs/todo-tag': null;

  /**
   * Loops should not contain more than a single "break" or "continue" statement.
   * @see [too-many-break-or-continue-in-loop](https://sonarsource.github.io/rspec/#/rspec/S135/javascript)
   */
  'sonarjs/too-many-break-or-continue-in-loop': [('sonar-runtime' | 'metric')?];

  /**
   * Regular expressions using Unicode character classes or property escapes should enable the unicode flag.
   * @see [unicode-aware-regex](https://sonarsource.github.io/rspec/#/rspec/S5867/javascript)
   */
  'sonarjs/unicode-aware-regex': [('sonar-runtime' | 'metric')?];

  /**
   * Unnecessary imports should be removed.
   * @see [unused-import](https://sonarsource.github.io/rspec/#/rspec/S1128/javascript)
   */
  'sonarjs/unused-import': null;

  /**
   * Names of regular expressions named groups should be used.
   * @see [unused-named-groups](https://sonarsource.github.io/rspec/#/rspec/S5860/javascript)
   */
  'sonarjs/unused-named-groups': [('sonar-runtime' | 'metric')?];

  /**
   * Server certificates should be verified during SSL/TLS connections.
   * @see [unverified-certificate](https://sonarsource.github.io/rspec/#/rspec/S4830/javascript)
   */
  'sonarjs/unverified-certificate': [('sonar-runtime' | 'metric')?];

  /**
   * Server hostnames should be verified during SSL/TLS connections.
   * @see [unverified-hostname](https://sonarsource.github.io/rspec/#/rspec/S5527/javascript)
   */
  'sonarjs/unverified-hostname': [('sonar-runtime' | 'metric')?];

  /**
   * "const" variables should not be reassigned.
   * @see [updated-const-var](https://sonarsource.github.io/rspec/#/rspec/S3500/javascript)
   */
  'sonarjs/updated-const-var': [('sonar-runtime' | 'metric')?];

  /**
   * Loop counters should not be assigned within the loop body.
   * @see [updated-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S2310/javascript)
   */
  'sonarjs/updated-loop-counter': [('sonar-runtime' | 'metric')?];

  /**
   * Type aliases should be used.
   * @see [use-type-alias](https://sonarsource.github.io/rspec/#/rspec/S4323/javascript)
   */
  'sonarjs/use-type-alias': [('sonar-runtime' | 'metric')?];

  /**
   * Results of operations on strings should not be ignored.
   * @deprecated
   * @see [useless-string-operation](https://sonarsource.github.io/rspec/#/rspec/S1154/javascript)
   */
  'sonarjs/useless-string-operation': null;

  /**
   * Values not convertible to numbers should not be used in numeric comparisons.
   * @see [values-not-convertible-to-numbers](https://sonarsource.github.io/rspec/#/rspec/S3758/javascript)
   */
  'sonarjs/values-not-convertible-to-numbers': null;

  /**
   * Variable, property and parameter names should comply with a naming convention.
   * @see [variable-name](https://sonarsource.github.io/rspec/#/rspec/S117/javascript)
   */
  'sonarjs/variable-name': VariableNameOption;

  /**
   * "void" should not be used.
   * @see [void-use](https://sonarsource.github.io/rspec/#/rspec/S3735/javascript)
   */
  'sonarjs/void-use': null;

  /**
   * Weak SSL/TLS protocols should not be used.
   * @see [weak-ssl](https://sonarsource.github.io/rspec/#/rspec/S4423/javascript)
   */
  'sonarjs/weak-ssl': null;

  /**
   * Web SQL databases should not be used.
   * @deprecated
   * @see [web-sql-database](https://sonarsource.github.io/rspec/#/rspec/S2817/javascript)
   */
  'sonarjs/web-sql-database': null;

  /**
   * Disclosing fingerprints from web application technologies is security-sensitive.
   * @see [x-powered-by](https://sonarsource.github.io/rspec/#/rspec/S5689/javascript)
   */
  'sonarjs/x-powered-by': null;

  /**
   * XML parsers should not be vulnerable to XXE attacks.
   * @see [xml-parser-xxe](https://sonarsource.github.io/rspec/#/rspec/S2755/javascript)
   */
  'sonarjs/xml-parser-xxe': [('sonar-runtime' | 'metric')?];

  /**
   * Executing XPath expressions is security-sensitive.
   * @deprecated
   * @see [xpath](https://sonarsource.github.io/rspec/#/rspec/S4817/javascript)
   */
  'sonarjs/xpath': null;

  /**
   * Functions should not have too many parameters.
   * @see [sonar-max-params](https://sonarsource.github.io/rspec/#/rspec/S107/javascript)
   */
  'sonarjs/sonar-max-params': SonarMaxParamsOption;

  /**
   * Unused private class members should be removed.
   * @see [no-unused-private-class-members](https://sonarsource.github.io/rspec/#/rspec/S1068/javascript)
   */
  'sonarjs/no-unused-private-class-members': null;

  /**
   * Image, area, button with image and object elements should have an alternative text.
   * @see [alt-text](https://sonarsource.github.io/rspec/#/rspec/S1077/javascript)
   */
  'sonarjs/alt-text': [AltTextOption?];

  /**
   * An open curly brace should be located at the end of a line.
   * @deprecated
   * @see [brace-style](https://sonarsource.github.io/rspec/#/rspec/S1105/javascript)
   */
  'sonarjs/brace-style': BraceStyleRuleConfig;

  /**
   * Extra semicolons should be removed.
   * @deprecated
   * @see [no-extra-semi](https://sonarsource.github.io/rspec/#/rspec/S1116/javascript)
   */
  'sonarjs/no-extra-semi': null;

  /**
   * Functions should not be empty.
   * @see [no-empty-function](https://sonarsource.github.io/rspec/#/rspec/S1186/javascript)
   */
  'sonarjs/no-empty-function': [NoEmptyFunctionOption?];

  /**
   * "switch" statements should have "default" clauses.
   * @see [switch-without-default](https://sonarsource.github.io/rspec/#/rspec/S131/javascript)
   */
  'sonarjs/switch-without-default': null;

  /**
   * Statements should end with semicolons.
   * @deprecated
   * @see [semi](https://sonarsource.github.io/rspec/#/rspec/S1438/javascript)
   */
  'sonarjs/semi': SemiOption;

  /**
   * Member names should not be duplicated within a class or object literal.
   * @see [sonar-no-dupe-keys](https://sonarsource.github.io/rspec/#/rspec/S1534/javascript)
   */
  'sonarjs/sonar-no-dupe-keys': null;

  /**
   * All code should be reachable.
   * @see [no-unreachable](https://sonarsource.github.io/rspec/#/rspec/S1763/javascript)
   */
  'sonarjs/no-unreachable': null;

  /**
   * Function parameters with default values should be last.
   * @see [default-param-last](https://sonarsource.github.io/rspec/#/rspec/S1788/javascript)
   */
  'sonarjs/default-param-last': null;

  /**
   * Loops should not be infinite.
   * @see [no-infinite-loop](https://sonarsource.github.io/rspec/#/rspec/S2189/javascript)
   */
  'sonarjs/no-infinite-loop': null;

  /**
   * Property getters and setters should come in pairs.
   * @see [accessor-pairs](https://sonarsource.github.io/rspec/#/rspec/S2376/javascript)
   */
  'sonarjs/accessor-pairs': [
    {
      getWithoutSet?: boolean;
      setWithoutGet?: boolean;
      enforceForClassMembers?: boolean;
    }?,
  ];

  /**
   * Constructor names should start with an upper case letter.
   * @see [new-cap](https://sonarsource.github.io/rspec/#/rspec/S2430/javascript)
   */
  'sonarjs/new-cap': [
    {
      newIsCap?: boolean;
      capIsNew?: boolean;
      newIsCapExceptions?: string[];
      newIsCapExceptionPattern?: string;
      capIsNewExceptions?: string[];
      capIsNewExceptionPattern?: string;
      properties?: boolean;
    }?,
  ];

  /**
   * "NaN" should not be used in comparisons.
   * @see [use-isnan](https://sonarsource.github.io/rspec/#/rspec/S2688/javascript)
   */
  'sonarjs/use-isnan': [
    {
      enforceForSwitchCase?: boolean;
      enforceForIndexOf?: boolean;
    }?,
  ];

  /**
   * Variables and functions should not be redeclared.
   * @see [no-redeclare](https://sonarsource.github.io/rspec/#/rspec/S2814/javascript)
   */
  'sonarjs/no-redeclare': [
    {
      builtinGlobals?: boolean;
      ignoreDeclarationMerge?: boolean;
    }?,
  ];

  /**
   * Object literal shorthand syntax should be used.
   * @see [object-shorthand](https://sonarsource.github.io/rspec/#/rspec/S3498/javascript)
   */
  'sonarjs/object-shorthand': ObjectShorthandOption;

  /**
   * Variables should be declared with "let" or "const".
   * @see [no-var](https://sonarsource.github.io/rspec/#/rspec/S3504/javascript)
   */
  'sonarjs/no-var': null;

  /**
   * Template strings should be used instead of concatenation.
   * @see [prefer-template](https://sonarsource.github.io/rspec/#/rspec/S3512/javascript)
   */
  'sonarjs/prefer-template': null;

  /**
   * Literals should not be thrown.
   * @see [no-throw-literal](https://sonarsource.github.io/rspec/#/rspec/S3696/javascript)
   */
  'sonarjs/no-throw-literal': null;

  /**
   * Interfaces should not be empty.
   * @see [no-empty-interface](https://sonarsource.github.io/rspec/#/rspec/S4023/javascript)
   */
  'sonarjs/no-empty-interface': [
    {
      allowSingleExtends?: boolean;
    }?,
  ];

  /**
   * Media elements should have captions.
   * @see [media-has-caption](https://sonarsource.github.io/rspec/#/rspec/S4084/javascript)
   */
  'sonarjs/media-has-caption': [MediaHasCaptionOption?];

  /**
   * "for of" should be used with Iterables.
   * @see [prefer-for-of](https://sonarsource.github.io/rspec/#/rspec/S4138/javascript)
   */
  'sonarjs/prefer-for-of': null;

  /**
   * "module" should not be used.
   * @see [prefer-namespace-keyword](https://sonarsource.github.io/rspec/#/rspec/S4156/javascript)
   */
  'sonarjs/prefer-namespace-keyword': null;

  /**
   * Getters and setters should access the expected fields.
   * @see [no-accessor-field-mismatch](https://sonarsource.github.io/rspec/#/rspec/S4275/javascript)
   */
  'sonarjs/no-accessor-field-mismatch': NoAccessorFieldMismatchRuleConfig;

  /**
   * "this" should not be assigned to variables.
   * @see [no-this-alias](https://sonarsource.github.io/rspec/#/rspec/S4327/javascript)
   */
  'sonarjs/no-this-alias': [NoThisAliasOption?];

  /**
   * HTML elements should have a valid language attribute.
   * @see [html-has-lang](https://sonarsource.github.io/rspec/#/rspec/S5254/javascript)
   */
  'sonarjs/html-has-lang': null;

  /**
   * Unnecessary character escapes should be removed.
   * @see [unnecessary-character-escapes](https://sonarsource.github.io/rspec/#/rspec/S6535/javascript)
   */
  'sonarjs/unnecessary-character-escapes': null;

  /**
   * Promises should not be misused.
   * @see [no-misused-promises](https://sonarsource.github.io/rspec/#/rspec/S6544/javascript)
   */
  'sonarjs/no-misused-promises': [NoMisusedPromisesOption?];

  /**
   * Objects and classes converted or coerced to strings should define a "toString()" method.
   * @see [no-base-to-string](https://sonarsource.github.io/rspec/#/rspec/S6551/javascript)
   */
  'sonarjs/no-base-to-string': [
    {
      ignoredTypeNames?: string[];
    }?,
  ];

  /**
   * Ends of strings should be checked with "startsWith()" and "endsWith()".
   * @see [prefer-string-starts-ends-with](https://sonarsource.github.io/rspec/#/rspec/S6557/javascript)
   */
  'sonarjs/prefer-string-starts-ends-with': [PreferStringStartsEndsWithOption?];

  /**
   * Type constituents of unions and intersections should not be redundant.
   * @see [no-redundant-type-constituents](https://sonarsource.github.io/rspec/#/rspec/S6571/javascript)
   */
  'sonarjs/no-redundant-type-constituents': null;

  /**
   * Enum member values should be either all initialized or none.
   * @see [prefer-enum-initializers](https://sonarsource.github.io/rspec/#/rspec/S6572/javascript)
   */
  'sonarjs/prefer-enum-initializers': null;

  /**
   * Function types should be preferred.
   * @see [prefer-function-type](https://sonarsource.github.io/rspec/#/rspec/S6598/javascript)
   */
  'sonarjs/prefer-function-type': null;

  /**
   * Nullish coalescing should be preferred.
   * @see [prefer-nullish-coalescing](https://sonarsource.github.io/rspec/#/rspec/S6606/javascript)
   */
  'sonarjs/prefer-nullish-coalescing': [PreferNullishCoalescingOption?];

  /**
   * Prototypes of builtin objects should not be modified.
   * @see [no-extend-native](https://sonarsource.github.io/rspec/#/rspec/S6643/javascript)
   */
  'sonarjs/no-extend-native': [
    {
      exceptions?: string[];
    }?,
  ];

  /**
   * Unnecessary constructors should be removed.
   * @see [no-useless-constructor](https://sonarsource.github.io/rspec/#/rspec/S6647/javascript)
   */
  'sonarjs/no-useless-constructor': null;

  /**
   * If statements should not be the only statement in else blocks.
   * @see [no-lonely-if](https://sonarsource.github.io/rspec/#/rspec/S6660/javascript)
   */
  'sonarjs/no-lonely-if': null;

  /**
   * Object spread syntax should be used instead of "Object.assign".
   * @see [prefer-object-spread](https://sonarsource.github.io/rspec/#/rspec/S6661/javascript)
   */
  'sonarjs/prefer-object-spread': null;

  /**
   * Spread syntax should be used instead of "apply()".
   * @see [prefer-spread](https://sonarsource.github.io/rspec/#/rspec/S6666/javascript)
   */
  'sonarjs/prefer-spread': null;

  /**
   * Calls to ".call()" and ".apply()" methods should not be redundant.
   * @see [no-useless-call](https://sonarsource.github.io/rspec/#/rspec/S6676/javascript)
   */
  'sonarjs/no-useless-call': null;

  /**
   * "Number.isNaN()" should be used to check for "NaN" value.
   * @see [no-self-compare](https://sonarsource.github.io/rspec/#/rspec/S6679/javascript)
   */
  'sonarjs/no-self-compare': null;

  /**
   * JSX elements should not use unknown properties and attributes.
   * @see [no-unknown-property](https://sonarsource.github.io/rspec/#/rspec/S6747/javascript)
   */
  'sonarjs/no-unknown-property': [NoUnknownPropertyOption?];

  /**
   * Redundant React fragments should be removed.
   * @see [jsx-no-useless-fragment](https://sonarsource.github.io/rspec/#/rspec/S6749/javascript)
   */
  'sonarjs/jsx-no-useless-fragment': [JsxNoUselessFragmentOption?];

  /**
   * React's "findDOMNode" should not be used.
   * @see [no-find-dom-node](https://sonarsource.github.io/rspec/#/rspec/S6788/javascript)
   */
  'sonarjs/no-find-dom-node': null;

  /**
   * Anchors should contain accessible content.
   * @see [anchor-has-content](https://sonarsource.github.io/rspec/#/rspec/S6827/javascript)
   */
  'sonarjs/anchor-has-content': [AnchorHasContentOption?];

  /**
   * Anchor tags should not be used as buttons.
   * @see [anchor-is-valid](https://sonarsource.github.io/rspec/#/rspec/S6844/javascript)
   */
  'sonarjs/anchor-is-valid': [AnchorIsValidOption?];

  /**
   * Label elements should have a text label and an associated control.
   * @see [label-has-associated-control](https://sonarsource.github.io/rspec/#/rspec/S6853/javascript)
   */
  'sonarjs/label-has-associated-control': [LabelHasAssociatedControlOption?];

  /**
   * Module should not import itself.
   * @see [no-self-import](https://sonarsource.github.io/rspec/#/rspec/S7060/javascript)
   */
  'sonarjs/no-self-import': null;

  /**
   * Non-empty statements should change control flow or have at least one side-effect.
   * @see [no-unused-expressions](https://sonarsource.github.io/rspec/#/rspec/S905/javascript)
   */
  'sonarjs/no-unused-expressions': [
    {
      allowShortCircuit?: boolean;
      allowTernary?: boolean;
      allowTaggedTemplates?: boolean;
      enforceForJSX?: boolean;
    }?,
  ];

  /**
   * React Hooks should be properly called.
   * @see [rules-of-hooks](https://sonarsource.github.io/rspec/#/rspec/S6440/javascript)
   */
  'sonarjs/rules-of-hooks': null;
}

export type SonarJSRulesObject = RulesObject<SonarJSRules>;
