import type { RulesObject } from '../rule-config';

export interface SortVariableDeclarationsOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Selector filter.
           */
          selector?: 'initialized' | 'uninitialized';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Selector filter.
         */
        selector?: 'initialized' | 'uninitialized';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}

export type SortIntersectionTypesOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Selector filter.
           */
          selector?:
            | 'intersection'
            | 'conditional'
            | 'function'
            | 'operator'
            | 'keyword'
            | 'literal'
            | 'nullish'
            | 'import'
            | 'object'
            | 'named'
            | 'tuple'
            | 'union';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Selector filter.
         */
        selector?:
          | 'intersection'
          | 'conditional'
          | 'function'
          | 'operator'
          | 'keyword'
          | 'literal'
          | 'nullish'
          | 'import'
          | 'object'
          | 'named'
          | 'tuple'
          | 'union';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export interface SortHeritageClausesOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Specifies custom groups.
   */
  customGroups?: {
    [k: string]: string | string[];
  };
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}

export type SortArrayIncludesOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: 'mixed' | 'literals-first' | 'spreads-first';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Selector filter.
           */
          selector?: 'literal' | 'spread';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Selector filter.
         */
        selector?: 'literal' | 'spread';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export type SortNamedImportsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: 'mixed' | 'values-first' | 'types-first';
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean;
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Modifier filters.
           */
          modifiers?: ('value' | 'type')[];
          /**
           * Selector filter.
           */
          selector?: 'import';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Modifier filters.
         */
        modifiers?: ('value' | 'type')[];
        /**
         * Selector filter.
         */
        selector?: 'import';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export namespace SortNamedExports {
  export type SortNamedExportsOption = {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: 'asc' | 'desc';
      /**
       * Specifies the sorting method.
       */
      type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    };
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: 'remove' | 'trim' | 'keep';
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    /**
     * [DEPRECATED] Specifies top-level groups.
     */
    groupKind?: 'mixed' | 'values-first' | 'types-first';
    /**
     * Controls whether to ignore alias names.
     */
    ignoreAlias?: boolean;
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          anyOf?: {
            /**
             * Modifier filters.
             */
            modifiers?: ('value' | 'type')[];
            /**
             * Selector filter.
             */
            selector?: 'export';
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[];
        }
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          /**
           * Modifier filters.
           */
          modifiers?: ('value' | 'type')[];
          /**
           * Selector filter.
           */
          selector?: 'export';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
    newlinesBetween?: ('ignore' | 'always' | 'never') | number;
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | string[]
      | {
          newlinesBetween?: ('ignore' | 'always' | 'never') | number;
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
        }
    )[];
  }[];

  export type SortNamedExportsRuleConfig = SortNamedExportsOption;
}

export type SortObjectTypesOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    sortBy?: 'name' | 'value';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  customGroups?:
    | {
        [k: string]: string | string[];
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
              sortBy?: 'name' | 'value';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Modifier filters.
               */
              modifiers?: ('optional' | 'required' | 'multiline')[];
              /**
               * Selector filter.
               */
              selector?:
                | 'index-signature'
                | 'member'
                | 'method'
                | 'multiline'
                | 'property';
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              sortBy?: 'name' | 'value';
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
              sortBy?: 'name' | 'value';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Modifier filters.
             */
            modifiers?: ('optional' | 'required' | 'multiline')[];
            /**
             * Selector filter.
             */
            selector?:
              | 'index-signature'
              | 'member'
              | 'method'
              | 'multiline'
              | 'property';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            sortBy?: 'name' | 'value';
          }
      )[];
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: 'mixed' | 'required-first' | 'optional-first';
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    declarationMatchesPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Regular expression.
   */
  ignorePattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  sortBy?: 'name' | 'value';
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export type SortUnionTypesOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Selector filter.
           */
          selector?:
            | 'intersection'
            | 'conditional'
            | 'function'
            | 'operator'
            | 'keyword'
            | 'literal'
            | 'nullish'
            | 'import'
            | 'object'
            | 'named'
            | 'tuple'
            | 'union';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Selector filter.
         */
        selector?:
          | 'intersection'
          | 'conditional'
          | 'function'
          | 'operator'
          | 'keyword'
          | 'literal'
          | 'nullish'
          | 'import'
          | 'object'
          | 'named'
          | 'tuple'
          | 'union';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export interface SortSwitchCaseOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
}

