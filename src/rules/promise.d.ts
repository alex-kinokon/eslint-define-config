import type { RulesObject } from '../rule-config';

export interface CatchOrReturnOption {
  allowFinally?: boolean;
  allowThen?: boolean;
  terminationMethod?: string | string[];
}

export interface PreferAwaitToThenOption {
  strict?: boolean;
  [k: string]: any;
}

/**
 * All Promise rules.
 */
export interface PromiseRules {
  /**
   * Enforce consistent param names and ordering when creating new promises.
   * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
   */
  'promise/param-names': [
    {
      resolvePattern?: string;
      rejectPattern?: string;
    }?,
  ];

  /**
   * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
   * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
   */
  'promise/no-return-wrap': [
    {
      allowReject?: boolean;
    }?,
  ];

  /**
   * Require returning inside each `then()` to create readable and reusable Promise chains.
   * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
   */
  'promise/always-return': [
    {
      ignoreLastCallback?: boolean;
    }?,
  ];

  /**
   * Enforce the use of `catch()` on un-returned promises.
   * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
   */
  'promise/catch-or-return': [CatchOrReturnOption?];

  /**
   * Prefer `async`/`await` to the callback pattern.
   * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
   */
  'promise/prefer-await-to-callbacks': null;

  /**
   * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
   * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
   */
  'promise/prefer-await-to-then': [PreferAwaitToThenOption?];

  /**
   * Require creating a `Promise` constructor before using it in an ES5 environment.
   * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
   */
  'promise/no-native': null;

  /**
   * Disallow calling `cb()` inside of a `then()` (use [util.callbackify][] instead).
   * @see [no-callback-in-promise](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
   */
  'promise/no-callback-in-promise': [
    {
      exceptions?: string[];
    }?,
  ];

  /**
   * Disallow using promises inside of callbacks.
   * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
   */
  'promise/no-promise-in-callback': null;

  /**
   * Disallow nested `then()` or `catch()` statements.
   * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
   */
  'promise/no-nesting': null;

  /**
   * Disallow creating `new` promises outside of utility libs (use [util.promisify][] instead).
   * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
   */
  'promise/avoid-new': null;

  /**
   * Disallow calling `new` on a Promise static method.
   * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
   */
  'promise/no-new-statics': null;

  /**
   * Disallow return statements in `finally()`.
   * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
   */
  'promise/no-return-in-finally': null;

  /**
   * Enforces the proper number of arguments are passed to Promise functions.
   * @see [valid-params](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
   */
  'promise/valid-params': null;

  /**
   * Disallow creating new promises with paths that resolve multiple times.
   * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
   */
  'promise/no-multiple-resolved': null;
}

export type PromiseRulesObject = RulesObject<PromiseRules>;
