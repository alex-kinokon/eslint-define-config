import type { RulesObject } from '../rule-config';

export interface HooksOption {
  [k: string]: any;
}

export interface CapitalizedCallsOption {
  [k: string]: any;
}

export interface StaticComponentsOption {
  [k: string]: any;
}

export interface UseMemoOption {
  [k: string]: any;
}

export interface VoidUseMemoOption {
  [k: string]: any;
}

export interface ComponentHookFactoriesOption {
  [k: string]: any;
}

export interface PreserveManualMemoizationOption {
  [k: string]: any;
}

export interface IncompatibleLibraryOption {
  [k: string]: any;
}

export interface ImmutabilityOption {
  [k: string]: any;
}

export interface GlobalsOption {
  [k: string]: any;
}

export interface RefsOption {
  [k: string]: any;
}

export interface MemoizedEffectDependenciesOption {
  [k: string]: any;
}

export interface SetStateInEffectOption {
  [k: string]: any;
}

export interface NoDerivingStateInEffectsOption {
  [k: string]: any;
}

export interface ErrorBoundariesOption {
  [k: string]: any;
}

export interface PurityOption {
  [k: string]: any;
}

export interface SetStateInRenderOption {
  [k: string]: any;
}

export interface InvariantOption {
  [k: string]: any;
}

export interface TodoOption {
  [k: string]: any;
}

export interface SyntaxOption {
  [k: string]: any;
}

export interface UnsupportedSyntaxOption {
  [k: string]: any;
}

export interface ConfigOption {
  [k: string]: any;
}

export interface GatingOption {
  [k: string]: any;
}

export interface RuleSuppressionOption {
  [k: string]: any;
}

export interface AutomaticEffectDependenciesOption {
  [k: string]: any;
}

export interface FireOption {
  [k: string]: any;
}

export interface FbtOption {
  [k: string]: any;
}

/**
 * All ReactHooks rules.
 */
export interface ReactHooksRules {
  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': [
    {
      additionalHooks?: string;
      enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
      experimental_autoDependenciesHooks?: string[];
      requireExplicitEffectDeps?: boolean;
    }?,
  ];

  /**
   * Enforces the Rules of Hooks.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   * @see [rules-of-hooks](https://react.dev/reference/rules/rules-of-hooks)
   */
  'react-hooks/rules-of-hooks': [
    {
      additionalHooks?: string;
    }?,
  ];

  /**
   * Validates the rules of hooks.
   */
  'react-hooks/hooks': [HooksOption?];

  /**
   * Validates against calling capitalized functions/methods instead of using JSX.
   */
  'react-hooks/capitalized-calls': [CapitalizedCallsOption?];

  /**
   * Validates that components are static, not recreated every render. Components that are recreated dynamically can reset state and trigger excessive re-rendering.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/static-components': [StaticComponentsOption?];

  /**
   * Validates usage of the useMemo() hook against common mistakes. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/use-memo': [UseMemoOption?];

  /**
   * Validates that useMemos always return a value. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   * @preset `react-hooks/recommended-latest`
   */
  'react-hooks/void-use-memo': [VoidUseMemoOption?];

  /**
   * Validates against higher order functions defining nested components or hooks. Components and hooks should be defined at the module level.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/component-hook-factories': [ComponentHookFactoriesOption?];

  /**
   * Validates that existing manual memoized is preserved by the compiler. React Compiler will only compile components and hooks if its inference [matches or exceeds the existing manual memoization](https://react.dev/learn/react-compiler/introduction#what-should-i-do-about-usememo-usecallback-and-reactmemo).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/preserve-manual-memoization': [PreserveManualMemoizationOption?];

  /**
   * Validates against usage of libraries which are incompatible with memoization (manual or automatic).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/incompatible-library': [IncompatibleLibraryOption?];

  /**
   * Validates against mutating props, state, and other values that [are immutable](https://react.dev/reference/rules/components-and-hooks-must-be-pure#props-and-state-are-immutable).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/immutability': [ImmutabilityOption?];

  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that [side effects must render outside of render](https://react.dev/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/globals': [GlobalsOption?];

  /**
   * Validates correct usage of refs, not reading/writing during render. See the "pitfalls" section in [`useRef()` usage](https://react.dev/reference/react/useRef#usage).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/refs': [RefsOption?];

  /**
   * Validates that effect dependencies are memoized.
   */
  'react-hooks/memoized-effect-dependencies': [
    MemoizedEffectDependenciesOption?,
  ];

  /**
   * Validates against calling setState synchronously in an effect, which can lead to re-renders that degrade performance.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/set-state-in-effect': [SetStateInEffectOption?];

  /**
   * Validates against deriving values from state in an effect.
   */
  'react-hooks/no-deriving-state-in-effects': [NoDerivingStateInEffectsOption?];

  /**
   * Validates usage of error boundaries instead of try/catch for errors in child components.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/error-boundaries': [ErrorBoundariesOption?];

  /**
   * Validates that [components/hooks are pure](https://react.dev/reference/rules/components-and-hooks-must-be-pure) by checking that they do not call known-impure functions.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/purity': [PurityOption?];

  /**
   * Validates against setting state during render, which can trigger additional renders and potential infinite render loops.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/set-state-in-render': [SetStateInRenderOption?];

  /**
   * Internal invariants.
   */
  'react-hooks/invariant': [InvariantOption?];

  /**
   * Unimplemented features.
   */
  'react-hooks/todo': [TodoOption?];

  /**
   * Validates against invalid syntax.
   */
  'react-hooks/syntax': [SyntaxOption?];

  /**
   * Validates against syntax that we do not plan to support in React Compiler.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/unsupported-syntax': [UnsupportedSyntaxOption?];

  /**
   * Validates the compiler configuration options.
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/config': [ConfigOption?];

  /**
   * Validates configuration of [gating mode](https://react.dev/reference/react-compiler/gating).
   * @preset `react-hooks/recommended`, `react-hooks/recommended-latest`
   */
  'react-hooks/gating': [GatingOption?];

  /**
   * Validates against suppression of other rules.
   */
  'react-hooks/rule-suppression': [RuleSuppressionOption?];

  /**
   * Verifies that automatic effect dependencies are compiled if opted-in.
   */
  'react-hooks/automatic-effect-dependencies': [
    AutomaticEffectDependenciesOption?,
  ];

  /**
   * Validates usage of `fire`.
   */
  'react-hooks/fire': [FireOption?];

  /**
   * Validates usage of fbt.
   */
  'react-hooks/fbt': [FbtOption?];
}

export type ReactHooksRulesObject = RulesObject<ReactHooksRules>;