export interface SortDecoratorsOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Controls whether sorting should be enabled for method parameter decorators.
   */
  sortOnParameters?: boolean;
  /**
   * Controls whether sorting should be enabled for class property decorators.
   */
  sortOnProperties?: boolean;
  /**
   * Controls whether sorting should be enabled for class accessor decorators.
   */
  sortOnAccessors?: boolean;
  /**
   * Controls whether sorting should be enabled for class method decorators.
   */
  sortOnMethods?: boolean;
  /**
   * Controls whether sorting should be enabled for class decorators.
   */
  sortOnClasses?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Specifies custom groups.
   */
  customGroups?: {
    [k: string]: string | string[];
  };
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}

export type SortInterfacesOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    sortBy?: 'name' | 'value';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  customGroups?:
    | {
        [k: string]: string | string[];
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
              sortBy?: 'name' | 'value';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Modifier filters.
               */
              modifiers?: ('optional' | 'required' | 'multiline')[];
              /**
               * Selector filter.
               */
              selector?:
                | 'index-signature'
                | 'member'
                | 'method'
                | 'multiline'
                | 'property';
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              sortBy?: 'name' | 'value';
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
              sortBy?: 'name' | 'value';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Modifier filters.
             */
            modifiers?: ('optional' | 'required' | 'multiline')[];
            /**
             * Selector filter.
             */
            selector?:
              | 'index-signature'
              | 'member'
              | 'method'
              | 'multiline'
              | 'property';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            sortBy?: 'name' | 'value';
          }
      )[];
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: 'mixed' | 'required-first' | 'optional-first';
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    declarationMatchesPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Regular expression.
   */
  ignorePattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  sortBy?: 'name' | 'value';
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export type SortJsxPropsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  customGroups?:
    | {
        [k: string]: string | string[];
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Modifier filters.
               */
              modifiers?: ('shorthand' | 'multiline')[];
              /**
               * Selector filter.
               */
              selector?: 'multiline' | 'prop' | 'shorthand';
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Modifier filters.
             */
            modifiers?: ('shorthand' | 'multiline')[];
            /**
             * Selector filter.
             */
            selector?: 'multiline' | 'prop' | 'shorthand';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }
      )[];
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    tagMatchesPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Regular expression.
   */
  ignorePattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export namespace SortModules {
  export interface SortModulesOption {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: 'asc' | 'desc';
      /**
       * Specifies the sorting method.
       */
      type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    };
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: 'remove' | 'trim' | 'keep';
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          anyOf?: {
            /**
             * Modifier filters.
             */
            modifiers?: (
              | 'async'
              | 'declare'
              | 'decorated'
              | 'default'
              | 'export'
            )[];
            /**
             * Selector filter.
             */
            selector?: 'enum' | 'function' | 'interface' | 'type' | 'class';
            /**
             * Regular expression.
             */
            decoratorNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[];
        }
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          /**
           * Modifier filters.
           */
          modifiers?: (
            | 'async'
            | 'declare'
            | 'decorated'
            | 'default'
            | 'export'
          )[];
          /**
           * Selector filter.
           */
          selector?: 'enum' | 'function' | 'interface' | 'type' | 'class';
          /**
           * Regular expression.
           */
          decoratorNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
    newlinesBetween?: ('ignore' | 'always' | 'never') | number;
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | string[]
      | {
          newlinesBetween?: ('ignore' | 'always' | 'never') | number;
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
        }
    )[];
  }

  export type SortModulesRuleConfig = [SortModulesOption?];
}

