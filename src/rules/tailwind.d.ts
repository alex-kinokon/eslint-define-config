import type { RulesObject } from '../rule-config';

export interface EnforceConsistentClassOrderOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * Defines how component classes should be ordered among themselves.
   */
  componentClassOrder?: 'asc' | 'desc' | 'preserve';
  /**
   * Defines where component classes should be placed in relation to the whole string literal.
   */
  componentClassPosition?: 'start' | 'end';
  /**
   * The algorithm to use when sorting classes.
   */
  order?: 'asc' | 'desc' | 'official' | 'strict';
  /**
   * Defines how component classes should be ordered among themselves.
   */
  unknownClassOrder?: 'asc' | 'desc' | 'preserve';
  /**
   * Defines where component classes should be placed in relation to the whole string literal.
   */
  unknownClassPosition?: 'start' | 'end';
}

export interface EnforceConsistentImportantPositionOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * Preferred position for important classes. 'legacy' places the important modifier (!) at the start of the class name, 'recommended' places it at the end.
   */
  position?: 'legacy' | 'recommended';
}

export interface EnforceConsistentLineWrappingOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * The maximum amount of classes per line.
   */
  classesPerLine?: number;
  /**
   * Defines how different groups of classes should be separated.
   */
  group?: 'newLine' | 'emptyLine' | 'never';
  /**
   * Determines how the code should be indented.
   */
  indent?: 'tab' | number;
  /**
   * The line break style.
   */
  lineBreakStyle?: 'unix' | 'windows';
  /**
   * Prefer a single line for different variants.
   */
  preferSingleLine?: boolean;
  /**
   * The maximum line length before it gets wrapped.
   */
  printWidth?: number;
  /**
   * Enable this option if prettier is used in your project.
   */
  strictness?: 'strict' | 'loose';
}

export interface EnforceConsistentVariableSyntaxOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * The syntax to enforce for css variables in tailwindcss class strings.
   */
  syntax?: 'shorthand' | 'variable';
}

export interface EnforceShorthandClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
}

export interface NoConflictingClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
}

export interface NoDeprecatedClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
}

export interface NoDuplicateClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
}

export interface NoRestrictedClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  restrict?: (
    | {
        /**
         * A replacement class
         */
        fix?: string;
        /**
         * The message to report when a class is restricted.
         */
        message?: string;
        /**
         * The regex pattern to match restricted classes.
         */
        pattern: string;
      }
    | string
  )[];
}

export interface NoUnnecessaryWhitespaceOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * Allow multi-line class declarations. If this option is disabled, template literal strings will be collapsed into a single line string wherever possible. Must be set to `true` when used in combination with [better-tailwindcss/enforce-consistent-line-wrapping](./enforce-consistent-line-wrapping.md).
   */
  allowMultiline?: boolean;
}

export interface NoUnknownClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * A list of classes that should be ignored by the rule.
   */
  ignore?: string[];
}

export interface EnforceCanonicalClassesOption {
  /**
   * Flat list of selectors that should get linted.
   */
  selectors?: (
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'attribute';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | (
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path?: string;
          }
        | {
            /**
             * Optional call target for curried callees: index, first, last, or all.
             */
            callTarget?: 'all' | 'first' | 'last' | number;
            /**
             * Selector kind that determines where matching is applied.
             */
            kind: 'callee';
            /**
             * Optional list of matchers that will be applied.
             */
            match?: (
              | {
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'strings';
                }
              | {
                  /**
                   * Regular expression that filters the object key and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectKeys';
                }
              | {
                  /**
                   * Regular expression that filters the object value and matches the content for further processing in a group.
                   */
                  path?: string;
                  /**
                   * Matcher type that will be applied.
                   */
                  type: 'objectValues';
                }
            )[];
            /**
             * Regular expression for names that should be linted.
             */
            name?: string;
            /**
             * Regular expression for callee paths that should be linted.
             */
            path: string;
          }
      )
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'tag';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
    | {
        /**
         * Selector kind that determines where matching is applied.
         */
        kind: 'variable';
        /**
         * Optional list of matchers that will be applied.
         */
        match?: (
          | {
              /**
               * Matcher type that will be applied.
               */
              type: 'strings';
            }
          | {
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectKeys';
            }
          | {
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              path?: string;
              /**
               * Matcher type that will be applied.
               */
              type: 'objectValues';
            }
        )[];
        /**
         * Regular expression for names that should be linted.
         */
        name: string;
      }
  )[];
  /**
   * List of function names which arguments should get linted.
   */
  callees?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of attribute names that should get linted.
   */
  attributes?: (
    | string
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
  )[];
  /**
   * List of variable names which values should get linted.
   */
  variables?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * List of template literal tags that should get linted.
   */
  tags?: (
    | [
        string,
        (
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'strings';
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectKeys';
              /**
               * Regular expression that filters the object key and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
          | {
              /**
               * Matcher type that will be applied.
               */
              match: 'objectValues';
              /**
               * Regular expression that filters the object value and matches the content for further processing in a group.
               */
              pathPattern?: string;
            }
        )[],
      ]
    | string
  )[];
  /**
   * The path to the css entry point of the project. If not specified, the plugin will fall back to the default tailwind classes.
   */
  entryPoint?: string;
  /**
   * How linting messages are displayed.
   */
  messageStyle?: 'visual' | 'compact' | 'raw';
  /**
   * The path to the tailwind config file. If not specified, the plugin will try to find it automatically or falls back to the default configuration.
   */
  tailwindConfig?: string;
  /**
   * The path to the tsconfig file. Is used to resolve path aliases in the tsconfig.
   */
  tsconfig?: string;
  /**
   * Whether to automatically detect custom component classes from the tailwindcss config.
   */
  detectComponentClasses?: boolean;
  /**
   * The root font size in pixels.
   */
  rootFontSize?: number;
  /**
   * Whether to collapse multiple utilities into a single utility if possible.
   */
  collapse?: boolean;
  /**
   * Whether to convert between logical and physical properties when collapsing utilities.
   */
  logical?: boolean;
}

