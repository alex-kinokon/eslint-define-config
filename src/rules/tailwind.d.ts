import type { RulesObject } from '../rule-config';

export interface ClassnamesOrderOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  removeDuplicates?: boolean;
  tags?: string[];
  [k: string]: any;
}

export interface EnforcesNegativeArbitraryValuesOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

export interface EnforcesShorthandOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

export interface MigrationFromTailwind_2Option {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

export interface NoArbitraryValueOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

export interface NoContradictingClassnameOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

export interface NoCustomClassnameOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  cssFiles?: string[];
  cssFilesRefreshRate?: number;
  tags?: string[];
  whitelist?: string[];
  [k: string]: any;
}

export interface NoUnnecessaryArbitraryValueOption {
  callees?: string[];
  ignoredKeys?: string[];
  config?:
    | string
    | {
        [k: string]: any;
      };
  tags?: string[];
  [k: string]: any;
}

/**
 * All Tailwind rules.
 */
export interface TailwindRules {
  /**
   * Enforce a consistent and logical order of the Tailwind CSS classnames.
   * @preset `tailwindcss/recommended`
   * @see [classnames-order](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/classnames-order.md)
   */
  'tailwindcss/classnames-order': [ClassnamesOrderOption?];

  /**
   * Warns about dash prefixed classnames using arbitrary values.
   * @preset `tailwindcss/recommended`
   * @see [enforces-negative-arbitrary-values](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-negative-arbitrary-values.md)
   */
  'tailwindcss/enforces-negative-arbitrary-values': [
    EnforcesNegativeArbitraryValuesOption?,
  ];

  /**
   * Enforces the usage of shorthand Tailwind CSS classnames.
   * @preset `tailwindcss/recommended`
   * @see [enforces-shorthand](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-shorthand.md)
   */
  'tailwindcss/enforces-shorthand': [EnforcesShorthandOption?];

  /**
   * Detect obsolete classnames when upgrading to Tailwind CSS v3.
   * @preset `tailwindcss/recommended`
   * @see [migration-from-tailwind-2](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/migration-from-tailwind-2.md)
   */
  'tailwindcss/migration-from-tailwind-2': [MigrationFromTailwind_2Option?];

  /**
   * Forbid using arbitrary values in classnames.
   * @preset `tailwindcss/recommended`
   * @see [no-arbitrary-value](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-arbitrary-value.md)
   */
  'tailwindcss/no-arbitrary-value': [NoArbitraryValueOption?];

  /**
   * Avoid contradicting Tailwind CSS classnames (e.g. "w-3 w-5").
   * @preset `tailwindcss/recommended`
   * @see [no-contradicting-classname](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-contradicting-classname.md)
   */
  'tailwindcss/no-contradicting-classname': [NoContradictingClassnameOption?];

  /**
   * Detect classnames which do not belong to Tailwind CSS.
   * @preset `tailwindcss/recommended`
   * @see [no-custom-classname](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-custom-classname.md)
   */
  'tailwindcss/no-custom-classname': [NoCustomClassnameOption?];

  /**
   * Forbid using arbitrary values in classnames when an equivalent preset exists.
   * @preset `tailwindcss/recommended`
   * @see [no-unnecessary-arbitrary-value](https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md)
   */
  'tailwindcss/no-unnecessary-arbitrary-value': [
    NoUnnecessaryArbitraryValueOption?,
  ];
}

export type TailwindRulesObject = RulesObject<TailwindRules>;