export interface SortClassesOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Modifier filters.
           */
          modifiers?: (
            | 'async'
            | 'protected'
            | 'private'
            | 'public'
            | 'static'
            | 'abstract'
            | 'override'
            | 'readonly'
            | 'decorated'
            | 'declare'
            | 'optional'
          )[];
          /**
           * Selector filter.
           */
          selector?:
            | 'accessor-property'
            | 'index-signature'
            | 'constructor'
            | 'static-block'
            | 'get-method'
            | 'set-method'
            | 'function-property'
            | 'property'
            | 'method';
          /**
           * Regular expression.
           */
          decoratorNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Regular expression.
           */
          elementValuePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Modifier filters.
         */
        modifiers?: (
          | 'async'
          | 'protected'
          | 'private'
          | 'public'
          | 'static'
          | 'abstract'
          | 'override'
          | 'readonly'
          | 'decorated'
          | 'declare'
          | 'optional'
        )[];
        /**
         * Selector filter.
         */
        selector?:
          | 'accessor-property'
          | 'index-signature'
          | 'constructor'
          | 'static-block'
          | 'get-method'
          | 'set-method'
          | 'function-property'
          | 'property'
          | 'method';
        /**
         * Regular expression.
         */
        decoratorNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Regular expression.
         */
        elementValuePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Regular expression.
   */
  ignoreCallbackDependenciesPatterns?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}

export type SortImportsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  customGroups?:
    | {
        /**
         * Specifies custom groups for value imports.
         */
        value?: {
          [k: string]: string | string[];
        };
        /**
         * Specifies custom groups for type imports.
         */
        type?: {
          [k: string]: string | string[];
        };
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Modifier filters.
               */
              modifiers?: (
                | 'default'
                | 'named'
                | 'require'
                | 'side-effect'
                | 'ts-equals'
                | 'type'
                | 'value'
                | 'wildcard'
              )[];
              /**
               * Selector filter.
               */
              selector?:
                | 'side-effect-style'
                | 'tsconfig-path'
                | 'side-effect'
                | 'external'
                | 'internal'
                | 'builtin'
                | 'sibling'
                | 'subpath'
                | 'import'
                | 'parent'
                | 'index'
                | 'style'
                | 'type';
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Modifier filters.
             */
            modifiers?: (
              | 'default'
              | 'named'
              | 'require'
              | 'side-effect'
              | 'ts-equals'
              | 'type'
              | 'value'
              | 'wildcard'
            )[];
            /**
             * Selector filter.
             */
            selector?:
              | 'side-effect-style'
              | 'tsconfig-path'
              | 'side-effect'
              | 'external'
              | 'internal'
              | 'builtin'
              | 'sibling'
              | 'subpath'
              | 'import'
              | 'parent'
              | 'index'
              | 'style'
              | 'type';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }
      )[];
  tsconfig?: {
    /**
     * Specifies the tsConfig root directory.
     */
    rootDir: string;
    /**
     * Specifies the tsConfig filename.
     */
    filename?: string;
  };
  /**
   * Specifies the maximum line length.
   */
  maxLineLength?: number;
  /**
   * Controls whether side-effect imports should be sorted.
   */
  sortSideEffects?: boolean;
  /**
   * Specifies the environment.
   */
  environment?: 'node' | 'bun';
  /**
   * Specifies the tsConfig root directory.
   */
  tsconfigRootDir?: string;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Regular expression.
   */
  internalPattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export namespace SortExports {
  export type SortExportsOption = {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: 'asc' | 'desc';
      /**
       * Specifies the sorting method.
       */
      type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    };
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: 'remove' | 'trim' | 'keep';
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
    /**
     * [DEPRECATED] Specifies top-level groups.
     */
    groupKind?: 'mixed' | 'values-first' | 'types-first';
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          anyOf?: {
            /**
             * Modifier filters.
             */
            modifiers?: ('value' | 'type')[];
            /**
             * Selector filter.
             */
            selector?: 'export';
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[];
        }
      | {
          newlinesInside?: ('always' | 'never') | number;
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
          };
          /**
           * Custom group name.
           */
          groupName: string;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
          /**
           * Modifier filters.
           */
          modifiers?: ('value' | 'type')[];
          /**
           * Selector filter.
           */
          selector?: 'export';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
    newlinesBetween?: ('ignore' | 'always' | 'never') | number;
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | string[]
      | {
          newlinesBetween?: ('ignore' | 'always' | 'never') | number;
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
        }
    )[];
  }[];

  export type SortExportsRuleConfig = SortExportsOption;
}