/**
 * All Tailwind rules.
 */
export interface TailwindRules {
  /**
   * Enforce a consistent order for tailwind classes.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [enforce-consistent-class-order](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-class-order.md)
   */
  'better-tailwindcss/enforce-consistent-class-order': [
    EnforceConsistentClassOrderOption?,
  ];

  /**
   * Enforce consistent important position for classes.
   * @see [enforce-consistent-important-position](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-important-position.md)
   */
  'better-tailwindcss/enforce-consistent-important-position': [
    EnforceConsistentImportantPositionOption?,
  ];

  /**
   * Enforce consistent line wrapping for tailwind classes.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [enforce-consistent-line-wrapping](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-line-wrapping.md)
   */
  'better-tailwindcss/enforce-consistent-line-wrapping': [
    EnforceConsistentLineWrappingOption?,
  ];

  /**
   * Enforce consistent syntax for css variables.
   * @see [enforce-consistent-variable-syntax](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-consistent-variable-syntax.md)
   */
  'better-tailwindcss/enforce-consistent-variable-syntax': [
    EnforceConsistentVariableSyntaxOption?,
  ];

  /**
   * Enforce shorthand class names instead of longhand class names.
   * @see [enforce-shorthand-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-shorthand-classes.md)
   */
  'better-tailwindcss/enforce-shorthand-classes': [
    EnforceShorthandClassesOption?,
  ];

  /**
   * Disallow classes that produce conflicting styles.
   * @preset `better-tailwindcss/legacy-correctness`, `better-tailwindcss/legacy-correctness-error`, `better-tailwindcss/legacy-correctness-warn`, `better-tailwindcss/correctness`, `better-tailwindcss/correctness-error`, `better-tailwindcss/correctness-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [no-conflicting-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-conflicting-classes.md)
   */
  'better-tailwindcss/no-conflicting-classes': [NoConflictingClassesOption?];

  /**
   * Disallow the use of deprecated Tailwind CSS classes.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [no-deprecated-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-deprecated-classes.md)
   */
  'better-tailwindcss/no-deprecated-classes': [NoDeprecatedClassesOption?];

  /**
   * Disallow duplicate class names in tailwind classes.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [no-duplicate-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-duplicate-classes.md)
   */
  'better-tailwindcss/no-duplicate-classes': [NoDuplicateClassesOption?];

  /**
   * Disallow restricted classes.
   * @see [no-restricted-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-restricted-classes.md)
   */
  'better-tailwindcss/no-restricted-classes': [NoRestrictedClassesOption?];

  /**
   * Disallow unnecessary whitespace between Tailwind CSS classes.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [no-unnecessary-whitespace](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unnecessary-whitespace.md)
   */
  'better-tailwindcss/no-unnecessary-whitespace': [
    NoUnnecessaryWhitespaceOption?,
  ];

  /**
   * Disallow any css classes that are not registered in tailwindcss.
   * @preset `better-tailwindcss/legacy-correctness`, `better-tailwindcss/legacy-correctness-error`, `better-tailwindcss/legacy-correctness-warn`, `better-tailwindcss/correctness`, `better-tailwindcss/correctness-error`, `better-tailwindcss/correctness-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [no-unknown-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/no-unknown-classes.md)
   */
  'better-tailwindcss/no-unknown-classes': [NoUnknownClassesOption?];

  /**
   * Enforce canonical class names.
   * @preset `better-tailwindcss/legacy-stylistic`, `better-tailwindcss/legacy-stylistic-error`, `better-tailwindcss/legacy-stylistic-warn`, `better-tailwindcss/stylistic`, `better-tailwindcss/stylistic-error`, `better-tailwindcss/stylistic-warn`, `better-tailwindcss/legacy-recommended`, `better-tailwindcss/legacy-recommended-error`, `better-tailwindcss/legacy-recommended-warn`, `better-tailwindcss/recommended`, `better-tailwindcss/recommended-error`, `better-tailwindcss/recommended-warn`
   * @see [enforce-canonical-classes](https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/rules/enforce-canonical-classes.md)
   */
  'better-tailwindcss/enforce-canonical-classes': [
    EnforceCanonicalClassesOption?,
  ];
}

export type TailwindRulesObject = RulesObject<TailwindRules>;