export type SortObjectsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Controls whether to sort destructured objects.
   */
  destructuredObjects?:
    | boolean
    | {
        /**
         * Controls whether to use groups to sort destructured objects.
         */
        groups?: boolean;
      };
  customGroups?:
    | {
        [k: string]: string | string[];
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Modifier filters.
               */
              modifiers?: ('optional' | 'required' | 'multiline')[];
              /**
               * Selector filter.
               */
              selector?: 'member' | 'method' | 'multiline' | 'property';
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Modifier filters.
             */
            modifiers?: ('optional' | 'required' | 'multiline')[];
            /**
             * Selector filter.
             */
            selector?: 'member' | 'method' | 'multiline' | 'property';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }
      )[];
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    callingFunctionNamePattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * [DEPRECATED] Controls whether to sort only destructured objects.
   */
  destructureOnly?: boolean;
  /**
   * Controls whether to sort object declarations.
   */
  objectDeclarations?: boolean;
  /**
   * Controls whether to sort styled components.
   */
  styledComponents?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Regular expression.
   */
  ignorePattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export interface SortEnumsOption {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  customGroups?:
    | {
        [k: string]: string | string[];
      }
    | (
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            anyOf?: {
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[];
          }
        | {
            newlinesInside?: ('always' | 'never') | number;
            /**
             * Fallback sort order.
             */
            fallbackSort?: {
              /**
               * Specifies whether to sort items in ascending or descending order.
               */
              order?: 'asc' | 'desc';
              /**
               * Specifies the sorting method.
               */
              type?:
                | 'alphabetical'
                | 'natural'
                | 'line-length'
                | 'custom'
                | 'unsorted';
            };
            /**
             * Custom group name.
             */
            groupName: string;
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: 'asc' | 'desc';
            /**
             * Specifies the sorting method.
             */
            type?:
              | 'alphabetical'
              | 'natural'
              | 'line-length'
              | 'custom'
              | 'unsorted';
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }
      )[];
  /**
   * Will always sort numeric enums by their value regardless of the sort type specified.
   */
  forceNumericSort?: boolean;
  /**
   * Compare enum values instead of names.
   */
  sortByValue?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}

export type SortSetsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: 'mixed' | 'literals-first' | 'spreads-first';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Selector filter.
           */
          selector?: 'literal' | 'spread';
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Selector filter.
         */
        selector?: 'literal' | 'spread';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

export type SortMapsOption = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: 'asc' | 'desc';
    /**
     * Specifies the sorting method.
     */
    type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  };
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: 'remove' | 'trim' | 'keep';
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: 'asc' | 'desc';
  /**
   * Specifies the sorting method.
   */
  type?: 'alphabetical' | 'natural' | 'line-length' | 'custom' | 'unsorted';
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        anyOf?: {
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }[];
      }
    | {
        newlinesInside?: ('always' | 'never') | number;
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: 'asc' | 'desc';
          /**
           * Specifies the sorting method.
           */
          type?:
            | 'alphabetical'
            | 'natural'
            | 'line-length'
            | 'custom'
            | 'unsorted';
        };
        /**
         * Custom group name.
         */
        groupName: string;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: 'asc' | 'desc';
        /**
         * Specifies the sorting method.
         */
        type?:
          | 'alphabetical'
          | 'natural'
          | 'line-length'
          | 'custom'
          | 'unsorted';
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  newlinesBetween?: ('ignore' | 'always' | 'never') | number;
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | string[]
    | {
        newlinesBetween?: ('ignore' | 'always' | 'never') | number;
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
      }
  )[];
}[];

/**
 * All Perfectionist rules.
 */
export interface PerfectionistRules {
  /**
   * Enforce sorted variable declarations.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-variable-declarations](https://perfectionist.dev/rules/sort-variable-declarations)
   */
  'perfectionist/sort-variable-declarations': [SortVariableDeclarationsOption?];

  /**
   * Enforce sorted intersection types.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-intersection-types](https://perfectionist.dev/rules/sort-intersection-types)
   */
  'perfectionist/sort-intersection-types': SortIntersectionTypesOption;

  /**
   * Enforce sorted heritage clauses.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-heritage-clauses](https://perfectionist.dev/rules/sort-heritage-clauses)
   */
  'perfectionist/sort-heritage-clauses': [SortHeritageClausesOption?];

  /**
   * Enforce sorted arrays before include method.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-array-includes](https://perfectionist.dev/rules/sort-array-includes)
   */
  'perfectionist/sort-array-includes': SortArrayIncludesOption;

  /**
   * Enforce sorted named imports.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-named-imports](https://perfectionist.dev/rules/sort-named-imports)
   */
  'perfectionist/sort-named-imports': SortNamedImportsOption;

  /**
   * Enforce sorted named exports.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-named-exports](https://perfectionist.dev/rules/sort-named-exports)
   */
  'perfectionist/sort-named-exports': SortNamedExports.SortNamedExportsRuleConfig;

  /**
   * Enforce sorted object types.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-object-types](https://perfectionist.dev/rules/sort-object-types)
   */
  'perfectionist/sort-object-types': SortObjectTypesOption;

  /**
   * Enforce sorted union types.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-union-types](https://perfectionist.dev/rules/sort-union-types)
   */
  'perfectionist/sort-union-types': SortUnionTypesOption;

  /**
   * Enforce sorted switch cases.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-switch-case](https://perfectionist.dev/rules/sort-switch-case)
   */
  'perfectionist/sort-switch-case': [SortSwitchCaseOption?];

  /**
   * Enforce sorted decorators.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-decorators](https://perfectionist.dev/rules/sort-decorators)
   */
  'perfectionist/sort-decorators': [SortDecoratorsOption?];

  /**
   * Enforce sorted interface properties.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-interfaces](https://perfectionist.dev/rules/sort-interfaces)
   */
  'perfectionist/sort-interfaces': SortInterfacesOption;

  /**
   * Enforce sorted JSX props.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-jsx-props](https://perfectionist.dev/rules/sort-jsx-props)
   */
  'perfectionist/sort-jsx-props': SortJsxPropsOption;

  /**
   * Enforce sorted modules.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-modules](https://perfectionist.dev/rules/sort-modules)
   */
  'perfectionist/sort-modules': SortModules.SortModulesRuleConfig;

  /**
   * Enforce sorted classes.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-classes](https://perfectionist.dev/rules/sort-classes)
   */
  'perfectionist/sort-classes': [SortClassesOption?];

  /**
   * Enforce sorted imports.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-imports](https://perfectionist.dev/rules/sort-imports)
   */
  'perfectionist/sort-imports': SortImportsOption;

  /**
   * Enforce sorted exports.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-exports](https://perfectionist.dev/rules/sort-exports)
   */
  'perfectionist/sort-exports': SortExports.SortExportsRuleConfig;

  /**
   * Enforce sorted objects.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-objects](https://perfectionist.dev/rules/sort-objects)
   */
  'perfectionist/sort-objects': SortObjectsOption;

  /**
   * Enforce sorted TypeScript enums.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-enums](https://perfectionist.dev/rules/sort-enums)
   */
  'perfectionist/sort-enums': [SortEnumsOption?];

  /**
   * Enforce sorted sets.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-sets](https://perfectionist.dev/rules/sort-sets)
   */
  'perfectionist/sort-sets': SortSetsOption;

  /**
   * Enforce sorted Map elements.
   * @preset `perfectionist/recommended-alphabetical-legacy`, `perfectionist/recommended-line-length-legacy`, `perfectionist/recommended-natural-legacy`, `perfectionist/recommended-custom-legacy`, `perfectionist/recommended-alphabetical`, `perfectionist/recommended-line-length`, `perfectionist/recommended-natural`, `perfectionist/recommended-custom`
   * @see [sort-maps](https://perfectionist.dev/rules/sort-maps)
   */
  'perfectionist/sort-maps': SortMapsOption;
}

export type PerfectionistRulesObject = RulesObject<PerfectionistRules>;
